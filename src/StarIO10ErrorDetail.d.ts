import { InterfaceType } from './InterfaceType';
import { StarIO10Error } from './StarIO10Error';
export declare class StarIO10ErrorDetail {
    private _autoSwitchInterfaceOpenErrors;
    get autoSwitchInterfaceOpenErrors(): Map<InterfaceType, StarIO10Error | undefined> | undefined;
    constructor(openErrors?: Map<InterfaceType, StarIO10Error | undefined> | undefined);
}
