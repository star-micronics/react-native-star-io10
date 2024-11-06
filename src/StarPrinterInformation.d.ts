import { StarPrinterModel } from './StarPrinterModel';
import { StarPrinterEmulation } from './StarPrinterEmulation';
import { StarPrinterInformationDetail } from './StarPrinterInformationDetail';
export declare class StarPrinterInformation {
    _model: StarPrinterModel;
    _emulation: StarPrinterEmulation;
    _detail: StarPrinterInformationDetail;
    _reserved: Map<string, any | undefined>;
    get model(): StarPrinterModel;
    get emulation(): StarPrinterEmulation;
    get detail(): StarPrinterInformationDetail;
    get reserved(): ReadonlyMap<string, any | undefined>;
}
