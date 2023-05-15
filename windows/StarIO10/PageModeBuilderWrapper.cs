using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Printer;
using System;
using System.Collections.Generic;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class PageModeBuilderWrapper : StarIO10ObjectWrapper<PageModeBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            PageModeBuilder nativeObject = new PageModeBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("stylePrintDirection")]
        public void StylePrintDirection(string objectIdentifier, string direction, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterPageModePrintDirection(direction, out PageModePrintDirection nativeDirection))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StylePrintDirection(nativeDirection);

            promise.Resolve();
        }

        [ReactMethod("styleFont")]
        public void StyleFont(string objectIdentifier, string type, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleLineSpace(height);

            promise.Resolve();
        }

        [ReactMethod("styleVerticalPositionTo")]
        public void StyleVerticalPositionTo(string objectIdentifier, double position, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleVerticalPositionTo(position);

            promise.Resolve();
        }

        [ReactMethod("styleVerticalPositionBy")]
        public void StyleVerticalPositionBy(string objectIdentifier, double position, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleVerticalPositionBy(position);

            promise.Resolve();
        }

        [ReactMethod("styleHorizontalPositionTo")]
        public void StyleHorizontalPositionTo(string objectIdentifier, double position, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
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

        [ReactMethod("actionPrintText")]
        public void ActionPrintText(string objectIdentifier, string content, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionPrintText(content);

            promise.Resolve();
        }

        [ReactMethod("actionPrintBarcode")]
        public void ActionPrintBarcode(string objectIdentifier, string content, string symbology, bool printHri, int barDots, string barRatioLevel, double height, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
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
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterQRCodeParameter(content, model, level, cellSize, out QRCodeParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionPrintQRCode(parameter);

            promise.Resolve();
        }

        [ReactMethod("actionPrintImage")]
        public async void ActionPrintImage(string objectIdentifier, string source, double x, double y, int width, bool effectDiffusion, int threshold, IReactPromise<JSValue.Void> promise)
        {
            try
            {
                if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject))
                {
                    promise.Reject(new ReactError());
                    return;
                }

                PageModeImageParameter parameter = await StarIO10ValueConverter.ToPrinterPageModeImageParameterAsync(source, x, y, width, effectDiffusion, threshold);

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

        [ReactMethod("actionPrintRuledLine")]
        public void ActionPrintRuledLine(string objectIdentifier, double xStart, double yStart, double xEnd, double yEnd, double thickness, string lineStyle, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterPageModeRuledLineParameter(xStart, yStart, xEnd, yEnd, thickness, lineStyle, out PageModeRuledLineParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionPrintRuledLine(parameter);

            promise.Resolve();
        }

        [ReactMethod("actionPrintRectangle")]
        public void ActionPrintRectangle(string objectIdentifier, double[] size, double thickness, bool roundCorner, double cornerRadius, string lineStyle, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
                size.Length != 4 ||
                !StarIO10ValueConverter.ToPrinterPageModeRectangleParameter(size[0], size[1], size[2], size[3], thickness, roundCorner, cornerRadius, lineStyle, out PageModeRectangleParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionPrintRectangle(parameter);

            promise.Resolve();
        }

        [ReactMethod("add")]
        public void Add(string objectIdentifier, string pageModeBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
                !GetObject(pageModeBuilderIdentifier, out PageModeBuilder pageModeBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.Add(pageModeBuilder);

            promise.Resolve();
        }

        [ReactMethod("addPageMode")]
        public void AddPageMode(string objectIdentifier, double x, double y, double width, double height, string pageModeBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out PageModeBuilder nativeObject) ||
                !GetObject(pageModeBuilderIdentifier, out PageModeBuilder pageModeBuilder) ||
                !StarIO10ValueConverter.ToPrinterPageModeAreaParameter(x, y, width, height, out PageModeAreaParameter nativeParameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddPageMode(nativeParameter, pageModeBuilder);

            promise.Resolve();
        }
    }
}
