import { LedType } from './LedType';
export declare class LedAutomaticBlinkParameter {
    private _type;
    private _onTime;
    private _offTime;
    get type(): LedType;
    get onTime(): number;
    get offTime(): number;
    constructor(type: LedType);
    setOnTime(onTime: number): LedAutomaticBlinkParameter;
    setOffTime(offTime: number): LedAutomaticBlinkParameter;
}
