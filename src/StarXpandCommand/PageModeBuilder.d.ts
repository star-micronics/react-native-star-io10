import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class PageModeBuilder extends BaseStarXpandCommandBuilder {
    stylePrintDirection(direction: StarXpandCommand.Printer.PageModePrintDirection): PageModeBuilder;
    styleFont(type: StarXpandCommand.Printer.FontType): PageModeBuilder;
    styleBold(enable: boolean): PageModeBuilder;
    styleInvert(enable: boolean): PageModeBuilder;
    styleUnderLine(enable: boolean): PageModeBuilder;
    styleMagnification(parameter: StarXpandCommand.MagnificationParameter): PageModeBuilder;
    styleCharacterSpace(width: number): PageModeBuilder;
    styleLineSpace(height: number): PageModeBuilder;
    styleVerticalPositionTo(position: number): PageModeBuilder;
    styleVerticalPositionBy(position: number): PageModeBuilder;
    styleHorizontalPositionTo(position: number): PageModeBuilder;
    styleHorizontalPositionBy(position: number): PageModeBuilder;
    styleHorizontalTabPositions(positions: Array<number>): PageModeBuilder;
    styleInternationalCharacter(type: StarXpandCommand.Printer.InternationalCharacterType): PageModeBuilder;
    styleSecondPriorityCharacterEncoding(type: StarXpandCommand.Printer.CharacterEncodingType): PageModeBuilder;
    styleCjkCharacterPriority(types: Array<StarXpandCommand.Printer.CjkCharacterType>): PageModeBuilder;
    actionPrintText(content: string): PageModeBuilder;
    actionPrintBarcode(parameter: StarXpandCommand.Printer.BarcodeParameter): PageModeBuilder;
    actionPrintPdf417(parameter: StarXpandCommand.Printer.Pdf417Parameter): PageModeBuilder;
    actionPrintQRCode(parameter: StarXpandCommand.Printer.QRCodeParameter): PageModeBuilder;
    actionPrintImage(parameter: StarXpandCommand.Printer.ImageParameter): PageModeBuilder;
    add(builder: PageModeBuilder): PageModeBuilder;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
