import { StarXpandCommand } from 'react-native-star-io10';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CharacterEncodingType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CharacterEncodingType';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeImageParameter';
import { PageModePrintDirection } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModePrintDirection';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { PageModeRuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRuledLineParameter';

export class LabelSample02_For300dpi_JapaneseFoodLabelCake_Template {
    static async createJapaneseFoodLabelCake(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(48.7)
                .addPrinter(
                    new StarXpandCommand.PrinterBuilder()
                    // モデルにより対応する文字エンコーディング指定APIが異なります。
                    // 下記ページのSupported Modelを参照し、ご利用のモデルが対応するAPIを使用してください。
                    // https://www.star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/api-reference/star-xpand-command/printer-builder/style-cjk-character-priority.html
                    .styleCjkCharacterPriority([CjkCharacterType.Japanese])
                    // https://www.star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/api-reference/star-xpand-command/printer-builder/style-second-priority-character-encoding.html
                    //.styleSecondPriorityCharacterEncoding(CharacterEncodingType.Japanese)

                    .addPageMode(
                        new PageModeAreaParameter(48.7, 33.3),
                        new StarXpandCommand.PageModeBuilder()
                            .actionPrintRectangle(
                                new PageModeRectangleParameter(0.0, 2.3, 41.0, 31.0)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(0.0, 5.0, 41.0, 5.0)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(0.0, 13.5, 41.0, 13.5)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(0.0, 16.2, 41.0, 16.2)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(0.0, 18.9, 41.0, 18.9)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(0.0, 24.5, 41.0, 24.5)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(12.5, 2.3, 12.5, 33.3)
                            )
                            .styleHorizontalPositionTo(0.5)
                            .styleVerticalPositionTo(0.0)
                            .actionPrintText(
                                "品　名"
                            )
                            .styleHorizontalPositionTo(20.0)
                            .actionPrintText(
                                "${name}\n"
                            )
                            .styleHorizontalPositionTo(0.5)
                            .actionPrintText(
                                "名　称"
                            )
                            .styleHorizontalPositionTo(23.0)
                            .actionPrintText(
                                "${classification}\n"
                            )
                            .styleHorizontalPositionTo(0.5)
                            .actionPrintText(
                                "原材料名"
                            )
                            .addPageMode(
                                new PageModeAreaParameter(26.0, 16.0)
                                    .setX(13.0)
                                    .setY(5.5),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "${ingredients}\n"
                                    )
                            )
                            .styleHorizontalPositionTo(0.5)
                            .styleVerticalPositionTo(14.0)
                            .actionPrintText(
                                "内容量"
                            )
                            .styleHorizontalPositionTo(13.0)
                            .actionPrintText(
                                "${contents}\n"
                            )
                            .styleHorizontalPositionTo(0.5)
                            .actionPrintText(
                                "消費期限"
                            )
                            .styleHorizontalPositionTo(13.0)
                            .actionPrintText(
                                "${expiry_date}\n"
                            )
                            .styleHorizontalPositionTo(0.5)
                            .actionPrintText(
                                "保存方法"
                            )
                            .addPageMode(
                                new PageModeAreaParameter(26.0, 12.0)
                                    .setX(13.0)
                                    .setY(19.5),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "${preservation_method}"
                                    )
                            )
                            .styleHorizontalPositionTo(0.5)
                            .styleVerticalPositionTo(25.0)
                            .actionPrintText(
                                "製造者"
                            )
                            .addPageMode(
                                new PageModeAreaParameter(26.0, 12.0)
                                    .setX(13.0)
                                    .setY(25.0),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "${manufacturer}"
                                    )
                            )
                            .actionPrintImage(
                                new PageModeImageParameter(
                                    "japanese_food_label_cake_plastic.png",
                                    42.0, 0.0, 48)
                            )
                            .stylePrintDirection(PageModePrintDirection.BottomToTop)
                            .styleHorizontalPositionTo(2.0)
                            .styleVerticalPositionTo(43.0)
                            .actionPrintBarcode(
                                new BarcodeParameter("${sku}", BarcodeSymbology.Jan13)
                                    .setBarDots(3)
                                    .setHeight(3.0)
                                    .setPrintHri(true)
                            )
                    )
                    .actionCut(CutType.Partial)
            )
        );

        return await builder.getCommands();
    }
}