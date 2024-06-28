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

export class ReceiptSample01_OnlineOrder_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .styleBold(true)
                                .actionPrintText(
                                    "${store_name}\n" +
                                    "${order_number}\n"
                                )
                        )
                        .actionPrintText(
                            "${name}\n"
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.3)
                        )
                        .actionFeed(1.0)
                        .actionPrintText(
                            "${date}",
                            new TextParameter()
                                .setWidth(24)
                        )
                        .actionPrintText(
                            "${time}\n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionFeed(1.0)
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .styleAlignment(Alignment.Center)
                        .actionPrintText(
                            "PICKUP ${pickup_time}\n"
                        )
                        .styleAlignment(Alignment.Left)
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
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
                                    "${item_list.quantity} x ${item_list.name}\n"
                                )
                                .styleBold(false)
                                .actionPrintText(
                                    "${item_list.detail}"
                                )
                                .actionFeedLine(1)
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .actionFeed(1.0)
                        .actionPrintText(
                            "${note}\n"
                        )
                        .actionFeed(1.0)
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .actionPrintText(
                            "${footer1}",
                            new TextParameter()
                                .setWidth(24)
                        )
                        .actionPrintText(
                            "\${footer2}\n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}