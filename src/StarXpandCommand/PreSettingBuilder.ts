import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class PreSettingBuilder extends BaseStarXpandCommandBuilder {

    public _parameters: Map<string, any>;

    constructor() {
        super();

        this._parameters = new Map<string, any>([
            ["category", "PreSetting"],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }

    addPresenterSetting(builder: StarXpandCommand.PresenterSettingBuilder): PreSettingBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(builder._parameters);
        });

        return this;
    }

    addBezelSetting(builder: StarXpandCommand.BezelSettingBuilder): PreSettingBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(builder._parameters);
        });

        return this;
    }
}