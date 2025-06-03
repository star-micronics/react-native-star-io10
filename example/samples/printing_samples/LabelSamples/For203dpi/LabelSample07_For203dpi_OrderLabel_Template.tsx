import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextPrintType } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextPrintType';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample07_For203dpi_OrderLabel_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleCjkCharacterPriority([CjkCharacterType.Japanese])
                        .addPageMode(
                            new PageModeAreaParameter(72.0, 60.0),
                            new PageModeBuilder()
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(2.0, 12.0, 40.0, 10.0)
                                        .setThickness(0.5)
                                ) // 注文番号
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(44.0, 12.0, 26.0, 10.0)
                                        .setThickness(0.5)
                                ) // 個数
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(2.0, 28.0, 20.0, 10.0)
                                        .setThickness(0.5)
                                ) // 常温
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(26.0, 28.0, 20.0, 10.0)
                                        .setThickness(0.5)
                                ) // 冷蔵
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(50.0, 28.0, 20.0, 10.0)
                                        .setThickness(0.5)
                                ) // 冷凍
                                .actionPrintRectangle(
                                    new PageModeRectangleParameter(2.0, 44.0, 68.0, 15.0)
                                        .setThickness(0.5)
                                ) // 備考欄
                                .addPageMode(
                                    new PageModeAreaParameter(72.0, 4.0)
                                        .setY(2.0),
                                    new PageModeBuilder()
                                        .styleHorizontalPositionTo(12.0)
                                        .styleUnderLine(true)
                                        .actionPrintText(
                                            "剥がさずにそのまま配達して下さい\n"
                                        )
                                )
                                .styleHorizontalPositionTo(16.0)
                                .styleVerticalPositionTo(8.0)
                                .actionPrintText(
                                    "注文番号"
                                )
                                .styleHorizontalPositionTo(54.0)
                                .actionPrintText(
                                    "個数"
                                )
                                .styleHorizontalPositionTo(45.0)
                                .styleVerticalPositionBy(8.0)
                                .actionPrintText(
                                    "合計"
                                )
                                .styleHorizontalPositionBy(15.0)
                                .actionPrintText(
                                    "袋"
                                )
                                .styleHorizontalPositionTo(9.0)
                                .styleVerticalPositionBy(8.0)
                                .actionPrintText(
                                    "常温"
                                )
                                .styleHorizontalPositionBy(18.0)
                                .actionPrintText(
                                    "冷蔵"
                                )
                                .styleHorizontalPositionBy(18.0)
                                .actionPrintText(
                                    "冷凍"
                                )
                                .styleHorizontalPositionTo(18.0)
                                .styleVerticalPositionBy(8.0)
                                .actionPrintText(
                                    "袋"
                                )
                                .styleHorizontalPositionBy(21.0)
                                .actionPrintText(
                                    "袋"
                                )
                                .styleHorizontalPositionBy(21.0)
                                .actionPrintText(
                                    "袋"
                                )
                                .styleHorizontalPositionTo(4.0)
                                .styleVerticalPositionBy(8.0)
                                .actionPrintText(
                                    "備考欄${remarks}"
                                )
                                .add(
                                    new PageModeBuilder()
                                        .styleHorizontalPositionTo(4.0)
                                        .styleMagnification(new MagnificationParameter(1, 2))
                                        .styleVerticalPositionTo(17.0)
                                        .actionPrintText(
                                            "${order_number}",
                                            new TextParameter()
                                                .setWidth(
                                                    24,
                                                    new TextWidthParameter()
                                                        .setPrintType(TextPrintType.Always)
                                                )
                                        )
                                        .styleHorizontalPositionBy(12.0)
                                        .actionPrintText(
                                            "${total_quantity}",
                                            new TextParameter()
                                                .setWidth(
                                                    9,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Right)
                                                        .setPrintType(TextPrintType.Always)
                                                )
                                        )
                                        .styleHorizontalPositionTo(4.0)
                                        .styleVerticalPositionBy(16.0)
                                        .actionPrintText(
                                            "${room_temperature}",
                                            new TextParameter()
                                                .setWidth(
                                                    9,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Right)
                                                        .setPrintType(TextPrintType.Always)
                                                )
                                        )
                                        .styleHorizontalPositionBy(10.0)
                                        .actionPrintText(
                                            "${refrigeration}",
                                            new TextParameter()
                                                .setWidth(
                                                    9,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Right)
                                                        .setPrintType(TextPrintType.Always)
                                                )
                                        )
                                        .styleHorizontalPositionBy(11.0)
                                        .actionPrintText(
                                            "${frozen}",
                                            new TextParameter()
                                                .setWidth(
                                                    9,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Right)
                                                        .setPrintType(TextPrintType.Always)
                                                )
                                        )
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(64.0, 12.0)
                                        .setX(4.0)
                                        .setY(46.0),
                                    new PageModeBuilder()
                                        .actionPrintText(
                                            "${note}"
                                        )
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}