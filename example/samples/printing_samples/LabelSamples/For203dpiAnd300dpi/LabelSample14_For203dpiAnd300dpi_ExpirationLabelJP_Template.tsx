import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CharacterEncodingType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CharacterEncodingType';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class LabelSample14_For203dpiAnd300dpi_ExpirationLabelJP_Template {
    static async createExpirationLabelJP(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                // Change the printable area setting for this layout according to the printer resolution.
                // 48.0 for 203dpi, 34.0 for 300dpi
                .settingPrintableArea(48.0)
                //.settingPrintableArea(34.0)
                .addPrinter(
                    new StarXpandCommand.PrinterBuilder()
                        // モデルにより対応する文字エンコーディング指定APIが異なります。
                        // 下記ページのSupported Modelを参照し、ご利用のモデルが対応するAPIを使用してください。
                        // https://www.star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/api-reference/star-xpand-command/printer-builder/style-cjk-character-priority.html
                        .styleCjkCharacterPriority([CjkCharacterType.Japanese])
                        // https://www.star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/api-reference/star-xpand-command/printer-builder/style-second-priority-character-encoding.html
                        //.styleSecondPriorityCharacterEncoding(CharacterEncodingType.Japanese)

            .styleAlignment(Alignment.Center)
                            .add(
                                new StarXpandCommand.PrinterBuilder()
                                    .styleBold(true)
                                    .styleMagnification(new MagnificationParameter(2, 2))
                                    .actionPrintText(
                                        "${remarks}\n"
                                    )
                            )
                            .add(
                                new StarXpandCommand.PrinterBuilder()
                                    .styleAlignment(Alignment.Left)
                                    .actionPrintText(
                                        "${note}\n" +
                                        "　　消費期限\n"
                                    )
                            )
                            .styleAlignment(Alignment.Center)
                            .styleMagnification(new MagnificationParameter(2, 2))
                            .actionPrintText(
                                "${expiry_date}\n"
                            )
                            .styleMagnification(new MagnificationParameter(1, 1))
                            .actionPrintText(
                                "${shop_name}\n" +
                                "${address}\n" +
                                "TEL ${telephone_number}\n"
                            )
                            .actionCut(CutType.Partial)
        )
        );

        return await builder.getCommands();
    }
}