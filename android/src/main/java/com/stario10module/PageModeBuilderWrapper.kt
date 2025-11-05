package com.stario10module

import com.facebook.react.bridge.*
import com.starmicronics.stario10.StarIO10ArgumentException
import com.starmicronics.stario10.starxpandcommand.DocumentBuilder
import com.starmicronics.stario10.starxpandcommand.PageModeBuilder
import com.starmicronics.stario10.starxpandcommand.PrinterBuilder
import com.starmicronics.stario10.starxpandcommand.StarXpandCommandBuilder
import com.starmicronics.stario10.starxpandcommand.printer.*
import org.json.JSONObject

class PageModeBuilderWrapper internal constructor(context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "PageModeBuilderWrapper"
    }

    @ReactMethod
    fun actionPrintImage(
        source: String,
        x: Double,
        y: Double,
        width: Int,
        effectDiffusion: Boolean,
        threshold: Int,
        promise: Promise
    ) {
        try {
            val parameter = StarIO10ValueConverter.toPrinterPageModeImageParameter(
                source,
                x,
                y,
                width,
                effectDiffusion,
                threshold,
                reactApplicationContext
            )

            val builder = StarXpandCommandBuilder()

            builder.addDocument(
                DocumentBuilder()
                    .addPrinter(
                        PrinterBuilder()
                            .addPageMode(
                                PageModeAreaParameter(width.toDouble(),300.0),
                                //PageModeAreaの必要な高さはこの時点で未定であるため、仮の値として最大値300を入れる。
                                //heightの値は生成されるactionPrintImageのコマンドに影響を与えない。
                                PageModeBuilder()
                                    .actionPrintImage(parameter)
                            )
                    )
            )

            val jsonObject = JSONObject(builder.getCommands())

            val contents = jsonObject
                .getJSONArray("contents").getJSONObject(0)
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