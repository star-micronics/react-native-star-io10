import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class PreSettingBuilder extends BaseStarXpandCommandBuilder {
    addPresenterSetting(builder: StarXpandCommand.PresenterSettingBuilder): PreSettingBuilder;
    addBezelSetting(builder: StarXpandCommand.BezelSettingBuilder): PreSettingBuilder;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
