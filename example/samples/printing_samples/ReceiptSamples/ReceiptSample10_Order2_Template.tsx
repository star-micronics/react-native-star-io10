import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { TextWidthType } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthType';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class ReceiptSample10_Order2_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleCjkCharacterPriority([CjkCharacterType.Japanese])
                        .actionPrintText(
                            "${time}",
                            new TextParameter()
                                .setWidth(8)
                        )
                        .actionPrintText(
                            "${staff_name}",
                            new TextParameter()
                                .setWidth(
                                    20,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                        .setWidthType(TextWidthType.Full)
                                )
                        )
                        .styleMagnification(new MagnificationParameter(2, 2))
                        .styleInvert(true)
                        .actionPrintText(
                            " ${classification} "
                        )
                        .styleInvert(false)
                        .actionPrintText(
                            " ${table_number}",
                            new TextParameter()
                                .setWidth(10)
                        )
                        .add(
                            new PrinterBuilder()
                                .styleLineSpace(0.0)
                                .styleMagnification(new MagnificationParameter(1, 1))
                                .actionPrintText(
                                    "${visitors}名\n",
                                    new TextParameter()
                                        .setWidth(
                                            20,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                        )
                        .actionFeed(0.5)
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
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
                                    "${item_list.name}",
                                    new TextParameter()
                                        .setWidth(22)
                                )
                                .actionPrintText(
                                    "${item_list.quantity}\n",
                                    new TextParameter()
                                        .setWidth(
                                            2,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}