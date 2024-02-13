import { StarXpandCommand } from 'react-native-star-io10';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { ImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/ImageParameter';
import { InternationalCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/InternationalCharacterType';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { TextWidthType } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthType';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class ReceiptSample07_Lunch1_Template {
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
                        .actionPrintText(
                            "["
                        )
                        .styleBold(true)
                        .actionPrintText(
                            "領収書"
                        )
                        .styleBold(false)
                        .actionPrintText(
                            "]\n"
                        )
                        .actionPrintText(
                            "${store_name}\n"
                        )
                        .add(
                            new PrinterBuilder()
                                .styleLineSpace(3.00)
                                .actionPrintText(
                                    "${address}"
                                )
                        )
                        .actionPrintText(
                            "\nTEL:${telephone_number}\n" +
                            "登録番号:${registration_number}\n"
                        )
                        .styleAlignment(Alignment.Left)
                        .actionPrintText(
                            "${datetime}\n" +
                            "レジ:${register_number%04d}" + "    担当:${staff_number%04d}\n" +
                            "人数:${number_of_people}名\n" +
                            "伝票名:${voucher_name}\n" +
                            "取引No:${transaction_number}\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "ご利用ありがとうございます\n"
                        )
                        .actionFeedLine(1)
                        .add(
                            new PrinterBuilder(
                                new PrinterParameter()
                                    .setTemplateExtension(
                                        new TemplateExtensionParameter()
                                            .setEnableArrayFieldData(true)
                                    )
                            )
                                .actionPrintText(
                                    "${item_list.name}\n",
                                    new TextParameter()
                                        .setWidth(
                                            16,
                                            new TextWidthParameter()
                                                .setWidthType(TextWidthType.Full)
                                        )
                                )
                                .actionPrintText(
                                    "\\${item_list.unit_price}  ${item_list.number_of_items}点  \\${item_list.price}\n",
                                    new TextParameter()
                                        .setWidth(
                                            32,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                        )
                        .actionPrintText(
                            "－－－－－－－－－－－－－－－－\n"
                        )
                        .actionPrintText(
                            "小計"
                        )
                        .actionPrintText(
                            "${total_number_of_items}点  \\${subtotal_price}\n",
                            new TextParameter()
                                .setWidth(
                                    28,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionFeed(2.0)
                        .actionPrintText(
                            "合計"
                        )
                        .styleBold(true)
                        .actionPrintText(
                            "\\${total_price}\n",
                            new TextParameter()
                                .setWidth(
                                    28,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .styleBold(false)
                        .actionPrintText(
                            "(内消費税等"
                        )
                        .actionPrintText(
                            "\\${total_tax})\n",
                            new TextParameter()
                                .setWidth(
                                    21,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "(10%標準対象"
                        )
                        .actionPrintText(
                            "\\${tax_rate_10_target})\n",
                            new TextParameter()
                                .setWidth(
                                    20,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "( 内消費税等"
                        )
                        .actionPrintText(
                            "\\${tax_rate_10_tax})\n",
                            new TextParameter()
                                .setWidth(
                                    20,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "("
                        )
                        .actionPrintText(
                            "${payment_method}",
                            new TextParameter()
                                .setWidth(
                                    10,
                                    new TextWidthParameter()
                                        .setWidthType(TextWidthType.Full)
                                )
                        )
                        .actionPrintText(
                            "\\${payment_amount})\n",
                            new TextParameter()
                                .setWidth(
                                    11,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "お預かり"
                        )
                        .actionPrintText(
                            "\\${deposit_amount}\n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "お釣り"
                        )
                        .styleBold(true)
                        .actionPrintText(
                            "\\${change_amount}\n",
                            new TextParameter()
                                .setWidth(
                                    26,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .styleAlignment(Alignment.Center)
                        .styleBold(false)
                        .actionFeed(2.0)
                        .actionPrintText(
                            "上記正に領収いたしました\n"
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Left)
                        .actionPrintText(
                            "${note}\n"
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}