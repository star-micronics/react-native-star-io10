import {
    NativeModules,
    NativeEventEmitter,
    EventSubscription
} from 'react-native';

import { NativeObject } from './NativeObject';
import { StarConnectionSettings } from './StarConnectionSettings';
import { StarPrinter } from './StarPrinter';
import { StarIO10ErrorFactory } from './StarIO10ErrorFactory';
import { InterfaceType } from './InterfaceType';
import { StarPrinterInformation } from './StarPrinterInformation';

const eventEmitter = new NativeEventEmitter(NativeModules.StarDeviceDiscoveryManagerWrapper);

export class StarDeviceDiscoveryManager extends NativeObject {
    private _eventSubscriptions: Array<EventSubscription> = [];
    private _interfaceTypes: Array<InterfaceType>;
    private _discoveryStarting: boolean = false;

    discoveryTime: number = -1;
    onPrinterFound: (printer: StarPrinter) => void = () => {};
    onDiscoveryFinished: () => void = () => {};

    constructor(_interfaceTypes: Array<InterfaceType>, _nativeObject: string) {
        super();

        this._interfaceTypes = _interfaceTypes;
        this._nativeObject = _nativeObject;
    }

    async startDiscovery(): Promise<void> {
        await this._initNativeObject();

        this._discoveryStarting = true;

        if(this._eventSubscriptions.length == 0) {
            this._eventSubscriptions.push(
                eventEmitter.addListener('PrinterFound', (params: any) => {
                    var actualPrams = NativeObject._getEventParams(params);
                    if(this._nativeObject === actualPrams.identifier) {
                        var settings = new StarConnectionSettings();
                        settings.interfaceType = actualPrams.interfaceType;
                        settings.identifier = actualPrams.connectionIdentifier;

                        var information = new StarPrinterInformation();
                        information._model = actualPrams.model;
                        information._emulation = actualPrams.emulation;
                        information._reserved = new Map(Object.entries(actualPrams.reserved));

                        var printer = new StarPrinter(settings);
                        printer._information = information;

                        this.onPrinterFound(printer);
                    }
                }, this)
            );
            this._eventSubscriptions.push(
                eventEmitter.addListener('DiscoveryFinished', async (params: any) => {
                    var actualPrams = NativeObject._getEventParams(params);
                    if(this._nativeObject === actualPrams.identifier) {
                        this.onDiscoveryFinished();

                        if(!this._discoveryStarting) {
                            await this._disposeNativeObject();

                            for(let eventSubscription of this._eventSubscriptions) {
                                eventSubscription.remove();
                            }
                            this._eventSubscriptions = [];
                        }

                    }
                }, this)
            );
        }

        await NativeModules.StarDeviceDiscoveryManagerWrapper.startDiscovery(this._nativeObject, this.discoveryTime)
        .catch(async (nativeError: any) => {
            this._discoveryStarting = false;

            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        });

        this._discoveryStarting = false;
    }

    async stopDiscovery(): Promise<void> {
        await this._initNativeObject();

        await NativeModules.StarDeviceDiscoveryManagerWrapper.stopDiscovery(this._nativeObject)
        .catch(async (nativeError: any) => {
            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        });
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.StarDeviceDiscoveryManagerWrapper.init(this._interfaceTypes);
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.StarDeviceDiscoveryManagerWrapper.dispose(nativeObject);
    }
}