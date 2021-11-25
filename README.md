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

- Add key and value in `info.plist`.
  - NSBluetoothAlwaysUsageDescription (iOS 13.0 or later)
  - NSLocalNetworkUsageDescription (iOS 14.0 or later)
  - UISupportedExternalAccessoryProtocols (Add the following value to the array)
    - `jp.star-m.starpro`

### Android

#### In case of setting targetSdkVersion to 31 or later

- Refer to [sample code](example/samples) and request BLUETOOTH_CONNECT permission before starting to communicate with or search for the printer.

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
