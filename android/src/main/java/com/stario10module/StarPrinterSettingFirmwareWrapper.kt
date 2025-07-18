package com.stario10module

import androidx.annotation.Nullable
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReactNoCrashSoftException
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.starmicronics.stario10.DrawerDelegate
import com.starmicronics.stario10.FirmwareUpdateDelegate
import com.starmicronics.stario10.FirmwareUpdateStep
import com.starmicronics.stario10.StarIO10Exception
import com.starmicronics.stario10.StarPrinter
import com.starmicronics.stario10.StarPrinterSettingFirmware
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch

class StarPrinterSettingFirmwareWrapper internal constructor(context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "StarPrinterSettingFirmwareWrapper"
    }

    @ReactMethod
    fun init(printerIdentifier: String, promise: Promise) {
        val printer = InstanceManager.get(printerIdentifier)

        if (printer is StarPrinter) {
            val firmware = printer.setting?.firmware
            val firmwareIdentifier = InstanceManager.setNullable(firmware)

            promise.resolve(firmwareIdentifier)
        } else {
            promise.reject(ReactNoCrashSoftException("Not found $printerIdentifier identifier"))
        }
    }

    @ReactMethod
    fun addListener(eventName: String) {
        // Set up any upstream listeners or background tasks as necessary
    }

    @ReactMethod
    fun removeListeners(count: Int) {
        // Remove upstream listeners, stop unnecessary background tasks
    }

    @ReactMethod
    fun activateFirmwareUpdateDelegate(firmwareIdentifier: String, promise: Promise) {
        val firmware = InstanceManager.get(firmwareIdentifier)

        if (firmware is StarPrinterSettingFirmware) {
            firmware.updateDelegate = object : FirmwareUpdateDelegate() {
                override fun onFirmwareUpdateProgress(step: FirmwareUpdateStep) {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, firmwareIdentifier)
                    params.putString(EventParameter.KEY_FIRMWARE_UPDATE_STEP, step.name)

                    sendEvent(EventParameter.FIRMWARE_UPDATE_DELEGATE_PROGRESS, params)
                }

                override fun onFirmwareUpdateTransmitComplete() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, firmwareIdentifier)

                    sendEvent(EventParameter.FIRMWARE_UPDATE_DELEGATE_TRANSMIT_COMPLETE, params)
                }

                override fun onFirmwareUpdateError(e: StarIO10Exception) {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, firmwareIdentifier)

                    val exceptionIdentifier = InstanceManager.set(e)
                    params.putString(EventParameter.KEY_ERROR_IDENTIFIER, exceptionIdentifier)

                    sendEvent(EventParameter.FIRMWARE_UPDATE_DELEGATE_ERROR, params)
                }
            }

            promise.resolve(0)
        } else {
            promise.reject(StarIO10Exception("Identifier error"))
        }
    }

    @ReactMethod
    fun getIsUpdatableProp(printerIdentifier: String, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(printerIdentifier)

            if (printer is StarPrinter) {
                val firmware = printer.setting?.firmware
                val isUpdatable = firmware?.isUpdatable == true
                promise.resolve(isUpdatable)
            } else {
                promise.reject(StarIO10Exception("Identifier error"))
            }
        }
    }

    @ReactMethod
    fun getCurrentVersionProp(firmwareIdentifier: String, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val firmware = InstanceManager.get(firmwareIdentifier)

            if (firmware is StarPrinterSettingFirmware) {
                val currentVersion = firmware.currentVersion
                promise.resolve(currentVersion)
            } else {
                promise.reject(StarIO10Exception("Identifier error"))
            }
        }
    }

    @ReactMethod
    fun getLatestVersionProp(firmwareIdentifier: String, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val firmware = InstanceManager.get(firmwareIdentifier)

            if (firmware is StarPrinterSettingFirmware) {
                val latestVersion = firmware.latestVersion
                promise.resolve(latestVersion)
            } else {
                promise.reject(StarIO10Exception("Identifier error"))
            }
        }
    }

    @ReactMethod
    fun getCurrentVersion(firmwareIdentifier: String, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val firmware = InstanceManager.get(firmwareIdentifier)

            if (firmware is StarPrinterSettingFirmware) {
                try {
                    val currentVersion = firmware.getCurrentVersionAsync().await()
                    promise.resolve(currentVersion)
                } catch (e: StarIO10Exception) {
                    val exceptionIdentifier = InstanceManager.set(e)
                    promise.reject(exceptionIdentifier, e)
                }
            } else {
                promise.reject(StarIO10Exception("Identifier error"))
            }
        }
    }

    @ReactMethod
    fun checkVersions(firmwareIdentifier: String, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val firmware = InstanceManager.get(firmwareIdentifier)

            if (firmware is StarPrinterSettingFirmware) {
                try {
                    firmware.checkVersionsAsync().await()
                    promise.resolve(0)
                } catch (e: StarIO10Exception) {
                    val exceptionIdentifier = InstanceManager.set(e)
                    promise.reject(exceptionIdentifier, e)
                }
            } else {
                promise.reject(StarIO10Exception("Identifier error"))
            }
        }
    }

    @ReactMethod
    fun update(firmwareIdentifier: String, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val firmware = InstanceManager.get(firmwareIdentifier)

            if (firmware is StarPrinterSettingFirmware) {
                try {
                    firmware.updateAsync().await()
                    promise.resolve(0)
                } catch (e: StarIO10Exception) {
                    val exceptionIdentifier = InstanceManager.set(e)
                    promise.reject(exceptionIdentifier, e)
                }
            } else {
                promise.reject(StarIO10Exception("Identifier error"))
            }
        }
    }

    @ReactMethod
    fun dispose(firmwareIdentifier: String, promise: Promise) {
        InstanceManager.remove(firmwareIdentifier)
        promise.resolve(0)
    }

    private fun sendEvent(eventName: String, @Nullable params: WritableMap) {
        reactApplicationContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }
}