import React from 'react';
import { useState, useEffect } from 'react';

import {
    View,
    FlatList,
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
        catch (error) {
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
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.printerDelegate.onReady = () => {
                var status = `Printer: Ready`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.printerDelegate.onError = () => {
                var status = `Printer: Error`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.printerDelegate.onPaperReady = () => {
                var status = `Printer: Paper Ready`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.printerDelegate.onPaperNearEmpty = () => {
                var status = `Printer: Paper Near Empty`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.printerDelegate.onPaperEmpty = () => {
                var status = `Printer: Paper Empty`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.printerDelegate.onCoverOpened = () => {
                var status = `Printer: Cover Opened`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.printerDelegate.onCoverClosed = () => {
                var status = `Printer: Cover Closed`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.drawerDelegate.onCommunicationError = (error) => {
                var status = `Drawer: Communication Error\n${String(error)}`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.drawerDelegate.onOpenCloseSignalSwitched = (openCloseSignal) => {
                var status = `Drawer: Open Close Signal Switched: ${String(openCloseSignal)}`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.inputDeviceDelegate.onCommunicationError = (error) => {
                var status = `Input Device: Communication Error\n${String(error)}`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.inputDeviceDelegate.onConnected = () => {
                var status = `Input Device: Connected`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.inputDeviceDelegate.onDisconnected = () => {
                var status = `Input Device: Disconnected`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.inputDeviceDelegate.onDataReceived = (data) => {
                var status = `Input Device: DataReceived ${String(data)}`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.displayDelegate.onCommunicationError = (error) => {
                var status = `Display: Communication Error\n${String(error)}`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.displayDelegate.onConnected = () => {
                var status = `Display: Connected`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }
            printer.displayDelegate.onDisconnected = () => {
                var status = `Display: Disconnected`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
            }

            try {
                await printer.open();
            }
            catch (error) {
                var status = `Error: ${String(error)}`;
                setStatusList((statusList) => [...statusList, status]);
                console.log(status);
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
                    onPress={() => _onPressMonitorButton()
                    }>
                    {
                        (() => {
                            switch (isMonitoring) {
                                case true:
                                    return <Text style={styles.buttonText}>Stop Monitoring</Text>;
                                case false:
                                    return <Text style={styles.buttonText}>Start Monitoring</Text>;
                            }
                        })()
                    }
                </Pressable>
            </View>

            <FlatList
                style={{ margin: 10 }}
                data={statusList}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()} />
        </View >
    );
};