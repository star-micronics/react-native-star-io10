import { Type } from './Type';

export class AutomaticBlinkParameter {
    private _type: Type; 
    private _onTime: number = 100;
    private _offTime: number = 100;

    get type(): Type {
        return this._type;
    }

    get onTime(): number {
        return this._onTime;
    }

    get offTime(): number {
        return this._offTime;
    }

    constructor(type: Type) {
        this._type = type;
    }

    setOnTime(onTime: number): AutomaticBlinkParameter {
        this._onTime = onTime;

        return this;
    }

    setOffTime(offTime: number): AutomaticBlinkParameter {
        this._offTime = offTime;

        return this;
    }
}