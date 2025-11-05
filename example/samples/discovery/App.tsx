import React from 'react';
import { useState, useEffect } from 'react';

import {
    View,
    Text,
    FlatList,
    PermissionsAndroid,
    Platform,
    Pressable,
    StyleSheet,
} from 'react-native';

import {
    InterfaceType,
    StarDeviceDiscoveryManager,
    StarDeviceDiscoveryManagerFactory,
    StarPrinter
} from 'react-native-star-io10';

export default function App() {

    const [lanIsEnabled, setLanIsEnabled] = useState(true);
    const [bluetoothIsEnabled, setBluetoothIsEnabled] = useState(true);
    const [bluetoothLeIsEnabled, setBluetoothLeIsEnabled] = useState(true);
    const [usbIsEnabled, setUsbIsEnabled] = useState(true);
    const [printers, setPrinters] = useState<StarPrinter[]>([]);
    const [manager, setManager] = useState<StarDeviceDiscoveryManager | undefined>(undefined);

    async function _onPressDiscoveryButton() {
        // If you are using Android 12 and targetSdkVersion is 31 or later,
        // you have to request Bluetooth permission (Nearby devices permission) to use the Bluetooth printer.
        // https://developer.android.com/about/versions/12/features/bluetooth-permissions
        if (Platform.OS == 'android' && 31 <= Platform.Version) {
            if (bluetoothIsEnabled) {
                var hasPermission = await _confirmBluetoothPermission();

                if (!hasPermission) {
                    console.log(`PERMISSION ERROR: You have to allow Nearby devices to use the Bluetooth printer`);
                    return;
                }
            }
        }

        try {
            await manager?.stopDiscovery()

            var interfaceTypes: Array<InterfaceType> = []
            if (lanIsEnabled) {
                interfaceTypes.push(InterfaceType.Lan);
            }
            if (bluetoothIsEnabled) {
                interfaceTypes.push(InterfaceType.Bluetooth);
            }
            if (bluetoothLeIsEnabled) {
                interfaceTypes.push(InterfaceType.BluetoothLE);
            }
            if (usbIsEnabled) {
                interfaceTypes.push(InterfaceType.Usb);
            }

            console.log(`create manager with ${interfaceTypes}`);
            setManager(await StarDeviceDiscoveryManagerFactory.create(interfaceTypes));
        }
        catch (error) {
            console.log(`Error: ${String(error)}`);
        }
    }

    useEffect(() => {
        const _startDiscovery = async () => {
            setPrinters([]);
            if (manager != undefined) {
                manager.discoveryTime = 10000;

                manager.onPrinterFound = async (printer: StarPrinter) => {
                    setPrinters((printers) => [...printers, printer]);
                    console.log(`Found printer: ${printer.connectionSettings.interfaceType} ${printer.connectionSettings.identifier}.`);
                };

                manager.onDiscoveryFinished = () => {
                    console.log(`Discovery finished.`);
                };

                try {
                    console.log(`Discovery start.`);
                    await manager.startDiscovery();
                }
                catch (error) {
                    console.log(`Error: ${String(error)}`);
                }
            }
        }
        _startDiscovery();
    }, [manager]);

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
                        style={lanIsEnabled ? styles.activeButton : styles.inactiveButton}
                        onPress={() =>
                            setLanIsEnabled(!lanIsEnabled)
                        }>
                        <Text style={styles.buttonText}>Lan</Text>
                    </Pressable>
                    <Pressable
                        style={bluetoothIsEnabled ? styles.activeButton : styles.inactiveButton}
                        onPress={() =>
                            setBluetoothIsEnabled(!bluetoothIsEnabled)
                        }>
                        <Text style={styles.buttonText}>Bluetooth</Text>
                    </Pressable>
                    <Pressable
                        style={bluetoothLeIsEnabled ? styles.activeButton : styles.inactiveButton}
                        onPress={() =>
                            setBluetoothLeIsEnabled(!bluetoothLeIsEnabled)
                        }>
                        <Text style={styles.buttonText}>BluetoothLE</Text>
                    </Pressable>
                    <Pressable
                        style={usbIsEnabled ? styles.activeButton : styles.inactiveButton}
                        onPress={() =>
                            setUsbIsEnabled(!usbIsEnabled)
                        }>
                        <Text style={styles.buttonText}>USB</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <Pressable
                    style={styles.activeButton}
                    onPress={() => _onPressDiscoveryButton()
                    }>
                    <Text style={styles.buttonText}>Discovery</Text>
                </Pressable>
            </View>

            <FlatList
                style={{ margin: 10 }}
                data={printers}
                renderItem={({ item }) => <Text>{item.connectionSettings.interfaceType} : {item.connectionSettings.identifier}</Text>}
                keyExtractor={(item, index) => index.toString()} />
        </View >
    );
};