package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.StarIO10ArgumentException
import com.starmicronics.stario10.starxpandcommand.DisplayBuilder
import com.starmicronics.stario10.starxpandcommand.PrinterBuilder

class DisplayBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "DisplayBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = DisplayBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun styleInternationalCharacter(identifier: String, type: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DisplayBuilder) {
            builder.styleInternationalCharacter(StarIO10ValueConverter.toDisplayInternationalCharacterType(type))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleCharacterEncoding(identifier: String, type: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DisplayBuilder) {
            builder.styleCharacterEncoding(StarIO10ValueConverter.toDisplayCharacterEncodingType(type))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun styleCursorPositionTo(identifier: String, x: Int, y: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DisplayBuilder) {
            builder.styleCursorPositionTo(StarIO10ValueConverter.toDisplayPositionParameter(x, y))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionClearLine(identifier: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DisplayBuilder) {
            builder.actionClearLine()
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionClearAll(identifier: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DisplayBuilder) {
            builder.actionClearAll()
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionSetBackLightState(identifier: String, on: Boolean, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DisplayBuilder) {
            builder.actionSetBackLightState(on)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionSetCursorState(identifier: String, state: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DisplayBuilder) {
            builder.actionSetCursorState(StarIO10ValueConverter.toDisplayCursorState(state))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionSetContrast(identifier: String, value: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DisplayBuilder) {
            builder.actionSetContrast(StarIO10ValueConverter.toDisplayContrast(value))
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionShowText(identifier: String, content: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DisplayBuilder) {
            builder.actionShowText(content)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionShowImage(identifier: String, source: String, effectDiffusion: Boolean, threshold: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DisplayBuilder) {
            try {
                val parameter = StarIO10ValueConverter.toDisplayImageParameter(source, effectDiffusion, threshold, reactApplicationContext)
                builder.actionShowImage(parameter)
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
}