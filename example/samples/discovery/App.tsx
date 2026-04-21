import React from 'react';
import { useState, useEffect } from 'react';

import {
    View,
    Text,
    TextInput,
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
        if (Platform.OS == 'android') {
            if (bluetoothIsEnabled) {
                var hasPermission = await _confirmBluetoothPermission();

                if (!hasPermission) {
                    console.log(`PERMISSION ERROR: You have to allow Nearby devices to use the Bluetooth printer`);
                    return;
                }
            }
            if (bluetoothLeIsEnabled) {
                var hasPermission = await _confirmBluetoothLEPermission();

                if (!hasPermission) {
                    console.log(`PERMISSION ERROR: You have to allow Nearby devices to use the BluetoothLE printer`);
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
                manager.discoveryTime = 2_000;
                if (bluetoothLeIsEnabled) {
                    manager.discoveryTime = 10_000;
                } else if (lanIsEnabled) {
                    manager.discoveryTime = 5_000;
                }

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
            if (Number(Platform.Version) >= 31) {
                hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);

                if (!hasPermission) {
                    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);

                    hasPermission = status == PermissionsAndroid.RESULTS.GRANTED;
                }
            } else {
                hasPermission = true;
            }
        }
        catch (err) {
            console.warn(err);
        }

        return hasPermission;
    }

    async function _confirmBluetoothLEPermission(): Promise<boolean> {
        var hasPermission = false;

        try {
            if (Number(Platform.Version) >= 31) {
                const permissions = [
                    PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
                    PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                ];

                const results = await PermissionsAndroid.requestMultiple(permissions);

                hasPermission = permissions.every(
                    (perm) => results[perm] === PermissionsAndroid.RESULTS.GRANTED
                );
            } else {
                const permissions = [
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                ];

                const results = await PermissionsAndroid.requestMultiple(permissions);

                hasPermission = permissions.every(
                    (perm) => results[perm] === PermissionsAndroid.RESULTS.GRANTED
                );
            }

        }
        catch (err) {
            console.warn(err);
        }

        return hasPermission;
    }

    function _getFoundPrinterInformation(printer: StarPrinter): string {
        const connectionSettings = printer.connectionSettings;
        const information = printer.information;
        switch (connectionSettings.interfaceType) {
            case InterfaceType.Lan:
                    return `${connectionSettings.interfaceType} : ${connectionSettings.identifier} : ${information?.model} : ${information?.detail.lan.uniqueId ?? ''}`;
            case InterfaceType.Bluetooth:
                    return `${connectionSettings.interfaceType} : ${connectionSettings.identifier} : ${information?.model}`;
            case InterfaceType.BluetoothLE:
                    return `${connectionSettings.interfaceType} : ${connectionSettings.identifier} : ${information?.model} : ${information?.detail.bluetoothLE.deviceName ?? ''}`;
            case InterfaceType.Usb:
                    return `${connectionSettings.interfaceType} : ${connectionSettings.identifier} : ${information?.model}`;
            default:
                    return '';
        }
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
                renderItem={({ item }) => (
                    Platform.OS === 'ios' ? (
                        <TextInput
                            editable={false}
                            multiline={true}
                            value={_getFoundPrinterInformation(item)}
                        />
                    ) : (
                        <Text selectable={true}>
                            {_getFoundPrinterInformation(item)}
                        </Text>
                    )
                )}
                keyExtractor={(item, index) => index.toString()} />
        </View >
    );
};