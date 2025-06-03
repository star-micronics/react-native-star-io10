import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { BaseMagnification } from 'react-native-star-io10/src/StarXpandCommand/Printer/BaseMagnification';
import { BaseMagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BaseMagnificationParameter';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { FontType } from 'react-native-star-io10/src/StarXpandCommand/Printer/FontType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { PageModeRuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRuledLineParameter';
import { QRCodeLevel } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeLevel';
import { QRCodeModel } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeModel';
import { QRCodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample21_For203dpiAnd300dpi_ProductLabel_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(48.0)
                .addPrinter(
                    new PrinterBuilder()
                        // By setting the base print size of text to x1.5 for 300dpi,
                        // you can print text at the same size as 203dpi.
                        //.styleBaseMagnification(new BaseMagnificationParameter().setText(BaseMagnification.X1_5))
                        .addPageMode(
                            new PageModeAreaParameter(48.0, 24.0),
                            new PageModeBuilder()
                                .actionPrintRectangle(new PageModeRectangleParameter(0.0, 0.0, 48.0, 24.0))
                                .actionPrintRuledLine(new PageModeRuledLineParameter(22.0, 0.0, 22.0, 24.0))
                                .actionPrintRuledLine(new PageModeRuledLineParameter(0.0, 8.0, 22.0, 8.0))
                                .actionPrintRuledLine(new PageModeRuledLineParameter(0.0, 16.0, 22.0, 16.0))
                                .styleHorizontalPositionTo(2.0)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .styleVerticalPositionTo(4.0)
                                .actionPrintText(
                                    "${code1}\n"
                                )
                                .styleHorizontalPositionTo(2.0)
                                .styleVerticalPositionTo(12.0)
                                .actionPrintText(
                                    "${code2}\n"
                                )
                                .styleHorizontalPositionTo(2.0)
                                .styleVerticalPositionTo(20.0)
                                .actionPrintText(
                                    "${code3}\n"
                                )
                                .styleHorizontalPositionTo(26.0)
                                .styleVerticalPositionTo(0.0)
                                .actionPrintQRCode(
                                    new QRCodeParameter("${qrcode}")
                                        .setCellSize(6)
                                        .setLevel(QRCodeLevel.Q)
                                        .setModel(QRCodeModel.Model2)
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}