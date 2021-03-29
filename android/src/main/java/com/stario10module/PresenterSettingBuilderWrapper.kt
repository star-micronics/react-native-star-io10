package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.PresenterSettingBuilder

class PresenterSettingBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "PresenterSettingBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = PresenterSettingBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun settingMode(identifier: String, loop: Boolean, hold: Boolean, retract: Boolean, holdTime: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PresenterSettingBuilder) {
            val parameter = StarIO10ValueConverter.toPresenterModeParameter(loop, hold, retract, holdTime)

            builder.settingMode(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun settingLedAutomaticBlink(identifier: String, type: String, onTime: Int, offTime: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is PresenterSettingBuilder) {
            val parameter = StarIO10ValueConverter.toPresenterLedAutomaticBlinkParameter(type, onTime, offTime)

            builder.settingLedAutomaticBlink(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }
}