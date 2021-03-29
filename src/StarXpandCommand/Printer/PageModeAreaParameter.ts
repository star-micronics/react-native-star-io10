export class PageModeAreaParameter {
    private _width: number;
    private _height: number;
    private _x: number = 0;
    private _y: number = 0;

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    setX(x: number): PageModeAreaParameter {
        this._x = x;

        return this;
    }

    setY(y: number): PageModeAreaParameter {
        this._y = y;

        return this;
    }
}