import { StarIO10Error } from "./StarIO10Error";

export class DisplayDelegate {
    _onEventSet: () => void = () => {};

    private _onConnected: () => void = () => {};
    private _onDisconnected: () => void = () => {};

    onCommunicationError: (error: StarIO10Error) => void = () => {};

    set onConnected(value: () => void) {
        this._onConnected = value;

        this._onEventSet();
    }

    get onConnected(): () => void {
        return this._onConnected;
    }

    set onDisconnected(value: () => void) {
        this._onDisconnected = value;

        this._onEventSet();
    }

    get onDisconnected(): () => void {
        return this._onDisconnected;
    }
}