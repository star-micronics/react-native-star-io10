import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class LabelSample04_DrinkLabel3_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleCjkCharacterPriority([CjkCharacterType.Japanese])
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .actionPrintText(
                            "No.${order_number}(${item_number}/${number_of_items}) ${datetime}\n"
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.1)
                        )
                        .add(
                            new PrinterBuilder()
                                .styleBold(true)
                                .styleMagnification(new MagnificationParameter(2, 2))
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
                                .styleHorizontalPositionTo(2.0)
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
                        .styleAlignment(Alignment.Right)
                        .actionPrintText(
                            "No:${number}\n"
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}