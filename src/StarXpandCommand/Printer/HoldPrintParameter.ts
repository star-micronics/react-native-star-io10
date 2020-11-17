export class HoldPrintParameter {
    private _enable: boolean;

    get enable(): boolean {
        return this._enable;
    }

    constructor(enable: boolean) {
        this._enable = enable;
    }
}