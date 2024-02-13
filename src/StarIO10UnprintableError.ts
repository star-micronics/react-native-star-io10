import { StarIO10Error } from './StarIO10Error';
import { StarPrinterStatus } from './StarPrinterStatus';

export class StarIO10UnprintableError extends StarIO10Error {
    private _status: StarPrinterStatus | undefined;

    get status(): StarPrinterStatus | undefined {
        return this._status;
    }

    constructor(message: string, errorCode: number, status: StarPrinterStatus | undefined) {
        super(message, errorCode);

        this._status = status;
    }
}