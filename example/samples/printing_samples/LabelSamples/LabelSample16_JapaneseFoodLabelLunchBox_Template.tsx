import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CharacterEncodingType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CharacterEncodingType';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { ImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/ImageParameter';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeImageParameter';
import { PageModeRectangleParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRectangleParameter';
import { PageModeRuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeRuledLineParameter';

export class LabelSample16_JapaneseFoodLabelLunchBox_Template {
    static async createJapaneseFoodLabelLunchBox(): Promise<string> {
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
                                        "${name}"
                                    )
                            )
                            .styleHorizontalPositionTo(1.0)
                            .styleVerticalPositionBy(8.0)
                            .actionPrintText(
                                "消費期限 ${expiry_date}\n"
                            )
                            .styleHorizontalPositionBy(2.0)
                            .styleVerticalPositionBy(3.0)
                            .actionPrintBarcode(
                                new BarcodeParameter("${sku}", BarcodeSymbology.Jan13)
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
                                        "${price}"
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
                                        "原材料名：${ingredients}\n"
                                    )
                            )
                            .addPageMode(
                                new PageModeAreaParameter(16.0, 14.0)
                                    .setX(1.0)
                                    .setY(46.0),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "保存方法："
                                    )
                            )
                            .addPageMode(
                                new PageModeAreaParameter(32.0, 14.0)
                                    .setX(16.0)
                                    .setY(46.0),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "${preservation_method}"
                                    )
                            )
                            .addPageMode(
                                new PageModeAreaParameter(48.0, 14.0)
                                    .setX(1.0)
                                    .setY(58.0),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText(
                                        "製造者：${manufacturer}\n" +
                                        "${address}\n" +
                                        "TEL ${telephone_number}\n"
                                    )
                            )
                            .actionPrintImage(
                                new PageModeImageParameter(
                                    "label_sample16_japanese_food_label_lunch_box_plastic.png",
                                    40.0, 63.0, 48)
                            )
                    )
                    .actionCut(CutType.Partial)
            )
        );

        return await builder.getCommands();
    }
}