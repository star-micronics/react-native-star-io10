import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
import { StarXpandCommandParameterConverter } from './StarXpandCommandParameterConverter';

export class DrawerBuilder extends BaseStarXpandCommandBuilder {

    public _parameters: Map<string, any>;

    constructor() {
        super();

        this._parameters = new Map<string, any>([
            ["category", "Drawer"],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }
    
    actionOpen(parameter: StarXpandCommand.Drawer.OpenParameter): DrawerBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;
          
            contents.push(
                new Map<string, any>([
                    ["method", "Action.Open"],
                    ["parameter", new Map<string, any>([
                        ["channel", StarXpandCommandParameterConverter.convertDrawerChannel(parameter.channel)],
                        ["on_time", Math.floor(parameter.onTime)]
                    ])]
                ])
            );
        });

        return this;
    }
}