import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { LineStyle } from 'react-native-star-io10/src/StarXpandCommand/Printer/LineStyle';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeImageParameter';
import { PageModePrintDirection } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModePrintDirection';
import { PageModeRuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRuledLineParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample05_For203dpi_ShippingLabel2_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .addPageMode(
                            new PageModeAreaParameter(72.0, 72.0),
                            new PageModeBuilder()
                                .stylePrintDirection(PageModePrintDirection.BottomToTop)
                                .addPageMode(
                                    new PageModeAreaParameter(8.0, 50.0)
                                        .setY(24.0),
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
                                    new PageModeAreaParameter(8.0, 42.0)
                                        .setX(10.0)
                                        .setY(24.0),
                                    new PageModeBuilder()
                                        .styleLineSpace(0.0)
                                        .actionPrintText(
                                            "${address}\n"
                                        )
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(4.0, 42.0)
                                        .setX(17.0)
                                        .setY(24.0),
                                    new PageModeBuilder()
                                        .actionPrintText(
                                            "${telephone_number}\n"
                                        )
                                )
                                .actionPrintRuledLine(
                                    new PageModeRuledLineParameter(0.0, 22.0, 72.0, 22.0)
                                        .setLineStyle(LineStyle.Single)
                                        .setThickness(1.0)
                                )
                                .actionPrintImage(
                                    new PageModeImageParameter("logo_01.png", 47.0, 0.0, 200)
                                )
                                .actionPrintImage(
                                    new PageModeImageParameter("shipping_label_house.png", 0.0, 10.0, 40)
                                )
                                .actionPrintImage(
                                    new PageModeImageParameter("shipping_label_phones_old.png", 0.0, 16.0, 40)
                                )
                                .stylePrintDirection(PageModePrintDirection.LeftToRight)
                                .addPageMode(
                                    new PageModeAreaParameter(47.0, 72.0)
                                        .setX(25.0)
                                        .setY(0.0),
                                    new PageModeBuilder()
                                        .styleBold(true)
                                        .styleLineSpace(3.0)
                                        .styleMagnification(
                                            new MagnificationParameter(2, 2)
                                        )
                                        .styleVerticalPositionTo(6.0)
                                        .actionPrintText(
                                            "TO:\n"
                                        )
                                        .styleBold(false)
                                        .styleVerticalPositionBy(7.0)
                                        .actionPrintText(
                                            "${name_to}\n"
                                        )
                                        .styleVerticalPositionBy(3.0)
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