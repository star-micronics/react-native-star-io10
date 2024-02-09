import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
import { JsonBuilder } from './Json/JsonBuilder';

export class StarXpandCommandBuilder extends BaseStarXpandCommandBuilder {
    private _preSetting?: StarXpandCommand.PreSettingBuilder;

    private _parameters: Map<string, any>;

    set preSetting(preSetting: StarXpandCommand.PreSettingBuilder | undefined) {
        if (this._preSetting != null) {
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

        this._parameters = new Map<string, any>([
            ["title", "StarXpandCommand"],
            ["version", "1.0.0"],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }

    addDocument(builder: StarXpandCommand.DocumentBuilder): StarXpandCommandBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(builder._parameters);
        });

        return this;
    }

    async getCommands(): Promise<string> {
        try {
            await this._executeAllActions();

            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            if (this.preSetting != null) {
                contents.unshift(this.preSetting._parameters);
            }

            let result = JsonBuilder.serialize(this._parameters);

            if (this.preSetting != null) {
                contents.shift();
            }

            return result;
        } finally {
            
        }
    }
}