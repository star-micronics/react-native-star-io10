import { TemplateExtensionParameter } from '../TemplateExtensionParameter';

export class PageModeParameter {
    private _templateExtension: TemplateExtensionParameter | undefined = undefined;

    get templateExtension(): TemplateExtensionParameter | undefined {
        return this._templateExtension;
    }

    setTemplateExtension(templateExtension: TemplateExtensionParameter) {
        this._templateExtension = templateExtension;
        return this;
    }
}