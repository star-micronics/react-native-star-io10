import { StarDeviceDiscoveryManager } from './StarDeviceDiscoveryManager';
import { InterfaceType } from './InterfaceType';

export class StarDeviceDiscoveryManagerFactory {
    static create(interfaceTypes: Array<InterfaceType>): StarDeviceDiscoveryManager {
        return new StarDeviceDiscoveryManager(interfaceTypes);
    }
}