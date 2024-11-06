package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.*

class StarIO10ErrorDetailWrapper internal constructor(context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "StarIO10ErrorDetailWrapper"
    }

    @ReactMethod
    fun getAutoSwitchInterfaceLanErrorIdentifier(identifier: String, promise: Promise) {
        getAutoSwitchInterfaceErrorIdentifier(identifier, promise, InterfaceType.Lan)
    }

    @ReactMethod
    fun getAutoSwitchInterfaceBluetoothErrorIdentifier(identifier: String, promise: Promise) {
        getAutoSwitchInterfaceErrorIdentifier(identifier, promise, InterfaceType.Bluetooth)
    }

    @ReactMethod
    fun getAutoSwitchInterfaceUsbErrorIdentifier(identifier: String, promise: Promise) {
        getAutoSwitchInterfaceErrorIdentifier(identifier, promise, InterfaceType.Usb)
    }

    @ReactMethod
    fun getAutoSwitchInterfaceBluetoothLEErrorIdentifier(identifier: String, promise: Promise) {
        getAutoSwitchInterfaceErrorIdentifier(identifier, promise, InterfaceType.BluetoothLE)
    }

    private fun getAutoSwitchInterfaceErrorIdentifier(identifier: String, promise: Promise, interfaceType: InterfaceType) {
        val errorDetail = InstanceManager.get(identifier)

        if (errorDetail is StarIO10ErrorDetail) {
            val error = errorDetail.autoSwitchInterfaceOpenErrors?.get(interfaceType)

            if (error != null) {
                val errorIdentifier = InstanceManager.set(error)
                promise.resolve(errorIdentifier)
            } else {
                promise.reject(ReactNoCrashSoftException("Not found Error of $identifier identifier"))
            }
        } else {
            promise.reject(ReactNoCrashSoftException("Not found $identifier identifier"))
        }
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)

        promise.resolve(0)
    }
}
