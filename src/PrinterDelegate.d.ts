import { StarIO10Error } from "./StarIO10Error";
export declare class PrinterDelegate {
    _onEventSet: () => void;
    private _onReady;
    private _onError;
    private _onPaperReady;
    private _onPaperNearEmpty;
    private _onPaperEmpty;
    private _onCoverOpened;
    private _onCoverClosed;
    onCommunicationError: (error: StarIO10Error) => void;
    set onReady(value: () => void);
    get onReady(): () => void;
    set onError(value: () => void);
    get onError(): () => void;
    set onPaperReady(value: () => void);
    get onPaperReady(): () => void;
    set onPaperNearEmpty(value: () => void);
    get onPaperNearEmpty(): () => void;
    set onPaperEmpty(value: () => void);
    get onPaperEmpty(): () => void;
    set onCoverOpened(value: () => void);
    get onCoverOpened(): () => void;
    set onCoverClosed(value: () => void);
    get onCoverClosed(): () => void;
}
