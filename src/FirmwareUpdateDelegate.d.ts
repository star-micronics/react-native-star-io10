import { StarIO10Error } from "./StarIO10Error";
import { FirmwareUpdateStep } from "./FirmwareUpdateStep";
export declare class FirmwareUpdateDelegate {
    _onEventSet: () => void;
    private _onFirmwareUpdateProgress;
    private _onFirmwareUpdateTransmitComplete;
    private _onFirmwareUpdateError;
    set onFirmwareUpdateProgress(value: (step: FirmwareUpdateStep) => void);
    get onFirmwareUpdateProgress(): (step: FirmwareUpdateStep) => void;
    set onFirmwareUpdateTransmitComplete(value: () => void);
    get onFirmwareUpdateTransmitComplete(): () => void;
    set onFirmwareUpdateError(value: (error: StarIO10Error) => void);
    get onFirmwareUpdateError(): (error: StarIO10Error) => void;
}
