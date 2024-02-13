import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class LabelSample02_DrinkLabel_Template {
    static async createDrinkLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(48.0)
                .addPrinter(
                    new StarXpandCommand.PrinterBuilder()
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