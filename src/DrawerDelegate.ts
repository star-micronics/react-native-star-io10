import { StarIO10Error } from "./StarIO10Error";

export class DrawerDelegate {
    _onEventSet: () => void = () => {};

    private _onOpenCloseSignalSwitched: (openCloseSignal: boolean) => void = () => {};

    onCommunicationError: (error: StarIO10Error) => void = () => {};
    
    set onOpenCloseSignalSwitched(value: (openCloseSignal: boolean) => void) {
        this._onOpenCloseSignalSwitched = value;

        this._onEventSet();
    }

    get onOpenCloseSignalSwitched(): (openCloseSignal: boolean) => void {
        return this._onOpenCloseSignalSwitched;
    }
}