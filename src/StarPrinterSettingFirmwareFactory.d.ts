import { StarPrinterSettingFirmware } from './StarPrinterSettingFirmware';
export declare class StarPrinterSettingFirmwareFactory {
    static create(nativeFirmware: string, nativeStarPrinter: string | undefined): Promise<StarPrinterSettingFirmware | undefined>;
}
