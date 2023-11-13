import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class BezelSettingBuilder extends BaseStarXpandCommandBuilder {
    _parameters: Map<string, any>;
    constructor();
    settingAutomaticPageLength(enable: boolean): BezelSettingBuilder;
    settingLedAutomaticBlink(parameter: StarXpandCommand.Bezel.LedAutomaticBlinkParameter): BezelSettingBuilder;
}
