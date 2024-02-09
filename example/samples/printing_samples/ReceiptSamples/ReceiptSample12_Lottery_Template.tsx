import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { ImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/ImageParameter';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class ReceiptSample12_Lottery_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleAlignment(Alignment.Center)
                        .styleLineSpace(3.0)
                        .actionPrintImage(new ImageParameter("logo_01.png", 400))
                        .actionFeedLine(1)
                        .add(
                            new PrinterBuilder(
                                new PrinterParameter()
                                    .setTemplateExtension(
                                        new TemplateExtensionParameter()
                                            .setEnableArrayFieldData(true)
                                    )
                            )
                                .styleBold(true)
                                .actionPrintText(
                                    "${item_list.header}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    " ${item_list.number_1%02d}" +
                                    " ${item_list.number_2%02d}" +
                                    " ${item_list.number_3%02d}" +
                                    " ${item_list.number_4%02d}" +
                                    " ${item_list.number_5%02d}"
                                )
                                .styleMagnification(new MagnificationParameter(1, 1))
                                .actionPrintText(
                                    " OP"
                                )
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    " ${item_list.number_6%02d}"
                                )
                                .styleMagnification(new MagnificationParameter(1, 1))
                                .actionPrintText(
                                    " OP\n"
                                )
                        )
                        .actionFeedLine(1)
                        .add(
                            new PrinterBuilder()
                                .styleBold(true)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "${winning_day}\n" +
                                    "$${price%.2f}\n"
                                )
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "${sales_number}\n" +
                            "${datetime}\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "${note}\n"
                        )
                        .actionPrintBarcode(
                            new BarcodeParameter("${barcode}", BarcodeSymbology.Code128)
                                .setHeight(7.0)
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}