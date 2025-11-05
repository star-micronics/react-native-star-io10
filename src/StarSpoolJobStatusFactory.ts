import { NativeModules } from 'react-native';
import { StarSpoolJobStatus } from './StarSpoolJobStatus';
import { StarIO10UnknownError } from './StarIO10UnknownError';

export class StarSpoolJobStatusFactory {
    static async create(nativeStatus: string): Promise<StarSpoolJobStatus> {
        var status: StarSpoolJobStatus = new StarSpoolJobStatus();       

        try {
            var statusObject = await NativeModules.StarSpoolJobStatusWrapper.getJobStatus(nativeStatus);

            status = StarSpoolJobStatusFactory.createStatus(statusObject);
        }
        catch(_) {
            throw new StarIO10UnknownError("Failed to create an Status.");
        }
        finally {
            await NativeModules.StarPrinterStatusWrapper.dispose(nativeStatus);
        }

        return status;
    }

    static createStatus(statusObject: any): StarSpoolJobStatus {
        var status: StarSpoolJobStatus = new StarSpoolJobStatus();  

        status._jobId = statusObject.jobId;
        status._jobState = statusObject.jobState;
        status._elapsedTime = statusObject.elapsedTime;
        status._jobReceivedInterface = statusObject.jobReceivedInterface;
        status._appInfo = statusObject.appInfo;
        status._hostModel = statusObject.hostModel;
        status._hostOS = statusObject.hostOS;
        status._hostIpAddress = statusObject.hostIpAddress;
        status._jobSettings._isRetryEnabled = statusObject.jobSettingsIsRetryEnabled;
        status._jobSettings._timeout = statusObject.jobSettingsTimeout;
        status._jobSettings._note = statusObject.jobSettingsNote;

        return status;
    }
}