package com.stario10module

import androidx.annotation.Nullable
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.starmicronics.stario10.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch


class StarPrinterWrapper internal constructor(context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "StarPrinterWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val printer =
            StarPrinter(StarConnectionSettings(InterfaceType.Unknown), reactApplicationContext)
        val identifier = InstanceManager.set(printer)

        promise.resolve(identifier)
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
    fun activatePrinterDelegate(identifier: String, promise: Promise) {
        val printer = InstanceManager.get(identifier)

        if (printer is StarPrinter) {
            printer.printerDelegate = object : PrinterDelegate() {
                override fun onReady() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    sendEvent(EventParameter.NAME_PRINTER_DELEGATE_READY, params)
                }

                override fun onError() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    sendEvent(EventParameter.NAME_PRINTER_DELEGATE_ERROR, params)
                }

                override fun onPaperReady() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    sendEvent(EventParameter.NAME_PRINTER_DELEGATE_PAPER_READY, params)
                }

                override fun onPaperNearEmpty() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    sendEvent(EventParameter.NAME_PRINTER_DELEGATE_PAPER_NEAR_EMPTY, params)
                }

                override fun onPaperEmpty() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    sendEvent(EventParameter.NAME_PRINTER_DELEGATE_PAPER_EMPTY, params)
                }

                override fun onCoverOpened() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    sendEvent(EventParameter.NAME_PRINTER_DELEGATE_COVER_OPENED, params)
                }

                override fun onCoverClosed() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    sendEvent(EventParameter.NAME_PRINTER_DELEGATE_COVER_CLOSED, params)
                }

                override fun onCommunicationError(exception: StarIO10Exception) {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    val exceptionIdentifier = InstanceManager.set(exception)
                    params.putString(EventParameter.KEY_ERROR_IDENTIFIER, exceptionIdentifier)

                    sendEvent(EventParameter.NAME_PRINTER_DELEGATE_COMMUNICATION_ERROR, params)
                }
            }

            promise.resolve(0)
        } else {
            promise.reject(StarIO10Exception("Identifier error"))
        }
    }

    @ReactMethod
    fun activateDrawerDelegate(identifier: String, promise: Promise) {
        val printer = InstanceManager.get(identifier)

        if (printer is StarPrinter) {
            printer.drawerDelegate = object : DrawerDelegate() {
                override fun onOpenCloseSignalSwitched(signalState: Boolean) {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)
                    params.putBoolean(
                        EventParameter.KEY_DRAWER_OPEN_CLOSE_SIGNAL_STATE,
                        signalState
                    )

                    sendEvent(
                        EventParameter.NAME_DRAWER_DELEGATE_OPEN_CLOSE_SIGNAL_SWITCHED,
                        params
                    )
                }

                override fun onCommunicationError(exception: StarIO10Exception) {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    val exceptionIdentifier = InstanceManager.set(exception)
                    params.putString(EventParameter.KEY_ERROR_IDENTIFIER, exceptionIdentifier)

                    sendEvent(EventParameter.NAME_DRAWER_DELEGATE_COMMUNICATION_ERROR, params)
                }
            }

            promise.resolve(0)
        } else {
            promise.reject(StarIO10Exception("Identifier error"))
        }
    }

    @ReactMethod
    fun activateInputDeviceDelegate(identifier: String, promise: Promise) {
        val printer = InstanceManager.get(identifier)

        if (printer is StarPrinter) {
            printer.inputDeviceDelegate = object : InputDeviceDelegate() {
                override fun onConnected() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    sendEvent(EventParameter.NAME_INPUT_DEVICE_DELEGATE_CONNECTED, params)
                }

                override fun onDisconnected() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    sendEvent(EventParameter.NAME_INPUT_DEVICE_DELEGATE_DISCONNECTED, params)
                }

                override fun onDataReceived(data: List<Byte>) {
                    val reactData = Arguments.createArray()
                    data.forEach {
                        reactData.pushInt(it.toInt())
                    }

                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)
                    params.putArray(EventParameter.KEY_INPUT_DEVICE_DATA, reactData)

                    sendEvent(EventParameter.NAME_INPUT_DEVICE_DELEGATE_DATA_RECEIVED, params)
                }

                override fun onCommunicationError(exception: StarIO10Exception) {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, identifier)

                    val exceptionIdentifier = InstanceManager.set(exception)
                    params.putString(EventParameter.KEY_ERROR_IDENTIFIER, exceptionIdentifier)

                    sendEvent(EventParameter.NAME_INPUT_DEVICE_DELEGATE_COMMUNICATION_ERROR, params)
                }
            }

            promise.resolve(0)
        } else {
            promise.reject(StarIO10Exception("Identifier error"))
        }
    }

    @ReactMethod
    fun activateDisplayDelegate(starPrinterIdentifier: String, promise: Promise) {
        val starPrinter = InstanceManager.get(starPrinterIdentifier)

        if (starPrinter is StarPrinter) {
            starPrinter.displayDelegate = object : DisplayDelegate() {
                override fun onConnected() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, starPrinterIdentifier)

                    sendEvent(EventParameter.NAME_DISPLAY_DELEGATE_CONNECTED, params)
                }

                override fun onDisconnected() {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, starPrinterIdentifier)

                    sendEvent(EventParameter.NAME_DISPLAY_DELEGATE_DISCONNECTED, params)
                }

                override fun onCommunicationError(exception: StarIO10Exception) {
                    val params = Arguments.createMap()
                    params.putString(EventParameter.KEY_IDENTIFIER, starPrinterIdentifier)

                    val exceptionIdentifier = InstanceManager.set(exception)
                    params.putString(EventParameter.KEY_ERROR_IDENTIFIER, exceptionIdentifier)

                    sendEvent(EventParameter.NAME_DISPLAY_DELEGATE_COMMUNICATION_ERROR, params)
                }
            }

            promise.resolve(0)
        } else {
            promise.reject(StarIO10Exception("Identifier error"))
        }
    }

    @ReactMethod
    fun open(
        identifier: String,
        interfaceType: String,
        connectionIdentifier: String,
        openTimeout: Int,
        autoSwitchInterface: Boolean,
        promise: Promise
    ) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                printer.connectionSettings.identifier = connectionIdentifier
                printer.connectionSettings.interfaceType =
                    StarIO10ValueConverter.toInterfaceType(interfaceType)
                printer.connectionSettings.autoSwitchInterface = autoSwitchInterface
                printer.openTimeout = openTimeout

                try {
                    printer.openAsync().await()
                    promise.resolve(0)
                } catch (e: StarIO10Exception) {
                    val exceptionIdentifier = InstanceManager.set(e)
                    promise.reject(exceptionIdentifier, e)
                }
            } else {
                promise.reject(StarIO10ArgumentException("Argument error!"))
            }
        }
    }

    @ReactMethod
    fun getModel(identifier: String, promise: Promise) {
        val printer = InstanceManager.get(identifier)

        if (printer is StarPrinter) {
            promise.resolve(StarIO10ValueConverter.toString(printer.information!!.model))
        } else {
            promise.reject(StarIO10Exception("Identifier error"))
        }
    }

    @ReactMethod
    fun getEmulation(identifier: String, promise: Promise) {
        val printer = InstanceManager.get(identifier)

        if (printer is StarPrinter) {
            promise.resolve(StarIO10ValueConverter.toString(printer.information!!.emulation))
        } else {
            promise.reject(StarIO10Exception("Identifier error"))
        }
    }

    @ReactMethod
    fun getReserved(identifier: String, promise: Promise) {
        val printer = InstanceManager.get(identifier)

        if (printer is StarPrinter) {
            promise.resolve(StarIO10ValueConverter.toWritableMap(printer.information!!.reserved))
        } else {
            promise.reject(StarIO10Exception("Identifier error"))
        }
    }

    @ReactMethod
    fun printRawData(identifier: String, data: ReadableArray, timeout: Int, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                printer.printTimeout = timeout

                try {
                    printer.printRawDataAsync(StarIO10ValueConverter.toList(data)).await()
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
    fun print(identifier: String, code: String, template: String?, timeout: Int, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                printer.template = template
                printer.printTimeout = timeout

                try {
                    printer.printAsync(code).await()
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
    fun spoolPrint(
        identifier: String,
        code: String,
        template: String?,
        isRetryEnabled: Boolean,
        retryTimeout: Int,
        note: String,
        printTimeout: Int,
        promise: Promise
    ) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                printer.template = template
                printer.printTimeout = printTimeout

                val jobSettings = StarSpoolJobSettings(isRetryEnabled, retryTimeout, note)

                try {
                    val jobId = printer.printAsync(code, jobSettings).await()
                    promise.resolve(jobId)
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
    fun getStatus(identifier: String, timeout: Int, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                printer.getStatusTimeout = timeout

                try {
                    val status = printer.getStatusAsync().await()
                    val statusIdentifier = InstanceManager.set(status)

                    promise.resolve(statusIdentifier)
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
    fun getSpoolJobStatus(identifier: String, jobId: Int, timeout: Int, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                printer.getStatusTimeout = timeout

                try {
                    val status = printer.getSpoolJobStatusAsync(jobId).await()
                    val statusIdentifier = InstanceManager.set(status)

                    promise.resolve(statusIdentifier)
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
    fun getSpoolJobStatusList(identifier: String, size: Int, timeout: Int, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                printer.getStatusTimeout = timeout

                try {
                    val statusList = printer.getSpoolJobStatusListAsync(size).await()
                    val statusListIdentifier = InstanceManager.set(statusList)

                    promise.resolve(statusListIdentifier)
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
    fun setStarConfiguration(
        identifier: String,
        starConfiguration: String,
        timeout: Int,
        promise: Promise
    ) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                printer.starConfigurationTimeout = timeout

                try {
                    val starConfigurationSetResult =
                        printer.setStarConfigurationAsync(starConfiguration).await()
                    promise.resolve(StarIO10ValueConverter.toString(starConfigurationSetResult))
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
    fun getStarConfiguration(
        identifier: String,
        password: String?,
        timeout: Int,
        promise: Promise
    ) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                printer.starConfigurationTimeout = timeout

                try {
                    val starConfiguration = printer.getStarConfigurationAsync(password).await()
                    promise.resolve(starConfiguration)
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
    fun getDefaultStarConfiguration(identifier: String, timeout: Int, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                printer.starConfigurationTimeout = timeout

                try {
                    val starConfiguration = printer.getDefaultStarConfigurationAsync().await()
                    promise.resolve(starConfiguration)
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
    fun close(identifier: String, promise: Promise) {
        val job = SupervisorJob()
        val scope = CoroutineScope(Dispatchers.Default + job)

        scope.launch {
            val printer = InstanceManager.get(identifier)

            if (printer is StarPrinter) {
                try {
                    printer.closeAsync().await()
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
    fun dispose(starPrinterIdentifier: String, promise: Promise) {
        InstanceManager.remove(starPrinterIdentifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun getErrorDetail(identifier: String, promise: Promise) {
        val printer = InstanceManager.get(identifier)

        if (printer is StarPrinter) {
            val errorDetail = printer.errorDetail
            val errorDetailIdentifier = InstanceManager.set(errorDetail)

            promise.resolve(errorDetailIdentifier)
        } else {
            promise.reject(StarIO10Exception("Identifier error"))
        }
    }

    private fun sendEvent(eventName: String, @Nullable params: WritableMap) {
        reactApplicationContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }
}