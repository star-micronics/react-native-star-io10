import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class LabelSample11_ShippingAddressLabel_Template {
    static async createShippingAddressLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
        .settingPrintableArea(72.0)
        .addPrinter(
            new StarXpandCommand.PrinterBuilder()
                .styleAlignment(Alignment.Center)
                .styleMagnification(new MagnificationParameter(2, 2))
                .actionPrintText(
                    "${name}\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleBold(true)
                        .actionPrintText(
                            "${company}\n"
                        )
                )
                .actionPrintText(
                    "${address}\n"
                )
                .styleBold(true)
                .actionPrintText(
                    "${country}\n"
                )
                .actionCut(CutType.Partial)
        )
        );

        return await builder.getCommands();
    }
}