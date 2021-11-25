export declare abstract class NativeObject {
    _nativeObject?: string;
    private _lock;
    protected abstract _initNativeObjectImpl(): Promise<string>;
    protected abstract _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
    protected _initNativeObject(): Promise<void>;
    protected _disposeNativeObject(): Promise<void>;
    protected static _getEventParams(params: any): any;
}
