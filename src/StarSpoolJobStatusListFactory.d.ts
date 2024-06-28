import { StarSpoolJobStatus } from './StarSpoolJobStatus';
export declare class StarSpoolJobStatusListFactory {
    static create(nativeStatusList: string): Promise<Array<StarSpoolJobStatus>>;
}
