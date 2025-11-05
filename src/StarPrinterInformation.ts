import { StarPrinterModel } from './StarPrinterModel';
import { StarPrinterEmulation } from './StarPrinterEmulation';
import { StarPrinter } from './StarPrinter';
import { StarPrinterInformationDetail } from './StarPrinterInformationDetail';

export class StarPrinterInformation {
    _model: StarPrinterModel = StarPrinterModel.Unknown;

    _emulation: StarPrinterEmulation = StarPrinterEmulation.Unknown;

    _detail: StarPrinterInformationDetail = new StarPrinterInformationDetail();

    _reserved: Map<string, any | undefined> = new Map<string, any | undefined>()

    get model(): StarPrinterModel {
        return this._model;
    }

    get emulation(): StarPrinterEmulation {
        return this._emulation;
    }

    get detail(): StarPrinterInformationDetail {
        return this._detail;
    }

    get reserved(): ReadonlyMap<string, any | undefined> {
        return this._reserved;
    }
}