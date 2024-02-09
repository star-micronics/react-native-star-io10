import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class LabelSample03_DrinkLabel2_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(48.0)
                .addPrinter(
                    new PrinterBuilder()
                        .actionPrintText(
                            "Item: ${item_number%2d} of ${number_of_items}\n"
                        )
                        .actionPrintText(
                            "Items in order: ${items_in_order}"
                        )
                        .add(
                            new PrinterBuilder()
                                .styleBold(true)
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .actionFeed(6.0)
                                .actionPrintText(
                                    "${customer_name}"
                                )
                                .actionFeed(8.0)
                                .actionPrintText(
                                    "${product_name}"
                                )
                                .actionFeed(6.0)
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
                                    "${item_list.detail}\n"
                                )
                        )
                        .actionPrintText(
                            "\nTime: ${time}\n"
                        )
                        .actionPrintText(
                            "\n${order_types}\n"
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}