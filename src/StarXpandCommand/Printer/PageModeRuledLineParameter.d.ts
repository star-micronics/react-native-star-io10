import { LineStyle } from "./LineStyle";
export declare class PageModeRuledLineParameter {
    private _xStart;
    private _yStart;
    private _xEnd;
    private _yEnd;
    private _thickness;
    private _lineStyle;
    get xStart(): number;
    get yStart(): number;
    get xEnd(): number;
    get yEnd(): number;
    get thickness(): number;
    get lineStyle(): LineStyle;
    constructor(xStart: number, yStart: number, xEnd: number, yEnd: number);
    setThickness(thickness: number): PageModeRuledLineParameter;
    setLineStyle(lineStyle: LineStyle): PageModeRuledLineParameter;
}
