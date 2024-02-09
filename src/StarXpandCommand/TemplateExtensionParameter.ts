export class TemplateExtensionParameter {
    private _enableArrayFieldData: boolean = false;

    get enableArrayFieldData(): boolean {
        return this._enableArrayFieldData;
    }

    setEnableArrayFieldData(enableArrayFieldData: boolean): TemplateExtensionParameter {
        this._enableArrayFieldData = enableArrayFieldData;
        return this;
    }
}