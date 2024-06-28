import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeImageParameter';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';

export class LabelSample19_PharmacyMedication1_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new StarXpandCommand.PrinterBuilder()
                        .addPageMode(
                            new PageModeAreaParameter(72.0, 75.0),
                            new StarXpandCommand.PageModeBuilder()
                                .actionPrintImage(
                                    new PageModeImageParameter("label_sample19_pharmacy_medication1_logo.png", 0.0, 0.0, 130)
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(54.0, 20.0)
                                        .setX(18.0)
                                        .setY(0.0),
                                    new StarXpandCommand.PageModeBuilder()
                                        .styleHorizontalPositionTo(0.0)
                                        .styleVerticalPositionTo(4.0)
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .actionPrintText(
                                            "${store_name}\n"
                                        )
                                        .styleMagnification(new MagnificationParameter(1, 1))
                                        .actionPrintText(
                                            "${address}\n"
                                        )
                                        .actionPrintText(
                                            "${telephone_number}\n"
                                        )
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(72.0, 20.0)
                                        .setY(20.0),
                                    new PageModeBuilder()
                                        .actionPrintRectangle(
                                            new PageModeRectangleParameter(0.0, 0.0, 72.0, 16.0)
                                        )
                                        .styleHorizontalPositionTo(1.0)
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .styleVerticalPositionTo(4.0)
                                        .actionPrintText(
                                            "${number}\n"
                                        )
                                        .styleHorizontalPositionTo(1.0)
                                        .styleVerticalPositionBy(4.0)
                                        .actionPrintText(
                                            "${customer_name}"
                                    )
                                )
                                .styleVerticalPositionTo(40.0)
                                .actionPrintText(
                                    "Usage:\n"
                                )
                                .styleBold(true)
                                .actionPrintText(
                                    "${usage}\n"
                                )
                                .styleBold(false)
                                .addPageMode(
                                    new PageModeAreaParameter(72.0, 10.0)
                                        .setY(55.0),
                                    new PageModeBuilder()
                                        .actionPrintRectangle(new PageModeRectangleParameter(0.0, 0.0, 72.0, 8.0))
                                        .styleHorizontalPositionTo(1.0)
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .styleVerticalPositionTo(4.0)
                                        .actionPrintText(
                                        "□ Refill\t□ No Refill\n"
                                    )
                                )
                                .styleVerticalPositionTo(65.0)
                                .actionPrintText(
                                    "EXP: ${expiry_date}\n"
                                )
                                .add(
                                    new PageModeBuilder()
                                        .styleMagnification(new MagnificationParameter(2, 1))
                                        .actionPrintText(
                                        "Quantity: ${quantity}\n"
                                    )
                                )
                    )
                        .actionCut(CutType.Partial)
            )
        );
        return await builder.getCommands();
    }
}