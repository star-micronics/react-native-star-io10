package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.BezelSettingBuilder
import com.starmicronics.stario10.starxpandcommand.PreSettingBuilder
import com.starmicronics.stario10.starxpandcommand.PresenterSettingBuilder

class PreSettingBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "PreSettingBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = PreSettingBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun addPresenterSetting(identifier: String, presenterSettingBuilderIdentifier: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)
        val presenterSettingBuilder = InstanceManager.get(presenterSettingBuilderIdentifier)

        if (builder is PreSettingBuilder && presenterSettingBuilder is PresenterSettingBuilder) {
            builder.addPresenterSetting(presenterSettingBuilder)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun addBezelSetting(identifier: String, bezelSettingBuilderIdentifier: String, promise: Promise) {
        val builder = InstanceManager.get(identifier)
        val bezelSettingBuilder = InstanceManager.get(bezelSettingBuilderIdentifier)

        if (builder is PreSettingBuilder && bezelSettingBuilder is BezelSettingBuilder) {
            builder.addBezelSetting(bezelSettingBuilder)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }
}