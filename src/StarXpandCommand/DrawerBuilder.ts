import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarXpandCommand } from '../../index';

export class DrawerBuilder extends BaseStarXpandCommandBuilder {
    actionOpen(parameter: StarXpandCommand.Drawer.OpenParameter): DrawerBuilder {
        this._addAction(async() => {
            await NativeModules.DrawerBuilderWrapper.actionOpen(this._nativeObject, parameter.channel, parameter.onTime);
        });

        return this;
    }
    
    protected async _initNativeObjectImpl(): Promise<string> {
        return await NativeModules.DrawerBuilderWrapper.init();
    }

    protected async _disposeNativeObjectImpl(nativeObject: string): Promise<void> {
        await NativeModules.DrawerBuilderWrapper.dispose(nativeObject);
    }
}