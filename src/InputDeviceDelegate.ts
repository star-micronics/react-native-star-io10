import { StarIO10Error } from "./StarIO10Error";

export class InputDeviceDelegate {
    _onEventSet: () => void = () => {};

    private _onConnected: () => void = () => {};
    private _onDisconnected: () => void = () => {};
    private _onDataReceived: (data: Array<number>) => void = () => {};

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

    set onDataReceived(value: (data: Array<number>) => void) {
        this._onDataReceived = value;

        this._onEventSet();
    }

    get onDataReceived(): (data: Array<number>) => void {
        return this._onDataReceived;
    }
}