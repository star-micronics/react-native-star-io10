using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Presenter;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class PresenterSettingBuilderWrapper : StarIO10ObjectWrapper<PresenterSettingBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            PresenterSettingBuilder nativeObject = new PresenterSettingBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("settingMode")]
        public void SettingMode(string objectIdentifier, bool loop, bool hold, bool retract, int holdTime, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PresenterSettingBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPresenterModeParameter(loop, hold, retract, holdTime, out ModeParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.SettingMode(parameter);

            promise.Resolve();
        }

        [ReactMethod("addLed")]
        public void AddLed(string objectIdentifier, string ledSettingBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PresenterSettingBuilder nativeObject) ||
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
