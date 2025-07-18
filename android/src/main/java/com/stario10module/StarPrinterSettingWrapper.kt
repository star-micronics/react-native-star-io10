package com.stario10module

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReactNoCrashSoftException
import com.starmicronics.stario10.StarPrinter

class StarPrinterSettingWrapper internal constructor(context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "StarPrinterSettingWrapper"
    }

    @ReactMethod
    fun init(identifier: String, promise: Promise) {
        val printer = InstanceManager.get(identifier)

        if (printer is StarPrinter) {
            val setting = printer.setting
            val settingIdentifier = InstanceManager.setNullable(setting)

            promise.resolve(settingIdentifier)
        } else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun dispose(settingIdentifier: String, promise: Promise) {
        InstanceManager.remove(settingIdentifier)
        promise.resolve(0)
    }
}