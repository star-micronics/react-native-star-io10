import {
    NativeModules
} from 'react-native';

import { StarIO10ErrorFactory } from './StarIO10ErrorFactory';

export class StarIO10DiagInfoUpload{
    private static _instance : StarIO10DiagInfoUpload;

    private constructor() {
    }

    public static get instance() : StarIO10DiagInfoUpload {
        if (this._instance == null) {
            this._instance = new StarIO10DiagInfoUpload();
        }

        return this._instance;
    }

    get isEnabled(): Promise<Boolean> {
        return NativeModules.StarIO10DiagInfoUploadWrapper.getIsEnabled()
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
    }

    set isEnabled(isEnabled: Boolean) {
        NativeModules.StarIO10DiagInfoUploadWrapper.setIsEnabled(isEnabled)
        .catch(async (nativeError: any) => {
            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        });
    }
}