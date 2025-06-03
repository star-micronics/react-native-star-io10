import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { BaseMagnification } from 'react-native-star-io10/src/StarXpandCommand/Printer/BaseMagnification';
import { BaseMagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BaseMagnificationParameter';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class LabelSample02_For203dpiAnd300dpi_DrinkLabel1_Template {
    static async createDrinkLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                // Change the printable area setting for this layout according to the printer resolution.
                // 48.0 for 203dpi, 48.7 for 300dpi
                .settingPrintableArea(48.0)
                //.settingPrintableArea(48.7)
                .addPrinter(
                    new StarXpandCommand.PrinterBuilder()
                        // By setting the base print size of text to x1.5 for 300dpi,
                        // you can print text at the same size as 203dpi.
                        //.styleBaseMagnification(new BaseMagnificationParameter().setText(BaseMagnification.X1_5))
                        .styleBold(true)
                        .actionPrintText(
                            "Item:\t${item_number} of ${number_of_items}\n"
                        )
                        .add(
                            new StarXpandCommand.PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .actionPrintText(
                                    "${customer_name}\n${item_name}\n"
                                )
                        )
                        .actionPrintText(
                            "${order_detail}\n" +
                                    "\n" +
                                    "Time:\t${time}\n" +
                                    "Reg:\t${register}\n" +
                                    "\n" +
                                    "--------------------------------\n"
                        )
                        .add(
                            new StarXpandCommand.PrinterBuilder()
                                .styleBold(true)
                                .actionPrintText(
                                    "${note}\n"
                                )
                        )
                        .actionPrintText(
                            "--------------------------------\n"
                        )
                        .actionCut(CutType.Partial)
                )
        );

        return await builder.getCommands();
    }
}