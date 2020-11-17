package com.stario10module

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.util.Base64
import com.facebook.react.bridge.ReadableArray
import com.starmicronics.stario10.InterfaceType
import com.starmicronics.stario10.StarIO10ArgumentException
import com.starmicronics.stario10.StarPrinterEmulation
import com.starmicronics.stario10.StarPrinterModel
import com.starmicronics.stario10.starxpandcommand.MagnificationParameter
import com.starmicronics.stario10.starxpandcommand.display.Contrast
import com.starmicronics.stario10.starxpandcommand.led.AutomaticBlinkParameter
import com.starmicronics.stario10.starxpandcommand.led.Type
import com.starmicronics.stario10.starxpandcommand.melodyspeaker.DriveOneTimeSoundParameter
import com.starmicronics.stario10.starxpandcommand.melodyspeaker.DriveRegisteredSoundParameter
import com.starmicronics.stario10.starxpandcommand.melodyspeaker.SoundStorageArea
import com.starmicronics.stario10.starxpandcommand.presenter.ModeParameter
import com.starmicronics.stario10.starxpandcommand.printer.*
import java.util.ArrayList

class StarIO10ValueConverter {
    companion object {

        private val interfaceTypeMap = mapOf(
            "Bluetooth" to InterfaceType.Bluetooth,
            "Lan" to InterfaceType.Lan,
            "Usb" to InterfaceType.Usb
        )

        fun toInterfaceType(value: String) : InterfaceType {
            return interfaceTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        fun toString(value: InterfaceType) : String {
            var result: String? = null

            for(item in interfaceTypeMap) {
                if(item.value == value) {
                    result = item.key
                    break
                }
            }
            return result ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val printerModelMap = mapOf(
            "Unknown" to StarPrinterModel.Unknown,
            "TSP650II" to StarPrinterModel.TSP650II,
            "TSP700II" to StarPrinterModel.TSP700II,
            "TSP800II" to StarPrinterModel.TSP800II,
            "FVP10" to StarPrinterModel.FVP10,
            "TSP100U" to StarPrinterModel.TSP100U,
            "TSP100GT" to StarPrinterModel.TSP100GT,
            "TSP100ECO" to StarPrinterModel.TSP100ECO,
            "TSP100LAN" to StarPrinterModel.TSP100LAN,
            "TSP100IIIW" to StarPrinterModel.TSP100IIIW,
            "TSP100IIILAN" to StarPrinterModel.TSP100IIILAN,
            "TSP100IIIBI" to StarPrinterModel.TSP100IIIBI,
            "TSP100IIIU" to StarPrinterModel.TSP100IIIU,
            "mPOP" to StarPrinterModel.mPOP,
            "mC_Print2" to StarPrinterModel.mC_Print2,
            "mC_Print3" to StarPrinterModel.mC_Print3,
            "SM_S210i" to StarPrinterModel.SM_S210i,
            "SM_S220i" to StarPrinterModel.SM_S220i,
            "SM_S230i" to StarPrinterModel.SM_S230i,
            "SM_T300i" to StarPrinterModel.SM_T300i,
            "SM_T400i" to StarPrinterModel.SM_T400i,
            "SM_L200" to StarPrinterModel.SM_L200,
            "SM_L300" to StarPrinterModel.SM_L300,
            "BSC10" to StarPrinterModel.BSC10,
            "SP700" to StarPrinterModel.SP700
        )

        fun toString(value: StarPrinterModel) : String {
            var result: String? = null

            for(item in printerModelMap) {
                if(item.value == value) {
                    result = item.key
                    break
                }
            }
            return result ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val printerEmulationMap = mapOf(
            "Unknown" to StarPrinterEmulation.Unknown,
            "StarLine" to StarPrinterEmulation.StarLine,
            "StarDot" to StarPrinterEmulation.StarDot,
            "StarGraphic" to StarPrinterEmulation.StarGraphic,
            "StarPRNT" to StarPrinterEmulation.StarPRNT,
            "EscPos" to StarPrinterEmulation.EscPos,
            "EscPosMobile" to StarPrinterEmulation.EscPosMobile
        )

        fun toString(value: StarPrinterEmulation) : String {
            var result: String? = null

            for(item in printerEmulationMap) {
                if(item.value == value) {
                    result = item.key
                    break
                }
            }
            return result ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val ledTypeMap = mapOf(
            "Printing" to Type.Printing,
            "Error" to Type.Error,
            "Idle" to Type.Idle
        )

        fun toLedType(value: String) : Type {
            return ledTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val printerPageModePrintDirectionMap = mapOf(
            "BottomToTop" to PageModePrintDirection.BottomToTop,
            "LeftToRight" to PageModePrintDirection.LeftToRight,
            "RightToLeft" to PageModePrintDirection.RightToLeft,
            "TopToBottom" to PageModePrintDirection.TopToBottom
        )

        fun toPrinterPageModePrintDirection(value: String) : PageModePrintDirection {
            return printerPageModePrintDirectionMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val printerBlackMarkPositionMap = mapOf(
            "Front" to BlackMarkPosition.Front,
            "Back" to BlackMarkPosition.Back
        )

        fun toPrinterBlackMarkPosition(value: String) : BlackMarkPosition {
            return printerBlackMarkPositionMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val cutTypeMap = mapOf(
            "Full" to CutType.Full,
            "Partial" to CutType.Partial,
            "FullDirect" to CutType.FullDirect,
            "PartialDirect" to CutType.PartialDirect
        )

        fun toPrinterCutType(value: String) : CutType {
            return cutTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val alignmentMap = mapOf(
            "Left" to Alignment.Left,
            "Center" to Alignment.Center,
            "Right" to Alignment.Right
        )

        fun toPrinterAlignment(value: String) : Alignment {
            return alignmentMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val characterEncodingTypeMap = mapOf(
            "ShiftJis" to CharacterEncodingType.ShiftJis,
            "GB18030" to CharacterEncodingType.GB18030,
            "Big5" to CharacterEncodingType.Big5,
            "Korean" to CharacterEncodingType.Korean,
            "CodePage" to CharacterEncodingType.CodePage
        )

        fun toPrinterCharacterEncodingType(value: String) : CharacterEncodingType {
            return characterEncodingTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val cjkCharacterTypeMap = mapOf(
            "Hangul" to CjkCharacterType.Hangul,
            "Japanese" to CjkCharacterType.Japanese,
            "SimplifiedChinese" to CjkCharacterType.SimplifiedChinese,
            "TraditionalChinese" to CjkCharacterType.TraditionalChinese
        )

        fun toPrinterCjkCharacterType(value: String) : CjkCharacterType {
            return cjkCharacterTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val fontTypeMap = mapOf(
            "A" to FontType.A,
            "B" to FontType.B
        )

        fun toPrinterFontType(value: String) : FontType {
            return fontTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val internationalCharacterTypeMap = mapOf(
            "Denmark" to InternationalCharacterType.Denmark,
            "Denmark2" to InternationalCharacterType.Denmark2,
            "France" to InternationalCharacterType.France,
            "Germany" to InternationalCharacterType.Germany,
            "Ireland" to InternationalCharacterType.Ireland,
            "Italy" to InternationalCharacterType.Italy,
            "Japan" to InternationalCharacterType.Japan,
            "Korea" to InternationalCharacterType.Korea,
            "LatinAmerica" to InternationalCharacterType.LatinAmerica,
            "Legal" to InternationalCharacterType.Legal,
            "Norway" to InternationalCharacterType.Norway,
            "Spain" to InternationalCharacterType.Spain,
            "Spain2" to InternationalCharacterType.Spain2,
            "Sweden" to InternationalCharacterType.Sweden,
            "UK" to InternationalCharacterType.UK,
            "Usa" to InternationalCharacterType.Usa,
            "Slovenia" to InternationalCharacterType.Slovenia,
            "Croatia" to InternationalCharacterType.Croatia,
            "China" to InternationalCharacterType.China,
            "Vietnam" to InternationalCharacterType.Vietnam,
            "Arabic" to InternationalCharacterType.Arabic
        )

        fun toPrinterInternationalType(value: String) : InternationalCharacterType {
            return internationalCharacterTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val barcodeSymbologyTypeMap = mapOf(
            "Code128" to BarcodeSymbology.Code128,
            "Code39" to BarcodeSymbology.Code39,
            "Code93" to BarcodeSymbology.Code93,
            "Ean13" to BarcodeSymbology.Ean13,
            "Ean8" to BarcodeSymbology.Ean8,
            "UpcA" to BarcodeSymbology.UpcA,
            "UpcE" to BarcodeSymbology.UpcE,
            "Itf" to BarcodeSymbology.Itf,
            "Jan13" to BarcodeSymbology.Jan13,
            "Jan8" to BarcodeSymbology.Jan8,
            "NW7" to BarcodeSymbology.NW7
        )

        fun toPrinterBarcodeSymbology(value: String) : BarcodeSymbology {
            return barcodeSymbologyTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val barcodeBarRatioLevelTypeMap = mapOf(
            "Level0" to BarcodeBarRatioLevel.Level0,
            "LevelMinus1" to BarcodeBarRatioLevel.LevelMinus1,
            "LevelPlus1" to BarcodeBarRatioLevel.LevelPlus1
        )

        fun toPrinterBarcodeBarRatioLevel(value: String) : BarcodeBarRatioLevel {
            return barcodeBarRatioLevelTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val printerPdf417LevelMap = mapOf(
            "Ecc0" to Pdf417Level.Ecc0,
            "Ecc1" to Pdf417Level.Ecc1,
            "Ecc2" to Pdf417Level.Ecc2,
            "Ecc3" to Pdf417Level.Ecc3,
            "Ecc4" to Pdf417Level.Ecc4,
            "Ecc5" to Pdf417Level.Ecc5,
            "Ecc6" to Pdf417Level.Ecc6,
            "Ecc7" to Pdf417Level.Ecc7,
            "Ecc8" to Pdf417Level.Ecc8
        )

        fun toPrinterPdf417Level(value: String) : Pdf417Level {
            return printerPdf417LevelMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val printerQRCodeLevelMap = mapOf(
            "L" to QRCodeLevel.L,
            "M" to QRCodeLevel.M,
            "Q" to QRCodeLevel.Q,
            "H" to QRCodeLevel.H
        )

        fun toPrinterQRCodeLevel(value: String) : QRCodeLevel {
            return printerQRCodeLevelMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val printerQRCodeModelMap = mapOf(
            "Model1" to QRCodeModel.Model1,
            "Model2" to QRCodeModel.Model2
        )

        fun toPrinterQRCodeModel(value: String) : QRCodeModel {
            return printerQRCodeModelMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val buzzerChannelMap = mapOf(
            "No1" to com.starmicronics.stario10.starxpandcommand.buzzer.Channel.No1,
            "No2" to com.starmicronics.stario10.starxpandcommand.buzzer.Channel.No2
        )

        fun toBuzzerChannel(value: String) : com.starmicronics.stario10.starxpandcommand.buzzer.Channel {
            return buzzerChannelMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val drawerChannelMap = mapOf(
            "No1" to com.starmicronics.stario10.starxpandcommand.drawer.Channel.No1,
            "No2" to com.starmicronics.stario10.starxpandcommand.drawer.Channel.No2
        )

        fun toDrawerChannel(value: String) : com.starmicronics.stario10.starxpandcommand.drawer.Channel {
            return drawerChannelMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val displayInternationalCharacterTypeMap = mapOf(
            "Usa" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Usa,
            "France" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.France,
            "Germany" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Germany,
            "UK" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.UK,
            "Denmark" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Denmark,
            "Sweden" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Sweden,
            "Italy" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Italy,
            "Spain" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Spain,
            "Japan" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Japan,
            "Norway" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Norway,
            "Denmark2" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Denmark2,
            "Spain2" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Spain2,
            "LatinAmerica" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.LatinAmerica,
            "Korea" to com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType.Korea
        )

        fun toDisplayInternationalCharacterType(value: String) : com.starmicronics.stario10.starxpandcommand.display.InternationalCharacterType {
            return displayInternationalCharacterTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val displayContrastMap = mapOf(
            "Plus3" to Contrast.Plus3,
            "Plus2" to Contrast.Plus2,
            "Plus1" to Contrast.Plus1,
            "Default" to Contrast.Default,
            "Minus1" to Contrast.Minus1,
            "Minus2" to Contrast.Minus2,
            "Minus3" to Contrast.Minus3
        )

        fun toDisplayContrast(value: String) : Contrast {
            return displayContrastMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val melodySpeakerSoundStorageAreaMap = mapOf(
            "Area1" to SoundStorageArea.Area1,
            "Area2" to SoundStorageArea.Area2
        )

        fun toMelodySpeakerSoundStorageArea(value: String) : SoundStorageArea {
            return melodySpeakerSoundStorageAreaMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        fun toPresenterModeParameter(loop: Boolean, hold: Boolean, retract: Boolean, holdTime: Int): ModeParameter {
            val parameter = ModeParameter()
            parameter.setLoop(loop)
            parameter.setHold(hold)
            parameter.setRetract(retract)
            parameter.setHoldTime(holdTime)

            return parameter
        }

        fun toLedAutomaticBlinkParameter(type: String, onTime: Int, offTime: Int): AutomaticBlinkParameter {
            val parameter = AutomaticBlinkParameter(toLedType(type))
            parameter.setOnTime(onTime)
            parameter.setOffTime(offTime)

            return parameter
        }

        fun toPrinterBlackMarkParameter(start: Boolean, end: Boolean, position: String): BlackMarkParameter {
            val parameter = BlackMarkParameter()
            parameter.setStart(start)
            parameter.setEnd(end)
            parameter.setPosition(toPrinterBlackMarkPosition(position))

            return parameter
        }

        fun toPrinterLabelParameter(start: Boolean, end: Boolean): LabelParameter {
            val parameter = LabelParameter()
            parameter.setStart(start)
            parameter.setEnd(end)

            return parameter
        }

        fun toPrinterPageModeParameter(x: Double, y: Double, width: Double, height: Double, printDirection: String): PageModeParameter {
            val parameter = PageModeParameter(width, height)
            parameter.setStartPositionX(x)
            parameter.setStartPositionY(y)
            parameter.setPrintDirection(toPrinterPageModePrintDirection(printDirection))

            return parameter
        }

        fun toPrinterHoldPrintParameter(enable: Boolean): HoldPrintParameter {
            return HoldPrintParameter(enable)
        }

        fun toMagnificationParameter(width: Int, height: Int): MagnificationParameter {
            return MagnificationParameter(width, height)
        }

        fun toPrinterLogoParameter(keyCode: String): LogoParameter {
            return LogoParameter(keyCode)
        }

        fun toPrinterBarcodeParameter(content: String, symbology: String, printHri: Boolean, barDots: Int, barRatioLevel: String, height: Double): BarcodeParameter {
            val parameter = BarcodeParameter(content, toPrinterBarcodeSymbology(symbology))
            parameter.setPrintHri(printHri)
            parameter.setBarDots(barDots)
            parameter.setBarRatioLevel(toPrinterBarcodeBarRatioLevel(barRatioLevel))
            parameter.setHeight(height)

            return parameter
        }

        fun toPrinterPdf417Parameter(content: String, column: Int, line: Int, module: Int, aspect: Int, level: String): Pdf417Parameter {
            val parameter = Pdf417Parameter(content)
            parameter.setColumn(column)
            parameter.setLine(line)
            parameter.setModule(module)
            parameter.setAspect(aspect)
            parameter.setLevel(toPrinterPdf417Level(level))

            return parameter
        }

        fun toPrinterQRCodeParameter(content: String, model: String, level: String, cellSize: Int): QRCodeParameter {
            val parameter = QRCodeParameter(content)
            parameter.setModel(toPrinterQRCodeModel(model))
            parameter.setLevel(toPrinterQRCodeLevel(level))
            parameter.setCellSize(cellSize)

            return parameter
        }

        fun toPrinterImageParameter(source: String, width: Int, effectDiffusion: Boolean, threshold: Int): ImageParameter {
            val parameter = ImageParameter(base64ToBitmap(source), width)
            parameter.setEffectDiffusion(effectDiffusion)
            parameter.setThreshold(threshold)

            return parameter
        }

        fun toBuzzerDriveParameter(channel: String, repeat: Int, onTime: Int, offTime: Int): com.starmicronics.stario10.starxpandcommand.buzzer.DriveParameter {
            val parameter = com.starmicronics.stario10.starxpandcommand.buzzer.DriveParameter()
            parameter.setChannel(toBuzzerChannel(channel))
            parameter.setRepeat(repeat)
            parameter.setOnTime(onTime)
            parameter.setOffTime(offTime)

            return parameter
        }

        fun toDrawerOpenParameter(channel: String, onTime: Int): com.starmicronics.stario10.starxpandcommand.drawer.OpenParameter {
            val parameter = com.starmicronics.stario10.starxpandcommand.drawer.OpenParameter()
            parameter.setChannel(toDrawerChannel(channel))
            parameter.setOnTime(onTime)

            return parameter
        }

        fun toDisplayImageParameter(source: String, effectDiffusion: Boolean, threshold: Int): com.starmicronics.stario10.starxpandcommand.display.ImageParameter {
            val parameter = com.starmicronics.stario10.starxpandcommand.display.ImageParameter(base64ToBitmap(source))
            parameter.setEffectDiffusion(effectDiffusion)
            parameter.setThreshold(threshold)

            return parameter
        }

        fun toMelodySpeakerDriveRegisteredSoundParameter(area: String, number: Int, volume: Int): DriveRegisteredSoundParameter {
            val parameter = DriveRegisteredSoundParameter(toMelodySpeakerSoundStorageArea(area), number)
            parameter.setVolume(volume)

            return parameter
        }

        fun toMelodySpeakerDriveOneTimeSoundParameter(source: ReadableArray, volume: Int): DriveOneTimeSoundParameter {
            val parameter = DriveOneTimeSoundParameter(toList(source))
            parameter.setVolume(volume)

            return parameter
        }

        fun <T> toList(value: ReadableArray): List<T> {
            val arrayList = value.toArrayList() as ArrayList<T>

            return arrayList.toList()
        }

        private fun base64ToBitmap(value: String): Bitmap {
            val bytes = Base64.decode(value, 0)
            return BitmapFactory.decodeByteArray(bytes, 0, bytes.size)
        }
    }


}