export class PageModeImageParameter {
    private _source: string;
    private _x: number;
    private _y: number;
    private _width: number;
    private _effectDiffusion: boolean = false;
    private _threshold: number = 127;

    get source(): string {
        return this._source;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get width(): number {
        return this._width;
    }

    get effectDiffusion(): boolean {
        return this._effectDiffusion;
    }

    get threshold(): number {
        return this._threshold;
    }

    constructor(source: string, x: number, y: number, width: number) {
        this._source = source;
        this._x = x;
        this._y = y;
        this._width = width;
    }

    setEffectDiffusion(effectDiffusion: boolean): PageModeImageParameter {
        this._effectDiffusion = effectDiffusion;

        return this;
    }

    setThreshold(threshold: number): PageModeImageParameter {
        this._threshold = threshold;

        return this;
    }
}
