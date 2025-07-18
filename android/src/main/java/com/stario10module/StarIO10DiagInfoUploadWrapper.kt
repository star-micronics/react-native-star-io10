package com.stario10module

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.starmicronics.stario10.StarIO10DiagInfoUpload

class StarIO10DiagInfoUploadWrapper internal constructor(context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "StarIO10DiagInfoUploadWrapper"
    }

    @ReactMethod
    fun getIsEnabled(promise: Promise) {
        val diagInfoUpload = StarIO10DiagInfoUpload.getInstance()
        val isEnabled = diagInfoUpload.isEnabled
        promise.resolve(isEnabled)
    }

    @ReactMethod
    fun setIsEnabled(value: Boolean, promise: Promise) {
        val diagInfoUpload = StarIO10DiagInfoUpload.getInstance()
        diagInfoUpload.isEnabled = value
        promise.resolve(0)
    }
}