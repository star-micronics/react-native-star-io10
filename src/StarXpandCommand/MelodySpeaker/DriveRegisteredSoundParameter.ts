import { SoundStorageArea } from './SoundStorageArea';

export class DriveRegisteredSoundParameter {
    private _area: SoundStorageArea; 
    private _number: number;
    private _volume: number = -1;

    get area(): SoundStorageArea {
        return this._area;
    }

    get number(): number {
        return this._number;
    }

    get volume(): number {
        return this._volume;
    }

    constructor(area: SoundStorageArea, number: number) {
        this._area = area;
        this._number = number;
    }

    setVolume(volume: number): DriveRegisteredSoundParameter {
        this._volume = volume;

        return this;
    }
}