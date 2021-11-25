import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarIO10ErrorFactory } from '../StarIO10ErrorFactory';
import { StarXpandCommand } from '../../index';

export class PageModeBuilder extends BaseStarXpandCommandBuilder {
    stylePrintDirection(direction: StarXpandCommand.Printer.PageModePrintDirection): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.stylePrintDirection(this._nativeObject, direction)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleFont(type: StarXpandCommand.Printer.FontType): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleFont(this._nativeObject, type)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleBold(enable: boolean): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleBold(this._nativeObject, enable)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleInvert(enable: boolean): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleInvert(this._nativeObject, enable)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleUnderLine(enable: boolean): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleUnderLine(this._nativeObject, enable)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleMagnification(parameter: StarXpandCommand.MagnificationParameter): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleMagnification(this._nativeObject, parameter.width, parameter.height)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleCharacterSpace(width: number): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleCharacterSpace(this._nativeObject, width)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleLineSpace(height: number): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleLineSpace(this._nativeObject, height)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleVerticalPositionTo(position: number): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleVerticalPositionTo(this._nativeObject, position)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleVerticalPositionBy(position: number): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleVerticalPositionBy(this._nativeObject, position)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleHorizontalPositionTo(position: number): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleHorizontalPositionTo(this._nativeObject, position)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleHorizontalPositionBy(position: number): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleHorizontalPositionBy(this._nativeObject, position)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleHorizontalTabPositions(positions: Array<number>): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleHorizontalTabPositions(this._nativeObject, positions)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleInternationalCharacter(type: StarXpandCommand.Printer.InternationalCharacterType): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleInternationalCharacter(this._nativeObject, type)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleSecondPriorityCharacterEncoding(type: StarXpandCommand.Printer.CharacterEncodingType): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleSecondPriorityCharacterEncoding(this._nativeObject, type)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleCjkCharacterPriority(types: Array<StarXpandCommand.Printer.CjkCharacterType>): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.styleCjkCharacterPriority(this._nativeObject, types)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionPrintText(content: string): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.actionPrintText(this._nativeObject, content)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionPrintBarcode(parameter: StarXpandCommand.Printer.BarcodeParameter): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.actionPrintBarcode(this._nativeObject, parameter.content, parameter.symbology, parameter.printHri, parameter.barDots, parameter.barRatioLevel, parameter.height)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionPrintPdf417(parameter: StarXpandCommand.Printer.Pdf417Parameter): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.actionPrintPdf417(this._nativeObject, parameter.content, parameter.column, parameter.line, parameter.module, parameter.aspect, parameter.level)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionPrintQRCode(parameter: StarXpandCommand.Printer.QRCodeParameter): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.actionPrintQRCode(this._nativeObject, parameter.content, parameter.model, parameter.level, parameter.cellSize)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionPrintImage(parameter: StarXpandCommand.Printer.ImageParameter): PageModeBuilder {
        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.actionPrintImage(this._nativeObject, parameter.source, parameter.width, parameter.effectDiffusion, parameter.threshold)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    add(builder: PageModeBuilder): PageModeBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.PageModeBuilderWrapper.add(this._nativeObject, builder._nativeObject)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.PageModeBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.PageModeBuilderWrapper.dispose(nativeObject);
    }
}