using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using StarMicronics.StarIO10.Setting.Firmware;
using System;
using System.Collections.Generic;

#nullable enable

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarPrinterSettingFirmwareWrapper
    {
        [ReactEvent]
        public Action<IReadOnlyDictionary<string, JSValue>> FirmwareUpdateProgress { get; set; }
        [ReactEvent]
        public Action<IReadOnlyDictionary<string, JSValue>> FirmwareUpdateTransmitComplete { get; set; }

        [ReactEvent]
        public Action<IReadOnlyDictionary<string, JSValue>> FirmwareUpdateError { get; set; }

        [ReactMethod("init")]
        public void Init(string printerIdentifier, IReactPromise<JSValue?> promise)
        {
            if (!StarIO10SharedObjectManager.Instance.GetObject(printerIdentifier, out StarPrinter nativePrinter))
            {
                promise.Reject(new ReactError());
                return;
            }

            var firmware = nativePrinter.Setting?.Firmware;

            if (firmware == null)
            {
                promise.Resolve(null);
                return;
            }

            StarIO10SharedObjectManager.Instance.SetObject(firmware, out string firmwareIdentifier);

            promise.Resolve(firmwareIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string firmwareIdentifier, IReactPromise<JSValue.Void> promise)
        {
            StarIO10SharedObjectManager.Instance.DisposeObject(firmwareIdentifier);

            promise.Resolve();
        }

        [ReactMethod("addListener")]
        public void AddListener(string objectIdentifier, string eventName, IReactPromise<JSValue.Void> promise)
        {
            promise.Resolve();
        }

        [ReactMethod("removeListeners")]
        public void RemoveListeners(string objectIdentifier, int count, IReactPromise<JSValue.Void> promise)
        {
            promise.Resolve();
        }

        [ReactMethod("activateFirmwareUpdateDelegate")]
        public void ActivateFirmwareUpdateDelegate(string firmwareIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!StarIO10SharedObjectManager.Instance.GetObject(firmwareIdentifier, out StarPrinterSettingFirmware nativeFirmware))
            {
                promise.Reject(new ReactError());
                return;
            }

            var updateDelegate = new FirmwareUpdateDelegateImpl();
            nativeFirmware.UpdateDelegate = updateDelegate;

            updateDelegate.FirmwareUpdateProgressEvent += (sender, firmwareUpdateProgress) =>
            {
                if (!StarIO10SharedObjectManager.Instance.GetIdentifier(sender, out string firmwareIdentifier))
                {
                    return;
                }

                var parameter = new Dictionary<string, JSValue>();
                parameter.Add(EventParameter.KeyIdentifier, firmwareIdentifier);
                parameter.Add(EventParameter.KeyFirmwareUpdateStep, firmwareUpdateProgress.ToString());

                FirmwareUpdateProgress(parameter);
            };

            updateDelegate.FirmwareUpdateTransmitCompletedEvent += (sender, e) =>
            {
                if (!StarIO10SharedObjectManager.Instance.GetIdentifier(sender, out string firmwareIdentifier))
                {
                    return;
                }

                var parameter = new Dictionary<string, JSValue>();
                parameter.Add(EventParameter.KeyIdentifier, firmwareIdentifier);

                FirmwareUpdateTransmitComplete(parameter);
            };

            updateDelegate.FirmwareUpdateErrorEvent += (sender, exception) =>
            {
                if (!StarIO10SharedObjectManager.Instance.GetIdentifier(sender, out string firmwareIdentifier))
                {
                    return;
                }

                StarIO10ErrorWrapper.SetObject(exception, out string exceptionIdentifier);

                var parameter = new Dictionary<string, JSValue>();
                parameter.Add(EventParameter.KeyIdentifier, firmwareIdentifier);
                parameter.Add(EventParameter.KeyErrorIdentifier, exceptionIdentifier);

                FirmwareUpdateError(parameter);
            };

            promise.Resolve();
        }

        [ReactMethod("getIsUpdatableProp")]
        public void GetIsUpdatableProp(string printerIdentifier, IReactPromise<bool> promise)
        {
            if (!StarIO10SharedObjectManager.Instance.GetObject(printerIdentifier, out StarPrinter nativePrinter))
            {
                promise.Reject(new ReactError());
                return;
            }

            var firmware = nativePrinter.Setting.Firmware;
            var IsUpdatabli = firmware?.IsUpdatable ?? false;

            promise.Resolve(IsUpdatabli);
        }

        [ReactMethod("getCurrentVersionProp")]
        public void GetCurrentVersionProp(string firmwareIdentifier, IReactPromise<string> promise)
        {
            if (!StarIO10SharedObjectManager.Instance.GetObject(firmwareIdentifier, out StarPrinterSettingFirmware nativeFirmware))
            {
                promise.Reject(new ReactError());
                return;
            }

            var currentVersion = nativeFirmware?.CurrentVersion;

            promise.Resolve(currentVersion);
        }

        [ReactMethod("getLatestVersionProp")]
        public void GetLatestVersionProp(string firmwareIdentifier, IReactPromise<string> promise)
        {
            if (!StarIO10SharedObjectManager.Instance.GetObject(firmwareIdentifier, out StarPrinterSettingFirmware nativeFirmware))
            {
                promise.Reject(new ReactError());
                return;
            }

            var latestVersion = nativeFirmware?.LatestVersion;

            promise.Resolve(latestVersion);
        }

        [ReactMethod("getCurrentVersion")]
        public async void GetCurrentVersion(string firmwareIdentifier, IReactPromise<string> promise)
        {
            if (!StarIO10SharedObjectManager.Instance.GetObject(firmwareIdentifier, out StarPrinterSettingFirmware nativeFirmware))
            {
                promise.Reject(new ReactError());
                return;
            }

            try
            {
                promise.Resolve(await nativeFirmware.GetCurrentVersionAsync());
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }

        [ReactMethod("checkVersions")]
        public async void CheckVersions(string firmwareIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!StarIO10SharedObjectManager.Instance.GetObject(firmwareIdentifier, out StarPrinterSettingFirmware nativeFirmware))
            {
                promise.Reject(new ReactError());
                return;
            }

            try
            {
                await nativeFirmware.CheckVersionsAsync();
                promise.Resolve();
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }

        [ReactMethod("update")]
        public async void Update(string firmwareIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!StarIO10SharedObjectManager.Instance.GetObject(firmwareIdentifier, out StarPrinterSettingFirmware nativeFirmware))
            {
                promise.Reject(new ReactError());
                return;
            }

            try
            {
                await nativeFirmware.UpdateAsync();
                promise.Resolve();
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }
    }

    internal class FirmwareUpdateDelegateImpl : FirmwareUpdateDelegate
    {
        public event EventHandler<FirmwareUpdateStep> FirmwareUpdateProgressEvent;
        public event EventHandler FirmwareUpdateTransmitCompletedEvent;
        public event EventHandler<StarIO10Exception> FirmwareUpdateErrorEvent;

        public override void OnFirmwareUpdateProgress(object sender, FirmwareUpdateStep firmwareUpdateProgress)
        {
            FirmwareUpdateProgressEvent?.Invoke(sender, firmwareUpdateProgress);
        }

        public override void OnFirmwareUpdateTransmitCompleted(object sender)
        {
            FirmwareUpdateTransmitCompletedEvent?.Invoke(sender, EventArgs.Empty);
        }

        public override void OnFirmwareUpdateError(object sender, StarIO10Exception exception)
        {
            FirmwareUpdateErrorEvent?.Invoke(sender, exception);
        }
    }
}
