import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class ReceiptSample03_FoodDelivery1_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleAlignment(Alignment.Center)
                        .styleBold(true)
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .actionPrintText(
                            "${store_name}\n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Center)
                                )
                        )
                        .styleAlignment(Alignment.Left)
                        .styleBold(false)
                        .actionPrintText(
                            "------------------------"
                        )
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 1))
                                .actionPrintText(
                                    "Customer Name\n"
                                )
                        )
                        .styleBold(true)
                        .actionPrintText(
                            "${customer_name}\n"
                        )
                        .styleBold(false)
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 1))
                                .actionPrintText(
                                    "Delivery\n"
                                )
                        )
                        .actionPrintText(
                            "${staff_name}\n"
                        )
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 1))
                                .actionPrintText(
                                    "Delivery Pickup Time\n"
                                )
                        )
                        .actionPrintText(
                            "${pickup_time}\n"
                        )
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 1))
                                .actionPrintText(
                                    "Order Number\n"
                                )
                        )
                        .actionPrintText(
                            "${order_number}\n"
                        )
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 1))
                                .actionPrintText(
                                    "Total Items\n"
                                )
                        )
                        .actionPrintText(
                            "${total_items} items\n"
                        )
                        .actionPrintText(
                            "------------------------"
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
                                    "${item_list.quantity}x${item_list.name}",
                                    new TextParameter()
                                        .setWidth(18)
                                )
                                .actionPrintText(
                                    " "
                                )
                                .actionPrintText(
                                    "$${item_list.price%.2f}\n",
                                    new TextParameter()
                                        .setWidth(
                                            5,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right))
                                )
                                .actionPrintText(
                                    "${item_list.detail}"
                                )
                                .actionPrintText(
                                    "------------------------\n"
                                )
                        )
                        .actionPrintText(
                            "${total_items} totalitems\n"
                        )
                        .actionPrintText(
                            "Subtotal"
                        )
                        .actionPrintText(
                            "$${subtotal%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    16,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .styleBold(true)
                        .actionPrintText(
                            "Total"
                        )
                        .actionPrintText(
                            "$${total%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    19,
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