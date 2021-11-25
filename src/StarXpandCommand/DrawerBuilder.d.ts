import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class DrawerBuilder extends BaseStarXpandCommandBuilder {
    actionOpen(parameter: StarXpandCommand.Drawer.OpenParameter): DrawerBuilder;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
