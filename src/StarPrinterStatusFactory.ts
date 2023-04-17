import { NativeModules } from 'react-native';
import { StarPrinterStatus } from './StarPrinterStatus';
import { StarIO10UnknownError } from './StarIO10UnknownError';
import { StarPrinterStatusDetail } from './StarPrinterStatusDetail';

export class StarPrinterStatusFactory {
    static async create(nativeStatus: string): Promise<StarPrinterStatus> {
        var status = new StarPrinterStatus();
        var detail = new StarPrinterStatusDetail();

        try {
            status._hasError = await NativeModules.StarPrinterStatusWrapper.getHasError(nativeStatus);
            status._coverOpen = await NativeModules.StarPrinterStatusWrapper.getCoverOpen(nativeStatus);
            status._drawerOpenCloseSignal = await NativeModules.StarPrinterStatusWrapper.getDrawerOpenCloseSignal(nativeStatus);
            status._paperEmpty = await NativeModules.StarPrinterStatusWrapper.getPaperEmpty(nativeStatus);
            status._paperNearEmpty = await NativeModules.StarPrinterStatusWrapper.getPaperNearEmpty(nativeStatus);

            var cutterError = await NativeModules.StarPrinterStatusWrapper.getCutterError(nativeStatus);

            if (typeof cutterError === 'boolean') {
                detail._cutterError = cutterError;
            }

            var paperSeparatorError = await NativeModules.StarPrinterStatusWrapper.getPaperSeparatorError(nativeStatus);

            if (typeof paperSeparatorError === 'boolean') {
                detail._paperSeparatorError = paperSeparatorError;
            }

            var paperJamError = await NativeModules.StarPrinterStatusWrapper.getPaperJamError(nativeStatus);

            if (typeof paperJamError === 'boolean') {
                detail._paperJamError = paperJamError;
            }

            var rollPositionError = await NativeModules.StarPrinterStatusWrapper.getRollPositionError(nativeStatus);

            if (typeof rollPositionError === 'boolean') {
                detail._rollPositionError = rollPositionError;
            }

            var paperPresent = await NativeModules.StarPrinterStatusWrapper.getPaperPresent(nativeStatus);

            if (typeof paperPresent === 'boolean') {
                detail._paperPresent = paperPresent;
            }

            var drawerOpenError = await NativeModules.StarPrinterStatusWrapper.getDrawerOpenError(nativeStatus);

            if (typeof drawerOpenError === 'boolean') {
                detail._drawerOpenError = drawerOpenError;
            }

            var printUnitOpen = await NativeModules.StarPrinterStatusWrapper.getPrintUnitOpen(nativeStatus);

            if (typeof printUnitOpen === 'boolean') {
                detail._printUnitOpen = printUnitOpen;
            }

            var drawer1OpenedMethod = await NativeModules.StarPrinterStatusWrapper.getDrawer1OpenedMethod(nativeStatus);       

            if (typeof drawer1OpenedMethod !== 'undefined' && typeof drawer1OpenedMethod !== 'object' && drawer1OpenedMethod != '') {
                detail._drawer1OpenedMethod = drawer1OpenedMethod;
            }

            var drawer1OpenCloseSignal = await NativeModules.StarPrinterStatusWrapper.getDrawer1OpenCloseSignal(nativeStatus);       

            if (typeof drawer1OpenCloseSignal === 'boolean') {
                detail._drawer1OpenCloseSignal = drawer1OpenCloseSignal;
            }

            var drawer2OpenedMethod = await NativeModules.StarPrinterStatusWrapper.getDrawer2OpenedMethod(nativeStatus);       

            if (typeof drawer2OpenedMethod !== 'undefined' && typeof drawer2OpenedMethod !== 'object' && drawer2OpenedMethod != '') {
                detail._drawer2OpenedMethod = drawer2OpenedMethod;
            }

            var drawer2OpenCloseSignal = await NativeModules.StarPrinterStatusWrapper.getDrawer2OpenCloseSignal(nativeStatus);       

            if (typeof drawer2OpenCloseSignal === 'boolean') {
                detail._drawer2OpenCloseSignal = drawer2OpenCloseSignal;
            }

            var externalDevice1Connected = await NativeModules.StarPrinterStatusWrapper.getExternalDevice1Connected(nativeStatus);       

            if (typeof externalDevice1Connected === 'boolean') {
                detail._externalDevice1Connected = externalDevice1Connected;
            }

            var externalDevice2Connected = await NativeModules.StarPrinterStatusWrapper.getExternalDevice2Connected(nativeStatus);       

            if (typeof externalDevice2Connected === 'boolean') {
                detail._externalDevice2Connected = externalDevice2Connected;
            }

            var partsReplacementNotification = await NativeModules.StarPrinterStatusWrapper.getPartsReplacementNotification(nativeStatus);       

            if (typeof partsReplacementNotification === 'boolean') {
                detail._partsReplacementNotification = partsReplacementNotification;
            }
     
            var cleaningNotification = await NativeModules.StarPrinterStatusWrapper.getCleaningNotification(nativeStatus);

            if (typeof cleaningNotification === 'boolean') {
                detail._cleaningNotification = cleaningNotification;
            }

            var detectedPaperWidth = await NativeModules.StarPrinterStatusWrapper.getDetectedPaperWidth(nativeStatus);

            if (typeof detectedPaperWidth === 'number') {
                detail._detectedPaperWidth = detectedPaperWidth;
            }

            status._detail = detail;

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