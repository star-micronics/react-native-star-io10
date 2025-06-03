import React from 'react';
import { useState } from 'react';

import {
    View,
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
    StarXpandCommand,
    StarPrinter
} from 'react-native-star-io10';

export default function App() {

    const [interfaceType, setInterfaceType] = useState(InterfaceType.Lan);
    const [identifier, setIdentifier] = useState("00:11:62:00:00:00");

    async function _onPressPrintButton() {
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
            // TSP100III series and TSP100IIU+ do not support actionPrintText because these products are graphics-only printers.
            // Please use the actionPrintImage method to create printing data for these products.
            // For other available methods, please also refer to "Supported Model" of each method.
            // https://www.star-m.jp/products/s_print/sdk/react-native-star-io10/manual/en/api-reference/star-xpand-command/printer-builder/action-print-image.html
            var builder = new StarXpandCommand.StarXpandCommandBuilder();
            builder.addDocument(new StarXpandCommand.DocumentBuilder()
                // To open a cash drawer, comment out the following code.
                // .addDrawer(new StarXpandCommand.DrawerBuilder()
                //     .actionOpen(new StarXpandCommand.Drawer.OpenParameter())
                // )
                .addPrinter(new StarXpandCommand.PrinterBuilder()
                    .actionPrintImage(new StarXpandCommand.Printer.ImageParameter("logo_01.png", 406))
                    .styleInternationalCharacter(StarXpandCommand.Printer.InternationalCharacterType.Usa)
                    .styleCharacterSpace(0)
                    .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
                    .actionPrintText(
                        "Star Clothing Boutique\n" +
                        "123 Star Road\n" +
                        "City, State 12345\n" +
                        "\n")
                    .styleAlignment(StarXpandCommand.Printer.Alignment.Left)
                    .actionPrintText(
                        "Date:MM/DD/YYYY    Time:HH:MM PM\n" +
                        "--------------------------------\n" +
                        "\n")
                    .actionPrintText(
                        "SKU         Description    Total\n" +
                        "300678566   PLAIN T-SHIRT  10.99\n" +
                        "300692003   BLACK DENIM    29.99\n" +
                        "300651148   BLUE DENIM     29.99\n" +
                        "300642980   STRIPED DRESS  49.99\n" +
                        "300638471   BLACK BOOTS    35.99\n" +
                        "\n" +
                        "Subtotal                  156.95\n" +
                        "Tax                         0.00\n" +
                        "--------------------------------\n")
                    .actionPrintText("Total     ")
                    .add(new StarXpandCommand.PrinterBuilder()
                        .styleMagnification(new StarXpandCommand.MagnificationParameter(2, 2))
                        .actionPrintText("   $156.95\n")
                    )
                    .actionPrintText(
                        "--------------------------------\n" +
                        "\n" +
                        "Charge\n" +
                        "156.95\n" +
                        "Visa XXXX-XXXX-XXXX-0123\n" +
                        "\n")
                    .add(new StarXpandCommand.PrinterBuilder()
                        .styleInvert(true)
                        .actionPrintText("Refunds and Exchanges\n")
                    )
                    .actionPrintText("Within ")
                    .add(new StarXpandCommand.PrinterBuilder()
                        .styleUnderLine(true)
                        .actionPrintText("30 days")
                    )
                    .actionPrintText(" with receipt\n")
                    .actionPrintText("And tags attached\n" +
                        "\n")
                    .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
                    .actionPrintBarcode(new StarXpandCommand.Printer.BarcodeParameter('0123456',
                        StarXpandCommand.Printer.BarcodeSymbology.Jan8)
                        .setBarDots(3)
                        .setBarRatioLevel(StarXpandCommand.Printer.BarcodeBarRatioLevel.Level0)
                        .setHeight(5)
                        .setPrintHri(true))
                    .actionFeedLine(1)
                    .actionPrintQRCode(new StarXpandCommand.Printer.QRCodeParameter('Hello World.\n')
                        .setModel(StarXpandCommand.Printer.QRCodeModel.Model2)
                        .setLevel(StarXpandCommand.Printer.QRCodeLevel.L)
                        .setCellSize(8))
                    .actionCut(StarXpandCommand.Printer.CutType.Partial)
                )
            );

            var commands = await builder.getCommands();

            await printer.open();
            await printer.print(commands);

            console.log(`Success`);
        }
        catch (error) {
            console.log(`Error: ${String(error)}`);
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
                    onPress={() => _onPressPrintButton()
                    }>
                    <Text style={styles.buttonText}>Print</Text>
                </Pressable>
            </View>
        </View>
    );
};