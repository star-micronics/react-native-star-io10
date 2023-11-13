package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.StarIO10ArgumentException
import com.starmicronics.stario10.starxpandcommand.*
import org.json.JSONObject

class DisplayBuilderWrapper internal constructor(context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "DisplayBuilderWrapper"
    }

    @ReactMethod
    fun actionShowImage(
        source: String,
        effectDiffusion: Boolean,
        threshold: Int,
        promise: Promise
    ) {
        try {
            val parameter = StarIO10ValueConverter.toDisplayImageParameter(
                source,
                effectDiffusion,
                threshold,
                reactApplicationContext
            )

            val builder = StarXpandCommandBuilder()

            builder.addDocument(
                DocumentBuilder()
                    .addDisplay(
                        DisplayBuilder().actionShowImage(parameter)
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