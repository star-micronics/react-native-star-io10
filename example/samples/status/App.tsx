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
    private _onPressGetStatusButton = async() => {
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

        var printer = new StarPrinter(settings);

        try {
            await printer.open();
            var status = await printer.getStatus();

            console.log(`Has Error: ${String(status.hasError)}`);
            console.log(`Paper Empty: ${String(status.paperEmpty)}`);
            console.log(`Paper Near Empty: ${String(status.paperNearEmpty)}`);
            console.log(`Cover Open: ${String(status.coverOpen)}`);
            console.log(`Drawer Open Close Signal: ${String(status.drawerOpenCloseSignal)}`);
        }
        catch(error) {
            console.log(`Error: ${String(error)}`);
        }
        finally {
            await printer.close();
            await printer.dispose();
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
                    title="Get status"
                    onPress={this._onPressGetStatusButton}
                />
                </View>
            </View>
        );
    }
};

export default App;