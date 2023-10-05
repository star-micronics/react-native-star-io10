export declare class StarSpoolJobSettings {
    _isRetryEnabled: boolean;
    _timeout: number;
    _note: string;
    get isRetryEnabled(): boolean;
    get timeout(): number;
    get note(): string;
    constructor(isRetryEnabled: boolean, timeout: number, note?: string);
}
