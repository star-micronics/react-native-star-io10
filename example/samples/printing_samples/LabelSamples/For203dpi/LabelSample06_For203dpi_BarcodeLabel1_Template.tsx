import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample06_For203dpi_BarcodeLabel1_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .addPageMode(
                            new PageModeAreaParameter(72.0, 38.0),
                            new PageModeBuilder()
                                .styleHorizontalPositionTo(2.0)
                                .styleVerticalPositionTo(6.0)
                                .add(
                                    new PageModeBuilder()
                                        .styleBold(true)
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .actionPrintText(
                                            "${shop_name}\n"
                                        )
                                )
                                .styleHorizontalPositionTo(2.0)
                                .styleVerticalPositionBy(1.0)
                                .actionPrintText(
                                    "${product_name}\n"
                                )
                                .styleHorizontalPositionTo(2.0)
                                .styleVerticalPositionBy(2.0)
                                .actionPrintText(
                                    "${product_number}\n"
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(72.0, 16.0)
                                        .setX(0.0)
                                        .setY(20.0),
                                    new PageModeBuilder()
                                        .styleHorizontalPositionTo(4.0)
                                        .styleVerticalPositionTo(10.0)
                                        .actionPrintBarcode(new BarcodeParameter("${sku}", BarcodeSymbology.UpcA)
                                            .setBarDots(3)
                                            .setHeight(12.0)
                                            .setPrintHri(true)
                                        )
                                        .styleVerticalPositionTo(2.0)
                                        .actionPrintText(
                                            "MSRP \$${msrp%.2f} \n",
                                            new TextParameter()
                                                .setWidth(
                                                    48,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Right)
                                                )
                                        )
                                        .add(
                                            new PageModeBuilder()
                                                .styleBold(true)
                                                .styleHorizontalPositionTo(46.0)
                                                .styleMagnification(new MagnificationParameter(2, 2))
                                                .styleVerticalPositionBy(3.0)
                                                .actionPrintText(
                                                    "\$${selling_price% .2f}\n"
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