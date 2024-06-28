import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
import { StarXpandCommandParameterConverter } from './StarXpandCommandParameterConverter';

export class PresenterSettingBuilder extends BaseStarXpandCommandBuilder {

    public _parameters: Map<string, any>;

    constructor() {
        super();

        this._parameters = new Map<string, any>([
            ["category", "Presenter"],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }

    settingMode(parameter: StarXpandCommand.Presenter.ModeParameter): PresenterSettingBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Mode"],
                    ["parameter", new Map<string, any>([
                        ["loop", parameter.loop],
                        ["hold", parameter.hold],
                        ["retract", parameter.retract],
                        ["hold_time", parameter.holdTime]
                    ])]
                ])
            );
        });

        return this;
    }

    settingLedAutomaticBlink(parameter: StarXpandCommand.Presenter.LedAutomaticBlinkParameter): PresenterSettingBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Led.AutomaticBlink"],
                    ["parameter", new Map<string, any>([
                        ["type", StarXpandCommandParameterConverter.convertPresenterLedType(parameter.type)],
                        ["on_time", parameter.onTime],
                        ["off_time", parameter.offTime]
                    ])]
                ])
            );
        });

        return this;
    }
}