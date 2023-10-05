import { NativeModules } from 'react-native';
import { StarSpoolJobStatus } from './StarSpoolJobStatus';
import { StarIO10UnknownError } from './StarIO10UnknownError';
import { StarSpoolJobStatusFactory } from './StarSpoolJobStatusFactory';

export class StarSpoolJobStatusListFactory {
    static async create(nativeStatusList: string): Promise<Array<StarSpoolJobStatus>> {
        var statusList: Array<StarSpoolJobStatus> = new Array();       
        
        try {
            var statusListObject = await NativeModules.StarSpoolJobStatusListWrapper.getJobStatusList(nativeStatusList);
            
            if (Array.isArray(statusListObject)) {
                for (var i = 0; i < statusListObject.length; i++) {
                    statusList.push(StarSpoolJobStatusFactory.createStatus(statusListObject[i]));
                }
            }
            else {
                throw new StarIO10UnknownError("Type mismatch for statusListObject.");
            }
        }
        catch(_) {
            throw new StarIO10UnknownError("Failed to create an array of Status.");
        }
        finally {
            await NativeModules.StarPrinterStatusWrapper.dispose(nativeStatusList);
        }

        return statusList;
    }
}