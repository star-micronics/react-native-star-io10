export class LabelParameter {
    private _start: boolean = true;
    private _end: boolean = true;

    get start(): boolean {
        return this._start;
    }

    get end(): boolean {
        return this._end;
    }

    setStart(start: boolean): LabelParameter {
        this._start = start;

        return this;
    }

    setEnd(end: boolean): LabelParameter {
        this._end = end;

        return this;
    }
}