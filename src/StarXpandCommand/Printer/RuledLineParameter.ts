import { LineStyle } from "./LineStyle";

export class RuledLineParameter {
    private _width: number;
    private _x: number = 0;
    private _thickness: number = 0.25;
    private _lineStyle: LineStyle = LineStyle.Single;

    get width(): number {
        return this._width;
    }

    get x(): number {
        return this._x;
    }

    get thickness(): number {
        return this._thickness;
    }

    get lineStyle(): LineStyle {
        return this._lineStyle;
    }

    constructor(width: number) {
        this._width = width;
    }

    setX(x: number): RuledLineParameter {
        this._x = x;

        return this;
    }

    setThickness(thickness: number): RuledLineParameter {
        this._thickness = thickness;

        return this;
    }
    
    setLineStyle(lineStyle: LineStyle): RuledLineParameter {
         this._lineStyle = lineStyle;

        return this;
    }
}
