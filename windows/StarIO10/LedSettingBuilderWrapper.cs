using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Led;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class LedSettingBuilderWrapper : StarIO10ObjectWrapper<LedSettingBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            LedSettingBuilder nativeObject = new LedSettingBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("settingAutomaticBlink")]
        public void SettingAutomaticBlink(string objectIdentifier, string type, int onTime, int offTime, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out LedSettingBuilder nativeObject) ||
                !StarIO10ValueConverter.ToLedAutomaticBlinkParameter(type, onTime, offTime, out AutomaticBlinkParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.SettingAutomaticBlink(parameter);

            promise.Resolve();
        }
    }
}
