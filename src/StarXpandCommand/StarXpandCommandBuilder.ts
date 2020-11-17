import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class StarXpandCommandBuilder extends BaseStarXpandCommandBuilder {
    private _preSetting?: StarXpandCommand.PreSettingBuilder;

    set preSetting(preSetting: StarXpandCommand.PreSettingBuilder | undefined) {
        if(this._preSetting != null) {
            this._removeChild(this._preSetting);
        }

        if (preSetting != null) {
            this._addChild(preSetting);
        }

        this._preSetting = preSetting;
    }

    get preSetting(): StarXpandCommand.PreSettingBuilder | undefined {
        return this._preSetting;
    }

    constructor() {
        super();

        this._addAction(async() => {            
            if(this.preSetting != null) {
                await NativeModules.StarXpandCommandBuilderWrapper.setPreSetting(this._nativeObject, this.preSetting._nativeObject);
            }
        });
    }

    addDocument(builder: StarXpandCommand.DocumentBuilder): StarXpandCommandBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.StarXpandCommandBuilderWrapper.addDocument(this._nativeObject, builder._nativeObject);
        });

        return this;
    }

    async getCommands(): Promise<string> {
        await this._initAllNativeObjects();

        await this._executeAllActions();

        var result = await NativeModules.StarXpandCommandBuilderWrapper.getCommands(this._nativeObject);

        await this._disposeAllNativeObjects();

        return result;
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.StarXpandCommandBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.StarXpandCommandBuilderWrapper.dispose(nativeObject);
    }
}