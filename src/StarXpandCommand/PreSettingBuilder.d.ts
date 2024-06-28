import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class PreSettingBuilder extends BaseStarXpandCommandBuilder {
    _parameters: Map<string, any>;
    constructor();
    addPresenterSetting(builder: StarXpandCommand.PresenterSettingBuilder): PreSettingBuilder;
    addBezelSetting(builder: StarXpandCommand.BezelSettingBuilder): PreSettingBuilder;
}
