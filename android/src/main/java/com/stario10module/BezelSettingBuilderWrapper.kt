package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.BezelSettingBuilder
import com.starmicronics.stario10.starxpandcommand.LedSettingBuilder

class BezelSettingBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "BezelSettingBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = BezelSettingBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun settingAutomaticPageLength(identifier: String, enabled: Boolean, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is BezelSettingBuilder) {
            builder.settingAutomaticPageLength(enabled)
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

        if (builder is BezelSettingBuilder && ledSettingBuilder is LedSettingBuilder) {
            builder.addLed(ledSettingBuilder)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }
}
