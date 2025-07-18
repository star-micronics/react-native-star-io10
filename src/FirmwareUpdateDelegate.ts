import { StarIO10Error } from "./StarIO10Error";
import { FirmwareUpdateStep} from "./FirmwareUpdateStep"

export class FirmwareUpdateDelegate {
    _onEventSet: () => void = () => {};

    private _onFirmwareUpdateProgress: (step: FirmwareUpdateStep) => void = () => {};
    private _onFirmwareUpdateTransmitComplete: () => void = () => {};
    private _onFirmwareUpdateError: (error: StarIO10Error) => void = () => {};

    set onFirmwareUpdateProgress(value: (step: FirmwareUpdateStep) => void) {
        this._onFirmwareUpdateProgress = value;

        this._onEventSet();
    }

    get onFirmwareUpdateProgress(): (step: FirmwareUpdateStep) => void {
        return this._onFirmwareUpdateProgress;
    }

    set onFirmwareUpdateTransmitComplete(value: () => void) {
        this._onFirmwareUpdateTransmitComplete = value;

        this._onEventSet();
    }

    get onFirmwareUpdateTransmitComplete(): () => void {
        return this._onFirmwareUpdateTransmitComplete;
    }

    set onFirmwareUpdateError(value: (error: StarIO10Error) => void) {
        this._onFirmwareUpdateError = value;

        this._onEventSet();
    }

    get onFirmwareUpdateError(): (error: StarIO10Error) => void {
        return this._onFirmwareUpdateError;
    }
}