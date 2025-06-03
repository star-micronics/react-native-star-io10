import { StarXpandCommand } from 'react-native-star-io10';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample05_For300dpi_BarbellLabel_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(54.0)
                .addPrinter(
                    new PrinterBuilder()
                        .addPageMode(
                            new PageModeAreaParameter(54.0, 27.0),
                            new PageModeBuilder()
                                .styleHorizontalPositionTo(6.0)
                                .styleVerticalPositionTo(8.0)
                                .actionPrintBarcode(
                                    new BarcodeParameter("${barcode}", BarcodeSymbology.Code128)
                                        .setBarDots(2)
                                        .setHeight(4.0)
                                        .setPrintHri(true)
                                )
                                .styleHorizontalPositionTo(35.0)
                                .styleVerticalPositionTo(6.0)
                                .actionPrintText(
                                    "${product_name}",
                                    new TextParameter().setWidth(
                                        12,
                                        new TextWidthParameter()
                                            .setAlignment(TextAlignment.Center)
                                    )
                                )
                                .styleVerticalPositionBy(3.0)
                                .styleHorizontalPositionTo(35.0)
                                .actionPrintText(
                                    "$${price%.2f}\n",
                                    new TextParameter()
                                        .setWidth(
                                            12,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Center)
                                        )
                                )
                                .styleHorizontalPositionTo(6.0)
                                .styleVerticalPositionTo(19.0)
                                .actionPrintBarcode(
                                    new BarcodeParameter("${barcode}", BarcodeSymbology.Code128)
                                        .setBarDots(2)
                                        .setHeight(4.0)
                                        .setPrintHri(true)
                                )
                                .styleHorizontalPositionTo(35.0)
                                .styleVerticalPositionTo(17.0)
                                .actionPrintText(
                                    "${product_name}",
                                    new TextParameter().setWidth(
                                        12,
                                        new TextWidthParameter()
                                            .setAlignment(TextAlignment.Center)
                                    )
                                )
                                .styleVerticalPositionBy(3.0)
                                .styleHorizontalPositionTo(35.0)
                                .actionPrintText(
                                    "$${price%.2f}\n",
                                    new TextParameter()
                                        .setWidth(
                                            12,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Center)
                                        )
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}