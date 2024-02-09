export declare class StarIO10Error extends Error {
    private _errorCode;
    get errorCode(): number;
    constructor(message: string, errorCode?: number);
}
