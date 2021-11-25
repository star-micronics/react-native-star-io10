import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class PresenterSettingBuilder extends BaseStarXpandCommandBuilder {
    settingMode(parameter: StarXpandCommand.Presenter.ModeParameter): PresenterSettingBuilder;
    settingLedAutomaticBlink(parameter: StarXpandCommand.Presenter.LedAutomaticBlinkParameter): PresenterSettingBuilder;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
