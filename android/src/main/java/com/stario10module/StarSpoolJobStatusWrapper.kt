package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.StarIO10Exception
import com.starmicronics.stario10.StarSpoolJobStatus

class StarSpoolJobStatusWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "StarSpoolJobStatusWrapper"
    }

    @ReactMethod
    fun getJobStatus(identifier: String, promise: Promise) {
        val status = InstanceManager.get(identifier)

        if (status is StarSpoolJobStatus) {
            promise.resolve(StarIO10ValueConverter.toWritableMap(status))
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

