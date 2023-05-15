import { LineStyle } from "./LineStyle";
export declare class PageModeRectangleParameter {
    private _x;
    private _y;
    private _width;
    private _height;
    private _thickness;
    private _roundCorner;
    private _cornerRadius;
    private _lineStyle;
    get x(): number;
    get y(): number;
    get width(): number;
    get height(): number;
    get thickness(): number;
    get roundCorner(): boolean;
    get cornerRadius(): number;
    get lineStyle(): LineStyle;
    constructor(x: number, y: number, width: number, height: number);
    setThickness(thickness: number): PageModeRectangleParameter;
    setRoundCorner(roundCorner: boolean): PageModeRectangleParameter;
    setCornerRadius(cornerRadius: number): PageModeRectangleParameter;
    setLineStyle(lineStyle: LineStyle): PageModeRectangleParameter;
}
