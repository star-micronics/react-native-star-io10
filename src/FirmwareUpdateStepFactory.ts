import { FirmwareUpdateStep} from "./FirmwareUpdateStep"
import { StarIO10UnknownError } from './StarIO10UnknownError';

export class FirmwareUpdateStepFactory {
    static async create(identifier: string): Promise<FirmwareUpdateStep> {
        const lowerIdentifier = identifier.toLowerCase();

        switch (lowerIdentifier) {
            case "downloading":
                return FirmwareUpdateStep.Downloading
            case "transmitting":
                return FirmwareUpdateStep.Transmitting
            default:
                throw new StarIO10UnknownError("Failed to create FirmwareUpdateStep.");
        }
    }
}