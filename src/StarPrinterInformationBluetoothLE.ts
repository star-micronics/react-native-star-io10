export class StarPrinterInformationBluetoothLE{
    _address: string | undefined;
    _deviceName: string | undefined;

    get address(): string | undefined {
        return this._address;
    }
    get deviceName(): string | undefined {
        return this._deviceName;
    }
}