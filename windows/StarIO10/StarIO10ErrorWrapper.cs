using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarIO10ErrorWrapper : StarIO10ObjectWrapper<StarIO10Exception>
    {
        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("getType")]
        public void GetType(string objectIdentifier, IReactPromise<string> promise)
        {
            if (!GetObject(objectIdentifier, out StarIO10Exception nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            string type;

            if (nativeObject is StarIO10ArgumentException)
            {
                type = "Argument";
            }
            else if(nativeObject is StarIO10BadResponseException)
            {
                type = "BadResponse";
            }
            else if (nativeObject is StarIO10CommunicationException)
            {
                type = "Communication";
            }
            else if (nativeObject is StarIO10IllegalDeviceStateException)
            {
                type = "IllegalDeviceState";
            }
            else if (nativeObject is StarIO10InUseException)
            {
                type = "InUse";
            }
            else if (nativeObject is StarIO10InvalidOperationException)
            {
                type = "InvalidOperation";
            }
            else if (nativeObject is StarIO10NotFoundException)
            {
                type = "NotFound";
            }
            else if (nativeObject is StarIO10UnknownException)
            {
                type = "Unknown";
            }
            else if (nativeObject is StarIO10UnprintableException)
            {
                type = "Unprintable";
            }
            else
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(type);
        }

        [ReactMethod("getMessage")]
        public void GetMessage(string objectIdentifier, IReactPromise<string> promise)
        {
            if (!GetObject(objectIdentifier, out StarIO10Exception nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.Message);
        }

        [ReactMethod("getErrorCode")]
        public void GetErrorCode(string objectIdentifier, IReactPromise<int> promise)
        {
            if (!GetObject(objectIdentifier, out StarIO10Exception nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(nativeObject.ErrorCode);
        }

        [ReactMethod("getStatus")]
        public void GetStatus(string objectIdentifier, IReactPromise<string> promise)
        {
            if (!GetObject(objectIdentifier, out StarIO10Exception nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            StarPrinterStatus status = null;

            if(nativeObject is StarIO10UnprintableException)
            {
                status = (nativeObject as StarIO10UnprintableException).Status;
            }

            if(status == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            StarPrinterStatusWrapper.SetObject(status, out string statusIdentifier);
            promise.Resolve(statusIdentifier);
        }
    }
}
