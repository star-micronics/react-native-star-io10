<p align="center">
  <img
    src="docs/logo.png"
    width="600"
    style="margin-top: 20px; margin-bottom: 20px;"
  />
</p>

- [日本語](docs/README_JP.md)

# react-native-star-io10

`react-native-star-io10` is a library for supporting application development for Star Micronics devices.

This library is included in StarXpand SDK.

## Requirements

| Platform | Version | Arch |
| --- | --- | --- |
| iOS | iOS 12.0 or later | Device: arm64<br> Simulator: x86_64, arm64 |
| Android | Android 6.0 or later | arm64-v8a, armeabi-v7a, x86, x86_64 |
| Windows | Windows 10 1909 or later | x86, x64 |

## Installation

```
npm install react-native-star-io10 --save
```

### iOS
Some settings and approvals are required depending on the printer interface.  
Please check the table below and take action.

| Interface of the printer  | Necessary actions                                                                       |
|---------------------------|-----------------------------------------------------------------------------------------|
| Bluetooth                 | [1.](#SupportedEAProtocols) & [2.](#BluetoothAlwaysUsageDescription) & [4.](#MFi) |
| Bluetooth Low Energy      | [2.](#BluetoothAlwaysUsageDescription)                                                |
| Ethernet (iOS14 or later) | [3.](#LocalNetworkUsageDescription)                                                   |
| Lightning USB             | [1.](#SupportedEAProtocols) & [4.](#MFi)                                            |

<a id="SupportedEAProtocols"></a>
#### 1. Set `Supported external accessory protocols` 

1. Click on the information property list file (default : “Info.plist”).
2. Add the `Supported external accessory protocols` Key.
3. Click the triangle of this key and set the value for the “Item 0” to `jp.star-m.starpro`.

> :warning: If you do not use the printer concerned, do not configure this setting.

<a id="BluetoothAlwaysUsageDescription"></a>
#### 2. Set `Bluetooth Always Usage Description` and `Bluetooth Peripheral Usage Description`

1. Click on the information property list file (default : “Info.plist”).
2. Add the `Privacy – Bluetooth Always Usage Description` Key.
3. If you set `Deployment Target` to iOS12, add the `Privacy – Bluetooth Peripheral Usage Description` Key.
4. Set the reason for using Bluetooth in Value (e.g. `Use Bluetooth for communication with the printer.`)
5. When communicating with the Bluetooth printer on iOS 13 or later, an alert requesting permission to access Bluetooth is displayed. The string set in Value is displayed in the alert as the reason for using Bluetooth.

For more information, please refer to the following URL.

https://developer.apple.com/documentation/bundleresources/information_property_list/nsbluetoothperipheralusagedescription

<a id="LocalNetworkUsageDescription"></a>
#### 3. Set `Local Network Usage Description`

1. Click on the information property list file (default : “Info.plist”).
2. Add the `Privacy - Local Network Usage Description` Key.
3. Set the reason for using Local Network in Value (e.g. `Use Local Network for communication with the printer or discovery the printers.`)
4. When communicating with the Ethernet printer on iOS 14 or later, an alert requesting permission to access Local Network is displayed. The string set in Value is displayed in the alert as the reason for using Local Network.

<a id="MFi"></a>
#### 4. Apple Approval Process for STAR MFi Applications

In order to offer your application that communicates a MFi certified printer on the Apple iTunes App Store, your application needs to be approved by the Apple MFi program before you submit it to the Apple iTunes App Store. Please follow the steps described in the URL below to obtain the app approval. This procedure must be completed before the app is reviewed by Apple.

https://star-m.jp/eng/products/s_print/apple_app_mfi.html

> :warning: In case of a Bluetooth Low Energy printer, you do not need to obtain this app approval.

### Android
#### In case of setting targetSdkVersion to 31 or later
Refer to [sample code](example/samples) and request BLUETOOTH_CONNECT permission before starting to communicate with or search for the printer.

#### In case of setting targetSdkVersion to 30 or earlier
The `react-native-star-io10` library contains the BLUETOOTH_CONNECT permission, which was added at API level 31. Please make the following two settings in AndroidManifest.xml to remove the BLUETOOTH_CONNECT permission.

* Add the `xmlns:tools="http://schemas.android.com/tools"` attribute to the `manifest` element.
* Add the `<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" tools:node="remove"/>` element.

```xml
<manifest
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.starmicronics.starxpandsdk">

    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" tools:node="remove"/>
    ...
</manifest>
```

### Windows

- Add Capability in `Package.appxmanifest`.
  - Bluetooth
  - Internet (Client)
  - Private Networks (Client & Server)
- Add "Visual C++ 2015-2019 UWP Desktop Runtime for native apps" to the project "References".

## Documentation

[Please refer here.](https://www.star-m.jp/react-native-stario10-oml.html)

## Limitations 

### When using Android device, an image specified by URL is sometimes printed in a low resolution

In Android, when an image file size is large, and its URL is specified as the source of the ImageParameter which is the argument of the actionPrintImage method, the image may be printed in low resolution. 

This can be solved by either of the following methods: 

- Reduce a file size of an image by lowering the resolution beforehand. 
- Download an image in the app and specify the image file directly as the source. 

## Examples

### Discover devices

```typescript
manager: StarDeviceDiscoveryManager;

async discover(): Promise<void> {
    try {
        // Specify your printer interface types.
        manager = await StarDeviceDiscoveryManagerFactory.create([
            InterfaceType.Lan,
            InterfaceType.Bluetooth,
            InterfaceType.BluetoothLE,
            InterfaceType.Usb
        ]);

        // Set discovery time. (option)
        manager.discoveryTime = 10000;

        // Callback for printer found.
        manager.onPrinterFound = (printer: StarPrinter) => {
            console.log(printer);
        };

        // Callback for discovery finished. (option)
        manager.onDiscoveryFinished = () => {
            console.log(`Discovery finished.`);
        };

        // Start discovery.
        await manager.startDiscovery();

        // Stop discovery.
        // await manager.stopDiscovery()
    }
    catch(error) {
        // Error.
        console.log(error);
    }
}
```

### Print

```typescript
async print(): Promise<void> {
    // Specify your printer connection settings.
    var settings = new StarConnectionSettings();
    settings.interfaceType = InterfaceType.Lan;
    settings.identifier = '00:11:62:00:00:00';
    var printer = new StarPrinter(settings);

    try {
        // Connect to the printer.
        await printer.open();

        // create printing data. (Please refer to 'Create Printing data')
        var builder = new StarXpandCommand.StarXpandCommandBuilder();
        // ...
        var commands = await builder.getCommands();

        // Print.
        await printer.print(commands);
    }
    catch(error) {
        // Error.
        console.log(error);
    }
    finally {
        // Disconnect from the printer and dispose object.
        await printer.close();
        await printer.dispose();
    }
}
```

### Create printing data

```typescript
// Create printing data using StarXpandCommandBuilder object.
var builder = new StarXpandCommand.StarXpandCommandBuilder();
builder.addDocument(new StarXpandCommand.DocumentBuilder()
.addPrinter(new StarXpandCommand.PrinterBuilder()
    .actionPrintImage(new StarXpandCommand.Printer.ImageParameter("logo_01.png", 406))
    .styleInternationalCharacter(StarXpandCommand.Printer.InternationalCharacterType.Usa)
    .styleCharacterSpace(0)
    .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
    .actionPrintText("Star Clothing Boutique\n" +
                    "123 Star Road\n" +
                    "City, State 12345\n" +
                    "\n")
    .styleAlignment(StarXpandCommand.Printer.Alignment.Left)
    .actionPrintText("Date:MM/DD/YYYY    Time:HH:MM PM\n" +
                    "--------------------------------\n" +
                    "\n")
    .actionPrintText("SKU         Description    Total\n" +
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
    .actionPrintText("--------------------------------\n" +
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

// Get printing data from StarXpandCommandBuilder object.
var commands = await builder.getCommands();
```

### Get printer status

```typescript
async getStatus(): Promise<void> {
    // Specify your printer connection settings.
    var settings = new StarConnectionSettings();
    settings.interfaceType = InterfaceType.Lan;
    settings.identifier = '00:11:62:00:00:00';
    var printer = new StarPrinter(settings);

    try {
        // Connect to the printer.
        await printer.open();

        // Get printer status.
        var status = await printer.getStatus();
        console.log(status);
    }
    catch(error) {
        // Error.
        console.log(error);
    }
    finally {
        // Disconnect from the printer and dispose object.
        await printer.close();
        await printer.dispose();
    }
}
```

### Monitor printer

```typescript
printer: StarPrinter;

async monitor(): Promise<void> {
    // Specify your printer connection settings.
    var settings = new StarConnectionSettings();
    settings.interfaceType = InterfaceType.Lan;
    settings.identifier = '00:11:62:00:00:00';
    printer = new StarPrinter(settings);

    // Callback for printer state changed.
    printer.printerDelegate.onReady = () => {
        console.log(`Printer: Ready`);
    }
    printer.drawerDelegate.onOpenCloseSignalSwitched = (openCloseSignal) => {
        console.log(`Drawer: Open Close Signal Switched: ${String(openCloseSignal)}`);
    }
    printer.inputDeviceDelegate.onDataReceived = (data) => {
        console.log(`Input Device: DataReceived ${String(data)}`);
    }
    printer.displayDelegate.onConnected = () => {
        console.log(`Display: Connected`);
    }
    // ...
    // Please refer to document for other callback.

    try {
        // Connect to the printer.
        await printer.open();
    }
    catch(error) {
        // Error.
        console.log(error);
    }
}
```

- [`example` project is located in this directory.](example)

## Copyright

Copyright 2021 Star Micronics Co., Ltd. All rights reserved.
