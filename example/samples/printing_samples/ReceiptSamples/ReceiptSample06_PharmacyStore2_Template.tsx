import { StarXpandCommand } from 'react-native-star-io10';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { ImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/ImageParameter';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class ReceiptSample06_PharmacyStore2_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleAlignment(Alignment.Center)
                        .styleLineSpace(3.0)
                        .actionPrintImage(
                            new ImageParameter("logo_01.png", 300)
                        )
                        .actionPrintText(
                            "${address}\n" +
                            "${telephone_number}"
                        )
                        .styleAlignment(Alignment.Left)
                        .actionFeedLine(1)
                        .actionPrintText(
                            "208            7820   0021"
                        )
                        .styleHorizontalPositionTo(0.0)
                        .actionPrintText(
                            "${datetime}\n",
                            new TextParameter()
                                .setWidth(
                                    48,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Center)
                        .styleBold(true)
                        .actionPrintText(
                            "<< BUY 1 GET 1 EQUAL/LESS VALUE 50% OFF >>\n"
                        )
                        .styleAlignment(Alignment.Left)
                        .styleBold(false)
                        .add(
                            new PrinterBuilder(
                                new PrinterParameter()
                                    .setTemplateExtension(
                                        new TemplateExtensionParameter()
                                            .setEnableArrayFieldData(true)
                                    )
                            )
                                .actionPrintText(
                                    "${item_list1.name}\n",
                                    new TextParameter()
                                        .setWidth(48)
                                )
                                .actionPrintText(
                                    "    ${item_list1.product_number}",
                                    new TextParameter()
                                        .setWidth(30)
                                )
                                .actionPrintText(
                                    " "
                                )
                                .actionPrintText(
                                    "${item_list1.tax_mark}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .actionPrintText(
                                    "${item_list1.price%.2f}",
                                    new TextParameter()
                                        .setWidth(
                                            10,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                                .actionPrintText(
                                    " ${item_list1.remarks}\n",
                                    new TextParameter()
                                        .setWidth(6)
                                )
                                .actionPrintText(
                                    "${item_list1.detail1}" +
                                    "${item_list1.detail2}" +
                                    "${item_list1.detail3}"
                                )
                        )
                        .actionPrintText(
                            "************************************************\n"
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
                                    "${item_list2.name}\n",
                                    new TextParameter()
                                        .setWidth(48)
                                )
                                .actionPrintText(
                                    "    ${item_list2.product_number}",
                                    new TextParameter()
                                        .setWidth(30)
                                )
                                .actionPrintText(
                                    " "
                                )
                                .actionPrintText(
                                    "${item_list2.tax_mark}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .actionPrintText(
                                    "${item_list2.price%.2f}",
                                    new TextParameter()
                                        .setWidth(
                                            10,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                                .actionPrintText(
                                    " ${item_list2.remarks}\n",
                                    new TextParameter()
                                        .setWidth(6)
                                )
                                .actionPrintText(
                                    "${item_list2.detail1}" +
                                    "${item_list2.detail2}" +
                                    "${item_list2.detail3}" +
                                    "${item_list2.detail4}"
                                )
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "    SUBTOTAL"
                        )
                        .actionPrintText(
                            "${subtotal%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    30,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "    SALES TAX A=6.75%"
                        )
                        .actionPrintText(
                            "${sales_tax%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    21,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "    TOTAL"
                        )
                        .actionPrintText(
                            "${total_price%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    33,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "    ${payment_method}",
                            new TextParameter()
                                .setWidth(24)
                        )
                        .actionPrintText(
                            "${payment_amount%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    18,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "    CHANGE"
                        )
                        .actionPrintText(
                            "${change%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    32,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionFeedLine(3)
                        .actionPrintText(
                            "MYSTAR SAVINGS"
                        )
                        .actionPrintText(
                            "${my_serving%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    28,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "MFG COUPON SAVINGS"
                        )
                        .actionPrintText(
                            "${mfg_serving%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "THANK YOU FOR SHOPPING AT STAR SHOP\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "${note}\n"
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Center)
                        .actionPrintText(
                            "RFN# ${rfn}\n"
                        )
                        .actionPrintBarcode(
                            new BarcodeParameter("${barcode}", BarcodeSymbology.Code128)
                                .setBarDots(1)
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "************************************************\n"
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}