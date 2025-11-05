import { BarcodeSymbology } from './BarcodeSymbology';
import { BarcodeBarRatioLevel } from './BarcodeBarRatioLevel';
export declare class BarcodeParameter {
    private _content;
    private _symbology;
    private _printHri;
    private _barDots;
    private _barRatioLevel;
    private _height;
    get content(): string;
    get symbology(): BarcodeSymbology;
    get printHri(): boolean;
    get barDots(): number;
    get barRatioLevel(): BarcodeBarRatioLevel;
    get height(): number;
    constructor(content: string, symbology: BarcodeSymbology);
    setPrintHri(printHri: boolean): BarcodeParameter;
    setBarDots(barDots: number): BarcodeParameter;
    setBarRatioLevel(barRatioLevel: BarcodeBarRatioLevel): BarcodeParameter;
    setHeight(height: number): BarcodeParameter;
}
