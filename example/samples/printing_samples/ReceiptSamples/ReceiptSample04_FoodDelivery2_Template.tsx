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

export class ReceiptSample04_FoodDelivery2_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .add(
                            new PrinterBuilder()
                                .styleBold(true)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "${store_name}\n"
                                )
                                .styleInvert(true)
                                .actionPrintText(
                                    "${order_number}",
                                    new TextParameter()
                                        .setWidth(
                                            7,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Left)
                                        )
                                )
                                .styleBold(false)
                                .actionPrintText(
                                    "${customer_name}\n",
                                    new TextParameter()
                                        .setWidth(
                                            17,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                        )
                        .actionPrintText(
                            "Placed at ${placed_at}\n"
                        )
                        .styleBold(true)
                        .actionPrintText(
                            "Due at ${due_at}"
                        )
                        .styleBold(false)
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .add(
                            new PrinterBuilder()
                                .actionFeed(4.0)
                                .styleAlignment(Alignment.Center)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "${order_types}\n"
                                )
                                .actionFeed(2.0)
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .actionPrintText(
                            "Disposable items:${disposable_items}\n"
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
                                .styleBold(true)
                                .actionPrintText(
                                    "${item_list.quantity} x ${item_list.name}",
                                    new TextParameter()
                                        .setWidth(39)
                                )
                                .actionPrintText(
                                    " "
                                )
                                .styleBold(false)
                                .actionPrintText(
                                    "$${item_list.price%.2f}\n",
                                    new TextParameter()
                                        .setWidth(
                                            8,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                                .actionPrintText(
                                    "${item_list.detail1}" +
                                    "${item_list.detail2}" +
                                    "${item_list.detail3}" +
                                    "${item_list.detail4}"
                                )
                                .actionFeed(1.0)
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .actionPrintText(
                            "Subtotal"
                        )
                        .actionPrintText(
                            "$${subtotal%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    40,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .styleBold(true)
                        .actionPrintText(
                            "Amount paid"
                        )
                        .actionPrintText(
                            "$${total%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    37,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .styleBold(false)
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .styleAlignment(Alignment.Center)
                        .actionPrintText(
                            "${note}"
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}