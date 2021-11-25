import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class MelodySpeakerBuilder extends BaseStarXpandCommandBuilder {
    actionDriveRegisteredSound(parameter: StarXpandCommand.MelodySpeaker.DriveRegisteredSoundParameter): MelodySpeakerBuilder;
    actionDriveOneTimeSound(parameter: StarXpandCommand.MelodySpeaker.DriveOneTimeSoundParameter): MelodySpeakerBuilder;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
