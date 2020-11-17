import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class DocumentBuilder extends BaseStarXpandCommandBuilder {
    settingTopMargin(height: Number): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.settingTopMargin(this._nativeObject, height);
        });

        return this;
    }

    settingBlackMark(parameter: StarXpandCommand.Printer.BlackMarkParameter): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.settingBlackMark(this._nativeObject, parameter.start, parameter.end, parameter.position);
        });

        return this;
    }

    settingLabel(parameter: StarXpandCommand.Printer.LabelParameter): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.settingLabel(this._nativeObject, parameter.start, parameter.end);
        });

        return this;
    }

    settingHoldPrint(parameter: StarXpandCommand.Printer.HoldPrintParameter): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.settingHoldPrint(this._nativeObject, parameter.enable);
        });

        return this;
    }

    settingPrintableArea(width: Number): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.settingPrintableArea(this._nativeObject, width);
        });

        return this;
    }

    addPrinter(builder: StarXpandCommand.PrinterBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addPrinter(this._nativeObject, builder._nativeObject);
        });

        return this;
    }

    addDrawer(builder: StarXpandCommand.DrawerBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addDrawer(this._nativeObject, builder._nativeObject);
        });

        return this;
    }

    addBuzzer(builder: StarXpandCommand.BuzzerBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addBuzzer(this._nativeObject, builder._nativeObject);
        });

        return this;
    }

    addMelodySpeaker(builder: StarXpandCommand.MelodySpeakerBuilder): DocumentBuilder {
        this._addChild(builder);

        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addMelodySpeaker(this._nativeObject, builder._nativeObject);
        });

        return this;
    }

    addRaw(content: Array<Number>): DocumentBuilder {
        this._addAction(async() => {
            await NativeModules.DocumentBuilderWrapper.addRaw(this._nativeObject, content);
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