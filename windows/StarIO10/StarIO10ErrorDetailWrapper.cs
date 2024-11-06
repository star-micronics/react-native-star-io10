using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using System.Collections.Generic;

#nullable enable

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarIO10ErrorDetailWrapper : StarIO10ObjectWrapper<StarIO10ErrorDetail>
    {
        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);
            promise.Resolve();
        }

        [ReactMethod("getAutoSwitchInterfaceLanErrorIdentifier")]
        public void GetAutoSwitchInterfaceLanErrorIdentifier(string objectIdentifier, IReactPromise<string> promise)
        {
            GetAutoSwitchInterfaceErrorIdentifier(objectIdentifier, promise, InterfaceType.Lan);
        }

        [ReactMethod("getAutoSwitchInterfaceBluetoothErrorIdentifier")]
        public void GetAutoSwitchInterfaceBluetoothErrorIdentifier(string objectIdentifier, IReactPromise<string> promise)
        {
            GetAutoSwitchInterfaceErrorIdentifier(objectIdentifier, promise, InterfaceType.Bluetooth);
        }

        [ReactMethod("getAutoSwitchInterfaceUsbErrorIdentifier")]
        public void GetAutoSwitchInterfaceUsbErrorIdentifier(string objectIdentifier, IReactPromise<string> promise)
        {
            GetAutoSwitchInterfaceErrorIdentifier(objectIdentifier, promise, InterfaceType.Usb);
        }

        [ReactMethod("getAutoSwitchInterfaceBluetoothLEErrorIdentifier")]
        public void GetAutoSwitchInterfaceBluetoothLEErrorIdentifier(string objectIdentifier, IReactPromise<string> promise)
        {
            GetAutoSwitchInterfaceErrorIdentifier(objectIdentifier, promise, InterfaceType.BluetoothLE);
        }

        public void GetAutoSwitchInterfaceErrorIdentifier(string objectIdentifier, IReactPromise<string> promise, InterfaceType interfaceType)
        {
            if (!GetObject(objectIdentifier, out StarIO10ErrorDetail nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            Dictionary<InterfaceType, StarIO10Exception?>? openErrors = nativeObject.AutoSwitchInterfaceOpenErrors;

            if (openErrors == null)
            {
                promise.Reject(new ReactError());
                return;
            }

            bool existsValue = openErrors.TryGetValue(interfaceType, out StarIO10Exception? error);

            if (!existsValue || error == null)
            {
                promise.Reject(new ReactError());
            }
            else
            {
                StarIO10ErrorWrapper.SetObject(error, out string errorIdentifier);
                promise.Resolve(errorIdentifier);
            }
        }
    }
}
