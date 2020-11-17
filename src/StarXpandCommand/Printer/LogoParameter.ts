export class LogoParameter {
    private _keyCode: string; 

    get keyCode(): string {
        return this._keyCode;
    }

    constructor(keyCode: string) {
        this._keyCode = keyCode;
    }
}