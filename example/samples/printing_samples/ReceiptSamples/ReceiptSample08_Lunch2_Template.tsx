import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { ImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/ImageParameter';
import { InternationalCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/InternationalCharacterType';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { TextWidthType } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthType';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class ReceiptSample08_Lunch2_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(48.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleAlignment(Alignment.Center)
                        .styleCjkCharacterPriority([CjkCharacterType.Japanese])
                        .styleInternationalCharacter(InternationalCharacterType.Japan)
                        .actionPrintImage(
                            new ImageParameter("logo_01.png", 400)
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Right)
                        .actionPrintText(
                            "${number}\n" +
                            "会計日:${account_day}\n"
                        )
                        .actionFeed(3.0)
                        .styleAlignment(Alignment.Left)
                        .add(
                            new PrinterBuilder()
                                .styleAlignment(Alignment.Center)
                                .styleBold(true)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "領 収 書\n"
                                )
                        )
                        .actionFeed(3.0)
                        .styleUnderLine(true)
                        .actionPrintText(
                            "${customer_name}",
                            new TextParameter()
                                .setWidth(
                                    15,
                                    new TextWidthParameter()
                                        .setWidthType(TextWidthType.Full)
                                )
                        )
                        .actionPrintText(
                            "様\n"
                        )
                        .styleUnderLine(false)
                        .actionFeedLine(2)
                        .actionPrintText(
                            "領収金額\n"
                        )
                        .actionPrintText(
                            "        "
                        )
                        .styleBold(true)
                        .styleUnderLine(true)
                        .actionPrintText(
                            "\\${total_price}-\n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .styleBold(false)
                        .styleUnderLine(false)
                        .actionPrintText(
                            "     (10%標準対象"
                        )
                        .actionPrintText(
                            "\\${tax_rate_10_target})\n",
                            new TextParameter()
                                .setWidth(
                                    15,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "     ( 内消費税等"
                        )
                        .actionPrintText(
                            "\\${tax_rate_10_tax})\n",
                            new TextParameter()
                                .setWidth(
                                    15,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .styleAlignment(Alignment.Center)
                        .actionFeedLine(1)
                        .actionPrintText(
                            "上記正に領収いたしました\n"
                        )
                        .actionFeedLine(2)
                        .styleAlignment(Alignment.Left)
                        .styleUnderLine(true)
                        .actionPrintText(
                            "但 "
                        )
                        .actionPrintText(
                            "${description}",
                            new TextParameter()
                                .setWidth(
                                    11,
                                    new TextWidthParameter()
                                        .setWidthType(TextWidthType.Full)
                                )
                        )
                        .actionPrintText(
                            " として"
                        )
                        .actionFeedLine(3)
                        .styleUnderLine(false)
                        .add(
                            new PrinterBuilder()
                                .styleBold(true)
                                .styleMagnification(new MagnificationParameter(2, 2))
                                .actionPrintText(
                                    "${store_name}\n"
                                )
                        )
                        .actionPrintText(
                            "${address}\n" +
                            "TEL:${telephone_number}\n" +
                            "登録番号:${registration_number}\n" +
                            "\n" +
                            "担当者:${staff_name}\n" +
                            "領収書No:\n" +
                            "${receipt_number}\n"
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}