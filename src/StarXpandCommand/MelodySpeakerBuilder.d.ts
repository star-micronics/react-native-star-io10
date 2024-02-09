import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class MelodySpeakerBuilder extends BaseStarXpandCommandBuilder {
    _parameters: Map<string, any>;
    constructor();
    actionDriveRegisteredSound(parameter: StarXpandCommand.MelodySpeaker.DriveRegisteredSoundParameter): MelodySpeakerBuilder;
    actionDriveOneTimeSound(soundParameter: StarXpandCommand.MelodySpeaker.DriveOneTimeSoundParameter): MelodySpeakerBuilder;
}
