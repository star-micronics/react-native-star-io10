import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
import { StarXpandCommandParameterConverter } from './StarXpandCommandParameterConverter';
import { StarIO10ErrorFactory } from '../StarIO10ErrorFactory';

export class MelodySpeakerBuilder extends BaseStarXpandCommandBuilder {

    public _parameters: Map<string, any>;

    constructor() {
        super();

        this._parameters = new Map<string, any>([
            ["category", "MelodySpeaker"],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }

    actionDriveRegisteredSound(parameter: StarXpandCommand.MelodySpeaker.DriveRegisteredSoundParameter): MelodySpeakerBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Action.Drive.RegisteredSound"],
                    ["parameter", new Map<string, any>([
                        ["area", StarXpandCommandParameterConverter.convertSoundStorageArea(parameter.area)],
                        ["number", Math.floor(parameter.number)],
                        ["volume", Math.floor(parameter.volume)]
                    ])]
                ])
            );
        });

        return this;
    }

    actionDriveOneTimeSound(soundParameter: StarXpandCommand.MelodySpeaker.DriveOneTimeSoundParameter): MelodySpeakerBuilder {
        this._addAction(async() => {
            var result = await NativeModules.MelodySpeakerBuilderWrapper.actionDriveOneTimeSound(soundParameter.source, soundParameter.volume)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });            

             let soundObject = JSON.parse(result);

            if (!soundObject.hasOwnProperty('parameter')) {
                return;
            }
    
            let parameter = soundObject.parameter;
    
            if (!parameter.hasOwnProperty('source') ||
                !parameter.hasOwnProperty('volume')) {
                return;
            }

            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Action.Drive.OneTimeSound"],
                    ["parameter", new Map<string, any>([
                        ["source", StarXpandCommandParameterConverter.convertString(parameter.source)],
                        ["volume", Math.floor(parameter.volume)]
                    ])]
                ])
            );
        });

        return this;
    }
}