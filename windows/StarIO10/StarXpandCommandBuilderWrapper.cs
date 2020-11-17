using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10.StarXpandCommand;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarXpandCommandBuilderWrapper : StarIO10ObjectWrapper<StarXpandCommandBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            StarXpandCommandBuilder nativeObject = new StarXpandCommandBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("setPreSetting")]
        public void SetPreSetting(string objectIdentifier, string preSettingBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out StarXpandCommandBuilder nativeObject) ||
                !PreSettingBuilderWrapper.GetObject(preSettingBuilderIdentifier, out PreSettingBuilder preSettingBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.PreSetting = preSettingBuilder;

            promise.Resolve();
        }

        [ReactMethod("addDocument")]
        public void AddDocument(string objectIdentifier, string documentBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out StarXpandCommandBuilder nativeObject) ||
                !DocumentBuilderWrapper.GetObject(documentBuilderIdentifier, out DocumentBuilder documentBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddDocument(documentBuilder);

            promise.Resolve();
        }

        [ReactMethod("getCommands")]
        public void GetCommands(string objectIdentifier, IReactPromise<string> promise)
        {
            if (!GetObject(objectIdentifier, out StarXpandCommandBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.GetCommand());
        }
    }
}
