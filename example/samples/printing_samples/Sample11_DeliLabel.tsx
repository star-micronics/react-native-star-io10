import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { PageModeRuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRuledLineParameter';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';

export class Sample11_DeliLabel {
    static async createDeliLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .addPrinter(
                    new StarXpandCommand.PrinterBuilder()
                    .styleAlignment(Alignment.Center)
                    .add(
                        new StarXpandCommand.PrinterBuilder()
                            .styleBold(true)
                            .styleMagnification(new MagnificationParameter(2, 2))
                            .actionPrintText(
                                "Star Grocery Store\n"
                            )
                    )
                    .actionPrintText(
                        "123 Star road, City, State 12345\n" +
                                "\n"
                    )
                    .styleAlignment(Alignment.Left)
                    .add(
                        new StarXpandCommand.PrinterBuilder()
                            .styleMagnification(new MagnificationParameter(2, 2))
                            .actionPrintText(
                                "Roast Beef\n"
                            )
                    )
                    .actionPrintRuledLine(
                        new RuledLineParameter(72.0)
                    )
                    .addPageMode(
                        new PageModeAreaParameter(72.0, 32.0)
                            .setY(3.0),
                        new StarXpandCommand.PageModeBuilder()
                            .styleVerticalPositionBy(16.0)
                            .actionPrintBarcode(new BarcodeParameter("21234567890", BarcodeSymbology.UpcA)
                                .setBarDots(3)
                                .setHeight(10.0)
                                .setPrintHri(true)
                            )
                            .actionPrintRectangle(
                                new PageModeRectangleParameter(38.0, 0.0, 34.0, 27.0)
                                    .setRoundCorner(true)
                                    .setCornerRadius(3.0)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(38.0, 13.5, 72.0, 13.5)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(55.0, 0.0, 55.0, 13.5)
                            )
                            .styleHorizontalPositionTo(45.0)
                            .styleVerticalPositionTo(2.0)
                            .actionPrintText(
                                "$/lb\n"
                            )
                            .add(
                                new StarXpandCommand.PageModeBuilder()
                                    .styleHorizontalPositionTo(45.0)
                                    .styleVerticalPositionTo(8.0)
                                    .styleBold(true)
                                    .styleMagnification(new MagnificationParameter(1, 2))
                                    .actionPrintText(
                                        "4.99\n"
                                    )
                            )
                            .styleHorizontalPositionTo(58.0)
                            .styleVerticalPositionTo(2.0)
                            .actionPrintText(
                                "weight\n"
                            )
                            .add(
                                new StarXpandCommand.PageModeBuilder()
                                    .styleHorizontalPositionTo(58.0)
                                    .styleVerticalPositionTo(8.0)
                                    .styleBold(true)
                                    .styleMagnification(new MagnificationParameter(1, 2))
                                    .actionPrintText(
                                        "0.24 lb\n"
                                    )
                            )
                            .styleHorizontalPositionTo(62.0)
                            .styleVerticalPositionTo(15.5)
                            .actionPrintText(
                                "Price\n"
                            )
                            .styleHorizontalPositionTo(60.0)
                            .styleVerticalPositionTo(21.5)
                            .styleBold(true)
                            .styleMagnification(new MagnificationParameter(1, 2))
                            .actionPrintText(
                                "$ 1.20\n"
                            )
                    )
                    .actionCut(CutType.Partial)
        )
        );

        return await builder.getCommands();
    }
}