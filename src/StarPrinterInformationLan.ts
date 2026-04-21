export class StarPrinterInformationLan {
    _macAddress: string | undefined;
    _ipAddress: string | undefined;
    _uniqueId: string | undefined;

    get macAddress(): string | undefined {
        return this._macAddress;
    }
    get ipAddress(): string | undefined {
        return this._ipAddress;
    }
    get uniqueId(): string | undefined {
        return this._uniqueId;
    }
}