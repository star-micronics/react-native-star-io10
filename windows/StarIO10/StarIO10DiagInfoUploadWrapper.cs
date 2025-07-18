using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarIO10DiagInfoUploadWrapper
    {
        [ReactMethod("getIsEnabled")]
        public void GetIsEnabled(IReactPromise<bool> promise)
        {
            try
            {
                StarIO10DiagInfoUpload nativeObject = StarMicronics.StarIO10.StarIO10DiagInfoUpload.Instance;
                promise.Resolve(nativeObject.IsEnabled);
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }

        [ReactMethod("setIsEnabled")]
        public void SetIsEnabled(bool value, IReactPromise<JSValue.Void> promise)
        {
            try
            {
                StarIO10DiagInfoUpload nativeObject = StarMicronics.StarIO10.StarIO10DiagInfoUpload.Instance;
                nativeObject.IsEnabled = value;
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
