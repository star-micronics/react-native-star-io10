import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class Sample05_FoodDelivery {
    static async createFoodDeliveryReceipt(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
        .addPrinter(new StarXpandCommand.PrinterBuilder()
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleBold(true)
                .styleMagnification(new MagnificationParameter(3, 3))
                .actionPrintText(
                    "Star Eats\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleInvert(true)
                        .actionPrintText(
                            "8A720  Micronics\n"
                        )
                )
        )
        .styleAlignment(Alignment.Center)
        .actionPrintText(
            "Placed at March 24 2021 1:30PM\n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleUnderLine(true)
                .actionPrintText(
                    "                                                \n"
                )
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleBold(true)
                .styleMagnification(new MagnificationParameter(2, 2))
                .actionPrintText(
                    "DELIVERY\n"
                )
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleUnderLine(true)
                .actionPrintText(
                    "                                                \n"
                )
        )
        .styleAlignment(Alignment.Left)
        .actionPrintText(
            "1XStar's lunch box A *                    $10.95\n" +
            "------------------------------------------------\n" +
            "Subtotal                                   $0.97\n" +
            "Amount paid                               $11.92\n" +
            "item 1                                    $10.00\n" +
            "------------------------------------------------\n" +
            "*Use special source as you like!\n"
        )
        .actionCut(CutType.Partial)
        )
        );

        return await builder.getCommands();
    }
}