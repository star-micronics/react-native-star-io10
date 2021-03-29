package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.*

class DocumentBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "DocumentBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = DocumentBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun settingTopMargin(identifier: String, height: Double, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DocumentBuilder) {
            builder.settingTopMargin(height)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun settingBlackMark(identifier: String, enable: Boolean, position: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DocumentBuilder) {
            val parameter = StarIO10ValueConverter.toPrinterBlackMarkParameter(enable, position)

            builder.settingBlackMark(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun settingLabel(identifier: String, enable: Boolean, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DocumentBuilder) {
            val parameter = StarIO10ValueConverter.toPrinterLabelParameter(enable)

            builder.settingLabel(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun settingHoldPrint(identifier: String, enable: Boolean, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DocumentBuilder) {
            val parameter = StarIO10ValueConverter.toPrinterHoldPrintParameter(enable)

            builder.settingHoldPrint(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun settingPrintableArea(identifier: String, width: Double, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DocumentBuilder) {
            builder.settingPrintableArea(width)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun addPrinter(identifier: String, printerIdentifier: String, promise: Promise) {
        val documentBuilder = InstanceManager.get(identifier)
        val printerBuilder = InstanceManager.get(printerIdentifier)

        if (documentBuilder is DocumentBuilder && printerBuilder is PrinterBuilder) {
            documentBuilder.addPrinter(printerBuilder)
            promise.resolve(true)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun addDrawer(identifier: String, drawerIdentifier: String, promise: Promise) {
        val documentBuilder = InstanceManager.get(identifier)
        val drawerBuilder = InstanceManager.get(drawerIdentifier)

        if (documentBuilder is DocumentBuilder && drawerBuilder is DrawerBuilder) {
            documentBuilder.addDrawer(drawerBuilder)
            promise.resolve(true)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun addBuzzer(identifier: String, buzzerIdentifier: String, promise: Promise) {
        val documentBuilder = InstanceManager.get(identifier)
        val buzzerBuilder = InstanceManager.get(buzzerIdentifier)

        if (documentBuilder is DocumentBuilder && buzzerBuilder is BuzzerBuilder) {
            documentBuilder.addBuzzer(buzzerBuilder)
            promise.resolve(true)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun addMelodySpeaker(identifier: String, melodySpeakerIdentifier: String, promise: Promise) {
        val documentBuilder = InstanceManager.get(identifier)
        val melodySpeakerBuilder = InstanceManager.get(melodySpeakerIdentifier)

        if (documentBuilder is DocumentBuilder && melodySpeakerBuilder is MelodySpeakerBuilder) {
            documentBuilder.addMelodySpeaker(melodySpeakerBuilder)
            promise.resolve(true)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun addDisplay(identifier: String, displayIdentifier: String, promise: Promise) {
        val documentBuilder = InstanceManager.get(identifier)
        val displayBuilder = InstanceManager.get(displayIdentifier)

        if (documentBuilder is DocumentBuilder && displayBuilder is DisplayBuilder) {
            documentBuilder.addDisplay(displayBuilder)
            promise.resolve(true)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun addRaw(identifier: String, content: ReadableArray, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DocumentBuilder) {
            builder.addRaw(StarIO10ValueConverter.toList(content))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }
}
