import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class LabelSample13_For203dpiAnd300dpi_FoodProductLabel_Template {
    static async createFoodProductLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
        // Change the printable area setting for this layout according to the printer resolution.
        // 72.0 for 203dpi, 48.7 for 300dpi
        .settingPrintableArea(72.0)
        //.settingPrintableArea(48.7)
        .addPrinter(
            new StarXpandCommand.PrinterBuilder()
                .styleAlignment(Alignment.Center)
                .styleBold(true)
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .actionPrintText(
                            "${name}\n"
                        )
                )
                .actionPrintText(
                    "${message}\n" +
                    "------------------------------------------------\n" +
                    "MFG ${manufacturing_date}\n" +
                    "------------------------------------------------\n" +
                    "${note}\n"
                )
                .actionCut(CutType.Partial)
            )
        );

        return await builder.getCommands();
    }
}