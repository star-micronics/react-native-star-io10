export declare class ImageParameter {
    private _source;
    private _width;
    private _effectDiffusion;
    private _threshold;
    get source(): string;
    get width(): number;
    get effectDiffusion(): boolean;
    get threshold(): number;
    constructor(source: string, width: number);
    setEffectDiffusion(effectDiffusion: boolean): ImageParameter;
    setThreshold(threshold: number): ImageParameter;
}
