using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Printer;
using System;
using System.Collections.Generic;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class PrinterBuilderWrapper : StarIO10ObjectWrapper<PrinterBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            PrinterBuilder nativeObject = new PrinterBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("styleAlignment")]
        public void StyleAlignment(string objectIdentifier, string alignment, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterAlignment(alignment, out Alignment nativeAlignment))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleAlignment(nativeAlignment);

            promise.Resolve();
        }

        [ReactMethod("addPageMode")]
        public void AddPageMode(string objectIdentifier, double x, double y, double width, double height, string pageModeBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !PageModeBuilderWrapper.GetObject(pageModeBuilderIdentifier, out PageModeBuilder pageModeBuilder) ||
                !StarIO10ValueConverter.ToPrinterPageModeAreaParameter(x, y, width, height, out PageModeAreaParameter nativeParameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddPageMode(nativeParameter, pageModeBuilder);

            promise.Resolve();
        }

        [ReactMethod("styleFont")]
        public void StyleFont(string objectIdentifier, string type, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterFontType(type, out FontType nativeType))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleFont(nativeType);

            promise.Resolve();
        }

        [ReactMethod("styleBold")]
        public void StyleBold(string objectIdentifier, bool enable, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleBold(enable);

            promise.Resolve();
        }

        [ReactMethod("styleInvert")]
        public void StyleInvert(string objectIdentifier, bool enable, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleInvert(enable);

            promise.Resolve();
        }

        [ReactMethod("styleUnderLine")]
        public void StyleUnderLine(string objectIdentifier, bool enable, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleUnderLine(enable);

            promise.Resolve();
        }

        [ReactMethod("styleMagnification")]
        public void StyleMagnification(string objectIdentifier, int width, int height, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !StarIO10ValueConverter.ToMagnificationParameter(width, height, out MagnificationParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleMagnification(parameter);

            promise.Resolve();
        }

        [ReactMethod("styleCharacterSpace")]
        public void StyleCharacterSpace(string objectIdentifier, double width, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleCharacterSpace(width);

            promise.Resolve();
        }

        [ReactMethod("styleLineSpace")]
        public void StyleLineSpace(string objectIdentifier, double height, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleLineSpace(height);

            promise.Resolve();
        }

        [ReactMethod("styleHorizontalPositionTo")]
        public void StyleHorizontalPositionTo(string objectIdentifier, double position, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleHorizontalPositionTo(position);

            promise.Resolve();
        }

        [ReactMethod("styleHorizontalPositionBy")]
        public void StyleHorizontalPositionBy(string objectIdentifier, double position, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleHorizontalPositionBy(position);

            promise.Resolve();
        }

        [ReactMethod("styleHorizontalTabPositions")]
        public void StyleHorizontalTabPositions(string objectIdentifier, int[] positions, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleHorizontalTabPositions(positions);

            promise.Resolve();
        }

        [ReactMethod("styleInternationalCharacter")]
        public void StyleInternationalCharacter(string objectIdentifier, string type, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterInternationalCharacterType(type, out InternationalCharacterType nativeType))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleInternationalCharacter(nativeType);

            promise.Resolve();
        }

        [ReactMethod("styleSecondPriorityCharacterEncoding")]
        public void StyleSecondPriorityCharacterEncoding(string objectIdentifier, string type, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterCharacterEncodingType(type, out CharacterEncodingType nativeType))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleSecondPriorityCharacterEncoding(nativeType);

            promise.Resolve();
        }

        [ReactMethod("styleCjkCharacterPriority")]
        public void StyleCjkCharacterPriority(string objectIdentifier, string[] types, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            List<CjkCharacterType> nativeTypeList = new List<CjkCharacterType>();

            foreach (string type in types)
            {
                if (!StarIO10ValueConverter.ToPrinterCjkCharacterType(type, out CjkCharacterType nativeType))
                {
                    promise.Reject(new ReactError());
                    return;
                }

                nativeTypeList.Add(nativeType);
            }

            nativeObject.StyleCjkCharacterPriority(nativeTypeList);

            promise.Resolve();
        }

        [ReactMethod("actionCut")]
        public void ActionCut(string objectIdentifier, string type, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterCutType(type, out CutType nativeType))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionCut(nativeType);

            promise.Resolve();
        }

        [ReactMethod("actionFeed")]
        public void ActionFeed(string objectIdentifier, double height, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionFeed(height);

            promise.Resolve();
        }

        [ReactMethod("actionFeedLine")]
        public void ActionFeedLine(string objectIdentifier, int lines, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionFeedLine(lines);

            promise.Resolve();
        }

        [ReactMethod("actionPrintText")]
        public void ActionPrintText(string objectIdentifier, string content, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionPrintText(content);

            promise.Resolve();
        }

        [ReactMethod("actionPrintLogo")]
        public void ActionPrintLogo(string objectIdentifier, string keyCode, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterLogoParameter(keyCode, out LogoParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionPrintLogo(parameter);

            promise.Resolve();
        }

        [ReactMethod("actionPrintBarcode")]
        public void ActionPrintBarcode(string objectIdentifier, string content, string symbology, bool printHri, int barDots, string barRatioLevel, double height, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterBarcodeParameter(content, symbology, printHri, barDots, barRatioLevel, height, out BarcodeParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionPrintBarcode(parameter);

            promise.Resolve();
        }

        [ReactMethod("actionPrintPdf417")]
        public void ActionPrintPdf417(string objectIdentifier, string content, int column, int line, int module, int aspect, string level, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterPdf417Parameter(content, column, line, module, aspect, level, out Pdf417Parameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionPrintPdf417(parameter);

            promise.Resolve();
        }

        [ReactMethod("actionPrintQRCode")]
        public void ActionPrintQRCode(string objectIdentifier, string content, string model, string level, int cellSize, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterQRCodeParameter(content, model, level, cellSize, out QRCodeParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionPrintQRCode(parameter);

            promise.Resolve();
        }

        [ReactMethod("actionPrintImage")]
        public async void ActionPrintImage(string objectIdentifier, string source, int width, bool effectDiffusion, int threshold, IReactPromise<JSValue.Void> promise)
        {
            try
            {
                if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject))
                {
                    promise.Reject(new ReactError());
                    return;
                }

                ImageParameter parameter = await StarIO10ValueConverter.ToPrinterImageParameterAsync(source, width, effectDiffusion, threshold);

                nativeObject.ActionPrintImage(parameter);

                promise.Resolve();
            }
            catch (Exception)
            {
                StarIO10Exception exception = new StarIO10ArgumentException("Invalid source.");
                StarIO10ErrorWrapper.SetObject(exception, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = exception });
            }
        }

        [ReactMethod("add")]
        public void Add(string objectIdentifier, string printerBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PrinterBuilder nativeObject) ||
                !GetObject(printerBuilderIdentifier, out PrinterBuilder printerBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.Add(printerBuilder);

            promise.Resolve();
        }
    }
}
