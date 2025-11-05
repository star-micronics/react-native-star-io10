import { SpoolJobState } from './SpoolJobState';
import { SpoolJobReceivedInterface } from './SpoolJobReceivedInterface';
import { StarSpoolJobSettings } from './StarSpoolJobSettings';
export declare class StarSpoolJobStatus {
    _jobId: number;
    _jobState: SpoolJobState;
    _elapsedTime: number;
    _jobReceivedInterface: SpoolJobReceivedInterface;
    _appInfo: string;
    _hostModel: string;
    _hostOS: string;
    _hostIpAddress: string;
    _jobSettings: StarSpoolJobSettings;
    get jobId(): number;
    get jobState(): SpoolJobState;
    get elapsedTime(): number;
    get jobReceivedInterface(): SpoolJobReceivedInterface;
    get appInfo(): string;
    get hostModel(): string;
    get hostOS(): string;
    get hostIpAddress(): string;
    get jobSettings(): StarSpoolJobSettings;
}
