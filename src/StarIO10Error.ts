import { StarIO10ErrorCode } from './StarIO10ErrorCode';

export class StarIO10Error extends Error {
    private _errorCode: number;

    get errorCode(): number {
        return this._errorCode;
    }

    constructor(message: string, errorCode: number = StarIO10ErrorCode.None) {
        super(message);

        this.name = this.typeName;
        this._errorCode = errorCode;
    }

    protected get typeName(): string {
        return "StarIO10Error";
    }
}