using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using System.Collections.Generic;

#nullable enable

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarPrinterStatusWrapper : StarIO10ObjectWrapper<StarPrinterStatus>
    {
        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("getHasError")]
        public void GetHasError(string objectIdentifier, IReactPromise<bool> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.HasError);
        }

        [ReactMethod("getCoverOpen")]
        public void GetCoverOpen(string objectIdentifier, IReactPromise<bool> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.CoverOpen);
        }

        [ReactMethod("getDrawerOpenCloseSignal")]
        public void GetDrawerOpenCloseSignal(string objectIdentifier, IReactPromise<bool> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.DrawerOpenCloseSignal);
        }

        [ReactMethod("getPaperEmpty")]
        public void GetPaperEmpty(string objectIdentifier, IReactPromise<bool> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.PaperEmpty);
        }

        [ReactMethod("getPaperNearEmpty")]
        public void GetPaperNearEmpty(string objectIdentifier, IReactPromise<bool> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.PaperNearEmpty);
        }

        [ReactMethod("getCutterError")]
        public void GetCutterError(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.CutterError);
        }

        [ReactMethod("getDetectedPaperWidth")]
        public void GetDetectedPaperWidth(string objectIdentifier, IReactPromise<int?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.DetectedPaperWidth);
        }


        [ReactMethod("getDrawerOpenError")]
        public void GetDrawerOpenError(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.DrawerOpenError);
        }


        [ReactMethod("getPaperJamError")]
        public void GetPaperJamError(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.PaperJamError);
        }


        [ReactMethod("getPaperPresent")]
        public void GetPaperPresent(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.PaperPresent);
        }


        [ReactMethod("getPaperSeparatorError")]
        public void GetPaperSeparatorError(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.PaperSeparatorError);
        }

        [ReactMethod("getDrawer1OpenedMethod")]
        public void GetDrawer1OpenedMethod(string objectIdentifier, IReactPromise<string?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            StarIO10ValueConverter.ToString(nativeObject.Detail.Drawer1OpenedMethod, out string? drawerOpenedMethodString);

            if (drawerOpenedMethodString == null)
            {
                drawerOpenedMethodString = string.Empty;
            }

            promise.Resolve(drawerOpenedMethodString);
        }

        [ReactMethod("getDrawer1OpenCloseSignal")]
        public void GetDrawer1OpenCloseSignal(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.Drawer1OpenCloseSignal);
        }

        [ReactMethod("getDrawer2OpenedMethod")]
        public void GetDrawer2OpenedMethod(string objectIdentifier, IReactPromise<string?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            StarIO10ValueConverter.ToString(nativeObject.Detail.Drawer2OpenedMethod, out string? drawerOpenedMethodString);

            if (drawerOpenedMethodString == null)
            {
                drawerOpenedMethodString = string.Empty;
            }

            promise.Resolve(drawerOpenedMethodString);
        }

        [ReactMethod("getDrawer2OpenCloseSignal")]
        public void GetDrawer2OpenCloseSignal(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.Drawer2OpenCloseSignal);
        }

        [ReactMethod("getExternalDevice1Connected")]
        public void GetExternalDevice1Connected(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.ExternalDevice1Connected);
        }

        [ReactMethod("getExternalDevice2Connected")]
        public void GetExternalDevice2Connected(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.ExternalDevice2Connected);
        }


        [ReactMethod("getPartsReplacementNotification")]
        public void GetPartsReplacementNotification(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.PartsReplacementNotification);
        }


        [ReactMethod("getPrintUnitOpen")]
        public void GetPrintUnitOpen(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.PrintUnitOpen);
        }

        [ReactMethod("getCleaningNotification")]
        public void Get(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.CleaningNotification);
        }

        [ReactMethod("getRollPositionError")]
        public void GetRollPositionError(string objectIdentifier, IReactPromise<bool?> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Detail.RollPositionError);
        }


        [ReactMethod("getReserved")]
        public void GetReserved(string objectIdentifier, IReactPromise<IReadOnlyDictionary<string, JSValue>> promise)
        {
            if (!GetObject(objectIdentifier, out StarPrinterStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(StarIO10ValueConverter.ToJSDictionary(nativeObject.Reserved));
        }
    }
}
