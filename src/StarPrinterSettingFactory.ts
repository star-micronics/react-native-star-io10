import { NativeModules } from 'react-native';
import { StarIO10ErrorFactory } from './StarIO10ErrorFactory';
import { StarIO10UnknownError } from './StarIO10UnknownError';
import { StarPrinterSetting } from './StarPrinterSetting';
import { StarPrinterSettingFirmwareFactory } from './StarPrinterSettingFirmwareFactory';

export class StarPrinterSettingFactory {
    static async create(nativeSetting: string, nativeStarPrinter: string | undefined): Promise<StarPrinterSetting | undefined> {

        if (nativeSetting == null || nativeSetting === undefined) {
            return undefined;
        }
            
        var setting = new StarPrinterSetting();
        
        try {
            var nativeFirmware = await NativeModules.StarPrinterSettingFirmwareWrapper.init(nativeStarPrinter)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
                            
            setting._firmware = await StarPrinterSettingFirmwareFactory.create(nativeFirmware, nativeStarPrinter);

            if (setting._firmware != null && setting._firmware !== undefined) {
                setting._firmware._isUpdatable = await NativeModules.StarPrinterSettingFirmwareWrapper.getIsUpdatableProp(nativeStarPrinter)
                .catch(async (nativeError: any) => {
                    var error = await StarIO10ErrorFactory.create(nativeError.code);
                    throw error;
                }); 
            }

            setting._printerIdentifier = nativeStarPrinter;
        }
        catch(_) {
            throw new StarIO10UnknownError("Failed to create StarPrinterSetting.");
        }
        finally {
            await NativeModules.StarPrinterSettingWrapper.dispose(nativeSetting);
        }

        return setting
    }
}