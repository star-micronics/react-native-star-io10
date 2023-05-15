export class StarSpoolJobSettings {
    _isRetryEnabled: boolean = true;
    
    _timeout: number = 0;
    
    _note: string = "";

    get isRetryEnabled(): boolean {
        return this._isRetryEnabled;
    }
    
    get timeout(): number {
        return this._timeout;
    }
    
    get note(): string {
        return this._note;
    }

    constructor(isRetryEnabled: boolean, timeout: number, note: string = "") {
        this._isRetryEnabled = isRetryEnabled;

        if (timeout < 0) {
            this._timeout = 0;
        }
        else if (3600 < timeout) {
            this._timeout = 3600;
        }
        else {
            this._timeout = timeout;
        }

        this._note = note;
    }
}
