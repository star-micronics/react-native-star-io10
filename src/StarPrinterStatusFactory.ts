import { NativeModules } from 'react-native';
import { StarPrinterStatus } from './StarPrinterStatus';
import { StarIO10UnknownError } from './StarIO10UnknownError';

export class StarPrinterStatusFactory {
    static async create(nativeStatus: string): Promise<StarPrinterStatus> {
        var status = new StarPrinterStatus();

        try {
            status._hasError = await NativeModules.StarPrinterStatusWrapper.getHasError(nativeStatus);
            status._coverOpen = await NativeModules.StarPrinterStatusWrapper.getCoverOpen(nativeStatus);
            status._drawerOpenCloseSignal = await NativeModules.StarPrinterStatusWrapper.getDrawerOpenCloseSignal(nativeStatus);
            status._paperEmpty = await NativeModules.StarPrinterStatusWrapper.getPaperEmpty(nativeStatus);
            status._paperNearEmpty = await NativeModules.StarPrinterStatusWrapper.getPaperNearEmpty(nativeStatus);
            status._reserved = new Map(Object.entries(await NativeModules.StarPrinterStatusWrapper.getReserved(nativeStatus)));
        }
        catch(_) {
            throw new StarIO10UnknownError("Failed to create Status.");
        }
        finally {
            await NativeModules.StarPrinterStatusWrapper.dispose(nativeStatus);
        }

        return status;
    }
}