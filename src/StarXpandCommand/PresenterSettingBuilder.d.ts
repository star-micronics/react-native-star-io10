import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class PresenterSettingBuilder extends BaseStarXpandCommandBuilder {
    _parameters: Map<string, any>;
    constructor();
    settingMode(parameter: StarXpandCommand.Presenter.ModeParameter): PresenterSettingBuilder;
    settingLedAutomaticBlink(parameter: StarXpandCommand.Presenter.LedAutomaticBlinkParameter): PresenterSettingBuilder;
}
