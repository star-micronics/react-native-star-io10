import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class PreSettingBuilder extends BaseStarXpandCommandBuilder {
    addPresenterSetting(builder: StarXpandCommand.PresenterSettingBuilder): PreSettingBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.PreSettingBuilderWrapper.addPresenterSetting(this._nativeObject, builder._nativeObject);
        });

        return this;
    }

    addBezelSetting(builder: StarXpandCommand.BezelSettingBuilder): PreSettingBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.PreSettingBuilderWrapper.addBezelSetting(this._nativeObject, builder._nativeObject);
        });

        return this;
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.PreSettingBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.PreSettingBuilderWrapper.dispose(nativeObject);
    }
}