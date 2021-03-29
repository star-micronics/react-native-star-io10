using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Display;
using System;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class DisplayBuilderWrapper : StarIO10ObjectWrapper<DisplayBuilder>
    {
        [ReactMethod("init")]
        public void Init(IReactPromise<string> promise)
        {
            DisplayBuilder nativeObject = new DisplayBuilder();

            SetObject(nativeObject, out string objectIdentifier);

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("styleInternationalCharacter")]
        public void StyleInternationalCharacter(string objectIdentifier, string type, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DisplayBuilder nativeObject) ||
                !StarIO10ValueConverter.ToDisplayInternationalCharacterType(type, out InternationalCharacterType nativeType))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleInternationalCharacter(nativeType);

            promise.Resolve();
        }

        [ReactMethod("styleCharacterEncoding")]
        public void StyleCharacterEncoding(string objectIdentifier, string type, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DisplayBuilder nativeObject) ||
                !StarIO10ValueConverter.ToDisplayCharacterEncodingType(type, out CharacterEncodingType nativeType))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleCharacterEncoding(nativeType);

            promise.Resolve();
        }

        [ReactMethod("styleCursorPositionTo")]
        public void StyleCursorPositionTo(string objectIdentifier, int x, int y, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DisplayBuilder nativeObject) ||
                !StarIO10ValueConverter.ToDisplayPositionParameter(x, y, out PositionParameter parameter))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.StyleCursorPositionTo(parameter);

            promise.Resolve();
        }

        [ReactMethod("actionClearLine")]
        public void ActionClearLine(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DisplayBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionClearLine();

            promise.Resolve();
        }

        [ReactMethod("actionClearAll")]
        public void ActionClearAll(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DisplayBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionClearAll();

            promise.Resolve();
        }

        [ReactMethod("actionSetBackLightState")]
        public void ActionSetBackLightState(string objectIdentifier, bool on,  IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DisplayBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionSetBackLightState(on);

            promise.Resolve();
        }

        [ReactMethod("actionSetCursorState")]
        public void ActionSetCursorState(string objectIdentifier, string state, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DisplayBuilder nativeObject) ||
                !StarIO10ValueConverter.ToDisplayCursorState(state, out CursorState nativeState))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionSetCursorState(nativeState);

            promise.Resolve();
        }

        [ReactMethod("actionSetContrast")]
        public void ActionSetContrast(string objectIdentifier, string value, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DisplayBuilder nativeObject) ||
                !StarIO10ValueConverter.ToDisplayContrast(value, out Contrast nativeValue))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionSetContrast(nativeValue);

            promise.Resolve();
        }

        [ReactMethod("actionShowText")]
        public void ActionShowText(string objectIdentifier, string content, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out DisplayBuilder nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.ActionShowText(content);

            promise.Resolve();
        }

        [ReactMethod("actionShowImage")]
        public async void ActionShowImage(string objectIdentifier, string source, bool effectDiffusion, int threshold, IReactPromise<JSValue.Void> promise)
        {
            try
            {
                if (!GetObject(objectIdentifier, out DisplayBuilder nativeObject))
                {
                    promise.Reject(new ReactError());
                    return;
                }

                ImageParameter parameter = await StarIO10ValueConverter.ToDisplayImageParameterAsync(source, effectDiffusion, threshold);

                nativeObject.ActionShowImage(parameter);

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
