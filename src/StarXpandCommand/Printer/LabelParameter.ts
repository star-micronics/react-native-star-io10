export class LabelParameter {
    private _enable: boolean = true;

    get enable(): boolean {
        return this._enable;
    }

    setEnable(enable: boolean): LabelParameter {
        this._enable = enable;

        return this;
    }
}