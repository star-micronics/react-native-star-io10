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

export class Sample13_JapaneseFoodLabelCake {
    static async createJapaneseFoodLabelCake(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
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
                                "ロールケーキ\n"
                            )
                            .styleHorizontalPositionTo(0.5)
                            .actionPrintText(
                                "名　称"
                            )
                            .styleHorizontalPositionTo(22.0)
                            .actionPrintText(
                                "洋菓子\n"
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
                                        "卵、砂糖、小麦粉、ショートニング、油脂、ベーキングパウダー\n"
                                    )
                            )
                            .styleHorizontalPositionTo(0.5)
                            .styleVerticalPositionTo(24.0)
                            .actionPrintText(
                                "内容量"
                            )
                            .styleHorizontalPositionTo(23.0)
                            .actionPrintText(
                                "1個\n"
                            )
                            .styleHorizontalPositionTo(0.5)
                            .actionPrintText(
                                "消費期限"
                            )
                            .styleHorizontalPositionTo(13.0)
                            .actionPrintText(
                                "2010年01月31日\n"
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
                                        "直射日光・高温多湿を避けて、保存してください。"
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
                                        "スターショップ\n" +
                                        "XXX県XXX市XXX町123-1\n" +
                                        "TEL 1234-567-890"
                                    )
                            )
                            .actionPrintImage(
                                new PageModeImageParameter(
                                    "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",
                                    41.0, 0.0, 48)
                            )
                            .stylePrintDirection(PageModePrintDirection.BottomToTop)
                            .styleHorizontalPositionTo(6.0)
                            .styleVerticalPositionTo(42.0)
                            .actionPrintBarcode(
                                new BarcodeParameter("0123456789012", BarcodeSymbology.Jan13)
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