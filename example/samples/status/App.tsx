import React from 'react';
import { useState } from 'react';

import {
    View,
    ScrollView,
    Text,
    TextInput,
    PermissionsAndroid,
    Platform,
    Pressable,
    StyleSheet,
} from 'react-native';

import {
    InterfaceType,
    StarConnectionSettings,
    StarPrinter
} from 'react-native-star-io10';

export default function App() {

    const [interfaceType, setInterfaceType] = useState(InterfaceType.Lan);
    const [identifier, setIdentifier] = useState("00:11:62:00:00:00");
    const [statusText, setStatusText] = useState('\n');

    async function _onPressGetStatusButton() {
        var settings = new StarConnectionSettings();
        settings.interfaceType = interfaceType;
        settings.identifier = identifier;
        // settings.autoSwitchInterface = true;

        // If you are using Android 12 and targetSdkVersion is 31 or later,
        // you have to request Bluetooth permission (Nearby devices permission) to use the Bluetooth printer.
        // https://developer.android.com/about/versions/12/features/bluetooth-permissions
        if (Platform.OS == 'android' && 31 <= Platform.Version) {
            if (interfaceType == InterfaceType.Bluetooth || settings.autoSwitchInterface == true) {
                var hasPermission = await _confirmBluetoothPermission();

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

            const newStatusText =
                statusText +
                `Has Error: ${String(status.hasError)}\n` +
                `Paper Empty: ${String(status.paperEmpty)}\n` +
                `Paper Near Empty: ${String(status.paperNearEmpty)}\n` +
                `Cover Open: ${String(status.coverOpen)}\n` +
                `Drawer Open Close Signal: ${String(status.drawerOpenCloseSignal)}\n` +
                '\n';
            setStatusText(newStatusText);
        }
        catch (error) {
            console.log(`Error: ${String(error)}`);
            setStatusText(statusText + `Error: ${String(error)}\n\n`);
        }
        finally {
            await printer.close();
            await printer.dispose();
        }
    }

    async function _confirmBluetoothPermission(): Promise<boolean> {
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
    const styles = StyleSheet.create({
        activeButton: {
            margin: 5,
            width: 150,
            alignItems: 'center',
            backgroundColor: '#0026FF',
            padding: 10,
        },
        inactiveButton: {
            margin: 5,
            width: 150,
            alignItems: 'center',
            backgroundColor: '#606060',
            padding: 10,
        },
        buttonText: {
            color: '#FFFFFF',
        }
    });
    return (
        <View style={{ margin: 10, marginTop: 50, marginBottom: 50, flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 100 }}>Interface</Text>
                <View style={{ margin: 10 }}>
                    <Pressable
                        style={interfaceType == InterfaceType.Lan ? styles.activeButton : styles.inactiveButton}
                        onPress={() =>
                            setInterfaceType(InterfaceType.Lan)
                        }>
                        <Text style={styles.buttonText}>Lan</Text>
                    </Pressable>
                    <Pressable
                        style={interfaceType == InterfaceType.Bluetooth ? styles.activeButton : styles.inactiveButton}
                        onPress={() =>
                            setInterfaceType(InterfaceType.Bluetooth)
                        }>
                        <Text style={styles.buttonText}>Bluetooth</Text>
                    </Pressable>
                    <Pressable
                        style={interfaceType == InterfaceType.BluetoothLE ? styles.activeButton : styles.inactiveButton}
                        onPress={() =>
                            setInterfaceType(InterfaceType.BluetoothLE)
                        }>
                        <Text style={styles.buttonText}>BluetoothLE</Text>
                    </Pressable>
                    <Pressable
                        style={interfaceType == InterfaceType.Usb ? styles.activeButton : styles.inactiveButton}
                        onPress={() =>
                            setInterfaceType(InterfaceType.Usb)
                        }>
                        <Text style={styles.buttonText}>USB</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Text style={{ width: 100 }}>Identifier</Text>
                <TextInput
                    style={{ width: 200, marginLeft: 20 }}
                    value={identifier}
                    onChangeText={(value) => {
                        setIdentifier(value);
                    }}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Pressable
                    style={styles.activeButton}
                    onPress={() => _onPressGetStatusButton()
                    }>
                    <Text style={styles.buttonText}>Get Status</Text>
                </Pressable>
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch', marginTop: 20 }}>
                <ScrollView>
                    <Text>{statusText}</Text>
                </ScrollView>
            </View>
        </View>
    );
};