import { StarPrinterModel } from './StarPrinterModel';
import { StarPrinterEmulation } from './StarPrinterEmulation';
export declare class StarPrinterInformation {
    _model: StarPrinterModel;
    _emulation: StarPrinterEmulation;
    _reserved: Map<string, any | undefined>;
    get model(): StarPrinterModel;
    get emulation(): StarPrinterEmulation;
    get reserved(): ReadonlyMap<string, any | undefined>;
}
