using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using System.Collections.Generic;
using System.Collections.ObjectModel;

#nullable enable

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarSpoolJobStatusListWrapper : StarIO10ObjectWrapper<List<StarSpoolJobStatus>>
    {
        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("getJobStatusList")]
        public void GetJobStatusList(string objectIdentifier, IReactPromise<ReadOnlyCollection<JSValue>> promise)
        {
            if (!GetObject(objectIdentifier, out List<StarSpoolJobStatus> nativeObject) ||
                nativeObject == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            promise.Resolve(StarIO10ValueConverter.ToStarSpoolJobStatusDictionaryList(nativeObject));
        }
    }
}
