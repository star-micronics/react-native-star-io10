import { StarSpoolJobStatus } from './StarSpoolJobStatus';
export declare class StarSpoolJobStatusFactory {
    static create(nativeStatus: string): Promise<StarSpoolJobStatus>;
    static createStatus(statusObject: any): StarSpoolJobStatus;
}
