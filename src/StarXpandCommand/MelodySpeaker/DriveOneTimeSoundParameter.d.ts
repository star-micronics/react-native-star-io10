export declare class DriveOneTimeSoundParameter {
    private _source;
    private _volume;
    get source(): string;
    get volume(): number;
    constructor(source: string);
    setVolume(volume: number): DriveOneTimeSoundParameter;
}
