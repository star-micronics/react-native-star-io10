import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { BaseMagnification } from 'react-native-star-io10/src/StarXpandCommand/Printer/BaseMagnification';
import { BaseMagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BaseMagnificationParameter';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class LabelSample03_For203dpiAnd300dpi_DrinkLabel2_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                // Change the printable area setting for this layout according to the printer resolution.
                // 48.0 for 203dpi, 48.7 for 300dpi
                .settingPrintableArea(48.0)
                //.settingPrintableArea(48.7)
                .addPrinter(
                    new PrinterBuilder()
                        // By setting the base print size of text to x1.5 for 300dpi,
                        // you can print text at the same size as 203dpi.
                        //.styleBaseMagnification(new BaseMagnificationParameter().setText(BaseMagnification.X1_5))
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