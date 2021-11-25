import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarIO10ErrorFactory } from '../StarIO10ErrorFactory';
import { StarXpandCommand } from '../../index';

export class DocumentBuilder extends BaseStarXpandCommandBuilder {
    settingTopMargin(height: number): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.settingTopMargin(this._nativeObject, height)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    settingBlackMark(parameter: StarXpandCommand.Printer.BlackMarkParameter): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.settingBlackMark(this._nativeObject, parameter.enable, parameter.position)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    settingLabel(parameter: StarXpandCommand.Printer.LabelParameter): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.settingLabel(this._nativeObject, parameter.enable)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    settingHoldPrint(parameter: StarXpandCommand.Printer.HoldPrintParameter): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.settingHoldPrint(this._nativeObject, parameter.enable)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    settingPrintableArea(width: number): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.settingPrintableArea(this._nativeObject, width)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    addPrinter(builder: StarXpandCommand.PrinterBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addPrinter(this._nativeObject, builder._nativeObject)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    addDrawer(builder: StarXpandCommand.DrawerBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addDrawer(this._nativeObject, builder._nativeObject)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    addBuzzer(builder: StarXpandCommand.BuzzerBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addBuzzer(this._nativeObject, builder._nativeObject)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    addMelodySpeaker(builder: StarXpandCommand.MelodySpeakerBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addMelodySpeaker(this._nativeObject, builder._nativeObject)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    addDisplay(builder: StarXpandCommand.DisplayBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addDisplay(this._nativeObject, builder._nativeObject)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    addRaw(content: Array<number>): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addRaw(this._nativeObject, content)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.DocumentBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.DocumentBuilderWrapper.dispose(nativeObject);
    }
}