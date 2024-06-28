import { NativeObject } from './NativeObject';
export declare class StarIO10Logger extends NativeObject {
    private static _instance;
    private _sleep;
    private constructor();
    static get instance(): StarIO10Logger;
    start(): Promise<void>;
    stop(): Promise<void>;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
