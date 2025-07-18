import { NativeObject } from './NativeObject';
import { FirmwareUpdateDelegate } from './FirmwareUpdateDelegate';
export declare class StarPrinterSettingFirmware extends NativeObject {
    private _eventSubscriptions;
    private _updateDelegate;
    _printerIdentifier: string | undefined;
    _currentVersion: string;
    _latestVersion: string | undefined;
    _isUpdatable: boolean;
    get currentVersion(): string;
    get latestVersion(): string | undefined;
    get isUpdatable(): boolean;
    get updateDelegate(): FirmwareUpdateDelegate;
    constructor();
    getCurrentVersion(): Promise<string>;
    checkVersions(): Promise<void>;
    update(): Promise<void>;
    dispose(): Promise<void>;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
