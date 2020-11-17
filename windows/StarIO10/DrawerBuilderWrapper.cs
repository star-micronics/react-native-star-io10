using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Drawer;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class DrawerBuilderWrapper : StarIO10ObjectWrapper<DrawerBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            DrawerBuilder nativeObject = new DrawerBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("actionOpen")]
        public void ActionOpen(string objectIdentifier, string channel, int onTime, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DrawerBuilder nativeObject) ||
                !StarIO10ValueConverter.ToDrawerOpenParameter(channel, onTime, out OpenParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionOpen(parameter);

            promise.Resolve();
        }
    }
}
