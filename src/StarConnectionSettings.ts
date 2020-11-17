import { InterfaceType } from './InterfaceType';

export class StarConnectionSettings {
    static readonly FIRST_FOUND_DEVICE: string = 'FirstFoundDevice__DefinedByStar';

    interfaceType: InterfaceType = InterfaceType.Unknown;

    identifier: string = StarConnectionSettings.FIRST_FOUND_DEVICE;

    autoSwitchInterface: boolean = false;
}