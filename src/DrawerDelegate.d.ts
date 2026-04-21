import { StarIO10Error } from "./StarIO10Error";
import { StarPrinterStatusDetail } from "./StarPrinterStatusDetail";
export declare class DrawerDelegate {
    _onEventSet: () => void;
    private _onOpenCloseSignalSwitched;
    private _onStatusChanged;
    onCommunicationError: (error: StarIO10Error) => void;
    set onOpenCloseSignalSwitched(value: (openCloseSignal: boolean) => void);
    get onOpenCloseSignalSwitched(): (openCloseSignal: boolean) => void;
    set onStatusChanged(value: (status: StarPrinterStatusDetail) => void);
    get onStatusChanged(): (status: StarPrinterStatusDetail) => void;
}
