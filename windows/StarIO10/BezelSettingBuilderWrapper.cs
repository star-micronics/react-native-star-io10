using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10.StarXpandCommand;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class BezelSettingBuilderWrapper : StarIO10ObjectWrapper<BezelSettingBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            BezelSettingBuilder nativeObject = new BezelSettingBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("settingAutomaticPageLength")]
        public void SettingAutomaticPageLength(string objectIdentifier, bool enable, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out BezelSettingBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.SettingAutomaticPageLength(enable);

            promise.Resolve();
        }

        [ReactMethod("addLed")]
        public void AddLed(string objectIdentifier, string ledSettingBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out BezelSettingBuilder nativeObject) ||
                !LedSettingBuilderWrapper.GetObject(ledSettingBuilderIdentifier, out LedSettingBuilder ledSettingBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddLed(ledSettingBuilder);

            promise.Resolve();
        }
    }
}
