import { DrawerOpenedMethod } from './DrawerOpenedMethod';

export class StarPrinterStatusDetail {
    _cutterError: boolean | undefined = undefined;
    _paperSeparatorError: boolean | undefined = undefined;
    _paperJamError: boolean | undefined = undefined;
    _rollPositionError: boolean | undefined = undefined;
    _paperPresent: boolean | undefined = undefined;
    _drawerOpenError: boolean | undefined = undefined;
    _printUnitOpen: boolean | undefined = undefined;
    _drawer1OpenedMethod: DrawerOpenedMethod | undefined = undefined;
    _drawer1OpenCloseSignal: boolean | undefined = undefined;
    _drawer2OpenedMethod: DrawerOpenedMethod | undefined = undefined;
    _drawer2OpenCloseSignal: boolean | undefined = undefined;
    _externalDevice1Connected: boolean | undefined = undefined;
    _externalDevice2Connected: boolean | undefined = undefined;
    _partsReplacementNotification: boolean | undefined = undefined;
    _cleaningNotification: boolean | undefined = undefined;
    _detectedPaperWidth: number | undefined = undefined;

    get cutterError(): boolean | undefined {
        return this._cutterError;
    }
    
    get paperSeparatorError(): boolean | undefined {
        return this._paperSeparatorError;
    }
    
    get paperJamError(): boolean | undefined {
        return this._paperJamError;
    }
    
    get rollPositionError(): boolean | undefined {
        return this._rollPositionError;
    }
    
    get paperPresent(): boolean | undefined {
        return this._paperPresent;
    }
    
    get drawerOpenError(): boolean | undefined {
        return this._drawerOpenError;
    }
    
    get printUnitOpen(): boolean | undefined {
        return this._printUnitOpen;
    }

    get drawer1OpenedMethod(): DrawerOpenedMethod | undefined {
        return this._drawer1OpenedMethod;
    }

    get drawer1OpenCloseSignal(): boolean | undefined {
        return this._drawer1OpenCloseSignal;
    }
    
    get drawer2OpenedMethod(): DrawerOpenedMethod | undefined {
        return this._drawer2OpenedMethod;
    }

    get drawer2OpenCloseSignal(): boolean | undefined {
        return this._drawer2OpenCloseSignal;
    }

    get externalDevice1Connected(): boolean | undefined {
        return this._externalDevice1Connected;
    }

    get externalDevice2Connected(): boolean | undefined {
        return this._externalDevice2Connected;
    }
    
    get partsReplacementNotification(): boolean | undefined {
        return this._partsReplacementNotification;
    }
    
    get cleaningNotification(): boolean | undefined {
        return this._cleaningNotification;
    }
    
    get detectedPaperWidth(): number | undefined {
        return this._detectedPaperWidth;
    }
}