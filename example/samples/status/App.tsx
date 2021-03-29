import React from 'react';
import {
    View,
    Text,
    Button,
    TextInput
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