import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeImageParameter';
import { PageModePrintDirection } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModePrintDirection';
import { PageModeRuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRuledLineParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample33_VisitorLabel_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(48.0)
                .addPrinter(
                    new PrinterBuilder()
                        .addPageMode(
                            new PageModeAreaParameter(48.0, 90.0),
                            new PageModeBuilder()
                                .stylePrintDirection(PageModePrintDirection.TopToBottom)
                                .actionPrintImage(new PageModeImageParameter("logo_01.png", 7.0, 4.0, 140))
                                .actionPrintImage(new PageModeImageParameter("label_sample33_visitor_label_user_profile_picture.png", 5.0, 14.0, 160))
                                .actionPrintRuledLine(new PageModeRuledLineParameter(4.0, 12.0, 75.0, 12.0))
                                .addPageMode(
                                    new PageModeAreaParameter(48.0, 52.0)
                                        .setX(0.0)
                                        .setY(28.0),
                                    new PageModeBuilder()
                                        .styleBold(true)
                                        .styleHorizontalPositionTo(0.0)
                                        .styleVerticalPositionTo(8.0)
                                        .styleMagnification(new MagnificationParameter(3, 3))
                                        .actionPrintText(
                                            "VISITOR\n"
                                        )
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .styleVerticalPositionBy(5.0)
                                        .actionPrintText(
                                            "${name}\n",
                                            new TextParameter()
                                                .setWidth(17)
                                        )
                                        .styleMagnification(new MagnificationParameter(1, 1))
                                        .styleVerticalPositionBy(1.0)
                                        .actionPrintText(
                                            "${company_name}\n",
                                            new TextParameter()
                                                .setWidth(34)
                                        )
                                        .styleBold(false)
                                        .styleVerticalPositionBy(1.0)
                                        .actionPrintText(
                                            "Visiting:"
                                        )
                                        .styleBold(true)
                                        .actionPrintText(
                                            "${visiting}\n",
                                            new TextParameter()
                                                .setWidth(25)
                                        )
                                        .styleBold(false)
                                        .styleVerticalPositionBy(1.0)
                                        .actionPrintText(
                                            "${datetime}\n",
                                            new TextParameter()
                                                .setWidth(34)
                                        )
                                        .styleHorizontalPositionTo(5.0)
                                        .styleVerticalPositionBy(3.0)
                                        .actionPrintBarcode(
                                            new BarcodeParameter("${barcode}", BarcodeSymbology.Code128)
                                                .setHeight(5.0)
                                                .setPrintHri(true)
                                        )
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(28.0, 10.0)
                                        .setX(10.0)
                                        .setY(80.0),
                                    new PageModeBuilder()
                                        .styleHorizontalPositionTo(0.0)
                                        .styleVerticalPositionTo(0.0)
                                        .stylePrintDirection(PageModePrintDirection.LeftToRight)
                                        .styleBold(true)
                                        .styleLineSpace(0.0)
                                        .actionPrintText(
                                            "FOLD\n",
                                            new TextParameter()
                                                .setWidth(
                                                    18,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .actionPrintText(
                                            "UNDER\n",
                                            new TextParameter()
                                                .setWidth(
                                                    18,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .actionPrintText(
                                            "▼   ▼\n",
                                            new TextParameter()
                                                .setWidth(
                                                    18,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        )

        return builder.getCommands()
    }
}
