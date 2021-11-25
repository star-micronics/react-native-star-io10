package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.DocumentBuilder
import com.starmicronics.stario10.starxpandcommand.PreSettingBuilder
import com.starmicronics.stario10.starxpandcommand.StarXpandCommandBuilder


class StarXpandCommandBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "StarXpandCommandBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = StarXpandCommandBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun addDocument(identifier: String, documentIdentifier: String, promise: Promise) {
        val builder         = InstanceManager.get(identifier)
        val documentBuilder = InstanceManager.get(documentIdentifier)

        if (builder is StarXpandCommandBuilder && documentBuilder is DocumentBuilder) {
            builder.addDocument(documentBuilder)
            promise.resolve(true)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun setPreSetting(identifier: String, documentIdentifier: String, promise: Promise) {
        val builder           = InstanceManager.get(identifier)
        val preSettingBuilder = InstanceManager.get(documentIdentifier)

        if (builder is StarXpandCommandBuilder && preSettingBuilder is PreSettingBuilder) {
            builder.preSetting = preSettingBuilder
            promise.resolve(true)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun getCommands(identifier: String, promise: Promise) {
        val builder           = InstanceManager.get(identifier)

        if (builder is StarXpandCommandBuilder) {
            promise.resolve(builder.getCommands())
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

}

