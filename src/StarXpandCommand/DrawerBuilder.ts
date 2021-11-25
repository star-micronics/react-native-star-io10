import { NativeModules } from 'react-native';
import { BaseStarXpandCommandBuilder } from './BaseStarXpandCommandBuilder';
import { StarIO10ErrorFactory } from '../StarIO10ErrorFactory';
import { StarXpandCommand } from '../../index';

export class DrawerBuilder extends BaseStarXpandCommandBuilder {
    actionOpen(parameter: StarXpandCommand.Drawer.OpenParameter): DrawerBuilder {
        this._addAction(async() => {
            await NativeModules.DrawerBuilderWrapper.actionOpen(this._nativeObject, parameter.channel, parameter.onTime)
            .catch(async (nativeError: any) => {
                var error = await StarIO10ErrorFactory.create(nativeError.code);
                throw error;
            });
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