
import { StarPrinterInformationLan } from './StarPrinterInformationLan';
import { StarPrinterInformationBluetooth } from './StarPrinterInformationBluetooth';
import { StarPrinterInformationBluetoothLE } from './StarPrinterInformationBluetoothLE';
import { StarPrinterInformationUsb } from './StarPrinterInformationUsb';

export class StarPrinterInformationDetail {
    _lan: StarPrinterInformationLan = new StarPrinterInformationLan();
    _bluetooth: StarPrinterInformationBluetooth = new StarPrinterInformationBluetooth();
    _bluetoothLE: StarPrinterInformationBluetoothLE = new StarPrinterInformationBluetoothLE();
    _usb: StarPrinterInformationUsb = new StarPrinterInformationUsb();

    get lan(): StarPrinterInformationLan {
        return this._lan;
    }

    get bluetooth(): StarPrinterInformationBluetooth {
        return this._bluetooth;
    }

    get bluetoothLE(): StarPrinterInformationBluetoothLE {
        return this._bluetoothLE;
    }

    get usb(): StarPrinterInformationUsb {
        return this._usb;
    }
}