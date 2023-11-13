import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';
export declare class DrawerBuilder extends BaseStarXpandCommandBuilder {
    _parameters: Map<string, any>;
    constructor();
    actionOpen(parameter: StarXpandCommand.Drawer.OpenParameter): DrawerBuilder;
}
