import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
import { StarXpandCommandParameterConverter } from './StarXpandCommandParameterConverter';
import { Buffer } from 'buffer';

export class DocumentBuilder extends BaseStarXpandCommandBuilder {

    public _parameters: Map<string, any>;

    private topContentsIndex: number = 0;

    constructor() {
        super();

        this._parameters = new Map<string, any>([
            ["category", "Document"],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }

    settingTopMargin(height: number): DocumentBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.splice(
                this.topContentsIndex,
                0,
                new Map<string, any>([
                    ["method", "Setting.TopMargin"],
                    ["parameter", new Map([
                        ["height", height]
                    ])]
                ])
            );

            this.topContentsIndex++;
        });

        return this;
    }

    settingBlackMark(parameter: StarXpandCommand.Printer.BlackMarkParameter): DocumentBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.splice(
                this.topContentsIndex,
                0,
                new Map<string, any>([
                    ["method", "Setting.BlackMark"],
                    ["parameter", new Map<string, any>([
                        ["enable", parameter.enable],
                        ["position", StarXpandCommandParameterConverter.convertBlackMarkPosition(parameter.position)]
                    ])]
                ])
            );

            this.topContentsIndex++;
        });

        return this;
    }

    settingLabel(parameter: StarXpandCommand.Printer.LabelParameter): DocumentBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.splice(
                this.topContentsIndex,
                0,
                new Map<string, any>([
                    ["method", "Setting.Label"],
                    ["parameter", new Map([
                        ["enable", parameter.enable]
                    ])]
                ])
            );

            this.topContentsIndex++;
        });

        return this;
    }

    settingHoldPrint(parameter: StarXpandCommand.Printer.HoldPrintParameter): DocumentBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.splice(
                this.topContentsIndex,
                0,
                new Map<string, any>([
                    ["method", "Setting.HoldPrint"],
                    ["parameter", new Map([
                        ["enable", parameter.enable]
                    ])]
                ])
            );
    
            this.topContentsIndex++;
        });

        return this;
    }

    settingPrintableArea(width: number): DocumentBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.splice(
                this.topContentsIndex,
                0,
                new Map<string, any>([
                    ["method", "Setting.PrintableArea"],
                    ["parameter", new Map([
                        ["width", width]
                    ])]
                ])
            );
    
            this.topContentsIndex++;
        });

        return this;
    }

    addPrinter(builder: StarXpandCommand.PrinterBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(builder._parameters);
        });

        return this;
    }

    addDrawer(builder: StarXpandCommand.DrawerBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(builder._parameters);
        });

        return this;
    }

    addBuzzer(builder: StarXpandCommand.BuzzerBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(builder._parameters);
        });

        return this;
    }

    addMelodySpeaker(builder: StarXpandCommand.MelodySpeakerBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(builder._parameters);
        });

        return this;
    }

    addDisplay(builder: StarXpandCommand.DisplayBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(builder._parameters);
        });

        return this;
    }

    addRaw(content: Array<number>): DocumentBuilder {
        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            var numberArray = Uint8Array.from(content);
            var base64String = Buffer.from(numberArray).toString("base64");

            contents.push(
                new Map<string, any>([
                    ["method", "Raw.Send"],
                    ["parameter", new Map<string, any>([
                        ["content", base64String]
                    ])]
                ])
            );
        });

        return this;
    }
}