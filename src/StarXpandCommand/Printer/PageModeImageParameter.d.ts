export declare class PageModeImageParameter {
    private _source;
    private _x;
    private _y;
    private _width;
    private _effectDiffusion;
    private _threshold;
    get source(): string;
    get x(): number;
    get y(): number;
    get width(): number;
    get effectDiffusion(): boolean;
    get threshold(): number;
    constructor(source: string, x: number, y: number, width: number);
    setEffectDiffusion(effectDiffusion: boolean): PageModeImageParameter;
    setThreshold(threshold: number): PageModeImageParameter;
}
