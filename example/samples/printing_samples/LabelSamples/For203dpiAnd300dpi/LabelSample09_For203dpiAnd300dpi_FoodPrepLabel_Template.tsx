import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';

export class LabelSample09_For203dpiAnd300dpi_FoodPrepLabel_Template {
    static async createFoodPrepLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
        // Change the printable area setting for this layout according to the printer resolution.
        // 48.0 for 203dpi, 48.7 for 300dpi
        .settingPrintableArea(48.0)
        //.settingPrintableArea(48.7)
        .addPrinter(
            new StarXpandCommand.PrinterBuilder()
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleAlignment(Alignment.Right)
                        .styleBold(true)
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .actionPrintText(
                            "${day_of_week}\n"
                        )
                )
                .styleAlignment(Alignment.Left)
                .actionPrintText(
                    "Product\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .actionPrintText(
                            "${product}\n"
                        )
                )
                .actionPrintText(
                    "Prepared On\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .actionPrintText(
                            "${prepared_on}\n"
                        )
                )
                .actionPrintText(
                    "Used by\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .actionPrintText(
                            "${used_by}\n"
                        )
                )
                .actionPrintRuledLine(
                    new RuledLineParameter(48.0)
                )
                .actionPrintText(
                    "User: ${user} ",
                    new TextParameter()
                        .setWidth(16)
                )
                .actionPrintText(
                    "Manager: ${manager}\n",
                    new TextParameter()
                        .setWidth(16)
                )
                .actionCut(CutType.Partial)
        )
        );
        
        return await builder.getCommands();
    }
}