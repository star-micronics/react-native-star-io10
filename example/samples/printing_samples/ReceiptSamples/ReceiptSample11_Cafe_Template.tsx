import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { InternationalCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/InternationalCharacterType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeImageParameter';
import { PageModePrintDirection } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModePrintDirection';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { PageModeRuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRuledLineParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { TextWidthType } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthType';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class ReceiptSample11_Cafe_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(48.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleCjkCharacterPriority([CjkCharacterType.Japanese])
                        .styleInternationalCharacter(InternationalCharacterType.Japan)
                        .addPageMode(
                            new PageModeAreaParameter(48.0, 120.0),
                            new PageModeBuilder()
                                .actionPrintRectangle(new PageModeRectangleParameter(0.0, 0.0, 48.0, 120.0)) // 外枠
                                .actionPrintRectangle(new PageModeRectangleParameter(5.0, 5.0, 16.0, 13.0)) // 収入印紙
                                .stylePrintDirection(PageModePrintDirection.TopToBottom)
                                .styleHorizontalPositionTo(7.0)
                                .styleVerticalPositionTo(30.0)
                                .actionPrintText(
                                    "収　入"
                                )
                                .styleHorizontalPositionTo(7.0)
                                .styleVerticalPositionTo(37.0)
                                .actionPrintText(
                                    "印　紙"
                                )
                                .styleHorizontalPositionTo(0.0)
                                .styleVerticalPositionTo(5.0)
                                .add(
                                    new PageModeBuilder()
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .actionPrintText(
                                            "領　収　証",
                                            new TextParameter()
                                                .setWidth(
                                                    19, // 20文字入りますが、中心位置の都合上19としています。
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                        .setWidthType(TextWidthType.Full)
                                                )
                                        )
                                )
                                .styleHorizontalPositionTo(100.0)
                                .styleVerticalPositionTo(3.0)
                                .actionPrintText(
                                    "No.${number%04d}"
                                )
                                .styleHorizontalPositionTo(80.0)
                                .styleVerticalPositionTo(6.0)
                                .add(
                                    new PageModeBuilder()
                                        .styleMagnification(new MagnificationParameter(2, 1))
                                        .actionPrintText(
                                            "${year%04d}"
                                        )
                                        .styleMagnification(new MagnificationParameter(1, 1))
                                        .actionPrintText(
                                            "年"
                                        )
                                        .styleMagnification(new MagnificationParameter(2, 1))
                                        .actionPrintText(
                                            "${month%02d}"
                                        )
                                        .styleMagnification(new MagnificationParameter(1, 1))
                                        .actionPrintText(
                                            "月"
                                        )
                                        .styleMagnification(new MagnificationParameter(2, 1))
                                        .actionPrintText(
                                            "${day%02d}"
                                        )
                                        .styleMagnification(new MagnificationParameter(1, 1))
                                        .actionPrintText(
                                            "日"
                                        )
                                )
                                .styleHorizontalPositionTo(4.0)
                                .styleVerticalPositionTo(12.0)
                                .add(
                                    new PageModeBuilder()
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .actionPrintText(
                                            "${name}",
                                            new TextParameter()
                                                .setWidth(
                                                    7,
                                                    new TextWidthParameter()
                                                        .setWidthType(TextWidthType.Full)
                                                )
                                        )
                                        .actionPrintText(
                                            "様"
                                        )
                                        .actionPrintRuledLine(
                                            new PageModeRuledLineParameter(4.0, 16.0, 53.0, 16.0)
                                                .setThickness(0.2)
                                        )
                                )
                                .styleHorizontalPositionTo(76.0)
                                .styleVerticalPositionTo(18.0)
                                .actionPrintText(
                                    "但し "
                                )
                                .actionPrintText(
                                    "${description}",
                                    new TextParameter()
                                        .setWidth(
                                            12,
                                            new TextWidthParameter()
                                                .setWidthType(TextWidthType.Full)
                                        )
                                )
                                .styleHorizontalPositionTo(20.0)
                                .styleVerticalPositionTo(20.0)
                                .add(
                                    new PageModeBuilder()
                                        .styleMagnification(new MagnificationParameter(2, 2))
                                        .actionPrintText(
                                            "金${price}円",
                                            new TextParameter()
                                                .setWidth(
                                                    9,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Right)
                                                        .setWidthType(TextWidthType.Full)
                                                )
                                        )
                                        .actionPrintRuledLine(
                                            new PageModeRuledLineParameter(20.0, 24.0, 75.0, 24.0)
                                                .setThickness(0.2)
                                        )
                                )
                                .styleHorizontalPositionTo(24.0)
                                .styleVerticalPositionTo(26.0)
                                .actionPrintText(
                                    "上記正に領収いたしました"
                                )
                                .styleHorizontalPositionTo(24.0)
                                .styleVerticalPositionBy(6.0)
                                .actionPrintText(
                                    "(税抜金額"
                                )
                                .actionPrintText(
                                    "\\${excluding_tax})",
                                    new TextParameter()
                                        .setWidth(
                                            15,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right
                                                )
                                        )
                                )
                                .styleHorizontalPositionTo(24.0)
                                .styleVerticalPositionBy(4.0)
                                .actionPrintText(
                                    "(消費税等"
                                )
                                .actionPrintText(
                                    "\\${tax})",
                                    new TextParameter()
                                        .setWidth(
                                            15,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                                .actionPrintImage(new PageModeImageParameter("cafe_template_coffee_cup.png", 65.0, 27.0, 80))
                                .addPageMode(
                                    new PageModeAreaParameter(8.0, 30.0)
                                        .setX(11.0)
                                        .setY(76.0),
                                    new PageModeBuilder()
                                        .styleHorizontalPositionTo(0.0)
                                        .actionPrintText(
                                            "${store_name}\n"
                                        )
                                )
                                .addPageMode(
                                    new PageModeAreaParameter(10.0, 44.0)
                                        .setX(0.0)
                                        .setY(62.0),
                                    new PageModeBuilder()
                                        .styleHorizontalPositionTo(0.0)
                                        .actionPrintText(
                                            "${address}\n",
                                            new TextParameter()
                                                .setWidth(
                                                    29, // 全角文字を考慮する必要
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                        .actionPrintText(
                                            "TEL ${telephone_number}\n",
                                            new TextParameter()
                                                .setWidth(
                                                    29,
                                                    new TextWidthParameter()
                                                        .setAlignment(TextAlignment.Center)
                                                )
                                        )
                                )
                                .styleHorizontalPositionTo(110.0)
                                .styleVerticalPositionTo(35.0)
                                .actionPrintText(
                                    "印"
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}