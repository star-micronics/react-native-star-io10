import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class Sample06_ShippingAddressLabel {
    static async createShippingAddressLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
        .addPrinter(
            new StarXpandCommand.PrinterBuilder()
                .styleAlignment(Alignment.Center)
                .styleMagnification(new MagnificationParameter(2, 2))
                .actionPrintText(
                    "FAO:John Smith\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleBold(true)
                        .actionPrintText(
                            "Star Clothing Boutique\n"
                        )
                )
                .actionPrintText(
                    "123 Star Road, City,\nState 12345\n"
                )
                .styleBold(true)
                .actionPrintText(
                    "U.S.A\n"
                )
                .actionCut(CutType.Partial)
        )
        );

        return await builder.getCommands();
    }
}