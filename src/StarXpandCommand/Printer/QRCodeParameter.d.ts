import { QRCodeModel } from './QRCodeModel';
import { QRCodeLevel } from './QRCodeLevel';
export declare class QRCodeParameter {
    private _content;
    private _model;
    private _level;
    private _cellSize;
    get content(): string;
    get model(): QRCodeModel;
    get level(): QRCodeLevel;
    get cellSize(): number;
    constructor(content: string);
    setModel(model: QRCodeModel): QRCodeParameter;
    setLevel(level: QRCodeLevel): QRCodeParameter;
    setCellSize(cellSize: number): QRCodeParameter;
}
