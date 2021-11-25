package com.stario10module

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.net.Uri
import android.util.Base64
import com.facebook.common.references.CloseableReference
import com.facebook.datasource.DataSource
import com.facebook.drawee.backends.pipeline.Fresco
import com.facebook.imagepipeline.datasource.BaseBitmapDataSubscriber
import com.facebook.imagepipeline.image.CloseableImage
import com.facebook.imagepipeline.request.ImageRequest
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.WritableArray
import com.facebook.react.bridge.WritableMap
import com.starmicronics.stario10.InterfaceType
import com.starmicronics.stario10.StarIO10ArgumentException
import com.starmicronics.stario10.StarPrinterEmulation
import com.starmicronics.stario10.StarPrinterModel
import com.starmicronics.stario10.starxpandcommand.MagnificationParameter
import com.starmicronics.stario10.starxpandcommand.display.Contrast
import com.starmicronics.stario10.starxpandcommand.display.CursorState
import com.starmicronics.stario10.starxpandcommand.melodyspeaker.DriveOneTimeSoundParameter
import com.starmicronics.stario10.starxpandcommand.melodyspeaker.DriveRegisteredSoundParameter
import com.starmicronics.stario10.starxpandcommand.melodyspeaker.SoundStorageArea
import com.starmicronics.stario10.starxpandcommand.presenter.ModeParameter
import com.starmicronics.stario10.starxpandcommand.printer.*
import okhttp3.OkHttpClient
import okhttp3.Request
import java.io.InputStream
import java.lang.Thread.sleep
import java.util.*
import java.util.concurrent.Executors


class StarIO10ValueConverter {
    companion object {

        private val interfaceTypeMap = mapOf(
            "Bluetooth" to InterfaceType.Bluetooth,
            "BluetoothLE" to InterfaceType.BluetoothLE,
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
            "TSP100IIU_Plus" to StarPrinterModel.TSP100IIU_Plus,
            "TSP100IIIW" to StarPrinterModel.TSP100IIIW,
            "TSP100IIILAN" to StarPrinterModel.TSP100IIILAN,
            "TSP100IIIBI" to StarPrinterModel.TSP100IIIBI,
            "TSP100IIIU" to StarPrinterModel.TSP100IIIU,
            "TSP100IV" to StarPrinterModel.TSP100IV, 
            "mPOP" to StarPrinterModel.mPOP,
            "mC_Print2" to StarPrinterModel.mC_Print2,
            "mC_Print3" to StarPrinterModel.mC_Print3,
            "SM_S210i" to StarPrinterModel.SM_S210i,
            "SM_S230i" to StarPrinterModel.SM_S230i,
            "SM_T300" to StarPrinterModel.SM_T300,
            "SM_T300i" to StarPrinterModel.SM_T300i,
            "SM_T400i" to StarPrinterModel.SM_T400i,
            "SM_L200" to StarPrinterModel.SM_L200,
            "SM_L300" to StarPrinterModel.SM_L300,
            "BSC10" to StarPrinterModel.BSC10,
            "TSP043" to StarPrinterModel.TSP043,
            "SP700" to StarPrinterModel.SP700,
            "TUP500" to StarPrinterModel.TUP500,
            "SK1_2xx" to StarPrinterModel.SK1_2xx,
            "SK1_3xx" to StarPrinterModel.SK1_3xx
        )

        fun toString(value: StarPrinterModel) : String {
            var result = "Unknown"

            for(item in printerModelMap) {
                if(item.value == value) {
                    result = item.key
                    break
                }
            }

            return result
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
            var result = "Unknown"

            for(item in printerEmulationMap) {
                if(item.value == value) {
                    result = item.key
                    break
                }
            }
            return result
        }

        private val bezelLedTypeMap = mapOf(
            "Holding" to com.starmicronics.stario10.starxpandcommand.bezel.LedType.Holding,
            "Error" to com.starmicronics.stario10.starxpandcommand.bezel.LedType.Error,
            "Idle" to com.starmicronics.stario10.starxpandcommand.bezel.LedType.Idle
        )

        fun toBezelLedType(value: String) : com.starmicronics.stario10.starxpandcommand.bezel.LedType {
            return bezelLedTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val presenterLedTypeMap = mapOf(
            "Holding" to com.starmicronics.stario10.starxpandcommand.presenter.LedType.Holding,
            "Error" to com.starmicronics.stario10.starxpandcommand.presenter.LedType.Error,
            "Idle" to com.starmicronics.stario10.starxpandcommand.presenter.LedType.Idle
        )

        fun toPresenterLedType(value: String) : com.starmicronics.stario10.starxpandcommand.presenter.LedType {
            return presenterLedTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
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

        private val printerCharacterEncodingTypeMap = mapOf(
            "Japanese" to com.starmicronics.stario10.starxpandcommand.printer.CharacterEncodingType.Japanese,
            "SimplifiedChinese" to com.starmicronics.stario10.starxpandcommand.printer.CharacterEncodingType.SimplifiedChinese,
            "TraditionalChinese" to com.starmicronics.stario10.starxpandcommand.printer.CharacterEncodingType.TraditionalChinese,
            "Korean" to com.starmicronics.stario10.starxpandcommand.printer.CharacterEncodingType.Korean,
            "CodePage" to com.starmicronics.stario10.starxpandcommand.printer.CharacterEncodingType.CodePage
        )

        fun toPrinterCharacterEncodingType(value: String) : com.starmicronics.stario10.starxpandcommand.printer.CharacterEncodingType {
            return printerCharacterEncodingTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        private val cjkCharacterTypeMap = mapOf(
            "Japanese" to CjkCharacterType.Japanese,
            "SimplifiedChinese" to CjkCharacterType.SimplifiedChinese,
            "TraditionalChinese" to CjkCharacterType.TraditionalChinese,
            "Korean" to CjkCharacterType.Korean
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

        private val melodySpeakerSoundStorageAreaMap = mapOf(
            "Area1" to SoundStorageArea.Area1,
            "Area2" to SoundStorageArea.Area2
        )

        fun toMelodySpeakerSoundStorageArea(value: String) : SoundStorageArea {
            return melodySpeakerSoundStorageAreaMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
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

        private val displayCursorStateMap = mapOf(
            "On" to CursorState.On,
            "Blink" to CursorState.Blink,
            "Off" to CursorState.Off
        )

        fun toDisplayCursorState(value: String) : CursorState {
            return displayCursorStateMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
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

        private val displayCharacterEncodingTypeMap = mapOf(
            "Japanese" to com.starmicronics.stario10.starxpandcommand.display.CharacterEncodingType.Japanese,
            "SimplifiedChinese" to com.starmicronics.stario10.starxpandcommand.display.CharacterEncodingType.SimplifiedChinese,
            "TraditionalChinese" to com.starmicronics.stario10.starxpandcommand.display.CharacterEncodingType.TraditionalChinese,
            "Korean" to com.starmicronics.stario10.starxpandcommand.display.CharacterEncodingType.Korean,
            "CodePage" to com.starmicronics.stario10.starxpandcommand.display.CharacterEncodingType.CodePage
        )

        fun toDisplayCharacterEncodingType(value: String) : com.starmicronics.stario10.starxpandcommand.display.CharacterEncodingType {
            return displayCharacterEncodingTypeMap[value] ?: throw StarIO10ArgumentException("Undefined parameter '$value'")
        }

        fun toPresenterModeParameter(loop: Boolean, hold: Boolean, retract: Boolean, holdTime: Int): ModeParameter {
            val parameter = ModeParameter()
            parameter.setLoop(loop)
            parameter.setHold(hold)
            parameter.setRetract(retract)
            parameter.setHoldTime(holdTime)

            return parameter
        }

        fun toBezelLedAutomaticBlinkParameter(type: String, onTime: Int, offTime: Int): com.starmicronics.stario10.starxpandcommand.bezel.LedAutomaticBlinkParameter {
            val parameter = com.starmicronics.stario10.starxpandcommand.bezel.LedAutomaticBlinkParameter(toBezelLedType(type))
            parameter.setOnTime(onTime)
            parameter.setOffTime(offTime)

            return parameter
        }

        fun toPresenterLedAutomaticBlinkParameter(type: String, onTime: Int, offTime: Int): com.starmicronics.stario10.starxpandcommand.presenter.LedAutomaticBlinkParameter {
            val parameter = com.starmicronics.stario10.starxpandcommand.presenter.LedAutomaticBlinkParameter(toPresenterLedType(type))
            parameter.setOnTime(onTime)
            parameter.setOffTime(offTime)

            return parameter
        }

        fun toPrinterBlackMarkParameter(enable: Boolean, position: String): BlackMarkParameter {
            val parameter = BlackMarkParameter()
            parameter.setEnable(enable)
            parameter.setPosition(toPrinterBlackMarkPosition(position))

            return parameter
        }

        fun toPrinterLabelParameter(enable: Boolean): LabelParameter {
            val parameter = LabelParameter()
            parameter.setEnable(enable)

            return parameter
        }

        fun toPrinterPageModeAreaParameter(x: Double, y: Double, width: Double, height: Double): PageModeAreaParameter {
            val parameter = PageModeAreaParameter(width, height)
            parameter.setX(x)
            parameter.setY(y)

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

        fun toPrinterBarcodeParameter(
            content: String,
            symbology: String,
            printHri: Boolean,
            barDots: Int,
            barRatioLevel: String,
            height: Double
        ): BarcodeParameter {
            val parameter = BarcodeParameter(content, toPrinterBarcodeSymbology(symbology))
            parameter.setPrintHri(printHri)
            parameter.setBarDots(barDots)
            parameter.setBarRatioLevel(toPrinterBarcodeBarRatioLevel(barRatioLevel))
            parameter.setHeight(height)

            return parameter
        }

        fun toPrinterPdf417Parameter(
            content: String,
            column: Int,
            line: Int,
            module: Int,
            aspect: Int,
            level: String
        ): Pdf417Parameter {
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

        fun toPrinterImageParameter(
            source: String,
            width: Int,
            effectDiffusion: Boolean,
            threshold: Int,
            context: Context
        ): ImageParameter {
            val bitmap = sourceToBitmap(source, context)

            val parameter = ImageParameter(bitmap, width)
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

        fun toDisplayImageParameter(
            source: String,
            effectDiffusion: Boolean,
            threshold: Int,
            context: Context
        ): com.starmicronics.stario10.starxpandcommand.display.ImageParameter {
            val bitmap = sourceToBitmap(source, context)

            val parameter = com.starmicronics.stario10.starxpandcommand.display.ImageParameter(
                bitmap
            )
            parameter.setEffectDiffusion(effectDiffusion)
            parameter.setThreshold(threshold)

            return parameter
        }

        fun toDisplayPositionParameter(x: Int, y: Int): com.starmicronics.stario10.starxpandcommand.display.PositionParameter {
            return com.starmicronics.stario10.starxpandcommand.display.PositionParameter(x, y)
        }

        fun toMelodySpeakerDriveRegisteredSoundParameter(area: String, number: Int, volume: Int): DriveRegisteredSoundParameter {
            val parameter = DriveRegisteredSoundParameter(
                toMelodySpeakerSoundStorageArea(area),
                number
            )
            parameter.setVolume(volume)

            return parameter
        }

        fun toMelodySpeakerDriveOneTimeSoundParameter(source: String, volume: Int, context: Context): DriveOneTimeSoundParameter {
            val soundBytes = sourceToBytes(source, context)

            val parameter = DriveOneTimeSoundParameter(soundBytes)
            parameter.setVolume(volume)

            return parameter
        }

        fun <T> toList(value: ReadableArray): List<T> {
            val arrayList = value.toArrayList() as ArrayList<T>

            return arrayList.toList()
        }

        fun toWritableMap(map: Map<String, Any?>): WritableMap {
            val writableMap = Arguments.createMap()

            val iterator: Iterator<*> = map.entries.iterator()
            while (iterator.hasNext()) {
                val pair = iterator.next() as Map.Entry<*, *>
                val key = pair.key as String
                val value = pair.value
                when {
                    value == null -> {
                        writableMap.putNull(key)
                    }
                    value is Boolean -> {
                        writableMap.putBoolean(key, (value as Boolean?)!!)
                    }
                    value is Double -> {
                        writableMap.putDouble(key, (value as Double?)!!)
                    }
                    value is Int -> {
                        writableMap.putInt(key, (value as Int?)!!)
                    }
                    value is String -> {
                        writableMap.putString(key, value as String?)
                    }
                    value is Map<*, *> -> {
                        writableMap.putMap(key, this.toWritableMap(value as Map<String, Any?>))
                    }
                    value.javaClass.isArray -> {
                        writableMap.putArray(key, this.toWritableArray(value as Array<Any?>))
                    }
                }
            }

            return writableMap
        }

        fun toWritableArray(array: Array<Any?>): WritableArray {
            val writableArray = Arguments.createArray()

            for (i in array.indices) {
                val value = array[i]

                when {
                    value == null -> {
                        writableArray.pushNull()
                    }
                    value is Boolean -> {
                        writableArray.pushBoolean((value as Boolean?)!!)
                    }
                    value is Double -> {
                        writableArray.pushDouble((value as Double?)!!)
                    }
                    value is Int -> {
                        writableArray.pushInt((value as Int?)!!)
                    }
                    value is String -> {
                        writableArray.pushString(value as String?)
                    }
                    value is Map<*, *> -> {
                        writableArray.pushMap(this.toWritableMap(value as Map<String, Any?>))
                    }
                    value.javaClass.isArray -> {
                        writableArray.pushArray(this.toWritableArray(value as Array<Any?>))
                    }
                }
            }

            return writableArray
        }

        private fun sourceToBitmap(source: String, context: Context): Bitmap {
            return uriToBitmap(source, context) ?: resourceFileToBitmap(source, context) ?: base64ToBitmap(source)?: throw StarIO10ArgumentException(
                "Invalid source."
            )
        }

        private fun base64ToBitmap(value: String): Bitmap? {
            var bitmap: Bitmap? = null

            try {
                val bytes = Base64.decode(value, 0)
                bitmap = BitmapFactory.decodeByteArray(bytes, 0, bytes.size)
            } catch (e: Exception) {}

            return bitmap
        }

        private fun uriToBitmap(uri: String, context: Context): Bitmap? {
            var result: Bitmap? = null
            var finish = false

            val imageRequest = ImageRequest.fromUri(uri)
            val dataSource = Fresco.getImagePipeline().fetchDecodedImage(imageRequest, context)
            val executor = Executors.newSingleThreadExecutor()
            dataSource.subscribe(object : BaseBitmapDataSubscriber() {
                override fun onNewResultImpl(bitmap: Bitmap?) {
                    result = bitmap
                    finish = true
                }

                override fun onFailureImpl(dataSource: DataSource<CloseableReference<CloseableImage>>) {
                    finish = true
                }
            }, executor)

            while (!finish) {
                sleep(10)
            }

            return result
        }

        private fun resourceFileToBitmap(fileName: String, context: Context): Bitmap? {
            var bitmap: Bitmap? = null

            val resources = context.resources
            val resourceId = resources.getIdentifier(getPrefix(fileName), "drawable", context.packageName)

            if (resourceId != 0) {
                bitmap = BitmapFactory.decodeResource(resources, resourceId)
            }

            return bitmap
        }

        private fun sourceToBytes(source: String, context: Context): List<Byte> {
            return  httpToBytes(source) ?: fileUriToBytes(source, context) ?: resourceFileToBytes(source, context) ?: base64ToBytes(source)?: throw StarIO10ArgumentException(
                "Invalid source."
            )
        }

        private fun base64ToBytes(uri: String): List<Byte>? {
            var bytes: List<Byte>? = null

            try {
                val base64Bytes = Base64.decode(uri, 0)
                bytes = base64Bytes.toList()
            } catch (e: Exception) {}

            return bytes
        }

        private fun httpToBytes(uri: String): List<Byte>? {
            var bytes: List<Byte>? = null

            try {
                val client = OkHttpClient()
                val request = Request.Builder().url(uri).build()
                val response = client.newCall(request).execute()
                response.body?.bytes()?.let { responseBytes ->
                    bytes = responseBytes.toList()
                    response.body?.close()
                }
            } catch (e: Exception){}

            return bytes
        }

        private fun fileUriToBytes(uri: String, context: Context): List<Byte>? {
            var bytes: List<Byte>? = null

            try {
                context.contentResolver.openInputStream(Uri.parse(uri))?.let { stream ->
                    bytes = getBytesFromStream(stream)
                    stream.close()
                }
            } catch (e: Exception){}


            return bytes
        }

        private fun resourceFileToBytes(fileName: String, context: Context): List<Byte>? {
            var bytes: List<Byte>? = null

            val resources = context.resources
            val resourceId = resources.getIdentifier(getPrefix(fileName), "raw", context.packageName)

            if (resourceId != 0) {
                resources.openRawResource(resourceId).let { stream ->
                    bytes = getBytesFromStream(stream)
                    stream.close()
                }
            }

            return bytes
        }

        private fun getBytesFromStream(inputStream: InputStream): List<Byte> {
            val result = mutableListOf<Byte>()

            while (true) {
                val buffer = ByteArray(1024)
                val read = inputStream.read(buffer)

                if(read <= 0) {
                    break
                }

                result.addAll(buffer.toList())
            }

            return result
        }

        private fun getPrefix(fileName: String): String {
            val index = fileName.lastIndexOf(".")

            return if (index != -1) {
                fileName.substring(0, index)
            } else fileName
        }
    }

}