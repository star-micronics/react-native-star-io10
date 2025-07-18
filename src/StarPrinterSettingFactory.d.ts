import { StarPrinterSetting } from './StarPrinterSetting';
export declare class StarPrinterSettingFactory {
    static create(nativeSetting: string, nativeStarPrinter: string | undefined): Promise<StarPrinterSetting | undefined>;
}
