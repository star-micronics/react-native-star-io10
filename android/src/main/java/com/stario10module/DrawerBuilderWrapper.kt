package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.DrawerBuilder

class DrawerBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "DrawerBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = DrawerBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun actionOpen(identifier: String, channel: String, onTime: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is DrawerBuilder) {
            val parameter = StarIO10ValueConverter.toDrawerOpenParameter(channel, onTime)

            builder.actionOpen(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }
}