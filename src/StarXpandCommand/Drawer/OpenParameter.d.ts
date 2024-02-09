import { Channel } from './Channel';
export declare class OpenParameter {
    private _channel;
    private _onTime;
    get channel(): Channel;
    get onTime(): number;
    setChannel(channel: Channel): OpenParameter;
    setOnTime(onTime: number): OpenParameter;
}
