import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class StarXpandCommandBuilder extends BaseStarXpandCommandBuilder {
    private _preSetting?;
    set preSetting(preSetting: StarXpandCommand.PreSettingBuilder | undefined);
    get preSetting(): StarXpandCommand.PreSettingBuilder | undefined;
    constructor();
    addDocument(builder: StarXpandCommand.DocumentBuilder): StarXpandCommandBuilder;
    getCommands(): Promise<string>;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
