export declare class PageModeAreaParameter {
    private _width;
    private _height;
    private _x;
    private _y;
    get width(): number;
    get height(): number;
    get x(): number;
    get y(): number;
    constructor(width: number, height: number);
    setX(x: number): PageModeAreaParameter;
    setY(y: number): PageModeAreaParameter;
}
