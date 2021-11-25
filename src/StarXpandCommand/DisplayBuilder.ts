import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarIO10ErrorFactory } from '../StarIO10ErrorFactory';
import { StarXpandCommand } from '../../index';

export class DisplayBuilder extends BaseStarXpandCommandBuilder {
    styleInternationalCharacter(type: StarXpandCommand.Display.InternationalCharacterType): DisplayBuilder {
        this._addAction(async() => {
            await NativeModules.DisplayBuilderWrapper.styleInternationalCharacter(this._nativeObject, type)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleCharacterEncoding(type: StarXpandCommand.Display.CharacterEncodingType): DisplayBuilder {
        this._addAction(async() => {
            await NativeModules.DisplayBuilderWrapper.styleCharacterEncoding(this._nativeObject, type)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    styleCursorPositionTo(parameter: StarXpandCommand.Display.PositionParameter): DisplayBuilder {
        this._addAction(async() => {
            await NativeModules.DisplayBuilderWrapper.styleCursorPositionTo(this._nativeObject, parameter.x, parameter.y)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionClearLine(): DisplayBuilder {
        this._addAction(async() => {
            await NativeModules.DisplayBuilderWrapper.actionClearLine(this._nativeObject)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionClearAll(): DisplayBuilder {
        this._addAction(async() => {
            await NativeModules.DisplayBuilderWrapper.actionClearAll(this._nativeObject)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionSetBackLightState(on: boolean): DisplayBuilder {
        this._addAction(async() => {
            await NativeModules.DisplayBuilderWrapper.actionSetBackLightState(this._nativeObject, on)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionSetCursorState(state: StarXpandCommand.Display.CursorState): DisplayBuilder {
        this._addAction(async() => {
            await NativeModules.DisplayBuilderWrapper.actionSetCursorState(this._nativeObject, state)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionSetContrast(value: StarXpandCommand.Display.Contrast): DisplayBuilder {
        this._addAction(async() => {
            await NativeModules.DisplayBuilderWrapper.actionSetContrast(this._nativeObject, value)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionShowText(content: string): DisplayBuilder {
        this._addAction(async() => {
            await NativeModules.DisplayBuilderWrapper.actionShowText(this._nativeObject, content)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    actionShowImage(parameter: StarXpandCommand.Display.ImageParameter): DisplayBuilder {
        this._addAction(async() => {
            await NativeModules.DisplayBuilderWrapper.actionShowImage(this._nativeObject, parameter.source, parameter.effectDiffusion, parameter.threshold)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
        });

        return this;
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.DisplayBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.DisplayBuilderWrapper.dispose(nativeObject);
    }
}