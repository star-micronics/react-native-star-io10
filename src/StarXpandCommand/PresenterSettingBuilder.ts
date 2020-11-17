import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class PresenterSettingBuilder extends BaseStarXpandCommandBuilder {
    settingMode(parameter: StarXpandCommand.Presenter.ModeParameter): PresenterSettingBuilder {
        this._addAction(async() => {
            await NativeModules.PresenterSettingBuilderWrapper.settingMode(this._nativeObject, parameter.loop, parameter.hold, parameter.retract, parameter.holdTime);
        });

        return this;
    }

    addLed(builder: StarXpandCommand.LedSettingBuilder): PresenterSettingBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.PresenterSettingBuilderWrapper.addLed(this._nativeObject, builder._nativeObject);
        });

        return this;
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.PresenterSettingBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.PresenterSettingBuilderWrapper.dispose(nativeObject);
    }
}