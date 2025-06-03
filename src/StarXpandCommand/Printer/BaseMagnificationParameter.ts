import { BaseMagnification } from './BaseMagnification';

export class BaseMagnificationParameter {
    private _text: BaseMagnification = BaseMagnification.Standard;

    get text(): BaseMagnification {
        return this._text;
    }

    setText(text: BaseMagnification): BaseMagnificationParameter {
        this._text = text;

        return this;
    }
}