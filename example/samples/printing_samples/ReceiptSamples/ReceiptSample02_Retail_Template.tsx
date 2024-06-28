import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class ReceiptSample02_Retail_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleAlignment(Alignment.Center)
                        .add(
                            new PrinterBuilder()
                                .styleInvert(true)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "${store_name}\n",
                                    new TextParameter()
                                        .setWidth(
                                            24,
                                            new TextWidthParameter().setAlignment(TextAlignment.Center)
                                        )
                                )
                        )
                        .styleAlignment(Alignment.Left)
                        .actionPrintText(
                            "${order_number}",
                            new TextParameter()
                                .setWidth(24)
                        )
                        .actionPrintText(
                            "${datetime}\n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "${order_types}",
                            new TextParameter()
                                .setWidth(24)
                        )
                        .actionPrintText(
                            "Served by ${staff_name}\n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "Transaction ${transaction}\n"
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .add(
                            new PrinterBuilder(
                                new PrinterParameter()
                                    .setTemplateExtension(
                                        new TemplateExtensionParameter()
                                            .setEnableArrayFieldData(true)
                                    )
                            )
                                .actionPrintText(
                                    "${item_list.quantity} x ${item_list.name}",
                                    new TextParameter()
                                        .setWidth(37)
                                )
                                .actionPrintText(
                                    " "
                                )
                                .actionPrintText(
                                    "${item_list.price%8.2f} T\n",
                                    new TextParameter()
                                        .setWidth(
                                            10,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                                .actionPrintText(
                                    "${item_list.detail}"
                                )
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .actionPrintText(
                            "Subtotal"
                        )
                        .actionPrintText(
                            "${subtotal_price%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    40,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "Tax"
                        )
                        .actionPrintText(
                            "${tax%8.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    45,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .styleBold(true)
                        .actionPrintText(
                            "Total"
                        )
                        .actionPrintText(
                            "${total_price%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    43,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .styleBold(false)
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .actionPrintText(
                            "${payment_method}",
                            new TextParameter()
                                .setWidth(24)
                        )
                        .actionPrintText(
                            "${payment_amount%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .styleAlignment(Alignment.Center)
                        .actionPrintText(
                            "${address}\n" +
                            "${telephone_number}\n" +
                            "${footer}\n"
                        )
                        .actionPrintBarcode(
                            new BarcodeParameter("${barcode}", BarcodeSymbology.Code128)
                                .setBarDots(1)
                                .setPrintHri(true)
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}