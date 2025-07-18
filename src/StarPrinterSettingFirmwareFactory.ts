import { NativeModules } from 'react-native';
import { StarIO10ErrorFactory } from './StarIO10ErrorFactory';
import { StarIO10UnknownError } from './StarIO10UnknownError';
import { StarPrinterSettingFirmware } from './StarPrinterSettingFirmware';

export class StarPrinterSettingFirmwareFactory {
    static async create(nativeFirmware: string, nativeStarPrinter: string | undefined): Promise<StarPrinterSettingFirmware | undefined> {

        if (nativeFirmware == null || nativeFirmware === undefined) {
            return undefined;
        }
            
        var firmware = new StarPrinterSettingFirmware();
        
        try {
            firmware._printerIdentifier = nativeStarPrinter;
        }
        catch(_) {
            throw new StarIO10UnknownError("Failed to create StarPrinterSettingFirmware.");
        }
        finally {
            await NativeModules.StarPrinterSettingFirmwareWrapper.dispose(nativeFirmware);
        }

        return firmware
    }
}