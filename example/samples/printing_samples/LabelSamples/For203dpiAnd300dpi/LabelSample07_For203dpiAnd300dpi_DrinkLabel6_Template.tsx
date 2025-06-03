import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { BaseMagnification } from 'react-native-star-io10/src/StarXpandCommand/Printer/BaseMagnification';
import { BaseMagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BaseMagnificationParameter';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class LabelSample07_For203dpiAnd300dpi_DrinkLabel6_Template {
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
                        .styleAlignment(Alignment.Center)
                        .styleLineSpace(1.0)
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .actionPrintText(
                                    "${order_types}${order_types_detail}\n"
                                )
                        )
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "#${order_number%04d}\n"
                                )
                        )
                        .add(
                            new PrinterBuilder()
                                .styleInvert(true)
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .actionPrintText(
                                    "${number}\n" // ?
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
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}