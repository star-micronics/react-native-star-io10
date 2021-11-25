import { Channel } from './Channel';
export declare class DriveParameter {
    private _channel;
    private _repeat;
    private _onTime;
    private _offTime;
    get channel(): Channel;
    get repeat(): number;
    get onTime(): number;
    get offTime(): number;
    setChannel(channel: Channel): DriveParameter;
    setRepeat(repeat: number): DriveParameter;
    setOnTime(onTime: number): DriveParameter;
    setOffTime(offTime: number): DriveParameter;
}
