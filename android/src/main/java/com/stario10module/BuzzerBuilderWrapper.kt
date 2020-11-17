package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.BuzzerBuilder

class BuzzerBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "BuzzerBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = BuzzerBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun actionDrive(identifier: String, channel: String, repeat: Int, onTime: Int, offTime: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is BuzzerBuilder) {
            val parameter = StarIO10ValueConverter.toBuzzerDriveParameter(channel, repeat, onTime, offTime)

            builder.actionDrive(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }
}