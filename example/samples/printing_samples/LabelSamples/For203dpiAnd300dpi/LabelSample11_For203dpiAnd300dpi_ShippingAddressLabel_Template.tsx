import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class LabelSample11_For203dpiAnd300dpi_ShippingAddressLabel_Template {
    static async createShippingAddressLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
        // Change the printable area setting for this layout according to the printer resolution.
        // 72.0 for 203dpi, 48.7 for 300dpi
        .settingPrintableArea(72.0)
        //.settingPrintableArea(48.7)
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