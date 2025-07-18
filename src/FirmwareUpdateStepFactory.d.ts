import { FirmwareUpdateStep } from "./FirmwareUpdateStep";
export declare class FirmwareUpdateStepFactory {
    static create(identifier: string): Promise<FirmwareUpdateStep>;
}
