import { SpoolJobState } from './SpoolJobState';
import { SpoolJobReceivedInterface } from './SpoolJobReceivedInterface';
import { StarSpoolJobSettings } from './StarSpoolJobSettings';

export class StarSpoolJobStatus {
    _jobId: number = 0;
    
    _jobState: SpoolJobState = SpoolJobState.Unknown;
    
    _elapsedTime: number = 0;
    
    _jobReceivedInterface: SpoolJobReceivedInterface = SpoolJobReceivedInterface.Unknown;
    
    _appInfo: string = "";
    
    _hostModel: string = "";
    
    _hostOS: string = "";
    
    _hostIpAddress: string = "";
    
    _jobSettings: StarSpoolJobSettings = new StarSpoolJobSettings(false, 0, "");
    
    get jobId(): number {
        return this._jobId;
    }
    
    get jobState(): SpoolJobState {
        return this._jobState;
    }
    
    get elapsedTime(): number {
        return this._elapsedTime;
    }
    
    get jobReceivedInterface(): SpoolJobReceivedInterface {
        return this._jobReceivedInterface;
    }
    
    get appInfo(): string {
        return this._appInfo;
    }
    
    get hostModel(): string {
        return this._hostModel;
    }
    
    get hostOS(): string {
        return this._hostOS;
    }
    
    get hostIpAddress(): string {
        return this._hostIpAddress;
    }
    
    get jobSettings(): StarSpoolJobSettings {
        return this._jobSettings;
    }
}
