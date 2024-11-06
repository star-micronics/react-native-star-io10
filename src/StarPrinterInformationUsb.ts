export class StarPrinterInformationUsb {
    _portName: string | undefined;
    _productSerialNumber: string | undefined;
    _usbSerialNumber: string | undefined;

    get portName(): string | undefined {
        return this._portName;
    }
    get productSerialNumber(): string | undefined {
        return this._productSerialNumber;
    }
    get usbSerialNumber(): string | undefined {
        return this._usbSerialNumber;
    }
}