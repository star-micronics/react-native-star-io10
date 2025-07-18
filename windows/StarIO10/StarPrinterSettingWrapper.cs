using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;

#nullable enable

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarPrinterSettingWrapper
    {
        [ReactMethod("init")]
        public void Init(string printerIdentifier, IReactPromise<JSValue?> promise)
        {
            if (!StarIO10SharedObjectManager.Instance.GetObject(printerIdentifier, out StarPrinter nativePrinter))
            {
                promise.Reject(new ReactError());
                return;
            }

            var setting = nativePrinter.Setting;

            if (setting == null)
            {
                promise.Resolve(null);
                return;
            }

            StarIO10SharedObjectManager.Instance.SetObject(setting, out string settingIdentifier);

            promise.Resolve(settingIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string settingIdentifier, IReactPromise<JSValue.Void> promise)
        {
            StarIO10SharedObjectManager.Instance.DisposeObject(settingIdentifier);

            promise.Resolve();
        }
    }
}
