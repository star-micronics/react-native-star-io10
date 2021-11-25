import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarIO10ErrorFactory } from '../StarIO10ErrorFactory';
import { StarXpandCommand } from '../../index';

export class PresenterSettingBuilder extends BaseStarXpandCommandBuilder {
    settingMode(parameter: StarXpandCommand.Presenter.ModeParameter): PresenterSettingBuilder {
        this._addAction(async() => {
            await NativeModules.PresenterSettingBuilderWrapper.settingMode(this._nativeObject, parameter.loop, parameter.hold, parameter.retract, parameter.holdTime)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    settingLedAutomaticBlink(parameter: StarXpandCommand.Presenter.LedAutomaticBlinkParameter): PresenterSettingBuilder {
        this._addAction(async() => {
            await NativeModules.PresenterSettingBuilderWrapper.settingLedAutomaticBlink(this._nativeObject, parameter.type, parameter.onTime, parameter.offTime)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
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