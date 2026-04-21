using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using System;
using System.Collections.Generic;

namespace StarMicronics.ReactNative.StarIO10
{
    [ReactModule]
    class StarDeviceDiscoveryManagerWrapper : StarIO10ObjectWrapper<IStarDeviceDiscoveryManager>
    {
        [ReactEvent]
        public Action<IReadOnlyDictionary<string, JSValue>> PrinterFound { get; set; }

        [ReactEvent]
        public Action<IReadOnlyDictionary<string, JSValue>> DiscoveryFinished { get; set; }

        [ReactMethod("init")]
        public void Init(string[] interfaceTypes, IReactPromise<string> promise)
        {
            List<InterfaceType> nativeInterfaceTypes = new List<InterfaceType>();

            foreach (string interfaceType in interfaceTypes)
            {
                if (!StarIO10ValueConverter.ToInterfaceType(interfaceType, out InterfaceType nativeInterfaceType))
                {
                    promise.Reject(new ReactError());
                    return;
                }

                nativeInterfaceTypes.Add(nativeInterfaceType);
            }

            try
            {
                IStarDeviceDiscoveryManager nativeObject = StarDeviceDiscoveryManagerFactory.Create(nativeInterfaceTypes);

                SetObject(nativeObject, out string objectIdentifier);

                var discoveryDelegate = new StarDeviceDiscoveryManagerDelegateImpl();
                nativeObject.StarDeviceDiscoveryManagerDelegate = discoveryDelegate;

                discoveryDelegate.PrinterFoundEvent += (sender, printer) =>
                {
                    if (!GetIdentifier(sender as IStarDeviceDiscoveryManager, out string objectIdentifier))
                    {
                        return;
                    }

                    if (!StarIO10ValueConverter.ToString(printer.ConnectionSettings.InterfaceType, out string interfaceTypeString) ||
                               !StarIO10ValueConverter.ToString(printer.Information.Model, out string modelString) ||
                               !StarIO10ValueConverter.ToString(printer.Information.Emulation, out string emulationString))
                    {
                        return;
                    }

                    var parameter = new Dictionary<string, JSValue>();
                    parameter.Add(EventParameter.KeyIdentifier, objectIdentifier);
                    parameter.Add(EventParameter.KeyInterfaceType, interfaceTypeString);
                    parameter.Add(EventParameter.KeyConnectionIdentifier, printer.ConnectionSettings.Identifier);
                    parameter.Add(EventParameter.KeyModel, modelString);
                    parameter.Add(EventParameter.KeyEmulation, emulationString);
                    parameter.Add(EventParameter.KeyReserved, StarIO10ValueConverter.ToJSValue(printer.Information.Reserved));

                    if (printer.Information.Detail.Lan.MacAddress != null)
                    {
                        parameter.Add(EventParameter.KeyMacAddress, printer.Information.Detail.Lan.MacAddress);
                    }
                    if (printer.Information.Detail.Lan.IPAddress != null)
                    {
                        parameter.Add(EventParameter.KeyIPAddress, printer.Information.Detail.Lan.IPAddress);
                    }
                    if (printer.Information.Detail.Lan.UniqueId != null)
                    {
                        parameter.Add(EventParameter.KeyUniqueId, printer.Information.Detail.Lan.UniqueId);
                    }
                    if (printer.Information.Detail.Bluetooth.Address != null)
                    {
                        parameter.Add(EventParameter.KeyBluetoothAddress, printer.Information.Detail.Bluetooth.Address);
                    }
                    if (printer.Information.Detail.Bluetooth.DeviceName != null)
                    {
                        parameter.Add(EventParameter.KeyBluetoothDeviceName, printer.Information.Detail.Bluetooth.DeviceName);
                    }
                    if (printer.Information.Detail.BluetoothLE.Address != null)
                    {
                        parameter.Add(EventParameter.KeyBluetoothLEAddress, printer.Information.Detail.BluetoothLE.Address);
                    }
                    if (printer.Information.Detail.BluetoothLE.DeviceName != null)
                    {
                        parameter.Add(EventParameter.KeyBluetoothLEDeviceName, printer.Information.Detail.BluetoothLE.DeviceName);
                    }
                    if (printer.Information.Detail.Usb.PortName != null)
                    {
                        parameter.Add(EventParameter.keyUsbPortName, printer.Information.Detail.Usb.PortName);
                    }
                    if (printer.Information.Detail.Usb.UsbSerialNumber != null)
                    {
                        parameter.Add(EventParameter.keyUsbSerialNumber, printer.Information.Detail.Usb.UsbSerialNumber);
                    }

                    PrinterFound(parameter);
                };

                discoveryDelegate.DiscoveryFinishedEvent += (sender, e) =>
                {
                    if (!GetIdentifier(sender as IStarDeviceDiscoveryManager, out string objectIdentifier))
                    {
                        return;
                    }

                    var parameter = new Dictionary<string, JSValue>();
                    parameter.Add(EventParameter.KeyIdentifier, objectIdentifier);

                    DiscoveryFinished(parameter);
                };

                promise.Resolve(objectIdentifier);
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

            promise.Resolve();
        }

        [ReactMethod("addListener")]
        public void AddListener(string objectIdentifier, string eventName, IReactPromise<JSValue.Void> promise)
        {
            promise.Resolve();
        }

        [ReactMethod("removeListeners")]
        public void RemoveListeners(string objectIdentifier, int count, IReactPromise<JSValue.Void> promise)
        {
            promise.Resolve();
        }

        [ReactMethod("startDiscovery")]
        public void StartDiscovery(string objectIdentifier, int discoveryTime, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out IStarDeviceDiscoveryManager nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            nativeObject.DiscoveryTime = discoveryTime;

            try
            {
                nativeObject.StartDiscovery();
                promise.Resolve();
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }

        [ReactMethod("stopDiscovery")]
        public void StopDiscovery(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            if (!GetObject(objectIdentifier, out IStarDeviceDiscoveryManager nativeObject))
            {
                promise.Reject(new ReactError());
                return;
            }

            try
            {
                nativeObject.StopDiscovery();
                promise.Resolve();
            }
            catch (StarIO10Exception e)
            {
                StarIO10ErrorWrapper.SetObject(e, out string exceptionIdentifier);
                promise.Reject(new ReactError() { Code = exceptionIdentifier, Exception = e });
            }
        }
    }

    internal class StarDeviceDiscoveryManagerDelegateImpl : StarDeviceDiscoveryManagerDelegate
    {
        public event EventHandler<StarPrinter> PrinterFoundEvent;
        public event EventHandler DiscoveryFinishedEvent;

        override public void PrinterFound(object sender, StarPrinter printer)
        {
            PrinterFoundEvent?.Invoke(sender, printer);
        }

        override public void DiscoveryFinished(object sender)
        {
            DiscoveryFinishedEvent?.Invoke(sender, EventArgs.Empty);
        }
    }
}
