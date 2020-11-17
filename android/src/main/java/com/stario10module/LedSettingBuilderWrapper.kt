package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.LedSettingBuilder

class LedSettingBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "LedSettingBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = LedSettingBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun settingAutomaticBlink(identifier: String, type: String, onTime: Int, offTime: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is LedSettingBuilder) {
            val parameter = StarIO10ValueConverter.toLedAutomaticBlinkParameter(type, onTime, offTime)

            builder.settingAutomaticBlink(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }
}