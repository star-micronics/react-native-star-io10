import { StarPrinterModel } from './StarPrinterModel';
import { StarPrinterEmulation } from './StarPrinterEmulation';

export class StarPrinterInformation {
    _model: StarPrinterModel = StarPrinterModel.Unknown;

    _emulation: StarPrinterEmulation = StarPrinterEmulation.Unknown;

    _reserved: Map<string, any | undefined> = new Map<string, any | undefined>()

    get model(): StarPrinterModel {
        return this._model;
    }

    get emulation(): StarPrinterEmulation {
        return this._emulation;
    }

    get reserved(): ReadonlyMap<string, any | undefined> {
        return this._reserved;
    }
}