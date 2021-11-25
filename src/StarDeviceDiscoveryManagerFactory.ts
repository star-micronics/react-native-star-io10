import {
    NativeModules
} from 'react-native';
import { StarDeviceDiscoveryManager } from './StarDeviceDiscoveryManager';
import { InterfaceType } from './InterfaceType';
import { StarIO10ErrorFactory } from './StarIO10ErrorFactory';

export class StarDeviceDiscoveryManagerFactory {
    static async create(interfaceTypes: Array<InterfaceType>): Promise<StarDeviceDiscoveryManager> {
        var nativeObject = await NativeModules.StarDeviceDiscoveryManagerWrapper.init(interfaceTypes)
        .catch(async (nativeError: any) => {
            var error = await StarIO10ErrorFactory.create(nativeError.code);
            throw error;
        });

        return new StarDeviceDiscoveryManager(interfaceTypes, nativeObject);
    }
}