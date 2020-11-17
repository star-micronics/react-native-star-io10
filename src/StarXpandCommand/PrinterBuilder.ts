import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class PrinterBuilder extends BaseStarXpandCommandBuilder {
    styleAlignment(alignment: StarXpandCommand.Printer.Alignment): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleAlignment(this._nativeObject, alignment);
        });

        return this;
    }

    styleFont(type: StarXpandCommand.Printer.FontType): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleFont(this._nativeObject, type);
        });

        return this;
    }

    styleBold(enable: Boolean): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleBold(this._nativeObject, enable);
        });

        return this;
    }

    styleInvert(enable: Boolean): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleInvert(this._nativeObject, enable);
        });

        return this;
    }

    styleUnderLine(enable: Boolean): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleUnderLine(this._nativeObject, enable);
        });

        return this;
    }

    styleMagnification(parameter: StarXpandCommand.MagnificationParameter): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleMagnification(this._nativeObject, parameter.width, parameter.height);
        });

        return this;
    }

    styleCharacterSpace(width: number): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleCharacterSpace(this._nativeObject, width);
        });

        return this;
    }

    styleLineSpace(height: number): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleLineSpace(this._nativeObject, height);
        });

        return this;
    }

    styleHorizontalPositionTo(position: number): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleHorizontalPositionTo(this._nativeObject, position);
        });

        return this;
    }

    styleHorizontalPositionBy(position: number): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleHorizontalPositionBy(this._nativeObject, position);
        });

        return this;
    }

    styleHorizontalTabPositions(positions: Array<number>): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleHorizontalTabPositions(this._nativeObject, positions);
        });

        return this;
    }

    styleInternationalCharacter(type: StarXpandCommand.Printer.InternationalCharacterType): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleInternationalCharacter(this._nativeObject, type);
        });

        return this;
    }

    styleSecondPriorityCharacterEncoding(type: StarXpandCommand.Printer.CharacterEncodingType): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleSecondPriorityCharacterEncoding(this._nativeObject, type);
        });

        return this;
    }

    styleCjkCharacterPriority(types: Array<StarXpandCommand.Printer.CjkCharacterType>): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.styleCjkCharacterPriority(this._nativeObject, types);
        });

        return this;
    }

    actionCut(type: StarXpandCommand.Printer.CutType): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.actionCut(this._nativeObject, type);
        });

        return this;
    }

    actionFeed(height: number): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.actionFeed(this._nativeObject, height);
        });

        return this;
    }

    actionFeedLine(lines: number): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.actionFeedLine(this._nativeObject, lines);
        });

        return this;
    }

    actionPrintText(content: string): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.actionPrintText(this._nativeObject, content);
        });

        return this;
    }

    actionPrintLogo(parameter: StarXpandCommand.Printer.LogoParameter): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.actionPrintLogo(this._nativeObject, parameter.keyCode);
        });

        return this;
    }

    actionPrintBarcode(parameter: StarXpandCommand.Printer.BarcodeParameter): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.actionPrintBarcode(this._nativeObject, parameter.content, parameter.symbology, parameter.printHri, parameter.barDots, parameter.barRatioLevel, parameter.height);
        });

        return this;
    }

    actionPrintPdf417(parameter: StarXpandCommand.Printer.Pdf417Parameter): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.actionPrintPdf417(this._nativeObject, parameter.content, parameter.column, parameter.line, parameter.module, parameter.aspect, parameter.level);
        });

        return this;
    }

    actionPrintQRCode(parameter: StarXpandCommand.Printer.QRCodeParameter): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.actionPrintQRCode(this._nativeObject, parameter.content, parameter.model, parameter.level, parameter.cellSize);
        });

        return this;
    }

    actionPrintImage(parameter: StarXpandCommand.Printer.ImageParameter): PrinterBuilder {
        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.actionPrintImage(this._nativeObject, parameter.source, parameter.width, parameter.effectDiffusion, parameter.threshold);
        });

        return this;
    }

    add(builder: PrinterBuilder): PrinterBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.PrinterBuilderWrapper.add(this._nativeObject, builder._nativeObject);
        });

        return this;
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.PrinterBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.PrinterBuilderWrapper.dispose(nativeObject);
    }
}