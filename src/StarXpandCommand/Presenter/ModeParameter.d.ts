export declare class ModeParameter {
    private _loop;
    private _hold;
    private _retract;
    private _holdTime;
    get loop(): boolean;
    get hold(): boolean;
    get retract(): boolean;
    get holdTime(): number;
    setLoop(loop: boolean): ModeParameter;
    setHold(hold: boolean): ModeParameter;
    setRetract(retract: boolean): ModeParameter;
    setHoldTime(holdTime: number): ModeParameter;
}
