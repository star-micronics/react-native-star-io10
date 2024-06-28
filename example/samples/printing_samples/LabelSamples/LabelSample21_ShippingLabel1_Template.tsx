import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeImageParameter';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample21_ShippingLabel1_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleLineSpace(0.0)
                        .addPageMode(
                            new PageModeAreaParameter(72.0, 21.0),
                            new PageModeBuilder()
                                .addPageMode(
                                    new PageModeAreaParameter(50.0, 8.0),
                                    new PageModeBuilder()
                                        .styleMagnification(
                                            new MagnificationParameter(2, 2)
                                        )
                                        .styleVerticalPositionTo(4.0)
                                        .actionPrintText(
                                            "${business_name}\n"
                                        )
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(42.0, 8.0)
                                        .setX(6.0)
                                        .setY(10.0),
                                    new PageModeBuilder()
                                        .styleLineSpace(0.0)
                                        .actionPrintText(
                                            "${address}\n"
                                        )
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(42.0, 4.0)
                                        .setX(6.0)
                                        .setY(17.0),
                                    new PageModeBuilder()
                                        .actionPrintText(
                                            "${telephone_number}\n"
                                        )
                                )
                                .actionPrintImage(
                                    new PageModeImageParameter("logo_01.png", 47.0, 0.0, 200)
                                )
                                .actionPrintImage(
                                    new PageModeImageParameter("label_sample21_shipping_label_house.png", 0.0, 10.0, 40)
                                )
                                .actionPrintImage(
                                    new PageModeImageParameter("label_sample21_shipping_label_phones_old.png", 0.0, 16.0, 40)
                                )
                        )
                        .addPageMode(
                            new PageModeAreaParameter(72.0, 30.0),
                            new PageModeBuilder()
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(0.0, 0.0, 72.0, 30.0)
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(72.0, 3.0)
                                        .setX(1.0)
                                        .setY(1.0),
                                    new PageModeBuilder()
                                        .styleBold(true)
                                        .actionPrintText(
                                            "TO:"
                                        )
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(70.0, 28.0)
                                        .setX(2.0)
                                        .setY(4.0),
                                    new PageModeBuilder()
                                        .styleLineSpace(3.0)
                                        .styleMagnification(
                                            new MagnificationParameter(2, 2)
                                        )
                                        .styleVerticalPositionTo(4.0)
                                        .actionPrintText(
                                            "${name_to}\n"
                                        )
                                        .styleVerticalPositionBy(4.0)
                                        .actionPrintText(
                                            "${address_to}\n"
                                        )
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}