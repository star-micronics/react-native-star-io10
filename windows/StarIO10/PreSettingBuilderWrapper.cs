using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10.StarXpandCommand;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class PreSettingBuilderWrapper : StarIO10ObjectWrapper<PreSettingBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            PreSettingBuilder nativeObject = new PreSettingBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("addPresenterSetting")]
        public void AddPresenterSetting(string objectIdentifier, string presenterSettingBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PreSettingBuilder nativeObject) ||
                !PresenterSettingBuilderWrapper.GetObject(presenterSettingBuilderIdentifier, out PresenterSettingBuilder presenterSettingBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddPresenterSetting(presenterSettingBuilder);

            promise.Resolve();
        }

        [ReactMethod("addBezelSetting")]
        public void AddBezelSetting(string objectIdentifier, string bezelSettingBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PreSettingBuilder nativeObject) ||
                !BezelSettingBuilderWrapper.GetObject(bezelSettingBuilderIdentifier, out BezelSettingBuilder bezelSettingBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddBezelSetting(bezelSettingBuilder);

            promise.Resolve();
        }
    }
}
