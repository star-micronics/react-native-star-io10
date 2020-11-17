import { StarIO10ErrorCode } from './StarIO10ErrorCode';

export class StarIO10Error extends Error {
    private _errorCode: number;

    get errorCode(): number {
        return this._errorCode;
    }

    constructor(message: string, errorCode: number = StarIO10ErrorCode.None) {
        super(message);

        this.name = this.constructor.name;
        this._errorCode = errorCode;
    }
}