import { NativeModules } from 'react-native';
import { StarIO10ErrorDetail } from './StarIO10ErrorDetail';
import { StarIO10ErrorFactory } from './StarIO10ErrorFactory';
import { StarIO10Error } from './StarIO10Error';
import { InterfaceType } from './InterfaceType';

export class StarIO10ErrorDetailFactory {
    static async create(identifier: String): Promise<StarIO10ErrorDetail> {
        var lanErrorIdentifier : String | undefined = undefined;
        var bluetoothErrorIdentifier : String | undefined = undefined;
        var usbErrorIdentifier : String | undefined = undefined;
        var bluetoothLEErrorIdentifier : String | undefined = undefined;

        try {
            lanErrorIdentifier = await NativeModules.StarIO10ErrorDetailWrapper.getAutoSwitchInterfaceLanErrorIdentifier(identifier);
        }
        catch(_) {
        }

        try {
            bluetoothErrorIdentifier = await NativeModules.StarIO10ErrorDetailWrapper.getAutoSwitchInterfaceBluetoothErrorIdentifier(identifier);
        }
        catch(_) {
        }

        try {
            usbErrorIdentifier = await NativeModules.StarIO10ErrorDetailWrapper.getAutoSwitchInterfaceUsbErrorIdentifier(identifier);
        }
        catch(_) {
        }

        try {
            bluetoothLEErrorIdentifier = await NativeModules.StarIO10ErrorDetailWrapper.getAutoSwitchInterfaceBluetoothLEErrorIdentifier(identifier);
        }
        catch(_) {
        }

        var openErrors = await StarIO10ErrorDetailFactory._buildObject(
            lanErrorIdentifier,
            bluetoothErrorIdentifier,
            usbErrorIdentifier,
            bluetoothLEErrorIdentifier
        );

        await NativeModules.StarIO10ErrorDetailWrapper.dispose(identifier);

        if (lanErrorIdentifier != undefined) {
            await NativeModules.StarIO10ErrorDetailWrapper.dispose(lanErrorIdentifier);
        }

        if (bluetoothErrorIdentifier != undefined) {
            await NativeModules.StarIO10ErrorDetailWrapper.dispose(bluetoothErrorIdentifier);
        }
        
        if (usbErrorIdentifier != undefined) {
            await NativeModules.StarIO10ErrorDetailWrapper.dispose(usbErrorIdentifier);
        }
        
        if (bluetoothLEErrorIdentifier != undefined) {
            await NativeModules.StarIO10ErrorDetailWrapper.dispose(bluetoothLEErrorIdentifier);
        }

        return new StarIO10ErrorDetail(openErrors);
    }

    private static async _buildObject(
        lanErrorIdentifier: String | undefined,
        bluetoothErrorIdentifier: String | undefined,
        usbErrorIdentifier: String | undefined,
        bluetoothLEErrorIdentifier: String | undefined): Promise<Map<InterfaceType,  StarIO10Error | undefined> | undefined> {
            
        var openErrors : Map<InterfaceType,  StarIO10Error | undefined> | undefined = undefined;

        var lanError : StarIO10Error | undefined = undefined;
        var bluetoothError : StarIO10Error | undefined = undefined;
        var usbError : StarIO10Error | undefined = undefined;
        var bluetoothLEError : StarIO10Error | undefined = undefined;

        if (lanErrorIdentifier != undefined) {
            lanError = await StarIO10ErrorFactory.create(lanErrorIdentifier);
        }

        if (bluetoothErrorIdentifier != undefined) {
            bluetoothError = await StarIO10ErrorFactory.create(bluetoothErrorIdentifier);
        }

        if (usbErrorIdentifier != undefined) {
            usbError = await StarIO10ErrorFactory.create(usbErrorIdentifier);
        }

        if (bluetoothLEErrorIdentifier != undefined) {
            bluetoothLEError = await StarIO10ErrorFactory.create(bluetoothLEErrorIdentifier);
        }

        var existsDefinedElement = [
            lanError,
            bluetoothError,
            usbError,
            bluetoothLEError
        ].some(element => element != undefined);

        if (existsDefinedElement) {
            openErrors = new Map<InterfaceType, StarIO10Error | undefined>(
                [
                    [InterfaceType.Lan, lanError],
                    [InterfaceType.Bluetooth, bluetoothError],
                    [InterfaceType.Usb, usbError],
                    [InterfaceType.BluetoothLE, bluetoothLEError]
                ]
            );
        }

        return openErrors;
    }
}