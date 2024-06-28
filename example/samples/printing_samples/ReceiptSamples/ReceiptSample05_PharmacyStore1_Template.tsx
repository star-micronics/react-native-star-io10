import { StarXpandCommand } from 'react-native-star-io10';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { BarcodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeParameter';
import { BarcodeSymbology } from 'react-native-star-io10/src/StarXpandCommand/Printer/BarcodeSymbology';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { ImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/ImageParameter';
import { PrinterParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/PrinterParameter';
import { TextAlignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextAlignment';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';
import { PrinterBuilder } from 'react-native-star-io10/src/StarXpandCommand/PrinterBuilder';
import { TemplateExtensionParameter } from 'react-native-star-io10/src/StarXpandCommand/TemplateExtensionParameter';

export class ReceiptSample05_PharmacyStore1_Template {
    static async createReceiptTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .settingPrintableArea(72.0)
                .addPrinter(
                    new PrinterBuilder()
                        .styleAlignment(Alignment.Center)
                        .styleLineSpace(3.0)
                        .actionPrintImage(
                            new ImageParameter("logo_01.png", 300)
                        )
                        .styleAlignment(Alignment.Left)
                        .actionPrintText(
                            "I'm ${staff_name}, Thank you for allowing me to serve you today.\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "  270               10    9288   09136  027\n"
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Center)
                        .actionPrintText(
                            "RFN# ${rfn}\n"
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Left)
                        .add(
                            new PrinterBuilder(
                                new PrinterParameter()
                                    .setTemplateExtension(
                                        new TemplateExtensionParameter()
                                            .setEnableArrayFieldData(true)
                                    )
                            )
                                .actionPrintText(
                                    "${item_list.mark}",
                                    new TextParameter()
                                        .setWidth(2)
                                )
                                .actionPrintText(
                                    "${item_list.name}",
                                    new TextParameter()
                                        .setWidth(27)
                                )
                                .actionPrintText(
                                    " "
                                )
                                .actionPrintText(
                                    "${item_list.quantity}",
                                    new TextParameter()
                                        .setWidth(
                                            2,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                                .actionPrintText(
                                    "${item_list.tax_mark}",
                                    new TextParameter()
                                        .setWidth(2)
                                )
                                .actionPrintText(
                                    "${item_list.price%.2f}",
                                    new TextParameter()
                                        .setWidth(
                                            8,
                                            new TextWidthParameter()
                                                .setAlignment(TextAlignment.Right)
                                        )
                                )
                                .actionPrintText(
                                    "${item_list.remarks}\n",
                                    new TextParameter()
                                        .setWidth(6)
                                )
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "   A=0.25% SALES TAX"
                        )
                        .actionPrintText(
                            "${sales_tax%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    22,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "     TOTAL"
                        )
                        .actionPrintText(
                            "${total_price%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    32,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "${payment_method}",
                            new TextParameter()
                                .setWidth(
                                    30,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Center)
                                )
                        )
                        .actionPrintText(
                            "${payment_amount%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    12,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "     CASH BACK"
                        )
                        .actionPrintText(
                            "${cash_back%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    28,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "  MAB ADVERTISED SAVINGS:"
                        )
                        .actionPrintText(
                            "${mab_serving%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    23,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "  MFG COUPON SAVINGS:"
                        )
                        .actionPrintText(
                            "${mfg_serving%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    27,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "-----\n",
                            new TextParameter()
                                .setWidth(
                                    48,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionPrintText(
                            "  YOUR TOTAL SAVINGS:"
                        )
                        .actionPrintText(
                            "${total_serving%.2f}\n",
                            new TextParameter()
                                .setWidth(
                                    27,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Center)
                        .actionPrintBarcode(
                            new BarcodeParameter("${barcode}", BarcodeSymbology.Code128)
                                .setBarDots(1)
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Left)
                        .actionPrintText(
                            "${address}\n" +
                            "STORE\t${telephone_number}\n"
                        )
                        .actionFeedLine(2)
                        .actionPrintText(
                            "F=ELIGIBLE FLEX SPEND ACCT ITEM (FSA)\n"
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Center)
                        .actionPrintText(
                            "THANK YOU\n" +
                            "FOR FASTER SERVICE, CALL IN YOUR\n" +
                            "PRESCRIPTION ORDER OR PLACE IT ON\n" +
                            "${host_name} 24 HOURS IN ADVANCE\n"
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Left)
                        .actionPrintText(
                            "   ${date}",
                            new TextParameter()
                                .setWidth(24)
                        )
                        .actionPrintText(
                            "${time}    \n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Center)
                        .actionPrintText(
                            "*********************************************** \n" +
                            "YOUR OPINION COUNTS!\n" +
                            "*********************************************** \n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "ENTER FOR A CHANCE TO WIN $10,000 CASH\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "PLEASE CALL TOLL FREE\n" +
                            "${free_call}\n" +
                            "CR LOGON TO\n" +
                            "${host_name}\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "WITHIN 72 HOURS TO COMPLETE A\n" +
                            "SHORT SURVEY ABOUT YOUR RECENT\n" +
                            "VISIT TO THIS STAR MICRONICS\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "PARTICIPE PARA GANAR\n" +
                            "$10,000 DOLARES IN EFECTIVO!\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "FOR FAVOR LLAME AL NUMERO GRATUITO\n" +
                            "${free_call} 0 VISITENOS EN\n" +
                            "INTERNET EN:\n" +
                            "${host_name}\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "DURANTE LAS PROXIMAS 72 HOURS, PARA\n" +
                            "LLENAR UNA EREVE ENCUESTA ACERCA DE\n" +
                            "SU RECIENTE VISITA A ESTA\n" +
                            "FARMACIA STAR MICRONICS.\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "SERVEY* ${survey_number}\n"
                        )
                        .actionFeedLine(1)
                        .actionPrintText(
                            "SEE STORE FOR CONTEST RULES\n" +
                            "VISITE LA TIENDA PARA DETALLES ACERCA\n" +
                            "DE LOS REGLAS DEL CONCURSO.\n"
                        )
                        .actionFeedLine(1)
                        .styleAlignment(Alignment.Left)
                        .actionPrintText(
                            "STAR MICRONICS #${number}\n"
                        )
                        .actionPrintText(
                            "SEQ # ${seq_number}\n"
                        )
                        .actionPrintText(
                            "CARD# ${card_number}\n"
                        )
                        .actionPrintText(
                            "SEQ # ${seq_number}  PAYMENT FROM PRIMARY\n"
                        )
                        .actionFeedLine(2)
                        .actionPrintText(
                            "RETAIN THIS RECEIPT FOR YOUR RECORDS\n"
                        )
                        .actionFeedLine(2)
                        .actionPrintText(
                            "   ${date}",
                            new TextParameter()
                                .setWidth(24)
                        )
                        .actionPrintText(
                            "${time}    \n",
                            new TextParameter()
                                .setWidth(
                                    24,
                                    new TextWidthParameter()
                                        .setAlignment(TextAlignment.Right)
                                )
                        )
                        .actionCut(CutType.Partial)
                )
        );
        return await builder.getCommands();
    }
}