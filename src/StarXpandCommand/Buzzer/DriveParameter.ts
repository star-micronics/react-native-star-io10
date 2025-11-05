import { Channel } from './Channel';

export class DriveParameter {
    private _channel: Channel = Channel.No1; 
    private _repeat: number = 1;
    private _onTime: number = 200;
    private _offTime: number = 200;

    get channel(): Channel {
        return this._channel;
    }

    get repeat(): number {
        return this._repeat;
    }

    get onTime(): number {
        return this._onTime;
    }

    get offTime(): number {
        return this._offTime;
    }

    setChannel(channel: Channel): DriveParameter {
        this._channel = channel;

        return this;
    }

    setRepeat(repeat: number): DriveParameter {
        this._repeat = repeat;

        return this;
    }

    setOnTime(onTime: number): DriveParameter {
        this._onTime = onTime;

        return this;
    }

    setOffTime(offTime: number): DriveParameter {
        this._offTime = offTime;

        return this;
    }
}