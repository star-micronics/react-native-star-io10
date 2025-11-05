import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarIO10ErrorFactory } from '../StarIO10ErrorFactory';
import { StarXpandCommand } from '../../index';
import { PrinterBaseBuilder } from './PrinterBaseBuilder';

export class PageModeBuilder extends BaseStarXpandCommandBuilder {

    public _parameter: StarXpandCommand.Printer.PageModeParameter | undefined = undefined;
    public _parameters: Map<string, any>;

    constructor();
    constructor(parameter: StarXpandCommand.Printer.PageModeParameter | undefined);
    constructor(parameter?: StarXpandCommand.Printer.PageModeParameter | undefined) {
        super();

        if (parameter !== undefined) {
            this._parameter = parameter;
        }
        this._parameters = new Map<string, any>([
            ["category", "PageMode"],
            ["parameters", []],
            ["contents", new Array<Map<string, any>>()]
        ]);
    }

    stylePrintDirection(direction: StarXpandCommand.Printer.PageModePrintDirection): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.stylePrintDirection(this._parameters, direction);
        });

        return this;
    }

    styleFont(type: StarXpandCommand.Printer.FontType): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleFont(this._parameters, type);
        });

        return this;
    }

    styleBold(enable: boolean): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleBold(this._parameters, enable);
        });

        return this;
    }

    styleInvert(enable: boolean): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleInvert(this._parameters, enable);
        });

        return this;
    }

    styleUnderLine(enable: boolean): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleUnderLine(this._parameters, enable);
        });

        return this;
    }

    styleMagnification(parameter: StarXpandCommand.MagnificationParameter): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleMagnification(this._parameters, parameter);
        });

        return this;
    }

    styleBaseMagnification(parameter: StarXpandCommand.Printer.BaseMagnificationParameter): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleBaseMagnification(this._parameters, parameter);
        });

        return this;
    }

    styleCharacterSpace(width: number): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleCharacterSpace(this._parameters, width);
        });

        return this;
    }

    styleLineSpace(height: number): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleLineSpace(this._parameters, height);
        });

        return this;
    }

    styleVerticalPositionTo(position: number): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleVerticalPositionTo(this._parameters, position);
        });

        return this;
    }

    styleVerticalPositionBy(position: number): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleVerticalPositionBy(this._parameters, position);
        });

        return this;
    }

    styleHorizontalPositionTo(position: number): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleHorizontalPositionTo(this._parameters, position);
        });

        return this;
    }

    styleHorizontalPositionBy(position: number): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleHorizontalPositionBy(this._parameters, position);
        });

        return this;
    }

    styleHorizontalTabPositions(positions: Array<number>): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleHorizontalTabPositions(this._parameters, positions);
        });

        return this;
    }

    styleInternationalCharacter(type: StarXpandCommand.Printer.InternationalCharacterType): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleInternationalCharacter(this._parameters, type);
        });

        return this;
    }

    styleSecondPriorityCharacterEncoding(type: StarXpandCommand.Printer.CharacterEncodingType): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleSecondPriorityCharacterEncoding(this._parameters, type);
        });

        return this;
    }

    styleCjkCharacterPriority(types: Array<StarXpandCommand.Printer.CjkCharacterType>): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleCjkCharacterPriority(this._parameters, types);
        });

        return this;
    }

    styleAmbiguousCharacterWidthType(type: StarXpandCommand.Printer.AmbiguousCharacterWidthType): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.styleAmbiguousCharacterWidthType(this._parameters, type);
        });

        return this;
    }

    actionPrintText(content: string, parameter: StarXpandCommand.Printer.TextParameter | undefined = undefined): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintText(this._parameters, content, parameter);
        });

        return this;
    }

    actionPrintBarcode(parameter: StarXpandCommand.Printer.BarcodeParameter): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintBarcode(this._parameters, parameter);
        });

        return this;
    }

    actionPrintPdf417(parameter: StarXpandCommand.Printer.Pdf417Parameter): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintPdf417(this._parameters, parameter);
        });

        return this;
    }

    actionPrintQRCode(parameter: StarXpandCommand.Printer.QRCodeParameter): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintQRCode(this._parameters, parameter);
        });

        return this;
    }

    actionPrintImage(parameter: StarXpandCommand.Printer.PageModeImageParameter): PageModeBuilder {
        this._addAction(async() => {
            var result = await NativeModules.PageModeBuilderWrapper.actionPrintImage(parameter.source,parameter.x,parameter.y,parameter.width,parameter.effectDiffusion,parameter.threshold)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });

            PrinterBaseBuilder.actionPrintPageModeImage(this._parameters, result,parameter.x,parameter.y);       
        });

        return this;
    }

    actionPrintRuledLine(parameter: StarXpandCommand.Printer.PageModeRuledLineParameter): PageModeBuilder {
        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintPageModeRuledLine(this._parameters, parameter);
        });

        return this;
    }

    actionPrintRectangle(parameter: StarXpandCommand.Printer.PageModeRectangleParameter): PageModeBuilder {

        this._addAction(async() => {
            PrinterBaseBuilder.actionPrintRectangle(this._parameters, parameter);
        });

        return this;
    }

    add(builder: StarXpandCommand.PageModeBuilder): PageModeBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            if (builder._parameter !== undefined) {
                PrinterBaseBuilder.addPageModeParameter(builder._parameters, builder._parameter!)
            }


            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                builder._parameters
            )
        });

        return this;
    }

    addPageMode(parameter: StarXpandCommand.Printer.PageModeAreaParameter, builder: StarXpandCommand.PageModeBuilder): PageModeBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            PrinterBaseBuilder.stylePageModeArea(builder._parameters, parameter)

            if (builder._parameter !== undefined) {
                PrinterBaseBuilder.addPageModeParameter(builder._parameters, builder._parameter!)
            }


            let contents = this._parameters.get("contents") as Array<Map<string, any>>;

            contents.push(
                builder._parameters
            )
        });

        return this;
    }
}