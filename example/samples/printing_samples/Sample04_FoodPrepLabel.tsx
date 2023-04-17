import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';

export class Sample04_FoodPrepLabel {
    static async createFoodPrepLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
        .addPrinter(
            new StarXpandCommand.PrinterBuilder()
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleAlignment(Alignment.Right)
                        .styleBold(true)
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .actionPrintText(
                            "WEDNESDAY\n"
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
                            "Lettuce\n"
                        )
                )
                .actionPrintText(
                    "Prepared On\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .actionPrintText(
                            "3/24/2021\n"
                        )
                )
                .actionPrintText(
                    "Used by\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .actionPrintText(
                            "3/25/2021\n"
                        )
                )
                .actionPrintRuledLine(
                    new RuledLineParameter(48.0)
                )
                .actionPrintText(
                    "User: A. Star   Manager: M. Star\n"
                )
                .actionCut(CutType.Partial)
        )
        );
        
        return await builder.getCommands();
    }
}