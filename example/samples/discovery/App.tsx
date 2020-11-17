import React from 'react';
import {
    View,
    Text,
    Button,
    FlatList
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
    usbIsEnabled: boolean;
    printers: Array<StarPrinter>;
}

class App extends React.Component<AppProps, AppState> {
    private _manager: StarDeviceDiscoveryManager = StarDeviceDiscoveryManagerFactory.create([InterfaceType.Lan, InterfaceType.Bluetooth, InterfaceType.Usb]);

    private _onPressDiscoveryButton = async() => {
        this.setState({
            printers: [],
        });

        await this._manager.stopDiscovery()

        this._manager.discoveryTime = 10000;

        try {
            await this._manager.startDiscovery();
        }
        catch(error) {
            console.log(`Error: ${String(error)}`);
        }
    }

    private async createDiscoveryManager() {
        await this._manager.stopDiscovery();

        var interfaceTypes: Array<InterfaceType> = []
        if(this.state.lanIsEnabled) {
            interfaceTypes.push(InterfaceType.Lan);
        }
        if(this.state.bluetoothIsEnabled) {
            interfaceTypes.push(InterfaceType.Bluetooth);
        }
        if(this.state.usbIsEnabled) {
            interfaceTypes.push(InterfaceType.Usb);
        }

        this._manager = StarDeviceDiscoveryManagerFactory.create(interfaceTypes);

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
    }


    constructor(props: any) {
        super(props);

        this.state = {
            lanIsEnabled: true,
            bluetoothIsEnabled: true,
            usbIsEnabled: true,
            printers: [],
        };

        this.createDiscoveryManager();
    }

    render() {
        return (
            <View style={{ margin: 50 }}>
                <Text>Interface</Text>
                <View style={{ flexDirection: 'row', marginTop: 20  }}>
                <CheckBox
                    style={{ marginLeft: 20 }}
                    value={this.state.lanIsEnabled}
                    onValueChange={async (newValue) => {
                    this.setState({ lanIsEnabled: newValue });
                    await this.createDiscoveryManager();
                    }}
                />
                <Text style={{ marginLeft: 20 }}>LAN</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    style={{ marginLeft: 20 }}
                    value={this.state.bluetoothIsEnabled}
                    onValueChange={async (newValue) => {
                    this.setState({ bluetoothIsEnabled: newValue });
                    await this.createDiscoveryManager();
                    }}
                />
                <Text style={{ marginLeft: 20 }}>Bluetooth</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    style={{ marginLeft: 20 }}
                    value={this.state.usbIsEnabled}
                    onValueChange={async (newValue) => {
                    this.setState({ usbIsEnabled: newValue });
                    await this.createDiscoveryManager();
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