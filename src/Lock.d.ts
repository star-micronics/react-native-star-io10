export declare class Lock {
    private _locked;
    private _sleep;
    lock(): Promise<void>;
    unlock(): void;
}
