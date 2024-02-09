import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class Sample08_FoodProductLabel {
    static async createFoodProductLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
        .addPrinter(
            new StarXpandCommand.PrinterBuilder()
                .styleAlignment(Alignment.Center)
                .styleBold(true)
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .actionPrintText(
                            "Star's Lunch Box -A-\n"
                        )
                )
                .actionPrintText(
                    "Use special sauce as you like\n" +
                    "------------------------------------------------\n" +
                    "MFG 2021/4/1\n" +
                    "------------------------------------------------\n" +
                    "Contains Wheat, Milk, and Soy.\n" +
                    "May Contains Sesame.\n"
                )
                .actionCut(CutType.Partial)
            )
        );

        return await builder.getCommands();
    }
}