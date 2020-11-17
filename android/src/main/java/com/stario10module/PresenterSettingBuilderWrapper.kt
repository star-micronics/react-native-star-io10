package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.LedSettingBuilder
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
    fun addLed(identifier: String, ledSettingBuilderIdentifier: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)
        val ledSettingBuilder = InstanceManager.get(ledSettingBuilderIdentifier)

        if (builder is PresenterSettingBuilder && ledSettingBuilder is LedSettingBuilder) {
            builder.addLed(ledSettingBuilder)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }
}