package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.StarIO10ArgumentException
import com.starmicronics.stario10.starxpandcommand.*
import com.starmicronics.stario10.starxpandcommand.printer.*
import org.json.JSONObject

class PrinterBuilderWrapper internal constructor(context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "PrinterBuilderWrapper"
    }

    @ReactMethod
    fun actionPrintImage(
        source: String,
        width: Int,
        effectDiffusion: Boolean,
        threshold: Int,
        promise: Promise
    ) {
        try {
            val parameter = StarIO10ValueConverter.toPrinterImageParameter(
                source,
                width,
                effectDiffusion,
                threshold,
                reactApplicationContext
            )

            val builder = StarXpandCommandBuilder()

            builder.addDocument(
                DocumentBuilder()
                    .addPrinter(
                        PrinterBuilder().actionPrintImage(parameter)
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

