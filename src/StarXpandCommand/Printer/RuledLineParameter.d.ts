import { LineStyle } from "./LineStyle";
export declare class RuledLineParameter {
    private _width;
    private _x;
    private _thickness;
    private _lineStyle;
    get width(): number;
    get x(): number;
    get thickness(): number;
    get lineStyle(): LineStyle;
    constructor(width: number);
    setX(x: number): RuledLineParameter;
    setThickness(thickness: number): RuledLineParameter;
    setLineStyle(lineStyle: LineStyle): RuledLineParameter;
}
