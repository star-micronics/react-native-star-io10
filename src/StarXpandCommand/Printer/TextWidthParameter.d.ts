import { TextWidthType } from './TextWidthType';
import { TextAlignment } from './TextAlignment';
import { TextEllipsizeType } from './TextEllipsizeType';
import { TextPrintType } from './TextPrintType';
export declare class TextWidthParameter {
    private _widthType;
    private _alignment;
    private _ellipsizeType;
    private _printType;
    get widthType(): TextWidthType;
    get alignment(): TextAlignment;
    get ellipsizeType(): TextEllipsizeType;
    get printType(): TextPrintType;
    constructor();
    setWidthType(widthType: TextWidthType): TextWidthParameter;
    setAlignment(alignment: TextAlignment): TextWidthParameter;
    setEllipsizeType(ellipsizeType: TextEllipsizeType): TextWidthParameter;
    setPrintType(printType: TextPrintType): TextWidthParameter;
}
