import { NativeModules } from 'react-native';
import { StarIO10ArgumentError } from './StarIO10ArgumentError';
import { StarIO10BadResponseError } from './StarIO10BadResponseError';
import { StarIO10CommunicationError } from './StarIO10CommunicationError';
import { StarIO10IllegalDeviceStateError } from './StarIO10IllegalDeviceStateError';
import { StarIO10InUseError } from './StarIO10InUseError';
import { StarIO10InvalidOperationError } from './StarIO10InvalidOperationError';
import { StarIO10NotFoundError } from './StarIO10NotFoundError';
import { StarIO10UnknownError } from './StarIO10UnknownError';
import { StarIO10UnprintableError } from './StarIO10UnprintableError';
import { StarPrinterStatusFactory } from './StarPrinterStatusFactory';
import { StarIO10Error } from './StarIO10Error';
import { StarPrinterStatus } from './StarPrinterStatus';

export class StarIO10ErrorFactory {
    static async create(identifier: String): Promise<StarIO10Error> {
        var error;

        try {
            var type = await NativeModules.StarIO10ErrorWrapper.getType(identifier);
            var message = await NativeModules.StarIO10ErrorWrapper.getMessage(identifier);
            var errorCode = await NativeModules.StarIO10ErrorWrapper.getErrorCode(identifier);
            error = await StarIO10ErrorFactory._buildObject(identifier, type, message, errorCode);
        }
        catch(_) {
            error = new StarIO10UnknownError("Failed to create Error.");
        }
        finally {
            await NativeModules.StarIO10ErrorWrapper.dispose(identifier);
        }

        return error;
    }

    private static async _buildObject(identifier: String, type: string, message: string, errorCode: number): Promise<StarIO10Error> {
        var error;

        switch (type) {
            case 'Argument':
                error = new StarIO10ArgumentError(message, errorCode);
                break;
            case 'BadResponse':
                error = new StarIO10BadResponseError(message, errorCode);
                break;
            case 'Communication':
                error = new StarIO10CommunicationError(message, errorCode);
                break;
            case 'IllegalDeviceState':
                error = new StarIO10IllegalDeviceStateError(message, errorCode);
                break;
            case 'InUse':
                error = new StarIO10InUseError(message, errorCode);
                break;
            case 'InvalidOperation':
                error = new StarIO10InvalidOperationError(message, errorCode);
                break;
            case 'NotFound':
                error = new StarIO10NotFoundError(message, errorCode);
                break;
            case 'Unknown':
                error = new StarIO10UnknownError(message, errorCode);
                break;
            case 'Unprintable':
                var status: StarPrinterStatus | undefined;

                try {
                    var nativeStatus = await NativeModules.StarIO10ErrorWrapper.getStatus(identifier);
                    status = await StarPrinterStatusFactory.create(nativeStatus);
                }
                catch(_) {
                    status = undefined;
                }

                error = new StarIO10UnprintableError(message, errorCode, status);
                break;
            default:
                error = new StarIO10UnknownError("Failed to create Error.");
                break;
        }

        return error;
    }
}