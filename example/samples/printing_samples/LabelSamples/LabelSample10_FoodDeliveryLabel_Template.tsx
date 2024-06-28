import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class LabelSample10_FoodDeliveryLabel_Template {
    static async createFoodDeliveryLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
        .settingPrintableArea(72.0)
        .addPrinter(new StarXpandCommand.PrinterBuilder()
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleBold(true)
                .styleMagnification(new MagnificationParameter(3, 3))
                .actionPrintText(
                    "${store_name}\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleInvert(true)
                        .actionPrintText(
                            "${order_name}\n"
                        )
                )
        )
        .styleAlignment(Alignment.Center)
        .actionPrintText(
            "Placed at ${time}\n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleUnderLine(true)
                .actionPrintText(
                    "                                                \n"
                )
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleBold(true)
                .styleMagnification(new MagnificationParameter(2, 2))
                .actionPrintText(
                    "${order_types}\n"
                )
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleUnderLine(true)
                .actionPrintText(
                    "                                                \n"
                )
        )
        .add(
            new StarXpandCommand.PrinterBuilder(
                new StarXpandCommand.Printer.PrinterParameter()
                    .setTemplateExtension(
                        new StarXpandCommand.TemplateExtensionParameter()
                            .setEnableArrayFieldData(true)
                )
            )
                .actionPrintText(
                    "${item_list.name}",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            40,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setEllipsizeType(StarXpandCommand.Printer.TextEllipsizeType.End)
                        )
                )
                .actionPrintText(
                    "\$${item_list.price%.2f}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            8,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                        )
                )
        )
        .actionPrintText(
            "------------------------------------------------\n" +
            "Subtotal"
        )
        .actionPrintText(
            "\$${subtotal%.2f}\n",
            new StarXpandCommand.Printer.TextParameter()
                .setWidth(
                    40,
                    new StarXpandCommand.Printer.TextWidthParameter()
                        .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                )
        )
        .actionPrintText(
            "Amount paid"
        )
        .actionPrintText(
            "\$${amount_paid%.2f}\n",
            new StarXpandCommand.Printer.TextParameter()
                .setWidth(
                    37,
                    new StarXpandCommand.Printer.TextWidthParameter()
                        .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                )
        )
        .actionPrintText(
            "item ${item_count}",
            new StarXpandCommand.Printer.TextParameter()
                .setWidth(10)
        )
        .actionPrintText(
            "\$${item_price%.2f}\n",
            new StarXpandCommand.Printer.TextParameter()
                .setWidth(
                    38,
                    new StarXpandCommand.Printer.TextWidthParameter()
                        .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                )
        )
        .actionPrintText(
            "------------------------------------------------\n"
        )
        .styleAlignment(StarXpandCommand.Printer.Alignment.Left)
        .actionPrintText(
            "${note}\n"
        )
        .actionCut(CutType.Partial)
        )
        );

        return await builder.getCommands();
    }
}