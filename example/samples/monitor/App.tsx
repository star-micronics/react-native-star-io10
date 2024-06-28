import React from 'react';
import { useState, useEffect } from 'react';

import {
    View,
    FlatList,
    Text,
    Button,
    TextInput,
    PermissionsAndroid,
    Platform
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import {
    InterfaceType,
    StarConnectionSettings,
    StarPrinter
} from 'react-native-star-io10';

export default function App() {
    const [interfaceType, setInterfaceType] = useState(InterfaceType.Lan);
    const [identifier, setIdentifier] = useState("00:11:62:00:00:00");
    const [statusList, setStatusList] = useState<String[]>([]);
    const [printer, setPrinter] = useState<StarPrinter | undefined>(undefined);
    const [isMonitoring, setIsMonitoring] = useState(false);

    async function _onPressMonitorButton() {
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
        try {
            if (isMonitoring) {
                await printer?.close();
                await printer?.dispose();
                setPrinter(undefined);
            } else {
                setStatusList([]);
                setPrinter(new StarPrinter(settings));
            }
            setIsMonitoring(!isMonitoring);
        }
        catch(error) {
            console.log(`Error: ${String(error)}`);
        }
    }

    useEffect(() => {
        const _startMonitor = async () => {
            if (printer == undefined) {
                return;
            }
            printer.printerDelegate.onCommunicationError = (error) => {
                var status = `Printer: Communication Error\n${String(error)}`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.printerDelegate.onReady = () => {
                var status = `Printer: Ready`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.printerDelegate.onError = () => {
                var status = `Printer: Error`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.printerDelegate.onPaperReady = () => {
                var status = `Printer: Paper Ready`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.printerDelegate.onPaperNearEmpty = () => {
                var status = `Printer: Paper Near Empty`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.printerDelegate.onPaperEmpty = () => {
                var status = `Printer: Paper Empty`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.printerDelegate.onCoverOpened = () => {
                var status = `Printer: Cover Opened`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.printerDelegate.onCoverClosed = () => {
                var status = `Printer: Cover Closed`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.drawerDelegate.onCommunicationError = (error) => {
                var status = `Drawer: Communication Error\n${String(error)}`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.drawerDelegate.onOpenCloseSignalSwitched = (openCloseSignal) => {
                var status = `Drawer: Open Close Signal Switched: ${String(openCloseSignal)}`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.inputDeviceDelegate.onCommunicationError = (error) => {
                var status = `Input Device: Communication Error\n${String(error)}`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.inputDeviceDelegate.onConnected = () => {
                var status = `Input Device: Connected`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.inputDeviceDelegate.onDisconnected = () => {
                var status = `Input Device: Disconnected`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.inputDeviceDelegate.onDataReceived = (data) => {
                var status = `Input Device: DataReceived ${String(data)}`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.displayDelegate.onCommunicationError = (error) => {
                var status = `Display: Communication Error\n${String(error)}`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.displayDelegate.onConnected = () => {
                var status = `Display: Connected`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
            printer.displayDelegate.onDisconnected = () => {
                var status = `Display: Disconnected`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
    
            try {
                await printer.open();
            }
            catch(error) {
                var status = `Error: ${String(error)}`;
                console.log(status);
                setStatusList((statusList) => [...statusList, status]);
            }
        }
        _startMonitor();        
    }, [printer]);

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
            <View style={{ flex: 1, margin: 50 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: 100 }}>Interface</Text>
                    <View style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <CheckBox
                                style={{ marginLeft: 20 }}
                                value={
                                    interfaceType == InterfaceType.Lan
                                }
                                onValueChange={(isChecked) => {
                                    if (isChecked) {
                                        setInterfaceType(InterfaceType.Lan);
                                    }
                                }}
                            />
                            <Text style={{ marginLeft: 20 }}>LAN</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <CheckBox
                                style={{ marginLeft: 20 }}
                                value={
                                    interfaceType == InterfaceType.Bluetooth
                                }
                                onValueChange={(isChecked) => {
                                    if (isChecked) {
                                        setInterfaceType(InterfaceType.Bluetooth);
                                    }
                                }}
                            />
                            <Text style={{ marginLeft: 20 }}>Bluetooth</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <CheckBox
                                style={{ marginLeft: 20 }}
                                value={
                                    interfaceType == InterfaceType.BluetoothLE
                                }
                                onValueChange={(isChecked) => {
                                    if (isChecked) {
                                        setInterfaceType(InterfaceType.BluetoothLE);
                                    }
                                }}
                            />
                            <Text style={{ marginLeft: 20 }}>BluetoothLE</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <CheckBox
                                style={{ marginLeft: 20 }}
                                value={
                                    interfaceType == InterfaceType.Usb
                                }
                                onValueChange={(isChecked) => {
                                    if (isChecked) {
                                        setInterfaceType(InterfaceType.Usb);
                                    }
                                }}
                            />
                            <Text style={{ marginLeft: 20 }}>USB</Text>
                        </View>
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
                <View style={{ width: 120, marginTop: 20 }}>
                    <Button
                        title={isMonitoring ? "Stop Monitoring" : "Start Monitoring"}
                        onPress={_onPressMonitorButton}
                    />
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', marginTop: 20 }}>
                <FlatList
                    style={{ marginTop: 30 }}
                    data={statusList}
                    renderItem={({item}) => <Text>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()} />
                </View>
            </View>
    );
};