using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.MelodySpeaker;
using System;
using System.Text.Json;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class MelodySpeakerBuilderWrapper : StarIO10ObjectWrapper<MelodySpeakerBuilder>
    {

        [ReactMethod("actionDriveOneTimeSound")]
        public async void ActionDriveOneTimeSound(string source, int volume, IReactPromise<string> promise)
        {
            try
            {

                DriveOneTimeSoundParameter parameter = await StarIO10ValueConverter.ToMelodySpeakerDriveOneTimeSoundParameterAsync(source, volume);

                MelodySpeakerBuilder melodySpeakerBuilder = new MelodySpeakerBuilder();
                melodySpeakerBuilder.ActionDriveOneTimeSound(parameter);

                DocumentBuilder documentBuilder = new DocumentBuilder();
                documentBuilder.AddMelodySpeaker(melodySpeakerBuilder);

                StarXpandCommandBuilder builder = new StarXpandCommandBuilder();
                builder.AddDocument(documentBuilder);

                string jsonObject = builder.GetCommand();

                JsonDocument jsonDoc = JsonDocument.Parse(jsonObject);
                string contents = jsonDoc.RootElement
                                    .GetProperty("contents")[0]
                                    .GetProperty("contents")[0]
                                    .GetProperty("contents")[0]
                                    .ToString();

                promise.Resolve(contents);
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
