export class StarPrinterInformationBluetooth{
    _portName: string | undefined;
    _serialNumber: string | undefined;
    _address: string | undefined;
    _deviceName: string | undefined;

    get portName(): string | undefined {
        return this._portName;
    }
    get serialNumber(): string | undefined {
        return this._serialNumber;
    }
    get address(): string | undefined {
        return this._address;
    }
    get deviceName(): string | undefined {
        return this._deviceName;
    }
}