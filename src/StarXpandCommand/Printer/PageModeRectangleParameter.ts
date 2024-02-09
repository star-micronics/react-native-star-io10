import { LineStyle } from "./LineStyle";

export class PageModeRectangleParameter {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private _thickness: number = 0.25;
    private _roundCorner: boolean = false;
    private _cornerRadius: number = 0.0;
    private _lineStyle: LineStyle = LineStyle.Single;

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get thickness(): number {
        return this._thickness;
    }

    get roundCorner(): boolean {
        return this._roundCorner;
    }

    get cornerRadius(): number {
        return this._cornerRadius;
    }

    get lineStyle(): LineStyle {
        return this._lineStyle;
    }

    constructor(x: number, y: number, width: number, height: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    setThickness(thickness: number): PageModeRectangleParameter {
        this._thickness = thickness

        return this
    }

    setRoundCorner(roundCorner: boolean): PageModeRectangleParameter {
        this._roundCorner = roundCorner

        return this
    }

    setCornerRadius(cornerRadius: number): PageModeRectangleParameter {
        this._cornerRadius = cornerRadius

        return this
    }
    
    setLineStyle(lineStyle: LineStyle): PageModeRectangleParameter {
         this._lineStyle = lineStyle

        return this
    }
}