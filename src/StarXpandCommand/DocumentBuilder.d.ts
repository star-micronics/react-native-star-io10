import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class DocumentBuilder extends BaseStarXpandCommandBuilder {
    _parameters: Map<string, any>;
    private topContentsIndex;
    constructor();
    settingTopMargin(height: number): DocumentBuilder;
    settingBlackMark(parameter: StarXpandCommand.Printer.BlackMarkParameter): DocumentBuilder;
    settingLabel(parameter: StarXpandCommand.Printer.LabelParameter): DocumentBuilder;
    settingHoldPrint(parameter: StarXpandCommand.Printer.HoldPrintParameter): DocumentBuilder;
    settingPrintableArea(width: number): DocumentBuilder;
    addPrinter(builder: StarXpandCommand.PrinterBuilder): DocumentBuilder;
    addDrawer(builder: StarXpandCommand.DrawerBuilder): DocumentBuilder;
    addBuzzer(builder: StarXpandCommand.BuzzerBuilder): DocumentBuilder;
    addMelodySpeaker(builder: StarXpandCommand.MelodySpeakerBuilder): DocumentBuilder;
    addDisplay(builder: StarXpandCommand.DisplayBuilder): DocumentBuilder;
    addRaw(content: Array<number>): DocumentBuilder;
}
