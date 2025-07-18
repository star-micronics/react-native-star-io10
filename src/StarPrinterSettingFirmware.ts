import {
    NativeModules,
    NativeEventEmitter,
    EventSubscription
} from 'react-native';

import { NativeObject } from './NativeObject';
import { StarIO10ErrorFactory } from './StarIO10ErrorFactory';
import { FirmwareUpdateDelegate} from './FirmwareUpdateDelegate'
import { FirmwareUpdateStepFactory } from './FirmwareUpdateStepFactory';

const eventEmitter = new NativeEventEmitter(NativeModules.StarPrinterSettingFirmwareWrapper);

export class StarPrinterSettingFirmware extends NativeObject {
    private _eventSubscriptions: Array<EventSubscription> = [];
    private _updateDelegate: FirmwareUpdateDelegate  = new FirmwareUpdateDelegate();
    
    _printerIdentifier: string | undefined = undefined;

    _currentVersion: string = "";
    _latestVersion: string | undefined = undefined;
    _isUpdatable: boolean = false;

    get currentVersion(): string {
        return this._currentVersion;
    }

    get latestVersion(): string | undefined {
        return this._latestVersion;
    }

    get isUpdatable(): boolean {
        return this._isUpdatable;
    }

    get updateDelegate(): FirmwareUpdateDelegate {
        return this._updateDelegate;
    }

    constructor() {
        super();

        this.updateDelegate._onEventSet = async () => {
            this.updateDelegate._onEventSet = () => {};

            await this._initNativeObject();

            await NativeModules.StarPrinterSettingFirmwareWrapper.activateFirmwareUpdateDelegate(this._nativeObject);
        };

        this._eventSubscriptions.push(
            eventEmitter.addListener('FirmwareUpdateProgress', async (params: any) => {
                var actualPrams = NativeObject._getEventParams(params);
                if(this._nativeObject === actualPrams.identifier) {
                    var step = await FirmwareUpdateStepFactory.create(actualPrams.firmwareUpdateStep);
                    this.updateDelegate.onFirmwareUpdateProgress(step);
                }
            }, this)
        );
        this._eventSubscriptions.push(
            eventEmitter.addListener('FirmwareUpdateTransmitComplete', (params: any) => {
                var actualPrams = NativeObject._getEventParams(params);
                if(this._nativeObject === actualPrams.identifier) {
                    this.updateDelegate.onFirmwareUpdateTransmitComplete();
                }
            }, this)
        );
        this._eventSubscriptions.push(
            eventEmitter.addListener('FirmwareUpdateError', async (params: any) => {
                var actualPrams = NativeObject._getEventParams(params);
                if(this._nativeObject === actualPrams.identifier) {
                    var error = await StarIO10ErrorFactory.create(actualPrams.errorIdentifier);
                    this.updateDelegate.onFirmwareUpdateError(error);
                }
            }, this)
        );
    }

    async getCurrentVersion(): Promise<string> {
        await this._initNativeObject();

        this._currentVersion = await NativeModules.StarPrinterSettingFirmwareWrapper.getCurrentVersion(this._nativeObject)
        .catch(async (nativeError: any) => {
            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        }); 

        return this._currentVersion;
    }

    async checkVersions(): Promise<void> {
        await this._initNativeObject();

        await NativeModules.StarPrinterSettingFirmwareWrapper.checkVersions(this._nativeObject)
        .catch(async (nativeError: any) => {
            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        });

        this._currentVersion = await NativeModules.StarPrinterSettingFirmwareWrapper.getCurrentVersionProp(this._nativeObject)
        .catch(async (nativeError: any) => {
            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        }); 

        this._latestVersion = await NativeModules.StarPrinterSettingFirmwareWrapper.getLatestVersionProp(this._nativeObject)
        .catch(async (nativeError: any) => {
            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        }); 
    }

    async update(): Promise<void> {
        await this._initNativeObject();

        await NativeModules.StarPrinterSettingFirmwareWrapper.update(this._nativeObject)
        .catch(async (nativeError: any) => {
            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        });
    }

    async dispose(): Promise<void> {
        await this._initNativeObject();

        await this._disposeNativeObject();

        for(let eventSubscription of this._eventSubscriptions) {
            eventSubscription.remove();
        }
        this._eventSubscriptions = [];
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.StarPrinterSettingFirmwareWrapper.init(this._printerIdentifier);
    }
    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.StarPrinterSettingFirmwareWrapper.dispose(nativeObject);
    } 
    
}