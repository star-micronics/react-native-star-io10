import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class LedSettingBuilder extends BaseStarXpandCommandBuilder {
    settingAutomaticBlink(parameter: StarXpandCommand.Led.AutomaticBlinkParameter): LedSettingBuilder {
        this._addAction(async() => {
            await NativeModules.LedSettingBuilderWrapper.settingAutomaticBlink(this._nativeObject, parameter.type, parameter.onTime, parameter.offTime);
        });

        return this;
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.LedSettingBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.LedSettingBuilderWrapper.dispose(nativeObject);
    }
}