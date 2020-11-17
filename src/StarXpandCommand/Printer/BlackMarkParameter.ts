import { BlackMarkPosition } from './BlackMarkPosition';

export class BlackMarkParameter {
    private _start: boolean = true;
    private _end: boolean = true;
    private _position: BlackMarkPosition = BlackMarkPosition.Front;

    get start(): boolean {
        return this._start;
    }

    get end(): boolean {
        return this._end;
    }

    get position(): BlackMarkPosition {
        return this._position;
    }

    setStart(start: boolean): BlackMarkParameter {
        this._start = start;

        return this;
    }

    setEnd(end: boolean): BlackMarkParameter {
        this._end = end;

        return this;
    }

    setPosition(position: BlackMarkPosition): BlackMarkParameter {
        this._position = position;

        return this;
    }
}