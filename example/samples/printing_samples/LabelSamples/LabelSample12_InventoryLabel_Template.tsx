import { StarXpandCommand } from 'react-native-star-io10';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class LabelSample12_InventoryLabel_Template {
    static async createInventoryLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
        .settingPrintableArea(72.0)
        .addPrinter(
            new StarXpandCommand.PrinterBuilder()
            .styleAlignment(Alignment.Center)
            .add(
                new StarXpandCommand.PrinterBuilder()
                    .styleBold(true)
                    .styleUnderLine(true)
                    .actionPrintText(
                        "${name}\n"
                    )
            )
            .actionPrintText(
                "P/N: ${parts_number%06u}\n"
            )
            .actionPrintBarcode(
                new BarcodeParameter("${sku}", BarcodeSymbology.Code39)
                    .setBarDots(3)
                    .setHeight(18.0)
                    .setPrintHri(true)
            )
            .actionPrintText(
                "\n" +
                        "ABC: ${abc}\n"
            )
            .actionCut(CutType.Partial)
        )
        );

        return await builder.getCommands();
    }
}