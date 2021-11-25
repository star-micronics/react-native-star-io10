import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class BuzzerBuilder extends BaseStarXpandCommandBuilder {
    actionDrive(parameter: StarXpandCommand.Buzzer.DriveParameter): BuzzerBuilder;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
