import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class MelodySpeakerBuilder extends BaseStarXpandCommandBuilder {
    actionDriveRegisteredSound(parameter: StarXpandCommand.MelodySpeaker.DriveRegisteredSoundParameter): MelodySpeakerBuilder {
        this._addAction(async() => {
            await NativeModules.MelodySpeakerBuilderWrapper.actionDriveRegisteredSound(this._nativeObject, parameter.area, parameter.number, parameter.volume);
        });

        return this;
    }

    actionDriveOneTimeSound(parameter: StarXpandCommand.MelodySpeaker.DriveOneTimeSoundParameter): MelodySpeakerBuilder {
        this._addAction(async() => {
            await NativeModules.MelodySpeakerBuilderWrapper.actionDriveOneTimeSound(this._nativeObject, parameter.source, parameter.volume);
        });

        return this;
    }
    
    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.MelodySpeakerBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.MelodySpeakerBuilderWrapper.dispose(nativeObject);
    }
}