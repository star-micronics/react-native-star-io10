using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarPrinterStatusWrapper :  StarIO10ObjectWrapper<StarPrinterStatus>
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
    }
}
