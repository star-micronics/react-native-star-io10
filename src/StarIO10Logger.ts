import {
    NativeModules
} from 'react-native';

import { NativeObject } from './NativeObject';
import { StarIO10ErrorFactory } from './StarIO10ErrorFactory';
import { version } from '../package.json'

export class StarIO10Logger extends NativeObject {
    private static _instance : StarIO10Logger;
    private _sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    private constructor() {
        super();
    }

    public static get instance() : StarIO10Logger {
        if (this._instance == null) {
            this._instance = new StarIO10Logger();
        }

        return this._instance;
    }

    async start(): Promise<void> {
        await this._initNativeObject();

        await NativeModules.StarIO10LoggerWrapper.start()
        .catch(async (nativeError: any) => {
            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        });
    }

    async stop(): Promise<void> {
        await this._initNativeObject();

        await NativeModules.StarIO10LoggerWrapper.stop()
        .catch(async (nativeError: any) => {
            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        });
    }

    protected async _initNativeObjectImpl(): Promise<string> {
        await NativeModules.StarIO10LoggerWrapper.appendHeader(`- React Native Wrapper Version: ${version}`)
        await this._sleep(100);
        return `dammy`;
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {}
}