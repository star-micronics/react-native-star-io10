import { StarIO10Error } from './StarIO10Error';
import { StarPrinterStatus } from './StarPrinterStatus';
export declare class StarIO10UnprintableError extends StarIO10Error {
    private _status;
    get status(): StarPrinterStatus | undefined;
    constructor(message: string, errorCode: number, status: StarPrinterStatus | undefined);
}
