using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Buzzer;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class BuzzerBuilderWrapper : StarIO10ObjectWrapper<BuzzerBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            BuzzerBuilder nativeObject = new BuzzerBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("actionDrive")]
        public void ActionDrive(string objectIdentifier, string channel, int repeat, int onTime, int offTime, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out BuzzerBuilder nativeObject) ||
                !StarIO10ValueConverter.ToBuzzerDriveParameter(channel, repeat, onTime, offTime, out DriveParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionDrive(parameter);

            promise.Resolve();
        }
    }
}
