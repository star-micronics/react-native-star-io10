import React from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    PermissionsAndroid,
    Platform
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import {
    InterfaceType,
    StarDeviceDiscoveryManager,
    StarDeviceDiscoveryManagerFactory,
    StarPrinter
} from 'react-native-star-io10';

interface AppProps {
}

interface AppState {
    lanIsEnabled: boolean;
    bluetoothIsEnabled: boolean;
    bluetoothLeIsEnabled: boolean;
    usbIsEnabled: boolean;
    printers: Array<StarPrinter>;
}

class App extends React.Component<AppProps, AppState> {
    private _manager?: StarDeviceDiscoveryManager;

    private _onPressDiscoveryButton = async() => {
        // If you are using Android 12 and targetSdkVersion is 31 or later,
        // you have to request Bluetooth permission (Nearby devices permission) to use the Bluetooth printer.
        // https://developer.android.com/about/versions/12/features/bluetooth-permissions
        if (Platform.OS == 'android' && 31 <= Platform.Version) {
            if (this.state.bluetoothIsEnabled) {
                var hasPermission = await this._confirmBluetoothPermission();

                if (!hasPermission) {
                    console.log(`PERMISSION ERROR: You have to allow Nearby devices to use the Bluetooth printer`);
                    return;
                }
            }
        }

        this.setState({
            printers: [],
        });

        try {
            await this._manager?.stopDiscovery()

            var interfaceTypes: Array<InterfaceType> = []
            if(this.state.lanIsEnabled) {
                interfaceTypes.push(InterfaceType.Lan);
            }
            if(this.state.bluetoothIsEnabled) {
                interfaceTypes.push(InterfaceType.Bluetooth);
            }
            if(this.state.bluetoothLeIsEnabled) {
                interfaceTypes.push(InterfaceType.BluetoothLE);
            }
            if(this.state.usbIsEnabled) {
                interfaceTypes.push(InterfaceType.Usb);
            }

            this._manager = await StarDeviceDiscoveryManagerFactory.create(interfaceTypes);
            this._manager.discoveryTime = 10000;

            this._manager.onPrinterFound = (printer: StarPrinter) => {
                const printers = this.state.printers;
                printers.push(printer);
                this.setState({
                    printers: printers
                });

                console.log(`Found printer: ${printer.connectionSettings.identifier}.`);
            };

            this._manager.onDiscoveryFinished = () => {
                console.log(`Discovery finished.`);
            };

            await this._manager.startDiscovery();
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
            lanIsEnabled: true,
            bluetoothIsEnabled: true,
            bluetoothLeIsEnabled: true,
            usbIsEnabled: true,
            printers: [],
        };
    }

    render() {
        return (
            <View style={{ margin: 50 }}>
                <Text>Interface</Text>

                <View style={{ flexDirection: 'row', marginTop: 20  }}>
                <CheckBox
                    style={{ marginLeft: 20 }}
                    value={this.state.lanIsEnabled}
                    onValueChange={(newValue) => {
                        this.setState({ lanIsEnabled: newValue });
                    }}
                />
                <Text style={{ marginLeft: 20 }}>LAN</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    style={{ marginLeft: 20 }}
                    value={this.state.bluetoothIsEnabled}
                    onValueChange={(newValue) => {
                        this.setState({ bluetoothIsEnabled: newValue });
                    }}
                />
                <Text style={{ marginLeft: 20 }}>Bluetooth</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    style={{ marginLeft: 20 }}
                    value={this.state.bluetoothLeIsEnabled}
                    onValueChange={(newValue) => {
                        this.setState({ bluetoothLeIsEnabled: newValue });
                    }}
                />
                <Text style={{ marginLeft: 20 }}>Bluetooth LE</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    style={{ marginLeft: 20 }}
                    value={this.state.usbIsEnabled}
                    onValueChange={(newValue) => {
                        this.setState({ usbIsEnabled: newValue });
                    }}
                />
                <Text style={{ marginLeft: 20 }}>USB</Text>
                </View>

                <View
                    style={{ width: 100, marginTop: 30 }}>
                    <Button
                    title="Discovery"
                    onPress={this._onPressDiscoveryButton}
                    />
                </View>
                <FlatList
                    style={{ marginTop: 30 }}
                    data={this.state.printers}
                    renderItem={({item}) => <Text>{item.connectionSettings.interfaceType} : {item.connectionSettings.identifier}</Text>}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        );
    }
};

export default App;