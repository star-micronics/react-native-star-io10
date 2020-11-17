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
        public Action<PrinterFoundParameter> PrinterFound { get; set; }

        [ReactEvent]
        public Action<EventParameter> DiscoveryFinished { get; set; }

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

                PrinterFound(new PrinterFoundParameter()
                {
                    identifier = objectIdentifier,
                    interfaceType = interfaceTypeString,
                    connectionIdentifier = e.Printer.ConnectionSettings.Identifier,
                    model = modelString,
                    emulation = emulationString

                });
            };
            nativeObject.DiscoveryFinished += (sender, e) =>
            {
                DiscoveryFinished(new EventParameter() { identifier = objectIdentifier });
            };

            promise.Resolve(objectIdentifier);
        }

        [ReactMethod("dispose")]
        public void Dispose(string objectIdentifier, IReactPromise<JSValue.Void> promise)
        {
            DisposeObject(objectIdentifier);

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
