import { StarIO10Error } from "./StarIO10Error";

export class PrinterDelegate {
    _onEventSet: () => void = () => {};

    private _onReady: () => void = () => {};
    private _onError: () => void = () => {};
    private _onPaperReady: () => void = () => {};
    private _onPaperNearEmpty: () => void = () => {};
    private _onPaperEmpty: () => void = () => {};
    private _onCoverOpened: () => void = () => {};
    private _onCoverClosed: () => void = () => {};

    onCommunicationError: (error: StarIO10Error) => void = () => {};

    set onReady(value: () => void) {
        this._onReady = value;

        this._onEventSet();
    }

    get onReady(): () => void {
        return this._onReady;
    }

    set onError(value: () => void) {
        this._onError = value;

        this._onEventSet();
    }

    get onError(): () => void {
        return this._onError;
    }

    set onPaperReady(value: () => void) {
        this._onPaperReady = value;

        this._onEventSet();
    }

    get onPaperReady(): () => void {
        return this._onPaperReady;
    }

    set onPaperNearEmpty(value: () => void) {
        this._onPaperNearEmpty = value;

        this._onEventSet();
    }

    get onPaperNearEmpty(): () => void {
        return this._onPaperNearEmpty;
    }

    set onPaperEmpty(value: () => void) {
        this._onPaperEmpty = value;

        this._onEventSet();
    }

    get onPaperEmpty(): () => void {
        return this._onPaperEmpty;
    }

    set onCoverOpened(value: () => void) {
        this._onCoverOpened = value;

        this._onEventSet();
    }

    get onCoverOpened(): () => void {
        return this._onCoverOpened;
    }

    set onCoverClosed(value: () => void) {
        this._onCoverClosed = value;

        this._onEventSet();
    }

    get onCoverClosed(): () => void {
        return this._onCoverClosed;
    }
}