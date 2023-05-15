import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CharacterEncodingType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CharacterEncodingType';
import { CjkCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CjkCharacterType';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';

export class Sample09_ExpirationLabelJP {
    static async createExpirationLabelJP(): Promise<string> {
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

            .styleAlignment(Alignment.Center)
                            .add(
                                new StarXpandCommand.PrinterBuilder()
                                    .styleBold(true)
                                    .styleMagnification(new MagnificationParameter(2, 2))
                                    .actionPrintText(
                                        "＜要冷蔵＞\n"
                                    )
                            )
                            .add(
                                new StarXpandCommand.PrinterBuilder()
                                    .styleAlignment(Alignment.Left)
                                    .actionPrintText(
                                        "10℃以下で保存し、本日中にお召し上がり下さい。\n" +
                                                "　　消費期限\n"
                                    )
                            )
                            .styleAlignment(Alignment.Center)
                            .styleMagnification(new MagnificationParameter(2, 2))
                            .actionPrintText(
                                "2010.1.25\n"
                            )
                            .styleMagnification(new MagnificationParameter(1, 1))
                            .actionPrintText(
                                "スターショップ\n" +
                                        "静岡　太郎\n" +
                                        "XXX県XXX市XXX町123-1\n" +
                                        "TEL 1234-567-890\n"
                            )
                            .actionCut(CutType.Partial)
        )
        );

        return await builder.getCommands();
    }
}