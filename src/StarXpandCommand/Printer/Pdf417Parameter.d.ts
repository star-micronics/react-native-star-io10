import { Pdf417Level } from './Pdf417Level';
export declare class Pdf417Parameter {
    private _content;
    private _column;
    private _line;
    private _module;
    private _aspect;
    private _level;
    get content(): string;
    get column(): number;
    get line(): number;
    get module(): number;
    get aspect(): number;
    get level(): Pdf417Level;
    constructor(content: string);
    setColumn(column: number): Pdf417Parameter;
    setLine(line: number): Pdf417Parameter;
    setModule(module: number): Pdf417Parameter;
    setAspect(aspect: number): Pdf417Parameter;
    setLevel(level: Pdf417Level): Pdf417Parameter;
}
