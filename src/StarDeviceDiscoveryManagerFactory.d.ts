import { StarDeviceDiscoveryManager } from './StarDeviceDiscoveryManager';
import { InterfaceType } from './InterfaceType';
export declare class StarDeviceDiscoveryManagerFactory {
    static create(interfaceTypes: Array<InterfaceType>): Promise<StarDeviceDiscoveryManager>;
}
