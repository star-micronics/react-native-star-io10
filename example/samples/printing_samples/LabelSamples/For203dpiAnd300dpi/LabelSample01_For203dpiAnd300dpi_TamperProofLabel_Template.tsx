import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { ImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/ImageParameter';
import { QRCodeLevel } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeLevel';
import { QRCodeModel } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeModel';
import { QRCodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeParameter';

export class LabelSample01_For203dpiAnd300dpi_TamperProofLabel_Template {
    static async createTamperProofLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
        // Change the printable area setting for this layout according to the printer resolution.
        // 72.0 for 203dpi, 48.7 for 300dpi
        .settingPrintableArea(72.0)
        //.settingPrintableArea(48.7)
        .addPrinter(new StarXpandCommand.PrinterBuilder()
            .styleAlignment(Alignment.Center)
                .styleBold(true)
                .styleMagnification(new MagnificationParameter(4, 4))
                .actionPrintText(
                    "SEALED\n"
                )
                .actionPrintText(
                    "FRESH\n"
                )
                .styleBold(false)
                .styleMagnification(new MagnificationParameter(3, 3))
                .actionPrintText(
                    "for Safety\n"
                )
                .actionPrintImage(
                    new ImageParameter("tamper_proof_label_checked.png", 100)
                )
                .styleBold(true)
                .actionPrintText(
                    "................\n"
                )
                .styleBold(false)
                .actionPrintText(
                    "${remarks}\n"
                )
                .actionPrintQRCode(
                    new QRCodeParameter("${store_url}")
                .setCellSize(8)
                .setLevel(QRCodeLevel.Q)
                .setModel(QRCodeModel.Model2))
                .actionCut(CutType.Partial)
            )
        );

        return await builder.getCommands();
    }
}