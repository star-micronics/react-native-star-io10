import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CharacterEncodingType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CharacterEncodingType';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeImageParameter';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { PageModeRuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRuledLineParameter';

export class Sample12_JapaneseFoodLabelLunchBox {
    static async createJapaneseFoodLabelLunchBox(): Promise<string> {
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
                        new PageModeAreaParameter(48.0, 72.0),
                        new StarXpandCommand.PageModeBuilder()
                            .actionPrintRectangle(
                                new PageModeRectangleParameter(0.0, 0.0, 48.0, 72.0)
                                    .setRoundCorner(true)
                                    .setCornerRadius(2.0)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(1.0, 10.0, 47.0, 10.0)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(1.0, 27.0, 47.0, 27.0)
                            )
                            .actionPrintRuledLine(
                                new PageModeRuledLineParameter(1.0, 44.0, 47.0, 44.0)
                            )
                            .styleHorizontalPositionTo(0.0)
                            .styleVerticalPositionTo(0.0)
                            .actionPrintText(
                                "\n"
                            )
                            .add(
                                new StarXpandCommand.PageModeBuilder()
                                    .styleMagnification(new MagnificationParameter(2, 2))
                                    .actionPrintText(
                                        " 唐 揚 げ 弁 当 "
                                    )
                            )
                            .styleHorizontalPositionTo(1.0)
                            .styleVerticalPositionBy(8.0)
                            .actionPrintText(
                                "消費期限 12. 9. 8   22時\n"
                            )
                            .styleHorizontalPositionBy(2.0)
                            .styleVerticalPositionBy(3.0)
                            .actionPrintBarcode(
                                new BarcodeParameter("2100100114008", BarcodeSymbology.Jan13)
                                    .setBarDots(2)
                                    .setHeight(5.0)
                                    .setPrintHri(true)
                            )
                            .add(
                                new StarXpandCommand.PageModeBuilder()
                                    .styleHorizontalPositionTo(38.0)
                                    .styleVerticalPositionTo(18.0)
                                    .styleMagnification(new MagnificationParameter(2, 2))
                                    .actionPrintText(
                                        "400"
                                    )
                            )
                            .styleHorizontalPositionTo(32.0)
                            .styleVerticalPositionTo(23.0)
                            .actionPrintText(
                                "お値段(円)"
                            )
                            .addPageMode(
                                new PageModeAreaParameter(48.0, 20.0)
                                    .setX(1.0)
                                    .setY(28.0),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "原材料名：ご飯(国内産)、鶏肉、おかず、調味料(アミノ酸等)、着色料(赤102、106、黄4)、(原材料の一部に小麦、大豆を含む)\n"
                                    )
                            )
                            .addPageMode(
                                new PageModeAreaParameter(48.0, 28.0)
                                    .setX(1.0)
                                    .setY(46.0),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "保存方法：直射日光・高温多湿を\n" +
                                        "　　　　　避けお早めにお召上が\n" +
                                        "　　　　　りください。\n" +
                                        "製造者：スターショップ\n" +
                                        "XXX県XXX市XXX町123-1\n" +
                                        "TEL 1234-567-890\n"
                                    )
                            )
                            .actionPrintImage(
                                new PageModeImageParameter(
                                    "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",
                                    40.0, 63.0, 48)
                            )
                    )
                    .actionCut(CutType.Partial)
            )
        );

        return await builder.getCommands();
    }
}