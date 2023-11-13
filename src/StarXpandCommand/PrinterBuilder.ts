import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarIO10ErrorFactory } from '../StarIO10ErrorFactory';
import { StarXpandCommand } from '../../index';
import { PrinterBaseBuilder } from './PrinterBaseBuilder';

export class PrinterBuilder extends BaseStarXpandCommandBuilder {

    public _parameters: Map<string, any>;

    constructor() {
        super();

        this._parameters = new Map<string, any>([
            ["category", "Printer"],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }

    styleAlignment(alignment: StarXpandCommand.Printer.Alignment): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleAlignment(this._parameters, alignment);
        });

        return this;
    }

    styleFont(type: StarXpandCommand.Printer.FontType): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleFont(this._parameters, type);
        });

        return this;
    }

    styleBold(enable: boolean): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleBold(this._parameters, enable);
        });

        return this;
    }

    styleInvert(enable: boolean): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleInvert(this._parameters, enable);
        });

        return this;
    }

    styleUnderLine(enable: boolean): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleUnderLine(this._parameters, enable);
        });

        return this;
    }

    styleMagnification(parameter: StarXpandCommand.MagnificationParameter): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleMagnification(this._parameters, parameter);
        });

        return this;
    }

    styleCharacterSpace(width: number): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleCharacterSpace(this._parameters, width);
        });

        return this;
    }

    styleLineSpace(height: number): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleLineSpace(this._parameters, height);
        });

        return this;
    }

    styleHorizontalPositionTo(position: number): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleHorizontalPositionTo(this._parameters, position);
        });

        return this;
    }

    styleHorizontalPositionBy(position: number): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleHorizontalPositionBy(this._parameters, position);
        });

        return this;
    }

    styleHorizontalTabPositions(positions: Array<number>): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleHorizontalTabPositions(this._parameters, positions);
        });

        return this;
    }

    styleInternationalCharacter(type: StarXpandCommand.Printer.InternationalCharacterType): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleInternationalCharacter(this._parameters, type);
        });

        return this;
    }

    styleSecondPriorityCharacterEncoding(type: StarXpandCommand.Printer.CharacterEncodingType): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleSecondPriorityCharacterEncoding(this._parameters, type);
        });

        return this;
    }

    styleCjkCharacterPriority(types: Array<StarXpandCommand.Printer.CjkCharacterType>): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleCjkCharacterPriority(this._parameters, types);
        });

        return this;
    }

    actionCut(type: StarXpandCommand.Printer.CutType): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionCut(this._parameters, type);
        });

        return this;
    }

    actionFeed(height: number): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionFeed(this._parameters, height);
        });

        return this;
    }

    actionFeedLine(lines: number): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionFeedLine(this._parameters, lines);
        });

        return this;
    }

    actionPrintText(content: string): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintText(this._parameters, content);
        });

        return this;
    }

    actionPrintLogo(parameter: StarXpandCommand.Printer.LogoParameter): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintLogo(this._parameters, parameter);
        });

        return this;
    }

    actionPrintBarcode(parameter: StarXpandCommand.Printer.BarcodeParameter): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintBarcode(this._parameters, parameter);
        });

        return this;
    }

    actionPrintPdf417(parameter: StarXpandCommand.Printer.Pdf417Parameter): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintPdf417(this._parameters, parameter);
        });

        return this;
    }

    actionPrintQRCode(parameter: StarXpandCommand.Printer.QRCodeParameter): PrinterBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintQRCode(this._parameters, parameter);
        });

        return this;
    }

    actionPrintImage(parameter: StarXpandCommand.Printer.ImageParameter): PrinterBuilder {
        this._addAction(async() => {
            var result = await NativeModules.PrinterBuilderWrapper.actionPrintImage(parameter.source, parameter.width, parameter.effectDiffusion, parameter.threshold)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });

            PrinterBaseBuilder.actionPrintImage(this._parameters, result);       
        });

        return this;
    }
    
    actionPrintRuledLine(parameter:StarXpandCommand.Printer.RuledLineParameter):PrinterBuilder{
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintRuledLine(this._parameters, parameter);
        });

        return this;
    }

    add(builder: PrinterBuilder): PrinterBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                builder._parameters
            )
        });

        return this;
    }

    addPageMode(parameters : StarXpandCommand.Printer.PageModeAreaParameter, builder: StarXpandCommand.PageModeBuilder):PrinterBuilder{
        this._addChild(builder);

        this._addAction(async() => {
            PrinterBaseBuilder.stylePageModeArea(builder._parameters,parameters );
            let contents = this._parameters.get("contents") as Array<Map<string, any>>;
            contents.push(
                builder._parameters
            )
        });

        return this;
    }
}