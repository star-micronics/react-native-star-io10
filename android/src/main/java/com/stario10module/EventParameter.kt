package com.stario10module

class EventParameter {
    companion object {
        const val KEY_IDENTIFIER = "identifier"
        const val KEY_ERROR_IDENTIFIER = "errorIdentifier"
        const val KEY_DRAWER_OPEN_CLOSE_SIGNAL_STATE = "openCloseSignal"
        const val KEY_INPUT_DEVICE_DATA = "data"
        const val KEY_INTERFACE_TYPE = "interfaceType"
        const val KEY_MODEL = "model"
        const val KEY_EMULATION = "emulation"
        const val KEY_RESERVED = "reserved"
        const val KEY_CONNECTION_IDENTIFIER = "connectionIdentifier"

        const val NAME_PRINTER_DELEGATE_READY = "PrinterReady"
        const val NAME_PRINTER_DELEGATE_ERROR = "PrinterError"
        const val NAME_PRINTER_DELEGATE_PAPER_READY = "PrinterPaperReady"
        const val NAME_PRINTER_DELEGATE_PAPER_NEAR_EMPTY = "PrinterPaperNearEmpty"
        const val NAME_PRINTER_DELEGATE_PAPER_EMPTY = "PrinterPaperEmpty"
        const val NAME_PRINTER_DELEGATE_COVER_OPENED = "PrinterCoverOpened"
        const val NAME_PRINTER_DELEGATE_COVER_CLOSED = "PrinterCoverClosed"
        const val NAME_PRINTER_DELEGATE_COMMUNICATION_ERROR = "PrinterCommunicationError"
        const val NAME_DRAWER_DELEGATE_OPEN_CLOSE_SIGNAL_SWITCHED = "DrawerOpenCloseSignalSwitched"
        const val NAME_DRAWER_DELEGATE_COMMUNICATION_ERROR = "DrawerCommunicationError"
        const val NAME_INPUT_DEVICE_DELEGATE_CONNECTED = "InputDeviceConnected"
        const val NAME_INPUT_DEVICE_DELEGATE_DISCONNECTED = "InputDeviceDisconnected"
        const val NAME_INPUT_DEVICE_DELEGATE_DATA_RECEIVED = "InputDeviceDataReceived"
        const val NAME_INPUT_DEVICE_DELEGATE_COMMUNICATION_ERROR = "InputDeviceCommunicationError"
        const val NAME_DISPLAY_DELEGATE_CONNECTED = "DisplayConnected"
        const val NAME_DISPLAY_DELEGATE_DISCONNECTED = "DisplayDisconnected"
        const val NAME_DISPLAY_DELEGATE_COMMUNICATION_ERROR = "DisplayCommunicationError"
        const val NAME_PRINTER_FOUND = "PrinterFound"
        const val NAME_DISCOVERY_FINISHED = "DiscoveryFinished"
    }
}