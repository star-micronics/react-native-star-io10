import { LineStyle } from "./LineStyle";

export class PageModeRuledLineParameter {
    private _xStart: number;
    private _yStart: number;
    private _xEnd: number;
    private _yEnd: number;
    private _thickness: number = 0.25;
    private _lineStyle: LineStyle = LineStyle.Single;

    get xStart(): number {
        return this._xStart;
    }

    get yStart(): number {
        return this._yStart;
    }

    get xEnd(): number {
        return this._xEnd;
    }

    get yEnd(): number {
        return this._yEnd;
    }

    get thickness(): number {
        return this._thickness;
    }

    get lineStyle(): LineStyle {
        return this._lineStyle;
    }

    constructor(xStart: number, yStart: number, xEnd: number, yEnd: number) {
        this._xStart = xStart;
        this._yStart = yStart;
        this._xEnd = xEnd;
        this._yEnd = yEnd;
    }

    setThickness(thickness: number): PageModeRuledLineParameter {
        this._thickness = thickness

        return this
    }
    
    setLineStyle(lineStyle: LineStyle): PageModeRuledLineParameter {
         this._lineStyle = lineStyle

        return this
    }
}
