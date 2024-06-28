import { BarcodeSymbology } from './BarcodeSymbology';
import { BarcodeBarRatioLevel } from './BarcodeBarRatioLevel';

export class BarcodeParameter {
    private _content: string;
    private _symbology: BarcodeSymbology;
    private _printHri: boolean = false;
    private _barDots: number = 2;
    private _barRatioLevel: BarcodeBarRatioLevel = BarcodeBarRatioLevel.Level0;
    private _height: number = 10;

    get content(): string {
        return this._content;
    }

    get symbology(): BarcodeSymbology {
        return this._symbology;
    }

    get printHri(): boolean {
        return this._printHri;
    }

    get barDots(): number {
        return this._barDots;
    }

    get barRatioLevel(): BarcodeBarRatioLevel {
        return this._barRatioLevel;
    }

    get height(): number {
        return this._height;
    }

    constructor(content: string, symbology: BarcodeSymbology) {
        this._content = content;
        this._symbology = symbology;
    }

    setPrintHri(printHri: boolean): BarcodeParameter {
        this._printHri = printHri;

        return this;
    }

    setBarDots(barDots: number): BarcodeParameter {
        this._barDots = barDots;

        return this;
    }
    
    setBarRatioLevel(barRatioLevel: BarcodeBarRatioLevel): BarcodeParameter {
        this._barRatioLevel = barRatioLevel;

        return this;
    }

    setHeight(height: number): BarcodeParameter {
        this._height = height;

        return this;
    }
}