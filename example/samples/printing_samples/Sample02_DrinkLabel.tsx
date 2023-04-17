import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class Sample02_DrinkLabel {
    static async createDrinkLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .addPrinter(
                    new StarXpandCommand.PrinterBuilder()
                        .styleBold(true)
                        .actionPrintText(
                            "Item:   1 of 3\n"
                        )
                        .add(
                            new StarXpandCommand.PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .actionPrintText(
                                    "* Jane Smith *\n" +
                                            "Gr Icd Coffee\n"
                                )
                        )
                        .actionPrintText(
                            "No Classic\n" +
                                    "With Whole Milk\n" +
                                    "\n" +
                                    "Time:   4:14:29 PM\n" +
                                    "Reg:    9\n" +
                                    "\n" +
                                    "--------------------------------\n"
                        )
                        .add(
                            new StarXpandCommand.PrinterBuilder()
                                .styleBold(true)
                                .actionPrintText(
                                    ">MOBILE<\n"
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