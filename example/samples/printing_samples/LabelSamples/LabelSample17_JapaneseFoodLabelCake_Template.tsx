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

export class LabelSample17_JapaneseFoodLabelCake_Template {
    static async createJapaneseFoodLabelCake(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(48.0)
                .addPrinter(
                    new StarXpandCommand.PrinterBuilder()
                    // モデルにより対応する文字エンコーディング指定APIが異なります。
                    // 下記ページのSupported Modelを参照し、ご利用のモデルが対応するAPIを使用してください。
                    // https://www.star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/api-reference/star-xpand-command/printer-builder/style-cjk-character-priority.html
                    .styleCjkCharacterPriority([CjkCharacterType.Japanese])
                    // https://www.star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/api-reference/star-xpand-command/printer-builder/style-second-priority-character-encoding.html
                    //.styleSecondPriorityCharacterEncoding(CharacterEncodingType.Japanese)

                    .addPageMode(
                        new PageModeAreaParameter(48.0, 56.0),
                        new StarXpandCommand.PageModeBuilder()
                            .actionPrintRectangle(
                                new PageModeRectangleParameter(0.0, 3.5, 40.0, 52.0)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(0.0, 7.5, 40.0, 7.5)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(0.0, 23.5, 40.0, 23.5)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(0.0, 27.5, 40.0, 27.5)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(0.0, 31.5, 40.0, 31.5)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(0.0, 43.5, 40.0, 43.5)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(12.5, 3.5, 12.5, 55.5)
                            )
                            .styleHorizontalPositionTo(0.5)
                            .styleVerticalPositionTo(0.0)
                            .actionPrintText(
                                "品　名"
                            )
                            .styleHorizontalPositionTo(17.0)
                            .actionPrintText(
                                "${name}\n"
                            )
                            .styleHorizontalPositionTo(0.5)
                            .actionPrintText(
                                "名　称"
                            )
                            .styleHorizontalPositionTo(22.0)
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
                                    .setY(8.0),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "${ingredients}\n"
                                    )
                            )
                            .styleHorizontalPositionTo(0.5)
                            .styleVerticalPositionTo(24.0)
                            .actionPrintText(
                                "内容量"
                            )
                            .styleHorizontalPositionTo(23.0)
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
                                    .setY(32.0),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "${preservation_method}"
                                    )
                            )
                            .styleHorizontalPositionTo(0.5)
                            .styleVerticalPositionTo(44.0)
                            .actionPrintText(
                                "製造者"
                            )
                            .addPageMode(
                                new PageModeAreaParameter(26.0, 12.0)
                                    .setX(13.0)
                                    .setY(44.0),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "${manufacturer}"
                                    )
                            )
                            .actionPrintImage(
                                new PageModeImageParameter(
                                    "label_sample17_japanese_food_label_cake_plastic.png",
                                    41.0, 0.0, 48)
                            )
                            .stylePrintDirection(PageModePrintDirection.BottomToTop)
                            .styleHorizontalPositionTo(6.0)
                            .styleVerticalPositionTo(42.0)
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