import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { FontType } from 'react-native-star-io10/src/StarXpandCommand/Printer/FontType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample31_FoodSafetyInfo_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .addPageMode(
                            new PageModeAreaParameter(72.0, 58.0),
                            new PageModeBuilder()
                                .actionPrintRectangle(new PageModeRectangleParameter(0.0, 0.0, 72.0, 58.0))
                                .styleFont(FontType.B)
                                .addPageMode(
                                    new PageModeAreaParameter(68.0, 58.0)
                                        .setX(2.0)
                                        .setY(0.0),
                                    new PageModeBuilder()
                                        .styleMagnification(new MagnificationParameter(3, 3))
                                        .styleVerticalPositionTo(6.0)
                                        .actionPrintText(
                                            "FOOD SAFETY INFO\n",
                                            new TextParameter()
                                                .setWidth(
                                                    20,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .styleVerticalPositionBy(8.0)
                                        .actionPrintText(
                                            "Item:"
                                        )
                                        .styleHorizontalPositionBy(1.0)
                                        .styleUnderLine(true)
                                        .actionPrintText(
                                            "${item_name}\n",
                                            new TextParameter()
                                                .setWidth(24)
                                        )
                                        .styleUnderLine(false)
                                        .styleVerticalPositionBy(10.0)
                                        .actionPrintText(
                                            "Prepared Date:"
                                        )
                                        .styleHorizontalPositionBy(1.0)
                                        .styleUnderLine(true)
                                        .actionPrintText(
                                            "${prepared_date}\n",
                                            new TextParameter()
                                                .setWidth(15)
                                        )
                                        .styleUnderLine(false)
                                        .styleVerticalPositionBy(10.0)
                                        .actionPrintText(
                                            "Use By Date:"
                                        )
                                        .styleHorizontalPositionBy(1.0)
                                        .styleUnderLine(true)
                                        .actionPrintText(
                                            "${use_by_date}\n",
                                            new TextParameter()
                                                .setWidth(17)
                                        )
                                )
                                .styleHorizontalPositionTo(3.0)
                                .styleVerticalPositionTo(21.0)
                                .actionPrintText(
                                    "Producto\n"
                                )
                                .styleHorizontalPositionTo(3.0)
                                .styleVerticalPositionTo(35.0)
                                .actionPrintText(
                                    "Fecha de preparación\n"
                                )
                                .styleHorizontalPositionTo(3.0)
                                .styleVerticalPositionTo(49.0)
                                .actionPrintText(
                                    "Fecha de expiración\n"
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}