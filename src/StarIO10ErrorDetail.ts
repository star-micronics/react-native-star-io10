import { InterfaceType } from './InterfaceType';
import { StarIO10Error } from './StarIO10Error';

export class StarIO10ErrorDetail {
    private _autoSwitchInterfaceOpenErrors: Map<InterfaceType,  StarIO10Error | undefined> | undefined;

    get autoSwitchInterfaceOpenErrors(): Map<InterfaceType,  StarIO10Error | undefined> | undefined {
        return this._autoSwitchInterfaceOpenErrors;
    }

    constructor(openErrors: Map<InterfaceType,  StarIO10Error | undefined> | undefined = undefined) {
        this._autoSwitchInterfaceOpenErrors = openErrors;
    }
}