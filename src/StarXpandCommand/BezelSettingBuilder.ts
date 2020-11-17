import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class BezelSettingBuilder extends BaseStarXpandCommandBuilder {
    settingAutomaticPageLength(enable: boolean): BezelSettingBuilder {
        this._addAction(async() => {
            await NativeModules.BezelSettingBuilderWrapper.settingAutomaticPageLength(this._nativeObject, enable);
        });

        return this;
    }

    addLed(builder: StarXpandCommand.LedSettingBuilder): BezelSettingBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.BezelSettingBuilderWrapper.addLed(this._nativeObject, builder._nativeObject);
        });

        return this;
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.BezelSettingBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.BezelSettingBuilderWrapper.dispose(nativeObject);
    }
}