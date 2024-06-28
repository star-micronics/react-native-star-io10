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
    class PageModeBuilderWrapper : StarIO10ObjectWrapper<PageModeBuilder>
    {

        [ReactMethod("actionPrintImage")]
        public async void ActionPrintImage(string source, double x, double y, int width, bool effectDiffusion, int threshold, IReactPromise<string> promise)
        {
            try
            {
                PageModeImageParameter parameter = await StarIO10ValueConverter.ToPrinterPageModeImageParameterAsync(source, x, y, width, effectDiffusion, threshold);

                PageModeBuilder pageModeBuilder = new PageModeBuilder();
                pageModeBuilder.ActionPrintImage(parameter);
                PageModeAreaParameter pageModeAreaParameter = new PageModeAreaParameter(width, 300.0);
                //PageModeAreaの必要な高さはこの時点で未定であるため、仮の値として最大値300を入れる。
                //heightの値は生成されるactionPrintImageのコマンドに影響を与えない。

                PrinterBuilder printerBuilder = new PrinterBuilder();
                printerBuilder.AddPageMode(pageModeAreaParameter, pageModeBuilder);

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
