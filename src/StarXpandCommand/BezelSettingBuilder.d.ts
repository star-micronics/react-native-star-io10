import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class BezelSettingBuilder extends BaseStarXpandCommandBuilder {
    settingAutomaticPageLength(enable: boolean): BezelSettingBuilder;
    settingLedAutomaticBlink(parameter: StarXpandCommand.Bezel.LedAutomaticBlinkParameter): BezelSettingBuilder;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
