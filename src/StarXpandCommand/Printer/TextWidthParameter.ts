import { TextWidthType } from './TextWidthType';
import { TextAlignment } from './TextAlignment';
import { TextEllipsizeType } from './TextEllipsizeType';
import { TextPrintType } from './TextPrintType';

export class TextWidthParameter {
    private _widthType: TextWidthType = TextWidthType.Half;
    private _alignment: TextAlignment = TextAlignment.Left;
    private _ellipsizeType: TextEllipsizeType = TextEllipsizeType.None;
    private _printType: TextPrintType = TextPrintType.GoneWhenEmpty;

    get widthType(): TextWidthType {
        return this._widthType;
    }

    get alignment(): TextAlignment {
        return this._alignment;
    }

    get ellipsizeType(): TextEllipsizeType {
        return this._ellipsizeType;
    }

    get printType(): TextPrintType {
        return this._printType;
    }

    constructor() {

    }

    setWidthType(widthType: TextWidthType): TextWidthParameter {
        this._widthType = widthType;

        return this;
    }

    setAlignment(alignment: TextAlignment): TextWidthParameter {
        this._alignment = alignment;

        return this;
    }

    setEllipsizeType(ellipsizeType: TextEllipsizeType): TextWidthParameter {
        this._ellipsizeType = ellipsizeType;

        return this;
    }

    setPrintType(printType: TextPrintType): TextWidthParameter {
        this._printType = printType;

        return this;
    }
}