import {
    NativeModules,
    NativeEventEmitter,
    EventSubscription
} from 'react-native';

import { NativeObject } from './NativeObject';
import { StarPrinterSettingFirmware } from './StarPrinterSettingFirmware';

export class StarPrinterSetting extends NativeObject {

    _printerIdentifier: string | undefined = undefined;
    _firmware: StarPrinterSettingFirmware | undefined = undefined;

    get firmware(): StarPrinterSettingFirmware | undefined {
        return this._firmware;
    }

    async dispose(): Promise<void> {
        await this._initNativeObject();

        await this._firmware?.dispose();
        this._firmware = undefined;

        await this._disposeNativeObject();
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.StarPrinterSettingWrapper.init(this._printerIdentifier);
    }
    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.StarPrinterSettingWrapper.dispose(nativeObject);
    } 
}