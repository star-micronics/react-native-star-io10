import { StarPrinterInformationLan } from './StarPrinterInformationLan';
import { StarPrinterInformationBluetooth } from './StarPrinterInformationBluetooth';
import { StarPrinterInformationBluetoothLE } from './StarPrinterInformationBluetoothLE';
import { StarPrinterInformationUsb } from './StarPrinterInformationUsb';
export declare class StarPrinterInformationDetail {
    _lan: StarPrinterInformationLan;
    _bluetooth: StarPrinterInformationBluetooth;
    _bluetoothLE: StarPrinterInformationBluetoothLE;
    _usb: StarPrinterInformationUsb;
    get lan(): StarPrinterInformationLan;
    get bluetooth(): StarPrinterInformationBluetooth;
    get bluetoothLE(): StarPrinterInformationBluetoothLE;
    get usb(): StarPrinterInformationUsb;
}
