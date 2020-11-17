using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.MelodySpeaker;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class MelodySpeakerBuilderWrapper : StarIO10ObjectWrapper<MelodySpeakerBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            MelodySpeakerBuilder nativeObject = new MelodySpeakerBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("actionDriveRegisteredSound")]
        public void ActionDriveRegisteredSound(string objectIdentifier, string area, int number, int volume, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out MelodySpeakerBuilder nativeObject) ||
                !StarIO10ValueConverter.ToMelodySpeakerDriveRegisteredSoundParameter(area, number, volume, out DriveRegisteredSoundParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionDriveRegisteredSound(parameter);

            promise.Resolve();
        }

        [ReactMethod("actionDriveOneTimeSound")]
        public void ActionDriveOneTimeSound(string objectIdentifier, byte[] source, int volume, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out MelodySpeakerBuilder nativeObject) ||
                !StarIO10ValueConverter.ToMelodySpeakerDriveOneTimeSoundParameter(source, volume, out DriveOneTimeSoundParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionDriveOneTimeSound(parameter);

            promise.Resolve();
        }
    }
}
