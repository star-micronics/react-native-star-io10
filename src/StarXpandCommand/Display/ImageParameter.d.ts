export declare class ImageParameter {
    private _source;
    private _effectDiffusion;
    private _threshold;
    get source(): string;
    get effectDiffusion(): boolean;
    get threshold(): number;
    constructor(source: string);
    setEffectDiffusion(effectDiffusion: boolean): ImageParameter;
    setThreshold(threshold: number): ImageParameter;
}
