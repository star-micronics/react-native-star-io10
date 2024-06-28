import React from 'react';
import { useState, useEffect } from 'react';

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

export default function App() {
    const [lanIsEnabled, setLanIsEnabled] = useState(true);
    const [bluetoothIsEnabled, setBluetoothIsEnabled] = useState(true);
    const [bluetoothLeIsEnabled, setBluetoothLeIsEnabled] = useState(true);
    const [usbIsEnabled, setUsbIsEnabled] = useState(true);
    const [printers, setPrinters] = useState<StarPrinter[]>([]);
    const [manager, setManager] = useState<StarDeviceDiscoveryManager | undefined>(undefined);

    async function _onPressDiscoveryButton () {
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
            if(lanIsEnabled) {
                interfaceTypes.push(InterfaceType.Lan);
            }
            if(bluetoothIsEnabled) {
                interfaceTypes.push(InterfaceType.Bluetooth);
            }
            if(bluetoothLeIsEnabled) {
                interfaceTypes.push(InterfaceType.BluetoothLE);
            }
            if(usbIsEnabled) {
                interfaceTypes.push(InterfaceType.Usb);
            }

            console.log(`create manager with ${interfaceTypes}`);
            setManager(await StarDeviceDiscoveryManagerFactory.create(interfaceTypes));
        }
        catch(error) {
            console.log(`Error: ${String(error)}`);
        }
    }

    useEffect( () => {
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
                catch(error) {
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

    return (
        <View style={{ margin: 50 }}>
            <Text>Interface</Text>

            <View style={{ flexDirection: 'row', marginTop: 20  }}>
            <CheckBox
                style={{ marginLeft: 20 }}
                value={lanIsEnabled}
                onValueChange={(newValue) => {
                    setLanIsEnabled(newValue);
                }}
            />
            <Text style={{ marginLeft: 20 }}>LAN</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
            <CheckBox
                style={{ marginLeft: 20 }}
                value={bluetoothIsEnabled}
                onValueChange={(newValue) => {
                    setBluetoothIsEnabled(newValue);
                }}
            />
            <Text style={{ marginLeft: 20 }}>Bluetooth</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
            <CheckBox
                style={{ marginLeft: 20 }}
                value={bluetoothLeIsEnabled}
                onValueChange={(newValue) => {
                    setBluetoothLeIsEnabled(newValue);
                }}
            />
            <Text style={{ marginLeft: 20 }}>Bluetooth LE</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
            <CheckBox
                style={{ marginLeft: 20 }}
                value={usbIsEnabled}
                onValueChange={(newValue) => {
                    setUsbIsEnabled(newValue);
                }}
            />
            <Text style={{ marginLeft: 20 }}>USB</Text>
            </View>

            <View
                style={{ width: 100, marginTop: 30 }}>
                <Button
                title="Discovery"
                onPress={_onPressDiscoveryButton}
                />
            </View>
                <FlatList
                    style={{ marginTop: 30 }}
                    data={printers}
                    renderItem={({item}) => <Text>{item.connectionSettings.interfaceType} : {item.connectionSettings.identifier}</Text>}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
    );
};