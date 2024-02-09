using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using System.Collections.Generic;

#nullable enable

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarSpoolJobStatusWrapper : StarIO10ObjectWrapper<StarSpoolJobStatus>
    {
        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("getJobStatus")]
        public void GetJobStatus(string objectIdentifier, IReactPromise<IReadOnlyDictionary<string, JSValue>> promise)
        {
            if (!GetObject(objectIdentifier, out StarSpoolJobStatus nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(StarIO10ValueConverter.ToStarSpoolJobStatusDictionary(nativeObject));
        }
    }
}
