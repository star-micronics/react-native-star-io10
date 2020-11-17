export class ModeParameter {
    private _loop: boolean = false; 
    private _hold: boolean = false;
    private _retract: boolean = false;
    private _holdTime: number = 0;

    get loop(): boolean {
        return this._loop;
    }

    get hold(): boolean {
        return this._hold;
    }

    get retract(): boolean {
        return this._retract;
    }

    get holdTime(): number {
        return this._holdTime;
    }

    setLoop(loop: boolean): ModeParameter {
        this._loop = loop;

        return this;
    }

    setHold(hold: boolean): ModeParameter {
        this._hold = hold;

        return this;
    }

    setRetract(retract: boolean): ModeParameter {
        this._retract = retract;

        return this;
    }

    setHoldTime(holdTime: number): ModeParameter {
        this._holdTime = holdTime;

        return this;
    }
}