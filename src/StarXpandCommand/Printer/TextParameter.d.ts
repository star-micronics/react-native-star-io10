import { TextWidthParameter } from './TextWidthParameter';
export declare class TextParameter {
    private _width;
    private _widthParameter;
    get width(): number | undefined;
    get widthParameter(): TextWidthParameter | undefined;
    constructor();
    setWidth(width: number, widthParameter?: TextWidthParameter | undefined): this;
}
