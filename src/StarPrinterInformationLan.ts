export class StarPrinterInformationLan {
    _macAddress: string | undefined;
    _ipAddress: string | undefined;

    get macAddress(): string | undefined {
        return this._macAddress;
    }
    get ipAddress(): string | undefined {
        return this._ipAddress;
    }
}