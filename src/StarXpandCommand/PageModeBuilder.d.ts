import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class PageModeBuilder extends BaseStarXpandCommandBuilder {
    _parameter: StarXpandCommand.Printer.PageModeParameter | undefined;
    _parameters: Map<string, any>;
    constructor();
    constructor(parameter: StarXpandCommand.Printer.PageModeParameter | undefined);
    stylePrintDirection(direction: StarXpandCommand.Printer.PageModePrintDirection): PageModeBuilder;
    styleFont(type: StarXpandCommand.Printer.FontType): PageModeBuilder;
    styleBold(enable: boolean): PageModeBuilder;
    styleInvert(enable: boolean): PageModeBuilder;
    styleUnderLine(enable: boolean): PageModeBuilder;
    styleMagnification(parameter: StarXpandCommand.MagnificationParameter): PageModeBuilder;
    styleBaseMagnification(parameter: StarXpandCommand.Printer.BaseMagnificationParameter): PageModeBuilder;
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
    styleAmbiguousCharacterWidthType(type: StarXpandCommand.Printer.AmbiguousCharacterWidthType): PageModeBuilder;
    actionPrintText(content: string, parameter?: StarXpandCommand.Printer.TextParameter | undefined): PageModeBuilder;
    actionPrintBarcode(parameter: StarXpandCommand.Printer.BarcodeParameter): PageModeBuilder;
    actionPrintPdf417(parameter: StarXpandCommand.Printer.Pdf417Parameter): PageModeBuilder;
    actionPrintQRCode(parameter: StarXpandCommand.Printer.QRCodeParameter): PageModeBuilder;
    actionPrintImage(parameter: StarXpandCommand.Printer.PageModeImageParameter): PageModeBuilder;
    actionPrintRuledLine(parameter: StarXpandCommand.Printer.PageModeRuledLineParameter): PageModeBuilder;
    actionPrintRectangle(parameter: StarXpandCommand.Printer.PageModeRectangleParameter): PageModeBuilder;
    add(builder: StarXpandCommand.PageModeBuilder): PageModeBuilder;
    addPageMode(parameter: StarXpandCommand.Printer.PageModeAreaParameter, builder: StarXpandCommand.PageModeBuilder): PageModeBuilder;
}
