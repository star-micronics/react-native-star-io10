export class ImageParameter {
    private _source: string;
    private _effectDiffusion: boolean = false;
    private _threshold: number = 127;

    get source(): string {
        return this._source;
    }

    get effectDiffusion(): boolean {
        return this._effectDiffusion;
    }

    get threshold(): number {
        return this._threshold;
    }

    constructor(source: string) {
        this._source = source;
    }

    setEffectDiffusion(effectDiffusion: boolean): ImageParameter {
        this._effectDiffusion = effectDiffusion;

        return this;
    }

    setThreshold(threshold: number): ImageParameter {
        this._threshold = threshold;

        return this;
    }
}