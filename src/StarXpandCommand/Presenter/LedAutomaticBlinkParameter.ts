import { LedType } from './LedType';

export class LedAutomaticBlinkParameter {
    private _type: LedType;
    private _onTime: number = 100;
    private _offTime: number = 100;

    get type(): LedType {
        return this._type;
    }

    get onTime(): number {
        return this._onTime;
    }

    get offTime(): number {
        return this._offTime;
    }

    constructor(type: LedType) {
        this._type = type;
    }

    setOnTime(onTime: number): LedAutomaticBlinkParameter {
        this._onTime = onTime;

        return this;
    }

    setOffTime(offTime: number): LedAutomaticBlinkParameter {
        this._offTime = offTime;

        return this;
    }
}