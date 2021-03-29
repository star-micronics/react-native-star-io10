using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.MelodySpeaker;
using System;

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
        public async void ActionDriveOneTimeSound(string objectIdentifier, string source, int volume, IReactPromise<JSValue.Void> promise)
        {
            try
            {
                if (!GetObject(objectIdentifier, out MelodySpeakerBuilder nativeObject))
                {
                    promise.Reject(new ReactError());
                    return;
                }

                DriveOneTimeSoundParameter parameter = await StarIO10ValueConverter.ToMelodySpeakerDriveOneTimeSoundParameterAsync(source, volume);

                nativeObject.ActionDriveOneTimeSound(parameter);

                promise.Resolve();
            }
            catch (Exception)
            {
                StarIO10Exception exception = new StarIO10ArgumentException("Invalid source.");
                StarIO10ErrorWrapper.SetObject(exception, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = exception });
            }
        }
    }
}
