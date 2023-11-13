import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
import { StarXpandCommandParameterConverter } from './StarXpandCommandParameterConverter';

export class BezelSettingBuilder extends BaseStarXpandCommandBuilder {

    public _parameters: Map<string, any>;

    constructor() {
        super();

        this._parameters = new Map<string, any>([
            ["category", "Bezel"],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }

    settingAutomaticPageLength(enable: boolean): BezelSettingBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "AutomaticPageLength"],
                    ["parameter", new Map([
                        ["enable", enable]
                    ])]
                ])
            );
        });

        return this;
    }

    settingLedAutomaticBlink(parameter: StarXpandCommand.Bezel.LedAutomaticBlinkParameter): BezelSettingBuilder {
        this._addAction(async() => { 
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Led.AutomaticBlink"],
                    ["parameter", new Map<string, any>([
                        ["type", StarXpandCommandParameterConverter.convertBezelLedType(parameter.type)],
                        ["on_time", parameter.onTime],
                        ["off_time", parameter.offTime]
                    ])]
                ])
            );
        });

        return this;
    }
}