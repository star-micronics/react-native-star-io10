import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
import { StarXpandCommandParameterConverter } from './StarXpandCommandParameterConverter';

export class BuzzerBuilder extends BaseStarXpandCommandBuilder {

    public _parameters: Map<string, any>;

    constructor() {
        super();

        this._parameters = new Map<string, any>([
            ["category", "Buzzer"],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }
    
    actionDrive(parameter: StarXpandCommand.Buzzer.DriveParameter): BuzzerBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Action.Drive"],
                    ["parameter", new Map<string, any>([
                        ["channel", StarXpandCommandParameterConverter.convertBuzzerChannel(parameter.channel)],
                        ["repeat", Math.floor(parameter.repeat)],
                        ["on_time", Math.floor(parameter.onTime)],
                        ["off_time", Math.floor(parameter.offTime)]
                    ])]
                ])
            );
        });

        return this;
    }
}