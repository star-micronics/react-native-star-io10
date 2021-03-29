package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.MelodySpeakerBuilder
import com.starmicronics.stario10.StarIO10ArgumentException

class MelodySpeakerBuilderWrapper internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "MelodySpeakerBuilderWrapper"
    }

    @ReactMethod
    fun init(promise: Promise) {
        val builder = MelodySpeakerBuilder()
        val identifier = InstanceManager.set(builder)

        promise.resolve(identifier)
    }

    @ReactMethod
    fun dispose(identifier: String, promise: Promise) {
        InstanceManager.remove(identifier)
        promise.resolve(0)
    }

    @ReactMethod
    fun actionDriveRegisteredSound(identifier: String, area: String, number: Int, volume: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is MelodySpeakerBuilder) {
            val parameter = StarIO10ValueConverter.toMelodySpeakerDriveRegisteredSoundParameter(area, number, volume)

            builder.actionDriveRegisteredSound(parameter)
            promise.resolve(0)
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }

    @ReactMethod
    fun actionDriveOneTimeSound(identifier: String, source: String, volume: Int, promise: Promise) {
        val builder = InstanceManager.get(identifier)

        if (builder is MelodySpeakerBuilder) {
            try {
                val parameter = StarIO10ValueConverter.toMelodySpeakerDriveOneTimeSoundParameter(source, volume, reactApplicationContext)
                builder.actionDriveOneTimeSound(parameter)
                promise.resolve(0)
            }
            catch (e: Exception) {
                val exception = StarIO10ArgumentException("Invalid source.")
                val exceptionIdentifier = InstanceManager.set(exception)
                promise.reject(exceptionIdentifier, exception)
            }
        }
        else {
            promise.reject(ReactNoCrashSoftException("Not found native instance"))
        }
    }
}