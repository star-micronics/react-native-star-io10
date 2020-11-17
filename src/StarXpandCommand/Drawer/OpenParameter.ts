import { Channel } from './Channel';

export class OpenParameter {
    private _channel: Channel = Channel.No1; 
    private _onTime: number = 200;

    get channel(): Channel {
        return this._channel;
    }

    get onTime(): number {
        return this._onTime;
    }

    setChannel(channel: Channel): OpenParameter {
        this._channel = channel;

        return this;
    }

    setOnTime(onTime: number): OpenParameter {
        this._onTime = onTime;

        return this;
    }
}