import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class ReceiptSample09_Order1_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .add(
                            new PrinterBuilder()
                                .styleAlignment(Alignment.Center)
                                .styleLineSpace(0.0)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "${header}\n"
                                )
                                .styleBold(true)
                                .styleInvert(true)
                                .actionPrintText(
                                    "${title}\n",
                                    new TextParameter()
                                        .setWidth(
                                            24,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Center)
                                        )
                                )
                        )
                        .actionFeed(2.0)
                        .actionPrintText(
                            "#${number}",
                            new TextParameter()
                                .setWidth(10)
                        )
                        .actionPrintText(
                            "${datetime}\n",
                            new TextParameter()
                                .setWidth(
                                    38,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .styleBold(true)
                        .actionPrintText(
                            "${store_name}",
                            new TextParameter()
                                .setWidth(20)
                        )
                        .styleBold(false)
                        .actionPrintText(
                            "${order_number}\n",
                            new TextParameter()
                                .setWidth(
                                    28,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "${customer_name}\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                        )
                        .add(
                            new PrinterBuilder()
                                .styleBold(true)
                                .actionPrintText(
                                    "# Item"
                                )
                                .actionPrintText(
                                    "Cst.#\n",
                                    new TextParameter()
                                        .setWidth(
                                            42,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
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
                                    "${item_list.quantity}",
                                    new TextParameter()
                                        .setWidth(2)
                                )
                                .actionPrintText(
                                    "${item_list.name}",
                                    new TextParameter()
                                        .setWidth(41)
                                )
                                .actionPrintText(
                                    "${item_list.cost}\n",
                                    new TextParameter()
                                        .setWidth(
                                            5,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}