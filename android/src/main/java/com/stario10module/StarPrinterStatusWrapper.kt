package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.StarIO10Exception
import com.starmicronics.stario10.StarPrinter
import com.starmicronics.stario10.StarPrinterStatus


class StarPrinterStatusWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "StarPrinterStatusWrapper"
    }

    @ReactMethod
    fun getHasError(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.hasError)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getPaperEmpty(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.paperEmpty)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getPaperNearEmpty(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.paperNearEmpty)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getCoverOpen(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.coverOpen)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getDrawerOpenCloseSignal(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.drawerOpenCloseSignal)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getReserved(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(StarIO10ValueConverter.toWritableMap(status.reserved))
        }
        else {
            promise.reject(StarIO10Exception("Identifier error"))
        }
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }
}

