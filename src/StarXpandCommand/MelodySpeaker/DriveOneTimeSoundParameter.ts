export class DriveOneTimeSoundParameter {
    private _source: Array<number>; 
    private _volume: number = -1;

    get source(): Array<number> {
        return this._source;
    }

    get volume(): number {
        return this._volume;
    }

    constructor(source: Array<number>) {
        this._source = source;
    }

    setVolume(volume: number): DriveOneTimeSoundParameter {
        this._volume = volume;

        return this;
    }
}