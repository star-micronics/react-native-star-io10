using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Printer;
using System;
using System.Collections.Generic;
using System.Text.Json;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class PrinterBuilderWrapper : StarIO10ObjectWrapper<PrinterBuilder>
    {


        [ReactMethod("actionPrintImage")]
        public async void ActionPrintImage(string source, int width, bool effectDiffusion, int threshold, IReactPromise<string> promise)
        {
            try
            {

                ImageParameter parameter = await StarIO10ValueConverter.ToPrinterImageParameterAsync(source, width, effectDiffusion, threshold);

                PrinterBuilder printerBuilder = new PrinterBuilder();
                printerBuilder.ActionPrintImage(parameter);

                DocumentBuilder documentBuilder = new DocumentBuilder();
                documentBuilder.AddPrinter(printerBuilder);

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
            catch (Exception e)
            {
                StarIO10Exception exception = new StarIO10ArgumentException("Invalid source.");
                StarIO10ErrorWrapper.SetObject(exception, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = exception });
            }
        }
    }

}
