package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.StarIO10Exception

class StarSpoolJobStatusListWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "StarSpoolJobStatusListWrapper"
    }

    @ReactMethod
    fun getJobStatusList(identifier: String, promise: Promise) {
        val statusList = InstanceManager.get(identifier)

        if (statusList is List<*>) {
            promise.resolve(StarIO10ValueConverter.toWritableArray(statusList))
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

