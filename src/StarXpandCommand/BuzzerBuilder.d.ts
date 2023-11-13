import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class BuzzerBuilder extends BaseStarXpandCommandBuilder {
    _parameters: Map<string, any>;
    constructor();
    actionDrive(parameter: StarXpandCommand.Buzzer.DriveParameter): BuzzerBuilder;
}
