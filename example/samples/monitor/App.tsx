import React from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    PermissionsAndroid,
    Platform
} from 'react-native';

import {
    Picker
} from '@react-native-picker/picker';

import {
    InterfaceType,
    StarConnectionSettings,
    StarPrinter
} from 'react-native-star-io10';

interface AppProps {
}

interface AppState {
    interfaceType: InterfaceType;
    identifier: string;
}

class App extends React.Component<AppProps, AppState> {
    private _printer: StarPrinter;

    private _onPressMonitorButton = async() => {
        await this._printer.close();
        await this._printer.dispose();

        var settings = new StarConnectionSettings();
        settings.interfaceType = this.state.interfaceType;
        settings.identifier = this.state.identifier;
        // settings.autoSwitchInterface = true;

        // If you are using Android 12 and targetSdkVersion is 31 or later,
        // you have to request Bluetooth permission (Nearby devices permission) to use the Bluetooth printer.
        // https://developer.android.com/about/versions/12/features/bluetooth-permissions
        if (Platform.OS == 'android' && 31 <= Platform.Version) {
            if (this.state.interfaceType == InterfaceType.Bluetooth || settings.autoSwitchInterface == true) {
                var hasPermission = await this._confirmBluetoothPermission();

                if (!hasPermission) {
                    console.log(`PERMISSION ERROR: You have to allow Nearby devices to use the Bluetooth printer`);
                    return;
                }
            }
        }

        this._printer = new StarPrinter(settings);

        this._printer.printerDelegate.onCommunicationError = (error) => {
            console.log(`Printer: Communication Error`);
            console.log(error);
        }
        this._printer.printerDelegate.onReady = () => {
            console.log(`Printer: Ready`);
        }
        this._printer.printerDelegate.onError = () => {
            console.log(`Printer: Error`);
        }
        this._printer.printerDelegate.onPaperReady = () => {
            console.log(`Printer: Paper Ready`);
        }
        this._printer.printerDelegate.onPaperNearEmpty = () => {
            console.log(`Printer: Paper Near Empty`);
        }
        this._printer.printerDelegate.onPaperEmpty = () => {
            console.log(`Printer: Paper Empty`);
        }
        this._printer.printerDelegate.onCoverOpened = () => {
            console.log(`Printer: Cover Opened`);
        }
        this._printer.printerDelegate.onCoverClosed = () => {
            console.log(`Printer: Cover Closed`);
        }
        this._printer.drawerDelegate.onCommunicationError = (error) => {
            console.log(`Drawer: Communication Error`);
            console.log(error);
        }
        this._printer.drawerDelegate.onOpenCloseSignalSwitched = (openCloseSignal) => {
            console.log(`Drawer: Open Close Signal Switched: ${String(openCloseSignal)}`);
        }
        this._printer.inputDeviceDelegate.onCommunicationError = (error) => {
            console.log(`Input Device: Communication Error`);
            console.log(error);
        }
        this._printer.inputDeviceDelegate.onConnected = () => {
            console.log(`Input Device: Connected`);
        }
        this._printer.inputDeviceDelegate.onDisconnected = () => {
            console.log(`Input Device: Disconnected`);
        }
        this._printer.inputDeviceDelegate.onDataReceived = (data) => {
            console.log(`Input Device: DataReceived ${String(data)}`);
        }
        this._printer.displayDelegate.onCommunicationError = (error) => {
            console.log(`Display: Communication Error`);
            console.log(error);
        }
        this._printer.displayDelegate.onConnected = () => {
            console.log(`Display: Connected`);
        }
        this._printer.displayDelegate.onDisconnected = () => {
            console.log(`Display: Disconnected`);
        }

        try {
            await this._printer.open();
        }
        catch(error) {
            console.log(`Error: ${String(error)}`);
        }
    }

    private async _confirmBluetoothPermission(): Promise<boolean> {
        var hasPermission = false;

        try {
            hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);
    
            if (!hasPermission) {
                const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);
                    
                hasPermission = status == PermissionsAndroid.RESULTS.GRANTED;
            }
        }
        catch (err) {
            console.warn(err);
        }

        return hasPermission;
    }

    constructor(props: any) {
        super(props);

        this.state = {
            interfaceType: InterfaceType.Lan,
            identifier: '00:11:62:00:00:00'
        };

        var settings = new StarConnectionSettings();
        settings.interfaceType = this.state.interfaceType;
        settings.identifier = this.state.identifier;
        this._printer = new StarPrinter(settings);
    }

    render() {
        return (
            <View style={{ margin: 50 }}>
                <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 100 }}>Interface</Text>
                <Picker
                    style={{ width: 200, marginLeft: 20, justifyContent: 'center' }}
                    selectedValue={this.state.interfaceType}
                    onValueChange={(value) => {
                        this.setState({ interfaceType: value });
                    }}>
                    <Picker.Item label='LAN' value={InterfaceType.Lan} />
                    <Picker.Item label='Bluetooth' value={InterfaceType.Bluetooth}/>
                    <Picker.Item label='Bluetooth LE' value={InterfaceType.BluetoothLE}/>
                    <Picker.Item label='USB' value={InterfaceType.Usb} />
                </Picker>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Text style={{ width: 100 }}>Identifier</Text>
                <TextInput
                    style={{ width: 200, marginLeft: 20 }}
                    value={this.state.identifier}
                    onChangeText={(value) => {
                        this.setState({ identifier: value });
                    }}
                />
                </View>
                <View style={{ width: 100, marginTop: 20 }}>
                <Button
                    title="Monitor"
                    onPress={this._onPressMonitorButton}
                />
                </View>
            </View>
        );
    }
};

export default App;