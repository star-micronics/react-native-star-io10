import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class DisplayBuilder extends BaseStarXpandCommandBuilder {
    styleInternationalCharacter(type: StarXpandCommand.Display.InternationalCharacterType): DisplayBuilder;
    styleCharacterEncoding(type: StarXpandCommand.Display.CharacterEncodingType): DisplayBuilder;
    styleCursorPositionTo(parameter: StarXpandCommand.Display.PositionParameter): DisplayBuilder;
    actionClearLine(): DisplayBuilder;
    actionClearAll(): DisplayBuilder;
    actionSetBackLightState(on: boolean): DisplayBuilder;
    actionSetCursorState(state: StarXpandCommand.Display.CursorState): DisplayBuilder;
    actionSetContrast(value: StarXpandCommand.Display.Contrast): DisplayBuilder;
    actionShowText(content: string): DisplayBuilder;
    actionShowImage(parameter: StarXpandCommand.Display.ImageParameter): DisplayBuilder;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
