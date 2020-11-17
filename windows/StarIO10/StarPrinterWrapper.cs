using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using System;
using System.Linq;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarPrinterWrapper : StarIO10ObjectWrapper<StarPrinter>
    {
        [ReactEvent]
        public Action<CommunicationErrorEventParameter> PrinterCommunicationError { get; set; }

        [ReactEvent]
        public Action<EventParameter> PrinterReady { get; set; }

        [ReactEvent]
        public Action<EventParameter> PrinterError { get; set; }

        [ReactEvent]
        public Action<EventParameter> PrinterPaperReady { get; set; }

        [ReactEvent]
        public Action<EventParameter> PrinterPaperNearEmpty { get; set; }

        [ReactEvent]
        public Action<EventParameter> PrinterPaperEmpty { get; set; }

        [ReactEvent]
        public Action<EventParameter> PrinterCoverOpened { get; set; }

        [ReactEvent]
        public Action<EventParameter> PrinterCoverClosed { get; set; }

        [ReactEvent]
        public Action<CommunicationErrorEventParameter> DrawerCommunicationError { get; set; }

        [ReactEvent]
        public Action<DrawerOpenStateSwitchedEventParameter> DrawerOpenCloseSignalSwitched { get; set; }

        [ReactEvent]
        public Action<CommunicationErrorEventParameter> InputDeviceCommunicationError { get; set; }

        [ReactEvent]
        public Action<EventParameter> InputDeviceConnected { get; set; }

        [ReactEvent]
        public Action<EventParameter> InputDeviceDisconnected { get; set; }

        [ReactEvent]
        public Action<InputDeviceDataReceivedEventParameter> InputDeviceDataReceived { get; set; }

        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            StarPrinter nativeObject = new StarPrinter(new StarConnectionSettings());

            SetObject(nativeObject, out string objectIdentifier);

            nativeObject.PrinterDelegate.CommunicationError += (sender, e) =>
            {
                StarIO10ErrorWrapper.SetObject(e.Exception, out string exceptionIdentifier);
                PrinterCommunicationError(new CommunicationErrorEventParameter() { identifier = objectIdentifier, errorIdentifier = exceptionIdentifier });
            };

            nativeObject.DrawerDelegate.CommunicationError += (sender, e) =>
            {
                StarIO10ErrorWrapper.SetObject(e.Exception, out string exceptionIdentifier);
                DrawerCommunicationError(new CommunicationErrorEventParameter() { identifier = objectIdentifier, errorIdentifier = exceptionIdentifier });
            };

            nativeObject.InputDeviceDelegate.CommunicationError += (sender, e) =>
            {
                StarIO10ErrorWrapper.SetObject(e.Exception, out string exceptionIdentifier);
                InputDeviceCommunicationError(new CommunicationErrorEventParameter() { identifier = objectIdentifier, errorIdentifier = exceptionIdentifier });
            };

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("activatePrinterDelegate")]
        public void ActivatePrinterDelegate(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinter nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.PrinterDelegate.Ready += (sender, e) =>
            {
                PrinterReady(new EventParameter() { identifier = objectIdentifier });
            };

            nativeObject.PrinterDelegate.Error += (sender, e) =>
            {
                PrinterError(new EventParameter() { identifier = objectIdentifier });
            };

            nativeObject.PrinterDelegate.PaperReady += (sender, e) =>
            {
                PrinterPaperReady(new EventParameter() { identifier = objectIdentifier });
            };

            nativeObject.PrinterDelegate.PaperNearEmpty += (sender, e) =>
            {
                PrinterPaperNearEmpty(new EventParameter() { identifier = objectIdentifier });
            };

            nativeObject.PrinterDelegate.PaperEmpty += (sender, e) =>
            {
                PrinterPaperEmpty(new EventParameter() { identifier = objectIdentifier });
            };

            nativeObject.PrinterDelegate.CoverOpened += (sender, e) =>
            {
                PrinterCoverOpened(new EventParameter() { identifier = objectIdentifier });
            };

            nativeObject.PrinterDelegate.CoverClosed += (sender, e) =>
            {
                PrinterCoverClosed(new EventParameter() { identifier = objectIdentifier });
            };

            promise.Resolve();
        }

        [ReactMethod("activateDrawerDelegate")]
        public void ActivateDrawerDelegate(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinter nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.DrawerDelegate.OpenCloseSignalSwitched += (sender, e) =>
            {
                DrawerOpenCloseSignalSwitched(new DrawerOpenStateSwitchedEventParameter() { identifier = objectIdentifier, openCloseSignal = e.OpenCloseSignal });
            };

            promise.Resolve();
        }

        [ReactMethod("activateInputDeviceDelegate")]
        public void ActivateInputDeviceDelegate(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinter nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.InputDeviceDelegate.Connected += (sender, e) =>
            {
                InputDeviceConnected(new EventParameter() { identifier = objectIdentifier });
            };

            nativeObject.InputDeviceDelegate.Disconnected += (sender, e) =>
            {
                InputDeviceDisconnected(new EventParameter() { identifier = objectIdentifier });
            };

            nativeObject.InputDeviceDelegate.DataReceived += (sender, e) =>
            {
                InputDeviceDataReceived(new InputDeviceDataReceivedEventParameter() { identifier = objectIdentifier, data = e.Data.ToArray() });
            };

            promise.Resolve();
        }

        [ReactMethod("open")]
        public async void Open(string objectIdentifier, string interfaceType, string identifier, int timeout, bool autoSwitchInterface, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinter nativeObject) ||
                !StarIO10ValueConverter.ToInterfaceType(interfaceType, out InterfaceType nativeInterfaceType))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ConnectionSettings.InterfaceType = nativeInterfaceType;
            nativeObject.ConnectionSettings.Identifier = identifier;
            nativeObject.ConnectionSettings.AutoSwitchInterface = autoSwitchInterface;
            nativeObject.OpenTimeout = timeout;

            try
            {
                await nativeObject.OpenAsync();
                promise.Resolve();
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }

        [ReactMethod("getModel")]
        public void GetModel(string objectIdentifier, IReactPromise<string> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinter nativeObject) ||
                !StarIO10ValueConverter.ToString(nativeObject.Information.Model, out string modelString))
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(modelString);
        }

        [ReactMethod("getEmulation")]
        public void GetEmulation(string objectIdentifier, IReactPromise<string> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinter nativeObject) ||
                !StarIO10ValueConverter.ToString(nativeObject.Information.Emulation, out string emulationString))
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(emulationString);
        }

        [ReactMethod("print")]
        public async void Print(string objectIdentifier, string command, int timeout, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinter nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.PrintTimeout = timeout;

            try
            {
                await nativeObject.PrintAsync(command);
                promise.Resolve();
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }

        [ReactMethod("printRawData")]
        public async void PrintRawData(string objectIdentifier, byte[] data, int timeout, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinter nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.PrintTimeout = timeout;

            try
            {
                await nativeObject.PrintAsync(data);
                promise.Resolve();
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }

        [ReactMethod("getStatus")]
        public async void GetStatus(string objectIdentifier, int timeout, IReactPromise<string> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinter nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.GetStatusTimeout = timeout;

            try
            {
                StarPrinterStatus status = await nativeObject.GetStatusAsync();
                StarPrinterStatusWrapper.SetObject(status, out string statusIdentifier);
                promise.Resolve(statusIdentifier);
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }

        [ReactMethod("close")]
        public async void Close(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinter nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            try
            {
                await nativeObject.CloseAsync();
                promise.Resolve();
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }
    }
}
