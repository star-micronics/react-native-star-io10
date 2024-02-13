import { StarIO10Error } from "./StarIO10Error";
export declare class DisplayDelegate {
    _onEventSet: () => void;
    private _onConnected;
    private _onDisconnected;
    onCommunicationError: (error: StarIO10Error) => void;
    set onConnected(value: () => void);
    get onConnected(): () => void;
    set onDisconnected(value: () => void);
    get onDisconnected(): () => void;
}
