import { BlackMarkPosition } from './BlackMarkPosition';

export class BlackMarkParameter {
    private _enable: boolean = true;
    private _position: BlackMarkPosition = BlackMarkPosition.Back;

    get enable(): boolean {
        return this._enable;
    }

    get position(): BlackMarkPosition {
        return this._position;
    }

    setEnable(enable: boolean): BlackMarkParameter {
        this._enable = enable;

        return this;
    }

    setPosition(position: BlackMarkPosition): BlackMarkParameter {
        this._position = position;

        return this;
    }
}