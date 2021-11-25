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

            foreach(string interfaceType in interfaceTypes)
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

                nativeObject.PrinterFound += (sender, e) =>
                {
                    if(!StarIO10ValueConverter.ToString(e.Printer.ConnectionSettings.InterfaceType, out string interfaceTypeString) ||
                       !StarIO10ValueConverter.ToString(e.Printer.Information.Model, out string modelString) ||
                       !StarIO10ValueConverter.ToString(e.Printer.Information.Emulation, out string emulationString))
                    {
                        return;
                    }

                    var parameter = new Dictionary<string, JSValue>();
                    parameter.Add(EventParameter.KeyIdentifier, objectIdentifier);
                    parameter.Add(EventParameter.KeyInterfaceType, interfaceTypeString);
                    parameter.Add(EventParameter.KeyConnectionIdentifier, e.Printer.ConnectionSettings.Identifier);
                    parameter.Add(EventParameter.KeyModel, modelString);
                    parameter.Add(EventParameter.KeyEmulation, emulationString);
                    parameter.Add(EventParameter.KeyReserved, StarIO10ValueConverter.ToJSValue(e.Printer.Information.Reserved));

                    PrinterFound(parameter);
                };
                nativeObject.DiscoveryFinished += (sender, e) =>
                {
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
}
