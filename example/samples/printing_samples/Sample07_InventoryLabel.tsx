import { StarXpandCommand } from 'react-native-star-io10';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class Sample07_InventoryLabel {
    static async createInventoryLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
        .addPrinter(
            new StarXpandCommand.PrinterBuilder()
            .styleAlignment(Alignment.Center)
            .add(
                new StarXpandCommand.PrinterBuilder()
                    .styleBold(true)
                    .styleUnderLine(true)
                    .actionPrintText(
                        "Star TSP100IV\n"
                    )
            )
            .actionPrintText(
                "P/N: 000001\n"
            )
            .actionPrintBarcode(
                //TODO 2558271100031だと3inchに収まらない
                new BarcodeParameter("2558271100", BarcodeSymbology.Code39)
                    .setBarDots(3)
                    .setHeight(18.0)
                    .setPrintHri(true)
            )
            .actionPrintText(
                "\n" +
                        "ABC: WAREHOUSE\n"
            )
            .actionCut(CutType.Partial)
        )
        );

        return await builder.getCommands();
    }
}