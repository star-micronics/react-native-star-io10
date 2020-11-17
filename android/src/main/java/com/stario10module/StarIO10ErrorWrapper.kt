package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.StarPrinterStatus
import com.starmicronics.stario10.*


class StarIO10ErrorWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "StarIO10ErrorWrapper"
    }

    @ReactMethod
    fun getType(identifier: String, promise: Promise) {
        val type = when (InstanceManager.get(identifier)) {
            is StarIO10ArgumentException -> "Argument"
            is StarIO10BadResponseException -> "BadResponse"
            is StarIO10CommunicationException -> "Communication"
            is StarIO10IllegalHostDeviceStateException -> "IllegalDeviceState"
            is StarIO10InUseException -> "InUse"
            is StarIO10InvalidOperationException -> "InvalidOperation"
            is StarIO10NotFoundException -> "NotFound"
            is StarIO10UnknownException -> "Unknown"
            is StarIO10UnprintableException -> "Unprintable"
            else -> {
                promise.reject(ReactNoCrashSoftException("Exception is not defined"))
                return
            }
        }

        promise.resolve(type)
    }

    @ReactMethod
    fun getMessage(identifier: String, promise: Promise) {
        val exception = InstanceManager.get(identifier)

        if (exception is StarIO10Exception) {
            promise.resolve(exception.message)
        }
        else {
          promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getErrorCode(identifier: String, promise: Promise) {
        val exception = InstanceManager.get(identifier)

        if (exception is StarIO10Exception) {
            promise.resolve(exception.errorCode.value)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getStatus(identifier: String, promise: Promise) {
        val exception = InstanceManager.get(identifier)

        var status: StarPrinterStatus? = null

        if (exception is StarIO10UnprintableException) {
            status = exception.status
        }

        if(status == null) {
            promise.reject(ReactNoCrashSoftException("status is null."))
            return
        }

        val statusIdentifier = InstanceManager.set(status)
        promise.resolve(statusIdentifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)

        promise.resolve(0)
    }
}

