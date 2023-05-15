package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.StarIO10Exception
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
    fun getCutterError(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.cutterError)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getPaperSeparatorError(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.paperSeparatorError)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getPaperJamError(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.paperJamError)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getRollPositionError(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.rollPositionError)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getPaperPresent(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.paperPresent)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getDrawerOpenError(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.drawerOpenError)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getPrintUnitOpen(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.printUnitOpen)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getDrawer1OpenedMethod(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(StarIO10ValueConverter.toString(status.detail.drawer1OpenedMethod))
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getDrawer1OpenCloseSignal(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.drawer1OpenCloseSignal)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getDrawer2OpenedMethod(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(StarIO10ValueConverter.toString(status.detail.drawer2OpenedMethod))
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getDrawer2OpenCloseSignal(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.drawer2OpenCloseSignal)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getExternalDevice1Connected(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.externalDevice1Connected)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getExternalDevice2Connected(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.externalDevice2Connected)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getPartsReplacementNotification(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.partsReplacementNotification)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getCleaningNotification(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.cleaningNotification)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun getDetectedPaperWidth(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarPrinterStatus) {
            promise.resolve(status.detail.detectedPaperWidth)
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

