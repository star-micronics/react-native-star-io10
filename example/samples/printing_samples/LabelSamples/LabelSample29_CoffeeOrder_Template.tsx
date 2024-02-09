import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModePrintDirection } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModePrintDirection';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample29_CoffeeOrder_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .addPageMode(
                            new PageModeAreaParameter(72.0, 80.0),
                            new PageModeBuilder()
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(20.0, 3.0, 10.0, 10.0)
                                        .setThickness(0.4)
                                )
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(50.0, 3.0, 10.0, 10.0)
                                        .setThickness(0.4)
                                )
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(20.0, 18.0, 10.0, 10.0)
                                        .setThickness(0.4)
                                )
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(50.0, 18.0, 10.0, 10.0)
                                        .setThickness(0.4)
                                )
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(20.0, 31.0, 40.0, 10.0)
                                        .setThickness(0.4)
                                )
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(20.0, 45.0, 40.0, 10.0)
                                        .setThickness(0.4)
                                )
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(20.0, 59.0, 10.0, 6.0)
                                        .setThickness(0.4)
                                )
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(44.0, 59.0, 16.0, 6.0)
                                        .setThickness(0.4)
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(12.0, 80.0)
                                        .setX(0.0)
                                        .setY(0.0),
                                    new PageModeBuilder()
                                        .styleBold(true)
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .stylePrintDirection(PageModePrintDirection.BottomToTop)
                                        .styleVerticalPositionTo(6.0)
                                        .actionPrintText(
                                            "${store_name}\n",
                                            new TextParameter()
                                                .setWidth(
                                                    24,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Right)
                                                )
                                        )
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(60.0, 80.0)
                                        .setX(12.0)
                                        .setY(0.0),
                                    new PageModeBuilder()
                                        .styleHorizontalPositionTo(8.0)
                                        .styleVerticalPositionTo(0.0)
                                        .actionPrintText(
                                            "Decaf",
                                            new TextParameter()
                                                .setWidth(
                                                    6,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .styleHorizontalPositionTo(38.0)
                                        .actionPrintText(
                                            "Shots\n",
                                            new TextParameter()
                                                .setWidth(
                                                    6,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .add(
                                            new PageModeBuilder()
                                                .styleMagnification(new MagnificationParameter(2, 2))
                                                .styleHorizontalPositionTo(8.0)
                                                .styleVerticalPositionBy(4.0)
                                                .actionPrintText(
                                                    "${decaf}",
                                                    new TextParameter()
                                                        .setWidth(
                                                            3,
                                                            new TextWidthParameter()
                                                                .setAlignment(TextAlignment.Center)
                                                        )
                                                )
                                                .styleHorizontalPositionTo(38.0)
                                                .actionPrintText(
                                                    "${shots}\n",
                                                    new TextParameter()
                                                        .setWidth(
                                                            3,
                                                            new TextWidthParameter()
                                                                .setAlignment(TextAlignment.Center)
                                                        )
                                                )
                                        )
                                        .styleHorizontalPositionTo(8.0)
                                        .styleVerticalPositionTo(15.0)
                                        .actionPrintText(
                                            "Size",
                                            new TextParameter()
                                                .setWidth(
                                                    6,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .styleHorizontalPositionTo(38.0)
                                        .actionPrintText(
                                            "Milk\n",
                                            new TextParameter()
                                                .setWidth(
                                                    6,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .add(
                                            new PageModeBuilder()
                                                .styleMagnification(new MagnificationParameter(2, 2))
                                                .styleHorizontalPositionTo(8.0)
                                                .styleVerticalPositionBy(4.0)
                                                .actionPrintText(
                                                    "${size}",
                                                    new TextParameter()
                                                        .setWidth(
                                                            3,
                                                            new TextWidthParameter()
                                                                .setAlignment(TextAlignment.Center)
                                                        )
                                                )
                                                .styleHorizontalPositionTo(38.0)
                                                .actionPrintText(
                                                    "${milk}\n",
                                                    new TextParameter()
                                                        .setWidth(
                                                            3,
                                                            new TextWidthParameter()
                                                                .setAlignment(TextAlignment.Center)
                                                        )
                                                )
                                        )
                                        .styleHorizontalPositionTo(8.0)
                                        .styleVerticalPositionTo(28.0)
                                        .actionPrintText(
                                            "Syrup\n",
                                            new TextParameter()
                                                .setWidth(
                                                    27,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .add(
                                            new PageModeBuilder()
                                                .styleMagnification(new MagnificationParameter(2, 2))
                                                .styleHorizontalPositionTo(8.0)
                                                .styleVerticalPositionBy(4.0)
                                                .actionPrintText(
                                                    "${syrup}\n",
                                                    new TextParameter()
                                                        .setWidth(
                                                            13,
                                                            new TextWidthParameter()
                                                                .setAlignment(TextAlignment.Center)
                                                        )
                                                )
                                        )
                                        .styleHorizontalPositionTo(8.0)
                                        .styleVerticalPositionTo(42.0)
                                        .actionPrintText(
                                            "Custom\n",
                                            new TextParameter()
                                                .setWidth(
                                                    27,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .add(
                                            new PageModeBuilder()
                                                .styleMagnification(new MagnificationParameter(2, 2))
                                                .styleHorizontalPositionTo(8.0)
                                                .styleVerticalPositionBy(4.0)
                                                .actionPrintText(
                                                    "${custom}\n",
                                                    new TextParameter()
                                                        .setWidth(
                                                            13,
                                                            new TextWidthParameter()
                                                                .setAlignment(TextAlignment.Center)
                                                        )
                                                )
                                        )
                                        .styleHorizontalPositionTo(8.0)
                                        .styleVerticalPositionTo(56.0)
                                        .actionPrintText(
                                            "Drink",
                                            new TextParameter()
                                                .setWidth(
                                                    6,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .styleHorizontalPositionTo(32.0)
                                        .actionPrintText(
                                            "Iced\n",
                                            new TextParameter()
                                                .setWidth(
                                                    10,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .add(
                                            new PageModeBuilder()
                                                .styleHorizontalPositionTo(8.0)
                                                .styleVerticalPositionBy(1.0)
                                                .actionPrintText(
                                                    "${drink}",
                                                    new TextParameter()
                                                        .setWidth(
                                                            6,
                                                            new TextWidthParameter()
                                                                .setAlignment(TextAlignment.Center)
                                                        )
                                                )
                                                .styleHorizontalPositionTo(32.0)
                                                .actionPrintText(
                                                    "${iced}\n",
                                                    new TextParameter()
                                                        .setWidth(
                                                            10,
                                                            new TextWidthParameter()
                                                                .setAlignment(TextAlignment.Center)
                                                        )
                                                )
                                        )
                                        .add(
                                            new PageModeBuilder()
                                                .styleMagnification(new MagnificationParameter(2, 2))
                                                .styleVerticalPositionBy(3.0)
                                                .actionPrintText(
                                                    "Name:"
                                                )
                                                .styleHorizontalPositionBy(1.0)
                                                .actionPrintText(
                                                    "${customer_name}\n",
                                                    new TextParameter()
                                                        .setWidth(14)
                                                )
                                        )
                                        .actionPrintText(
                                            "FOR HERE"
                                        )
                                        .actionPrintText(
                                            "${item_number} of ${total_items}",
                                            new TextParameter()
                                                .setWidth(
                                                    32,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Right)
                                                )
                                        )
                                        .actionPrintText(
                                            "${order_number}",
                                            new TextParameter()
                                                .setWidth(30)
                                        )
                                        .actionPrintText(
                                            "${time}",
                                            new TextParameter()
                                                .setWidth(
                                                    10,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Right)
                                                )
                                        )
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}