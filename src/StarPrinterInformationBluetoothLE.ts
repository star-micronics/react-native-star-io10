export class StarPrinterInformationBluetoothLE{
    _address: string | undefined;
    _deviceName: string | undefined;
    _rssi: number | undefined = undefined;

    get address(): string | undefined {
        return this._address;
    }
    get deviceName(): string | undefined {
        return this._deviceName;
    }
    get rssi(): number | undefined {
        return this._rssi;
    }
}