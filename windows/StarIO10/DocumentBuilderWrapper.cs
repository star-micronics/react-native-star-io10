using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Printer;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class DocumentBuilderWrapper : StarIO10ObjectWrapper<DocumentBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            DocumentBuilder nativeObject = new DocumentBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("settingTopMargin")]
        public void SettingTopMargin(string objectIdentifier, double height, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.SettingTopMargin(height);

            promise.Resolve();
        }

        [ReactMethod("settingBlackMark")]
        public void SettingBlackMark(string objectIdentifier, bool enable, string position, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterBlackMarkParameter(enable, position, out BlackMarkParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.SettingBlackMark(parameter);

            promise.Resolve();
        }

        [ReactMethod("settingLabel")]
        public void SettingLabel(string objectIdentifier, bool enable, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterLabelParameter(enable, out LabelParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.SettingLabel(parameter);

            promise.Resolve();
        }

        [ReactMethod("settingHoldPrint")]
        public void SettingHoldPrint(string objectIdentifier, bool enable, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject) ||
                !StarIO10ValueConverter.ToPrinterHoldPrintParameter(enable, out HoldPrintParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.SettingHoldPrint(parameter);

            promise.Resolve();
        }

        [ReactMethod("settingPrintableArea")]
        public void SettingPrintableArea(string objectIdentifier, double width, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.SettingPrintableArea(width);

            promise.Resolve();
        }

        [ReactMethod("addPrinter")]
        public void AddPrinter(string objectIdentifier, string printerBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject) ||
                !PrinterBuilderWrapper.GetObject(printerBuilderIdentifier, out PrinterBuilder printerBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddPrinter(printerBuilder);

            promise.Resolve();
        }

        [ReactMethod("addDrawer")]
        public void AddDrawer(string objectIdentifier, string drawerBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject) ||
                !DrawerBuilderWrapper.GetObject(drawerBuilderIdentifier, out DrawerBuilder drawerBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddDrawer(drawerBuilder);

            promise.Resolve();
        }

        [ReactMethod("addBuzzer")]
        public void AddBuzzer(string objectIdentifier, string buzzerBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject) ||
                !BuzzerBuilderWrapper.GetObject(buzzerBuilderIdentifier, out BuzzerBuilder buzzerBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddBuzzer(buzzerBuilder);

            promise.Resolve();
        }

        [ReactMethod("addMelodySpeaker")]
        public void AddMelodySpeaker(string objectIdentifier, string melodySpeakerBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject) ||
                !MelodySpeakerBuilderWrapper.GetObject(melodySpeakerBuilderIdentifier, out MelodySpeakerBuilder melodySpeakerBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddMelodySpeaker(melodySpeakerBuilder);

            promise.Resolve();
        }

        [ReactMethod("addDisplay")]
        public void AddDisplay(string objectIdentifier, string displayBuilderIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject) ||
                !DisplayBuilderWrapper.GetObject(displayBuilderIdentifier, out DisplayBuilder displayBuilder))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddDisplay(displayBuilder);

            promise.Resolve();
        }

        [ReactMethod("addRaw")]
        public void AddRaw(string objectIdentifier, byte[] content, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DocumentBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.AddRaw(content);

            promise.Resolve();
        }
    }
}
