import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeImageParameter';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample28_CleanedAndSanitised_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .addPageMode(
                            new PageModeAreaParameter(72.0, 40.0),
                            new PageModeBuilder()
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(0.0, 0.0, 18.0, 18.0)
                                        .setThickness(0.8)
                                )
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(0.0, 20.0, 72.0, 20.0)
                                        .setThickness(0.8)
                                )
                                .actionPrintImage(
                                    new PageModeImageParameter("label_sample28_cleanedsanitised_hand.png", 1.0, 1.0, 130)
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(50.0, 20.0)
                                        .setX(22.0)
                                        .setY(0.0),
                                    new PageModeBuilder()
                                        .styleBold(true)
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .styleVerticalPositionTo(3.0)
                                        .actionPrintText(
                                            "CLEANED\n"
                                        )
                                        .styleVerticalPositionBy(4.0)
                                        .actionPrintText(
                                            "& SANITISED\n"
                                        )
                                )
                                .styleHorizontalPositionTo(2.0)
                                .styleVerticalPositionTo(21.0)
                                .actionPrintText(
                                    "Name:"
                                )
                                .styleHorizontalPositionTo(45.0)
                                .actionPrintText(
                                    "Date:"
                                )
                                .styleHorizontalPositionTo(2.0)
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .styleVerticalPositionBy(10.0)
                                .actionPrintText(
                                    "${name}",
                                    new TextParameter()
                                        .setWidth(28)
                                )
                                .actionPrintText(
                                    " "
                                )
                                .actionPrintText(
                                    "${date}",
                                    new TextParameter()
                                        .setWidth(16)
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}