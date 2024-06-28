import { StarXpandCommand } from 'react-native-star-io10';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { InternationalCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/InternationalCharacterType';
import { QRCodeLevel } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeLevel';
import { QRCodeModel } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeModel';
import { QRCodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeParameter';

export class LabelSample15_FoodDeliveryLabelThai_Template {
    static async createFoodDeliveryThaiLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
        .settingPrintableArea(48.0)
        .addPrinter(
            new StarXpandCommand.PrinterBuilder()
        .styleInternationalCharacter(InternationalCharacterType.Usa)
        .styleCharacterSpace(0.0)
        .styleAlignment(Alignment.Center)
        .styleBold(true)
        .actionPrintText(
            "สลิปการสั่งซื้อ\n"
        )
        .styleBold(false)
        .actionPrintText(
            "${store_name}  \n" +
            "${address} \n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleBold(true)
                .actionPrintText(
                    "#${number%04u}\n"
                )
        )
        .actionPrintText(
            "วันที่:${date}  เวลา:${time}\n" +
            "--------------------------------\n"
        )
        .styleAlignment(Alignment.Left)
        .actionPrintText(
            "ลูกค้า: "
        )
        .styleBold(true)
        .actionPrintText(
            "${customer_name} \n"
        )
        .styleBold(false)
        .actionPrintText(
            "ชำระเงินแล้ว \n" +
            "เวลาที่รับออเดอร์:${order_time}\n" +
            "--------------------------------\n" +
            "\n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder(
                new StarXpandCommand.Printer.PrinterParameter()
                    .setTemplateExtension(
                        new StarXpandCommand.TemplateExtensionParameter()
                            .setEnableArrayFieldData(true)
                    )
            )
                .styleHorizontalTabPositions([3, 18, 23])
                .actionPrintText(
                    "${item_list.number_of_items}X\t${item_list.name}\t",
                )
                .actionPrintText(
                    "${item_list.price}",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            4,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                        )
                )
                .actionPrintText(
                    "\tบาท\n",
                )
                 
        )
        .actionPrintText(
            "--------------------------------\n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleAlignment(Alignment.Center)
                .actionPrintText(
                    "${note}\n"
                )
        )
        .actionPrintText(
            "--------------------------------\n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleHorizontalTabPositions([26])
                .actionPrintText(
                    "รวม\t"
                )
                .styleBold(true)
                .actionPrintText(
                    "${sub_total}"
                )
                .styleBold(true)
                .actionPrintText(
                    "บาท\n"
                )
                .actionPrintText(
                    "ภาษีมูลค่าเพิ่ม\t"
                )
                .actionPrintText(
                    "${tax}\n"
                )
        )
        .actionPrintText(
            "--------------------------------\n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleAlignment(Alignment.Left)
                .styleBold(true)
                .actionPrintText(
                    "รวมทั้งหมด\n"
                )
                .styleAlignment(Alignment.Right)
                .actionPrintText("${total} บาท\n")
        )
        .actionPrintText(
            "--------------------------------\n" +
            "\n" +
            "Charge ${charge}\n" +
            "\n"
        )
        .styleAlignment(Alignment.Center)
        .add(new StarXpandCommand.PrinterBuilder()
            .styleInvert(true)
            .actionPrintText(
                "การขอใบกำกับภาษี\n"
            )
        )
        .actionPrintText(
            "นี่ไม่ใช่ใบเสร็จรับเงินอย่างเป็นทางการ\n"+
            "และไม่สามารถใช้ในการคืนภาษีได้\n" +
            "โปรดขอใบกำกับภาษีอย่างเป็นทางการจากผู้ขาย\n" +
            "\n"
        )
        .actionFeedLine(1)
        .actionPrintQRCode(
            new QRCodeParameter("${store_url}")
                .setModel(QRCodeModel.Model2)
                .setLevel(QRCodeLevel.L)
                .setCellSize(8)
        )
        .actionCut(CutType.Partial)
));

        return await builder.getCommands();
    }
}