import React from 'react';
import { useState } from 'react';
import { activateKeepAwake, deactivateKeepAwake} from "@sayem314/react-native-keep-awake";

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
    StarPrinter,
    StarIO10DiagInfoUpload
} from 'react-native-star-io10';

export default function App() {

    const [interfaceType, setInterfaceType] = useState(InterfaceType.Lan);
    const [identifier, setIdentifier] = useState("00:11:62:00:00:00");
    const [statusText, setStatusText] = useState('\n');

    async function _onPressCheckVersionsButton() {
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

        var newStatusText = '\n'
        setStatusText(newStatusText);
        
        try {
            await printer.open();

            var firmware = printer.setting?.firmware;

            if (firmware == undefined){            
                console.log(`printer.setting.firmware is undefined. Unsupported Model.`);

                newStatusText =`printer.setting.firmware is undefined. Unsupported Model.`;
                setStatusText(newStatusText);

                return;
            }

            newStatusText =
                `isUpdatable: ${String(firmware.isUpdatable)}\n\n` +
                `Before checkVersions()\n` +
                `currentVersion: ${String(firmware.currentVersion)}\n` +
                `latestVersion: ${String(firmware.latestVersion)}\n` +
                '\n';
            setStatusText(newStatusText);

            await firmware.checkVersions();

            newStatusText =
                newStatusText +
                `After checkVersions()\n` +
                `currentVersion: ${String(firmware.currentVersion)}\n` +
                `latestVersion: ${String(firmware.latestVersion)}\n` +
                '\n';
            setStatusText(newStatusText);
        }
        catch (error) {
            console.log(`Error: ${String(error)}`);

            newStatusText =
                newStatusText + `Error: ${String(error)}\n\n`

            setStatusText(newStatusText);
        }
        finally {
            await printer.close();
            await printer.dispose();
        }
    }

    async function _onPressUpdateButton() {
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

        var newStatusText = '\n'
        setStatusText(newStatusText);
        
        try {
            await printer.open();

            var firmware = printer.setting?.firmware;

            if (firmware == undefined){            
                console.log(`printer.setting.firmware is undefined. Unsupported Model.`);

                newStatusText =`printer.setting.firmware is undefined. Unsupported Model.`;
                setStatusText(newStatusText);
                
                return;
            }

            firmware.updateDelegate.onFirmwareUpdateProgress = (step) => {
                var status = `onFirmwareUpdateProgress: ${String(step)}`;
                newStatusText = newStatusText + status + '\n';
                setStatusText(newStatusText);
                console.log(status);
            }

            firmware.updateDelegate.onFirmwareUpdateTransmitComplete = () => {
                var status = `onFirmwareUpdateTransmitComplete`;
                newStatusText = newStatusText + status + '\n';
                setStatusText(newStatusText);
                console.log(status);
            }

            firmware.updateDelegate.onFirmwareUpdateError = (error) => {
                var status = `onFirmwareUpdateError: ${String(error)}`;
                newStatusText = newStatusText + status + '\n';
                setStatusText(newStatusText);
                console.log(status);
            }

            newStatusText = `Caution : The firmware is being updated. Until the result is displayed, please leave the printer turned on and wait without operating the screen of this device.\n\n`;
            setStatusText(newStatusText);

            if (Platform.OS == 'android' || Platform.OS == 'ios') {
                activateKeepAwake();
            }

            // To disable uploading the information of user device and printer to the Star Micronics server by the .update() method,
            // set the below property to false.
            // StarIO10DiagInfoUpload.instance.isEnabled = false;

            await firmware.update();

            newStatusText =
                newStatusText + `\nFirmware data transmission has been completed. The firmware is being updated. This process may take several minutes.\n\n`

            setStatusText(newStatusText);

            console.log(`Success`);
        }
        catch (error) {
            console.log(`Error: ${String(error)}`);

            newStatusText =
                newStatusText + `Error: ${String(error)}\n\n`

            setStatusText(newStatusText);
        }
        finally {
            await printer.close();
            await printer.dispose();
            
            if (Platform.OS == 'android' || Platform.OS == 'ios') {
                deactivateKeepAwake();
            }
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

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ marginTop: 10 }}>
                    <Pressable
                        style={styles.activeButton}
                        onPress={() => _onPressCheckVersionsButton()
                        }>
                        <Text style={styles.buttonText}>checkVersions()</Text>
                    </Pressable>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Pressable
                        style={styles.activeButton}
                        onPress={() => _onPressUpdateButton()
                        }>
                        <Text style={styles.buttonText}>update()</Text>
                    </Pressable>
                </View>
            </View>
            
            <View style={{ flex: 1, alignSelf: 'stretch', marginTop: 20 }}>
                <ScrollView>
                    <Text>{statusText}</Text>
                </ScrollView>
            </View>
        </View>
    );
};