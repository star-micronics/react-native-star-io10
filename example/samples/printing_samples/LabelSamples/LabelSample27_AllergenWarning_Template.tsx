import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample27_AllergenWarning_Template {
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
                                .add(
                                    new PageModeBuilder()
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .styleVerticalPositionTo(0.0)
                                        .actionPrintText(
                                            "ALLERGEN WARNING\n",
                                            new TextParameter()
                                                .setWidth(
                                                    24,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .styleHorizontalPositionTo(5.0)
                                        .styleVerticalPositionBy(7.0)
                                        .actionPrintText(
                                            "Item: "
                                        )
                                        .styleUnderLine(true)
                                        .actionPrintText(
                                            "${item}\n",
                                            new TextParameter()
                                                .setWidth(14)
                                        )
                                        .styleHorizontalPositionTo(5.0)
                                        .styleUnderLine(false)
                                        .styleVerticalPositionBy(5.0)
                                        .actionPrintText(
                                            "Date: "
                                        )
                                        .styleUnderLine(true)
                                        .actionPrintText(
                                            "${date}\n",
                                            new TextParameter()
                                                .setWidth(14)
                                        )
                                        .styleUnderLine(false)
                                )
                                .actionPrintRectangle(new PageModeRectangleParameter(2.0, 30.0, 4.0, 4.0))
                                .actionPrintRectangle(new PageModeRectangleParameter(25.0, 30.0, 4.0, 4.0))
                                .actionPrintRectangle(new PageModeRectangleParameter(48.0, 30.0, 4.0, 4.0))
                                .styleHorizontalPositionTo(3.0)
                                .styleVerticalPositionTo(31.0)
                                .actionPrintText(
                                    "${dairy}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .styleHorizontalPositionBy(4.0)
                                .actionPrintText(
                                    "Dairy"
                                )
                                .styleHorizontalPositionTo(26.0)
                                .actionPrintText(
                                    "${fish}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .styleHorizontalPositionBy(4.0)
                                .actionPrintText(
                                    "Fish"
                                )
                                .styleHorizontalPositionTo(49.0)
                                .actionPrintText(
                                    "${eggs}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .styleHorizontalPositionBy(4.0)
                                .actionPrintText(
                                    "Eggs"
                                )
                                .actionPrintRectangle(new PageModeRectangleParameter(2.0, 36.0, 4.0, 4.0))
                                .actionPrintRectangle(new PageModeRectangleParameter(25.0, 36.0, 4.0, 4.0))
                                .actionPrintRectangle(new PageModeRectangleParameter(48.0, 36.0, 4.0, 4.0))
                                .styleHorizontalPositionTo(3.0)
                                .styleVerticalPositionTo(37.0)
                                .actionPrintText(
                                    "${peanuts}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .styleHorizontalPositionBy(4.0)
                                .actionPrintText(
                                    "Peanuts"
                                )
                                .styleHorizontalPositionTo(26.0)
                                .actionPrintText(
                                    "${shellfish}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .styleHorizontalPositionBy(4.0)
                                .actionPrintText(
                                    "Shellfish"
                                )
                                .styleHorizontalPositionTo(49.0)
                                .actionPrintText(
                                    "${soy}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .styleHorizontalPositionBy(4.0)
                                .actionPrintText(
                                    "Soy"
                                )
                                .actionPrintRectangle(new PageModeRectangleParameter(2.0, 42.0, 4.0, 4.0))
                                .actionPrintRectangle(new PageModeRectangleParameter(25.0, 42.0, 4.0, 4.0))
                                .actionPrintRectangle(new PageModeRectangleParameter(48.0, 42.0, 4.0, 4.0))
                                .styleHorizontalPositionTo(3.0)
                                .styleVerticalPositionTo(43.0)
                                .actionPrintText(
                                    "${treenuts}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .styleHorizontalPositionBy(4.0)
                                .actionPrintText(
                                    "Tree Nuts")

                                .styleHorizontalPositionTo(26.0)
                                .actionPrintText(
                                    "${wheat}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .styleHorizontalPositionBy(4.0)
                                .actionPrintText(
                                    "Wheat"
                                )
                                .styleHorizontalPositionTo(49.0)
                                .actionPrintText(
                                    "${gluten}",
                                    new TextParameter()
                                        .setWidth(1)
                                )
                                .styleHorizontalPositionBy(4.0)
                                .actionPrintText(
                                    "Gluten"
                                )
                                .styleHorizontalPositionTo(9.0)
                                .styleVerticalPositionBy(8.0)
                                .actionPrintText(
                                    "Other: "
                                )
                                .styleUnderLine(true)
                                .actionPrintText(
                                    "${other}\n",
                                    new TextParameter()
                                        .setWidth(32)
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}