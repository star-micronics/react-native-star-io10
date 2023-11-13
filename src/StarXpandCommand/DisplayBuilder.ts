import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarIO10ErrorFactory } from '../StarIO10ErrorFactory';
import { StarXpandCommand } from '../../index';
import { StarXpandCommandParameterConverter } from './StarXpandCommandParameterConverter';

export class DisplayBuilder extends BaseStarXpandCommandBuilder {

    public _parameters: Map<string, any>;

    constructor() {
        super();

        this._parameters = new Map<string, any>([
            ["category", "Display"],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }

    styleInternationalCharacter(type: StarXpandCommand.Display.InternationalCharacterType): DisplayBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Style.InternationalCharacter"],
                    ["parameter", new Map([
                        ["type", StarXpandCommandParameterConverter.convertDisplayInternationalCharacterType(type)]
                    ])]
                ])
            );
        });

        return this;
    }

    styleCharacterEncoding(type: StarXpandCommand.Display.CharacterEncodingType): DisplayBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Style.CharacterEncoding"],
                    ["parameter", new Map([
                        ["type", StarXpandCommandParameterConverter.convertDisplayCharacterEncodingType(type)]
                    ])]
                ])
            );
        });

        return this;
    }

    styleCursorPositionTo(parameter: StarXpandCommand.Display.PositionParameter): DisplayBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Style.CursorPositionTo"],
                    ["parameter", new Map([
                        ["x", Math.floor(parameter.x)],
                        ["y", Math.floor(parameter.y)]
                    ])]
                ])
            );
        });

        return this;
    }

    actionClearLine(): DisplayBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Action.Clear.Line"],
                    ["parameter", new Map<string, any>()]
                ])
            );
        });

        return this;
    }

    actionClearAll(): DisplayBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Action.Clear.All"],
                    ["parameter", new Map<string, any>()]
                ])
            );
        });

        return this;
    }

    actionSetBackLightState(on: boolean): DisplayBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Action.Set.BackLightState"],
                    ["parameter", new Map([
                        ["on", on]
                    ])]
                ])
            );
        });

        return this;
    }

    actionSetCursorState(state: StarXpandCommand.Display.CursorState): DisplayBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Action.Set.CursorState"],
                    ["parameter", new Map([
                        ["value", StarXpandCommandParameterConverter.convertCursorState(state)]
                    ])]
                ])
            );
        });

        return this;
    }

    actionSetContrast(value: StarXpandCommand.Display.Contrast): DisplayBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Action.Set.Contrast"],
                    ["parameter", new Map([
                        ["value", StarXpandCommandParameterConverter.convertContrast(value)]
                    ])]
                ])
            );
        });

        return this;
    }

    actionShowText(content: string): DisplayBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                new Map<string, any>([
                    ["method", "Action.Show.Text"],
                    ["parameter", new Map([
                        ["content", StarXpandCommandParameterConverter.convertString(content)]
                    ])]
                ])
            );
        });

        return this;
    }

    actionShowImage(imageParameter: StarXpandCommand.Display.ImageParameter): DisplayBuilder {
        this._addAction(async() => {
            var result = await NativeModules.DisplayBuilderWrapper.actionShowImage(imageParameter.source, imageParameter.effectDiffusion, imageParameter.threshold)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });            

             let displayImageObject = JSON.parse(result);

            if (!displayImageObject.hasOwnProperty('parameter')) {
                return;
            }
    
            let parameter = displayImageObject.parameter;
    
            if (!parameter.hasOwnProperty('source') ||
                !parameter.hasOwnProperty('width') ||
                !parameter.hasOwnProperty('height')) {
                return;
            }

            let contents = this._parameters.get("contents") as Array<Map<string, any>>;
            
            contents.push(
                new Map<string, any>([
                    ["method", "Action.Show.Image"],
                    ["parameter", new Map<string, any>([
                        ["source", StarXpandCommandParameterConverter.convertString(parameter.source)],
                        ["width",  parameter.width],
                        ["height", parameter.height]
                    ])]
                ])
            );
        });

        return this;
    }
}