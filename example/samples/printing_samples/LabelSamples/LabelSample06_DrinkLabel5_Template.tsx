import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class LabelSample06_DrinkLabel5_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(48.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleAlignment(Alignment.Center)
                        .styleLineSpace(1.0)
                        .add(
                            new PrinterBuilder()
                                .styleInvert(true)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "${header}\n"
                                )
                        )
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .actionPrintText(
                                    "${order_types}\n"
                                )
                        )
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "#${order_number%04d}\n"
                                )
                        )
                        .actionPrintText(
                            "${time}\n"
                        )
                        .actionPrintText(
                            "--------------------------------\n"
                        )
                        .add(
                            new PrinterBuilder()
                                .styleAlignment(Alignment.Left)
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .actionPrintText(
                                    "${product_name}\n"
                                )
                                .add(
                                    new PrinterBuilder(
                                        new PrinterParameter()
                                            .setTemplateExtension(
                                                new TemplateExtensionParameter()
                                                    .setEnableArrayFieldData(true)
                                            )
                                    )
                                        .styleHorizontalPositionTo(3.0)
                                        .actionPrintText(
                                            "${item_list.detail}\n"
                                        )
                                )
                        )
                        .actionPrintText(
                            "--------------------------------\n"
                        )
                        .add(
                            new PrinterBuilder()
                                .styleInvert(true)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "${footer}\n"
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}