using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using StarMicronics.StarIO10.Internal;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarIO10LoggerWrapper : StarIO10ObjectWrapper<StarIO10Logger>
    {
        [ReactMethod("appendHeader")]
        public void AppendHeader(string header, IReactPromise<JSValue.Void> promise)
        {
            InternalInterface.AppendLogHeader(header);
            promise.Resolve();
        }

        [ReactMethod("start")]
        public void Start(IReactPromise<JSValue.Void> promise)
        {
            try
            {
                StarIO10Logger nativeObject = StarIO10Logger.Instance;
                nativeObject.Start();
                promise.Resolve();
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }

        [ReactMethod("stop")]
        public void Stop(IReactPromise<JSValue.Void> promise)
        {
            try
            {
                StarIO10Logger nativeObject = StarIO10Logger.Instance;
                nativeObject.Stop();
                promise.Resolve();
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }
    }
}
