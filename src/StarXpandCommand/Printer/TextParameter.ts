import { TextWidthParameter } from './TextWidthParameter';

export class TextParameter {
    private _width: number | undefined = undefined;
    private _widthParameter: TextWidthParameter | undefined = undefined;

    get width(): number | undefined {
        return this._width;
    }

    get widthParameter(): TextWidthParameter | undefined {
        return this._widthParameter;
    }

    constructor() {

    }

    setWidth(width: number, widthParameter: TextWidthParameter | undefined = undefined) {
        this._width = width;
        this._widthParameter = widthParameter;

        return this;
    }
}