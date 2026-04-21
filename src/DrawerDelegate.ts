import { StarIO10Error } from "./StarIO10Error";
import { StarPrinterStatusDetail } from "./StarPrinterStatusDetail";

export class DrawerDelegate {
    _onEventSet: () => void = () => {};

    private _onOpenCloseSignalSwitched: (openCloseSignal: boolean) => void = () => {};

    private _onStatusChanged: (status: StarPrinterStatusDetail) => void = () => {};

    onCommunicationError: (error: StarIO10Error) => void = () => {};
    
    set onOpenCloseSignalSwitched(value: (openCloseSignal: boolean) => void) {
        this._onOpenCloseSignalSwitched = value;

        this._onEventSet();
    }

    get onOpenCloseSignalSwitched(): (openCloseSignal: boolean) => void {
        return this._onOpenCloseSignalSwitched;
    }

    set onStatusChanged(value: (status: StarPrinterStatusDetail) => void) {
        this._onStatusChanged = value;
        this._onEventSet();
    }

    get onStatusChanged(): (status: StarPrinterStatusDetail) => void {
        return this._onStatusChanged;
    }
}