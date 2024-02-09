package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.starxpandcommand.MelodySpeakerBuilder
import com.starmicronics.stario10.StarIO10ArgumentException
import com.starmicronics.stario10.starxpandcommand.DocumentBuilder
import com.starmicronics.stario10.starxpandcommand.StarXpandCommandBuilder
import org.json.JSONObject

class MelodySpeakerBuilderWrapper internal constructor(context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "MelodySpeakerBuilderWrapper"
    }

    @ReactMethod
    fun actionDriveOneTimeSound(source: String, volume: Int, promise: Promise) {
        try {
            val parameter = StarIO10ValueConverter.toMelodySpeakerDriveOneTimeSoundParameter(
                source,
                volume,
                reactApplicationContext
            )

            val builder = StarXpandCommandBuilder()

            builder.addDocument(
                DocumentBuilder()
                    .addMelodySpeaker(
                        MelodySpeakerBuilder().actionDriveOneTimeSound(parameter)
                    )
            )

            val jsonObject = JSONObject(builder.getCommands())

            val contents = jsonObject
                .getJSONArray("contents").getJSONObject(0)
                .getJSONArray("contents").getJSONObject(0)
                .getJSONArray("contents").getJSONObject(0)

            promise.resolve(contents.toString())
        } catch (e: Exception) {
            val exception = StarIO10ArgumentException("Invalid source.")
            val exceptionIdentifier = InstanceManager.set(exception)
            promise.reject(exceptionIdentifier, exception)
        }
    }
}