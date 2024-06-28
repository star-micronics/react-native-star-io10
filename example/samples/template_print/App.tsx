import React from 'react';
import { useState } from 'react';

import {
    View,
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
    StarXpandCommand,
    StarPrinter
} from 'react-native-star-io10';

export default function App() {
    const [interfaceType, setInterfaceType] = useState(InterfaceType.Lan);
    const [identifier, setIdentifier] = useState("00:11:62:00:00:00");
    const [templateIndex, setTemplateIndex] = useState(0);
    const [fieldDataIndex, setFieldDataIndex] = useState(0);

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

        var template;
        var fieldData;

        if (templateIndex == 0) {      // Template: Receipt w/ specifying number of characters
            template = await _createReceiptWithSpecifyingNumberOfCharactersTemplate();

            if (fieldDataIndex == 0) { // Field Data: Receipt1
                fieldData = RECEIPT1_FIELD_DATA;
            }
            else {                                // Field Data: Receipt2
                fieldData = RECEIPT2_FIELD_DATA;
            }
        }
        else if (templateIndex == 1) { // Template: Receipt w/o specifying number of characters
            template = await _createReceiptWithoutSpecifyingNumberOfCharactersTemplate();

            if (fieldDataIndex == 0) { // Field Data: Receipt1
                fieldData = RECEIPT1_FIELD_DATA;
            }
            else {                                // Field Data: Receipt3
                fieldData = RECEIPT3_FIELD_DATA;
            }
        }
        else {                                    // Template: Label
            template = await _createLabelTemplate();

            if (fieldDataIndex == 0) { // Field Data: Label1
                fieldData = LABEL1_FIELD_DATA;
            }
            else {                                // Field Data: Label2
                fieldData = LABEL2_FIELD_DATA;
            }
        }

        printer.template = template;

        try {
            await printer.open();
            await printer.print(fieldData);

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

    async function _createReceiptWithSpecifyingNumberOfCharactersTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
            .settingPrintableArea(48.0)
            .addPrinter(new StarXpandCommand.PrinterBuilder()
                .actionPrintImage(new StarXpandCommand.Printer.ImageParameter("logo_01.png", 406))
                .styleInternationalCharacter(StarXpandCommand.Printer.InternationalCharacterType.Usa)
                .styleCharacterSpace(0.0)
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
                        .styleBold(true)
                        .styleInvert(true)
                        .styleMagnification(new StarXpandCommand.MagnificationParameter(2, 2))
                        .actionPrintText("${store_name}\n")
                )
                .actionFeed(1.0)
                .actionPrintText(
                    "Order ${order_number}",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            16
                        )
                )
                .actionPrintText(" ")
                .actionPrintText(
                    "${time}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            15,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                                .setEllipsizeType(StarXpandCommand.Printer.TextEllipsizeType.End)
                        )
                )
                .actionPrintText(
                    "Sale for ${sales_type}",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(16)
                )
                .actionPrintText(" ")
                .actionPrintText(
                    "Served by ${server}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            15,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                                .setEllipsizeType(StarXpandCommand.Printer.TextEllipsizeType.End)
                        )
                )
                .actionPrintText(
                    "Transaction #${transaction_id}\n"
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .add(
                    new StarXpandCommand.PrinterBuilder(
                        new StarXpandCommand.Printer.PrinterParameter()
                            .setTemplateExtension(
                                new StarXpandCommand.TemplateExtensionParameter()
                                    .setEnableArrayFieldData(true)
                            )
                    )
                        .actionPrintText(
                            "${item_list.quantity}",
                            new StarXpandCommand.Printer.TextParameter()
                                .setWidth(2)
                        )
                        .actionPrintText(
                            "${item_list.name}",
                            new StarXpandCommand.Printer.TextParameter()
                                .setWidth(24)
                        )
                        .actionPrintText(
                            "${item_list.unit_price%6.2lf}\n",
                            new StarXpandCommand.Printer.TextParameter()
                                .setWidth(6)
                        )
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionPrintText(
                    "Subtotal",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(26)
                )
                .actionPrintText(
                    "${subtotal%6.2lf}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            6,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setEllipsizeType(StarXpandCommand.Printer.TextEllipsizeType.End)
                        )
                )
                .actionPrintText(
                    "Tax",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(26)
                )
                .actionPrintText(
                    "${tax%6.2lf}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            6,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setEllipsizeType(StarXpandCommand.Printer.TextEllipsizeType.End)
                        )
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleBold(true)
                        .actionPrintText(
                            "Total",
                            new StarXpandCommand.Printer.TextParameter()
                                .setWidth(26)
                        )
                        .actionPrintText(
                            "${total%6.2lf}\n",
                            new StarXpandCommand.Printer.TextParameter()
                                .setWidth(
                                    6,
                                    new StarXpandCommand.Printer.TextWidthParameter()
                                        .setEllipsizeType(StarXpandCommand.Printer.TextEllipsizeType.End)
                                )
                        )
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionPrintText(
                    "${credit_card_number}",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(26)
                )
                .actionPrintText(
                    "${total%6.2lf}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            6,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setEllipsizeType(StarXpandCommand.Printer.TextEllipsizeType.End)
                        )
                )
                .actionPrintText(
                    "Approval Code",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(16)
                )
                .actionPrintText(
                    "${approval_code}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            16,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                        )
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionPrintText(
                    "Amount",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(26)
                )
                .actionPrintText(
                    "${amount%6.2lf}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            6,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setEllipsizeType(StarXpandCommand.Printer.TextEllipsizeType.End)
                        )
                )
                .actionPrintText(
                    "Total",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(26)
                )
                .actionPrintText(
                    "${total%6.2lf}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            6,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setEllipsizeType(StarXpandCommand.Printer.TextEllipsizeType.End)
                        )
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionPrintText(
                    "Signature\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
                        .actionPrintImage(
                            new StarXpandCommand.Printer.ImageParameter("signature.png", 256)
                        )
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(32.0)
                        .setX(8.0)
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionPrintText("\n")
                .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
                .actionPrintText(
                    "${address}\n"
                )
                .actionPrintText(
                    "${tel}\n"
                )
                .actionPrintText(
                    "${mail}\n"
                )
                .actionFeed(1.0)
                .actionPrintText(
                    "${url}\n"
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionFeed(2.0)
                .actionPrintText(
                    "Powered by Star Micronics\n"
                )
                .actionPrintBarcode(
                    new StarXpandCommand.Printer.BarcodeParameter("${transaction_id}", StarXpandCommand.Printer.BarcodeSymbology.Code128)
                        .setPrintHri(true)
                )
                .actionCut(StarXpandCommand.Printer.CutType.Partial)
            )
        );

        return builder.getCommands();
    }

    async function _createReceiptWithoutSpecifyingNumberOfCharactersTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
            .settingPrintableArea(48.0)
            .addPrinter(new StarXpandCommand.PrinterBuilder()
                .actionPrintImage(new StarXpandCommand.Printer.ImageParameter("logo_01.png", 406))
                .styleInternationalCharacter(StarXpandCommand.Printer.InternationalCharacterType.Usa)
                .styleCharacterSpace(0.0)
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
                        .styleBold(true)
                        .styleInvert(true)
                        .styleMagnification(new StarXpandCommand.MagnificationParameter(2, 2))
                        .actionPrintText("${store_name}\n")
                )
                .actionFeed(1.0)
                .styleHorizontalTabPositions([17])
                .actionPrintText(
                    "Order ${order_number}\t${time}\n"
                )
                .actionPrintText(
                    "Sale for ${sales_type}\tServed by ${server}\n"
                )
                .actionPrintText(
                    "Transaction #${transaction_id}\n"
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .add(
                    new StarXpandCommand.PrinterBuilder(
                        new StarXpandCommand.Printer.PrinterParameter()
                            .setTemplateExtension(
                                new StarXpandCommand.TemplateExtensionParameter()
                                    .setEnableArrayFieldData(true)
                            )
                    )
                        .styleHorizontalTabPositions([2, 26])
                        .actionPrintText(
                            "${item_list.quantity}\t${item_list.name}\t${item_list.unit_price%6.2lf}\n"
                        )
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .styleHorizontalTabPositions([26])
                .actionPrintText(
                    "Subtotal\t${subtotal%6.2lf}\n"
                )
                .actionPrintText(
                    "Tax\t${tax%6.2lf}\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleBold(true)
                        .actionPrintText(
                            "Total\t${total%6.2lf}\n"
                        )
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionPrintText(
                    "${credit_card_number}\t${total%6.2lf}\n"
                )
                .actionPrintText(
                    "Approval Code\t${approval_code}\n"
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionPrintText(
                    "Amount\t${amount%6.2lf}\n"
                )
                .actionPrintText(
                    "Total\t${total%6.2lf}\n"
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionPrintText(
                    "Signature\n"
                )
                .add(
                    new StarXpandCommand.PrinterBuilder()
                        .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
                        .actionPrintImage(
                            new StarXpandCommand.Printer.ImageParameter("signature.png", 256)
                        )
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(32.0)
                        .setX(8.0)
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionPrintText("\n")
                .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
                .actionPrintText(
                    "${address}\n"
                )
                .actionPrintText(
                    "${tel}\n"
                )
                .actionPrintText(
                    "${mail}\n"
                )
                .actionFeed(1.0)
                .actionPrintText(
                    "${url}\n"
                )
                .actionPrintRuledLine(
                    new StarXpandCommand.Printer.RuledLineParameter(48.0)
                )
                .actionFeed(2.0)
                .actionPrintText(
                    "Powered by Star Micronics\n"
                )
                .actionPrintBarcode(
                    new StarXpandCommand.Printer.BarcodeParameter("${transaction_id}", StarXpandCommand.Printer.BarcodeSymbology.Code128)
                        .setPrintHri(true)
                )
                .actionCut(StarXpandCommand.Printer.CutType.Partial)
            )
        );

        return builder.getCommands();
    }

    async function _createLabelTemplate(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(
            new StarXpandCommand.DocumentBuilder()
                .addPrinter(new StarXpandCommand.PrinterBuilder()
                    .addPageMode(
                        new StarXpandCommand.Printer.PageModeAreaParameter(48.0, 30.0),
                        new StarXpandCommand.PageModeBuilder()
                            .styleHorizontalPositionTo(4.0)
                            .actionPrintText("${item_name}\n")
                            .styleVerticalPositionTo(6.0)
                            .actionPrintBarcode(
                                new StarXpandCommand.Printer.BarcodeParameter("${sku}", StarXpandCommand.Printer.BarcodeSymbology.Ean13)
                                    .setHeight(5.0)
                                    .setPrintHri(true)
                            )
                            .add(
                                new StarXpandCommand.PageModeBuilder()
                                    .styleFont(StarXpandCommand.Printer.FontType.B)
                                    .styleVerticalPositionTo(0.0)
                                    .styleHorizontalPositionTo(34.0)
                                    .actionPrintText("EUR")
                                    .styleVerticalPositionTo(0.0)
                                    .styleHorizontalPositionTo(43.0)
                                    .actionPrintText("UK")
                            )
                            .add(
                                new StarXpandCommand.PageModeBuilder()
                                    .styleMagnification(new StarXpandCommand.MagnificationParameter(2, 2))
                                    .stylePrintDirection(StarXpandCommand.Printer.PageModePrintDirection.BottomToTop)
                                    .styleVerticalPositionTo(35.0)
                                    .styleHorizontalPositionTo(5.0)
                                    .actionPrintText("${price_eur%.2lf}")
                                    .styleVerticalPositionTo(43.0)
                                    .styleHorizontalPositionTo(5.0)
                                    .actionPrintText("${price_gbp%.2lf}")
                            )
                            .addPageMode(
                                new StarXpandCommand.Printer.PageModeAreaParameter(32.0, 15.0)
                                    .setY(15.0),
                                new StarXpandCommand.PageModeBuilder()
                                    .actionPrintText("${maker_information}")
                            )
                    )
                    .actionCut(StarXpandCommand.Printer.CutType.Partial)
                )
        );

        return builder.getCommands();
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

    const RECEIPT1_FIELD_DATA = `
    {
        "store_name" : "   Star Cafe   ",
        "order_number" : "#2-007",
        "time" : "10/16 11:13PM",
        "sales_type" : "Walk-in",
        "server" : "Jane",
        "transaction_id" : "0123456789",
        "item_list" : [
            {
                "name" : "Vanilla Latte",
                "unit_price" : 4.99,
                "quantity" : 1
            },
            {
                "name" : "Chocolate Chip Cookie",
                "unit_price" : 3.25,
                "quantity" : 1
            }
        ],
        "subtotal" : 8.24,
        "tax" : 0.73,
        "total" : 8.97,
        "credit_card_number" : "VISA 0123",
        "approval_code" : "OK2443",
        "amount" : 8.97,
        "address" : "123 Star Road, City,\\nState 12345",
        "tel" : "123-456-7890",
        "mail" : "info@star-m.jp",
        "url" : "star-m.jp"
    }`;

    const RECEIPT2_FIELD_DATA = `
    {
        "store_name" : "   Star Cafe   ",
        "order_number" : "#2-008",
        "time" : "02/09 12:40PM",
        "sales_type" : "Takeout",
        "server" : "Jessica",
        "transaction_id" : "0111111111",
        "item_list" : [
            {
                "name" : "Vanilla Latte with caramel sauce",
                "unit_price" : 5.99,
                "quantity" : 1
            },
            {
                "name" : "Star's Homemade Chocolate Chip Cookie",
                "unit_price" : 4.99,
                "quantity" : 1
            }
        ],
        "subtotal" : 10.98,
        "tax" : 0.97,
        "total" : 11.95,
        "credit_card_number" : "VISA 0456",
        "approval_code" : "OK5667",
        "amount" : 11.95,
        "address" : "123 Star Road, City,\\nState 12345",
        "tel" : "123-456-7890",
        "mail" : "info@star-m.jp",
        "url" : "star-m.jp"
    }`;

    const RECEIPT3_FIELD_DATA = `
    {
        "store_name" : "   Star Cafe   ",
        "order_number" : "#2-009",
        "time" : "05/23 10:10AM",
        "sales_type" : "Takeout",
        "server" : "James",
        "transaction_id" : "0222222222",
        "item_list" : [
            {
                "name" : "Chai Tea Latte",
                "unit_price" : 5.49,
                "quantity" : 1
            },
            {
                "name" : "Americano",
                "unit_price" : 2.99,
                "quantity" : 3
            },
            {
                "name" : "Orange Juice",
                "unit_price" : 3.99,
                "quantity" : 1
            },
            {
                "name" : "Shortbread Cookies",
                "unit_price" : 3.49,
                "quantity" : 2
            },
            {
                "name" : "Chocolate Brownie",
                "unit_price" : 4.49,
                "quantity" : 3
            }
        ],
        "subtotal" : 38.9,
        "tax" : 3.45,
        "total" : 42.35,
        "credit_card_number" : "VISA 0789",
        "approval_code" : "OK7889",
        "amount" : 42.35,
        "address" : "123 Star Road, City,\\nState 12345",
        "tel" : "123-456-7890",
        "mail" : "info@star-m.jp",
        "url" : "star-m.jp"
    }`;

    const LABEL1_FIELD_DATA = `
    {
        "item_name" : "T-Shirt",
        "sku" : "012345678901",
        "maker_information" : "Star Clothing: 123 Star Road, City, State 12345",
        "price_eur" : 28.9,
        "price_gbp" : 22.0
    }`;

    const LABEL2_FIELD_DATA = `
    {
        "item_name" : "Necklace",
        "sku" : "111111111111",
        "maker_information" : "Star Accessories: 456 Star Avenue, City, State 11111",
        "price_eur" : 130.0,
        "price_gbp" : 110.0
    }`;
    
    return (
            <View style={{ flex: 1, marginLeft: 20, marginRight: 20, marginTop: 50, marginBottom: 50 }}>

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

                <View style={{ height: 150, flexDirection: 'column', marginTop: 30 }}>
                    <Text style={{ height: 30 }}>Template</Text>
                    <View style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <CheckBox
                                value={
                                    templateIndex == 0
                                }
                                onValueChange={(isChecked: boolean) => {
                                    if (isChecked) {
                                        setTemplateIndex(0);
                                        setFieldDataIndex(0);
                                    }
                                }}
                            />
                            <Text style={{ marginLeft: 20 }}>Receipt w/ specifying number of characters</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <CheckBox
                                value={
                                    templateIndex == 1
                                }
                                onValueChange={(isChecked: boolean) => {
                                    if (isChecked) {
                                        setTemplateIndex(1);
                                        setFieldDataIndex(0);
                                    }
                                }}
                            />
                            <Text style={{ marginLeft: 20 }}>Receipt w/o specifying number of characters</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <CheckBox
                                value={
                                    templateIndex == 2
                                }
                                onValueChange={(isChecked: boolean) => {
                                    if (isChecked) {
                                        setTemplateIndex(2);
                                        setFieldDataIndex(0);
                                    }
                                }}
                            />
                            <Text style={{ marginLeft: 20 }}>Label</Text>
                        </View>
                    </View>
                </View>

                <View style={{ height: 120, flexDirection: 'column', marginTop: 30 }}>
                    <Text style={{ height: 30 }}>Field Data</Text>
                    <View style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <CheckBox
                                value={
                                    fieldDataIndex == 0
                                }
                                onValueChange={(isChecked: boolean) => {
                                    if (isChecked) {
                                        setFieldDataIndex(0);
                                    }
                                }}
                            />
                            {
                                (() => {
                                    switch (templateIndex) {
                                        case 0: // Receipt w/ specifying number of characters
                                            return <Text style={{ marginLeft: 20 }}>Receipt1</Text>;
                                        case 1: // Receipt w/o specifying number of characters
                                            return <Text style={{ marginLeft: 20 }}>Receipt1</Text>;
                                        case 2: // Label
                                            return <Text style={{ marginLeft: 20 }}>Label1</Text>;
                                    }
                                })()
                            }
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <CheckBox
                                value={
                                    fieldDataIndex == 1
                                }
                                onValueChange={(isChecked: boolean) => {
                                    if (isChecked) {
                                        setFieldDataIndex(1);
                                    }
                                }}
                            />
                            {
                                (() => {
                                    switch (templateIndex) {
                                        case 0: // Receipt w/ specifying number of characters
                                            return <Text style={{ marginLeft: 20 }}>Receipt2</Text>;
                                        case 1: // Receipt w/o specifying number of characters
                                            return <Text style={{ marginLeft: 20 }}>Receipt3</Text>;
                                        case 2: // Label
                                            return <Text style={{ marginLeft: 20 }}>Label2</Text>;
                                    }
                                })()
                            }
                        </View>
                    </View>
                </View>

                <View style={{ width: 100, marginTop: 20 }}>
                    <Button
                        title="Print"
                        onPress={_onPressPrintButton}
                    />
                </View>
            </View>
    );
};