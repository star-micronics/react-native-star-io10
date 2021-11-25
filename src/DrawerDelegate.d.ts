import { StarIO10Error } from "./StarIO10Error";
export declare class DrawerDelegate {
    _onEventSet: () => void;
    private _onOpenCloseSignalSwitched;
    onCommunicationError: (error: StarIO10Error) => void;
    set onOpenCloseSignalSwitched(value: (openCloseSignal: boolean) => void);
    get onOpenCloseSignalSwitched(): (openCloseSignal: boolean) => void;
}
