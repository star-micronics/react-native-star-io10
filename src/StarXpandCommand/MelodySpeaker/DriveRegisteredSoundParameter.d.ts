import { SoundStorageArea } from './SoundStorageArea';
export declare class DriveRegisteredSoundParameter {
    private _area;
    private _number;
    private _volume;
    get area(): SoundStorageArea;
    get number(): number;
    get volume(): number;
    constructor(area: SoundStorageArea, number: number);
    setVolume(volume: number): DriveRegisteredSoundParameter;
}
