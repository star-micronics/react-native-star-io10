package com.stario10module

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import java.util.*

class StarIO10Package : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        val modules: MutableList<NativeModule> = ArrayList()

        modules.add(DisplayBuilderWrapper(reactContext))
        modules.add(MelodySpeakerBuilderWrapper(reactContext))
        modules.add(PrinterBuilderWrapper(reactContext))
        modules.add(PageModeBuilderWrapper(reactContext))
        modules.add(StarDeviceDiscoveryManagerWrapper(reactContext))
        modules.add(StarIO10ErrorWrapper(reactContext))
        modules.add(StarPrinterStatusWrapper(reactContext))
        modules.add(StarSpoolJobStatusWrapper(reactContext))
        modules.add(StarSpoolJobStatusListWrapper(reactContext))
        modules.add(StarPrinterWrapper(reactContext))
        modules.add(StarIO10LoggerWrapper(reactContext))

        return modules
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList<ViewManager<*, *>>()
    }
}
