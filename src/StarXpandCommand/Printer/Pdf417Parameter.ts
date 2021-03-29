import { Pdf417Level } from './Pdf417Level';

export class Pdf417Parameter {
    private _content: string;
    private _column: number = 3;
    private _line: number = 0;
    private _module: number = 3;
    private _aspect: number = 3;
    private _level: Pdf417Level = Pdf417Level.Ecc1;

    get content(): string {
        return this._content;
    }

    get column(): number {
        return this._column;
    }

    get line(): number {
        return this._line;
    }

    get module(): number {
        return this._module;
    }

    get aspect(): number {
        return this._aspect;
    }

    get level(): Pdf417Level {
        return this._level;
    }

    constructor(content: string) {
        this._content = content;
    }

    setColumn(column: number): Pdf417Parameter {
        this._column = column;

        return this;
    }

    setLine(line: number): Pdf417Parameter {
        this._line = line;

        return this;
    }

    setModule(module: number): Pdf417Parameter {
        this._module = module;

        return this;
    }

    setAspect(aspect: number): Pdf417Parameter {
        this._aspect = aspect;

        return this;
    }

    setLevel(level: Pdf417Level): Pdf417Parameter {
        this._level = level;

        return this;
    }
}