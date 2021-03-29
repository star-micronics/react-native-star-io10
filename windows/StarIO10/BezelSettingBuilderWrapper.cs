using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Bezel;

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

        [ReactMethod("settingLedAutomaticBlink")]
        public void SettingLedAutomaticBlink(string objectIdentifier, string type, int onTime, int offTime, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out BezelSettingBuilder nativeObject) ||
                !StarIO10ValueConverter.ToBezelLedAutomaticBlinkParameter(type, onTime, offTime, out LedAutomaticBlinkParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.SettingLedAutomaticBlink(parameter);

            promise.Resolve();
        }
    }
}
