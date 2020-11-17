import { StarPrinterModel } from './StarPrinterModel';
import { StarPrinterEmulation } from './StarPrinterEmulation';

export class StarPrinterInformation {
    _model: StarPrinterModel = StarPrinterModel.Unknown;

    _emulation: StarPrinterEmulation = StarPrinterEmulation.Unknown;

    get model(): StarPrinterModel {
        return this._model;
    }

    get emulation(): StarPrinterEmulation {
        return this._emulation;
    }
}