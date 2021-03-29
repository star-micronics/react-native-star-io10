package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.StarIO10ArgumentException
import com.starmicronics.stario10.starxpandcommand.PageModeBuilder
import com.starmicronics.stario10.starxpandcommand.printer.CjkCharacterType

class PageModeBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "PageModeBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = PageModeBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun stylePrintDirection(identifier: String, direction: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.stylePrintDirection(StarIO10ValueConverter.toPrinterPageModePrintDirection(direction))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleFont(identifier: String, type: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleFont(StarIO10ValueConverter.toPrinterFontType(type))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleBold(identifier: String, enable: Boolean, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleBold(enable)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleInvert(identifier: String, enable: Boolean, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleInvert(enable)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleUnderLine(identifier: String, enable: Boolean, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleUnderLine(enable)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleMagnification(identifier: String, width: Int, height: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleMagnification(StarIO10ValueConverter.toMagnificationParameter(width, height))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleCharacterSpace(identifier: String, width: Double, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleCharacterSpace(width)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleLineSpace(identifier: String, height: Double, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleLineSpace(height)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleVerticalPositionTo(identifier: String, position: Double, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleVerticalPositionTo(position)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleVerticalPositionBy(identifier: String, position: Double, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleVerticalPositionBy(position)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleHorizontalPositionTo(identifier: String, position: Double, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleHorizontalPositionTo(position)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleHorizontalPositionBy(identifier: String, position: Double, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleHorizontalPositionBy(position)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleHorizontalTabPositions(identifier: String, positions: ReadableArray, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleHorizontalTabPositions(StarIO10ValueConverter.toList(positions))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleInternationalCharacter(identifier: String, type: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleInternationalCharacter(StarIO10ValueConverter.toPrinterInternationalType(type))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleSecondPriorityCharacterEncoding(identifier: String, type: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.styleSecondPriorityCharacterEncoding(StarIO10ValueConverter.toPrinterCharacterEncodingType(type))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleCjkCharacterPriority(identifier: String, types: ReadableArray, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            val typeList = mutableListOf<CjkCharacterType>()

            for(type in StarIO10ValueConverter.toList<String>(types)) {
                typeList.add(StarIO10ValueConverter.toPrinterCjkCharacterType(type))
            }

            builder.styleCjkCharacterPriority(typeList)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionPrintText(identifier: String, content: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            builder.actionPrintText(content)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionPrintBarcode(identifier: String, content: String, symbology: String, printHri: Boolean, barDots: Int, barRatioLevel: String, height: Double, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            val parameter = StarIO10ValueConverter.toPrinterBarcodeParameter(content, symbology, printHri, barDots, barRatioLevel, height)

            builder.actionPrintBarcode(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionPrintPdf417(identifier: String, content: String, column: Int, line: Int, module: Int, aspect: Int, level: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            val parameter = StarIO10ValueConverter.toPrinterPdf417Parameter(content, column, line, module, aspect, level)

            builder.actionPrintPdf417(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionPrintQRCode(identifier: String, content: String, model: String, level: String, cellSize: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            val parameter = StarIO10ValueConverter.toPrinterQRCodeParameter(content, model, level, cellSize)

            builder.actionPrintQRCode(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionPrintImage(identifier: String, source: String, width: Int, effectDiffusion: Boolean, threshold: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PageModeBuilder) {
            try {
                val parameter = StarIO10ValueConverter.toPrinterImageParameter(source, width, effectDiffusion, threshold, reactApplicationContext)
                builder.actionPrintImage(parameter)
                promise.resolve(0)
            }
            catch (e: Exception) {
                val exception = StarIO10ArgumentException("Invalid source.")
                val exceptionIdentifier = InstanceManager.set(exception)
                promise.reject(exceptionIdentifier, exception)
            }
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun add(identifier: String, pageModeBuilderIdentifier: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)
        val pageModeBuilder = InstanceManager.get(pageModeBuilderIdentifier)

        if (builder is PageModeBuilder && pageModeBuilder is PageModeBuilder) {
            builder.add(pageModeBuilder)
            promise.resolve(true)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }
}