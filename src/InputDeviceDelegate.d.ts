import { StarIO10Error } from "./StarIO10Error";
export declare class InputDeviceDelegate {
    _onEventSet: () => void;
    private _onConnected;
    private _onDisconnected;
    private _onDataReceived;
    onCommunicationError: (error: StarIO10Error) => void;
    set onConnected(value: () => void);
    get onConnected(): () => void;
    set onDisconnected(value: () => void);
    get onDisconnected(): () => void;
    set onDataReceived(value: (data: Array<number>) => void);
    get onDataReceived(): (data: Array<number>) => void;
}
