import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class BuzzerBuilder extends BaseStarXpandCommandBuilder {
    actionDrive(parameter: StarXpandCommand.Buzzer.DriveParameter): BuzzerBuilder {
        this._addAction(async() => {
            await NativeModules.BuzzerBuilderWrapper.actionDrive(this._nativeObject, parameter.channel, parameter.repeat, parameter.onTime, parameter.offTime);
        });

        return this;
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.BuzzerBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.BuzzerBuilderWrapper.dispose(nativeObject);
    }
}