import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class LabelSample05_For203dpiAnd300dpi_DrinkLabel4_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                // Change the printable area setting for this layout according to the printer resolution.
                // 72.0 for 203dpi, 48.7 for 300dpi
                .settingPrintableArea(72.0)
                //.settingPrintableArea(48.7)
                .addPrinter(
                    new PrinterBuilder()
                        .styleCjkCharacterPriority([CjkCharacterType.Japanese])
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .actionPrintText(
                                    "${order_types}"
                                )
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
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .add(
                            new PrinterBuilder()
                                .styleInvert(true)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "${order_number}",
                                    new TextParameter().setWidth(4)
                                )
                        )
                        .actionPrintText(
                            "(${item_number}/${number_of_items})",
                            new TextParameter().setWidth(6)
                        )
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "${time}\n",
                                    new TextParameter()
                                    .setWidth(
                                        17,
                                        new TextWidthParameter().setAlignment(TextAlignment.Right)
                                    )
                                )
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .add(
                            new PrinterBuilder()
                                .styleBold(true)
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .actionPrintText(
                                    "${product_name}\n"
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
                                .styleHorizontalPositionTo(1.0)
                                .actionPrintText(
                                    "${item_list.detail}\n"
                                )
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .actionPrintText(
                            "${note}\n"
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}