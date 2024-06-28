import { QRCodeModel } from './QRCodeModel';
import { QRCodeLevel } from './QRCodeLevel';

export class QRCodeParameter {
    private _content: string;
    private _model: QRCodeModel = QRCodeModel.Model2;
    private _level: QRCodeLevel = QRCodeLevel.L;
    private _cellSize: number = 3;

    get content(): string {
        return this._content;
    }

    get model(): QRCodeModel {
        return this._model;
    }

    get level(): QRCodeLevel {
        return this._level;
    }

    get cellSize(): number {
        return this._cellSize;
    }

    constructor(content: string) {
        this._content = content;
    }

    setModel(model: QRCodeModel): QRCodeParameter {
        this._model = model;

        return this;
    }

    setLevel(level: QRCodeLevel): QRCodeParameter {
        this._level = level;

        return this;
    }

    setCellSize(cellSize: number): QRCodeParameter {
        this._cellSize = cellSize;

        return this;
    }
}