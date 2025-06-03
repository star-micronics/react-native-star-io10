import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { PageModeBuilder } from 'react-native-star-io10/src/StarXpandCommand/PageModeBuilder';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { PageModeAreaParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeAreaParameter';
import { PageModeImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PageModeImageParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample04_For300dpi_Sale50PercentOff_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(48.7)
                .addPrinter(
                    new PrinterBuilder()
                        .styleAlignment(Alignment.Center)
                        .addPageMode(
                            new PageModeAreaParameter(48.7, 46.0),
                            new PageModeBuilder()
                                .actionPrintImage(new PageModeImageParameter("sale_50off_background.png", 0.0, 0.0, 576))
                                .styleHorizontalPositionTo(4.0)
                                .styleMagnification(new MagnificationParameter(4, 4))
                                .styleVerticalPositionTo(27.0)
                                .actionPrintText(
                                    "${note}\n",
                                    new TextParameter()
                                        .setWidth(
                                            10,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Center)
                                        )
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}