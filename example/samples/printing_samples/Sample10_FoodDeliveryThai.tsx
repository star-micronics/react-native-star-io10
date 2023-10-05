import { StarXpandCommand } from 'react-native-star-io10';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { InternationalCharacterType } from 'react-native-star-io10/src/StarXpandCommand/Printer/InternationalCharacterType';
import { QRCodeLevel } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeLevel';
import { QRCodeModel } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeModel';
import { QRCodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeParameter';

export class Sample10_FoodDeliveryThai {
    static async createFoodDeliveryThaiReceipt(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
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
            "ร้าน STAR EAT  \n" +
                    "Bangkok , Thailand \n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleBold(true)
                .actionPrintText(
                    "#0001\n"
                )
        )
        .actionPrintText(
            "วันที่:ดด/วว/ปปปป  เวลา:HH:MM PM\n" +
                    "--------------------------------\n"
        )
        .styleAlignment(Alignment.Left)
        .actionPrintText(
            "ลูกค้า: "
        )
        .styleBold(true)
        .actionPrintText(
            "Mr. Star Micronics \n"
        )
        .styleBold(false)
        .actionPrintText(
            "ชำระเงินแล้ว \n"+
                    "เวลาที่รับออเดอร์:HH:MM PM\n" +
                    "--------------------------------\n" +
                    "\n"
        )
        .actionPrintText(
            "1X ข้าวผัดปู           59 บาท \n" +
                    "1X ต้มยำกุ้ง          120 บาท  \n" +
                    "2X ก๋วยเตี๋ยวหมูน้ำตก    69 บาท \n" +
                    "--------------------------------\n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleAlignment(Alignment.Center)
                .actionPrintText(
                    "**โปรดเตรียมช้อนส้อมให้ด้วย\n"
                )
        )
        .actionPrintText(
            "--------------------------------\n" +
            "รวม                       "
        )
        .styleBold(true)
        .actionPrintText(
            "248"
        )
        .styleBold(false)
        .actionPrintText(
            "บาท\n" +
                    "ภาษีมูลค่าเพิ่ม                - \n" +
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
                .actionPrintText("248 บาท\n")
        )
        .actionPrintText(
            "--------------------------------\n" +
                    "\n" +
                    "Charge " +
                    "Visa XXXX-XXXX-XXXX-0123\n" +
                    "\n")
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
            new QRCodeParameter("https://starmicronics.co.th/en/contact/\n")
                .setModel(QRCodeModel.Model2)
                .setLevel(QRCodeLevel.L)
                .setCellSize(8)
        )
        .actionCut(CutType.Partial)
));

        return await builder.getCommands();
    }
}