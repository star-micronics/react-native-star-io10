import { StarXpandCommand } from 'react-native-star-io10';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { TextWidthType } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthType';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class LabelSample17_For203dpiAnd300dpi_PharmacyMedication2_Template {
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
                    .styleCjkCharacterPriority([
                        StarXpandCommand.Printer.CjkCharacterType.Japanese
                    ])
                    .actionPrintText(
                        "${patient_name} 様",
                        new TextParameter()
                            .setWidth(24)
                    )
                    .actionPrintText(
                        "処方日 ${prescription_date}  \n",
                        new TextParameter()
                            .setWidth(
                                24,
                                new TextWidthParameter()
                                    .setAlignment(TextAlignment.Right)
                            )
                    )
                    .actionPrintText(
                        "調剤日 ${dispensing_date}  \n",
                        new TextParameter()
                            .setWidth(
                                48,
                                new TextWidthParameter()
                                    .setAlignment(TextAlignment.Right)
                            )
                    )
                    .actionFeedLine(1)
                    .actionPrintText(
                        "${hospital_name}:\n"
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
                        .actionPrintText(
                            "  ${item_list1.name}",
                            new TextParameter()
                                .setWidth(
                                    17,
                                    new TextWidthParameter()
                                        .setWidthType(TextWidthType.Full)
                                )
                        )
                        .actionPrintText(
                            "${item_list1.take_the_medicine}",
                            new TextParameter()
                                .setWidth(5)
                        )
                        .actionPrintText(
                            "${item_list1.dosage}\n",
                            new TextParameter()
                                .setWidth(9)
                        )
                    )
                    .actionPrintText(
                        "  ----------------------------------------------\n"
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
                            "  ${item_list2.name}",
                            new TextParameter()
                                .setWidth(
                                    17,
                                    new TextWidthParameter()
                                        .setWidthType(TextWidthType.Full)
                                )
                        )
                        .actionPrintText(
                            "${item_list2.take_the_medicine}",
                            new TextParameter()
                                .setWidth(5)
                        )
                        .actionPrintText(
                            "${item_list2.dosage}\n",
                            new TextParameter()
                                .setWidth(9)
                        )
                        .actionPrintText(
                            "　${item_list2.note}\n"
                        )
                    )
                    .actionPrintText(
                        "  ----------------------------------------------\n"
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
                            "  ${item_list3.name}",
                            new TextParameter()
                                .setWidth(
                                    17,
                                    new TextWidthParameter()
                                        .setWidthType(TextWidthType.Full)
                                )
                        )
                        .actionPrintText(
                            "${item_list3.take_the_medicine}",
                            new TextParameter()
                                .setWidth(5)
                        )
                        .actionPrintText(
                            "${item_list3.dosage}\n",
                            new TextParameter()
                                .setWidth(9)
                        )
                        .actionPrintText(
                            "　${item_list3.note}\n"
                        )
                    )
                    .actionPrintText(
                        "  ----------------------------------------------\n"
                    )
                    .actionPrintText(
                        "${store_name}  TEL ${telephone_number}\n"
                    )
                    .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}
