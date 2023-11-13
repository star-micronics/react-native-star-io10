using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Display;
using System;
using System.Text.Json;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class DisplayBuilderWrapper : StarIO10ObjectWrapper<DisplayBuilder>
    {
 
        [ReactMethod("actionShowImage")]
        public async void ActionShowImage(string source, bool effectDiffusion, int threshold, IReactPromise<string> promise)
        {
            try
            {

                ImageParameter parameter = await StarIO10ValueConverter.ToDisplayImageParameterAsync(source,effectDiffusion, threshold);

                DisplayBuilder displayBuilder = new DisplayBuilder();
                displayBuilder.ActionShowImage(parameter);

                DocumentBuilder documentBuilder = new DocumentBuilder();
                documentBuilder.AddDisplay(displayBuilder);

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
