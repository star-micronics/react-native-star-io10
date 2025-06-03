import { StarXpandCommand } from 'react-native-star-io10';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample18_For203dpiAnd300dpi_BarcodeLabel2_Wide_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                // Change the printable area setting for this layout according to the printer resolution.
                // 72.0 for 203dpi, 48.7 for 300dpi
                .settingPrintableArea(72.0)
                //.settingPrintableArea(48.7)
                .addPrinter(
                    new PrinterBuilder()
                        .styleAlignment(Alignment.Center)
                        .styleBold(true)
                        .actionPrintText(
                            "${product_name}\n"
                        )
                        .styleBold(false)
                        .actionPrintText(
                            "${parameter1} / ${parameter2} / ${parameter3} / ${parameter4}\n"
                        )
                        .actionPrintBarcode(
                            new BarcodeParameter("${sku}", BarcodeSymbology.UpcA)
                                .setBarDots(3)
                                .setHeight(12.0)
                                .setPrintHri(true)
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}