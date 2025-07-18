import { NativeObject } from './NativeObject';
import { StarPrinterSettingFirmware } from './StarPrinterSettingFirmware';
export declare class StarPrinterSetting extends NativeObject {
    _printerIdentifier: string | undefined;
    _firmware: StarPrinterSettingFirmware | undefined;
    get firmware(): StarPrinterSettingFirmware | undefined;
    dispose(): Promise<void>;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
