import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';

export class LabelSample19_For203dpiAnd300dpi_PrescriptionLabel_Template {
    static async createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                // Change the printable area setting for this layout according to the printer resolution.
                // 72.0 for 203dpi, 48.7 for 300dpi
                .settingPrintableArea(72.0)
                //.settingPrintableArea(48.7)
                .addPrinter(
                    new PrinterBuilder()
                        .actionPrintText(
                            "${contents}\n"
                        )
                        .add(
                            new PrinterBuilder()
                                .styleMagnification(new MagnificationParameter(1, 2))
                                .actionPrintText(
                                    "Take "
                                )
                                .styleBold(true)
                                .actionPrintText(
                                    "${number_of_tablet}"
                                )
                                .styleBold(false)
                                .actionPrintText(
                                    " tablet "
                                )
                                .styleBold(true)
                                .actionPrintText(
                                    "${number_of_times}"
                                )
                                .styleBold(false)
                                .actionPrintText(
                                    " times ${dose_interval}"
                                )
                        )
                        .actionFeed(7.0)
                        .styleBold(true)
                        .actionPrintText(
                            "Warning "
                        )
                        .styleBold(false)
                        .actionPrintText(
                            "${warning1}\n" +
                            "${warning2}\n" +
                            "${warning3}\n"
                        )
                        .styleBold(true)
                        .actionPrintText(
                            "${name}"
                        )
                        .styleBold(false)
                        .styleHorizontalPositionTo(0.0)
                        .actionPrintText(
                            "${date}\n",
                            new TextParameter()
                                .setWidth(
                                    42,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintRuledLine(
                            new RuledLineParameter(72.0)
                                .setThickness(0.4)
                        )
                        .styleLineSpace(3.0)
                        .actionPrintText(
                            "For Advice ${for_advice}\n" +
                            "Keep out of sight and reach of children\n" +
                            "${address}\n"
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}