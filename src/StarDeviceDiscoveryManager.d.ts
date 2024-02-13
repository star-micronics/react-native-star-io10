import { NativeObject } from './NativeObject';
import { StarPrinter } from './StarPrinter';
import { InterfaceType } from './InterfaceType';
export declare class StarDeviceDiscoveryManager extends NativeObject {
    private _eventSubscriptions;
    private _interfaceTypes;
    private _discoveryStarting;
    discoveryTime: number;
    onPrinterFound: (printer: StarPrinter) => void;
    onDiscoveryFinished: () => void;
    constructor(_interfaceTypes: Array<InterfaceType>, _nativeObject: string);
    startDiscovery(): Promise<void>;
    stopDiscovery(): Promise<void>;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
