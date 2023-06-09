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

## Documentation

Please refer [here](https://www.star-m.jp/react-native-stario10-oml.html) for StarXpand SDK documentation.

Documentation includes an overview of the SDK, how to build a sample application, how to use the API, and a API reference.

## Requirements

| Platform | Version | Arch |
| --- | --- | --- |
| iOS | iOS 12.0 or later | Device: arm64<br> Simulator: x86_64, arm64 |
| Android | Android 6.0 or later | arm64-v8a, armeabi-v7a, x86, x86_64 |
| Windows | Windows 11 / Windows 10 1909 or later | x86, x64 |

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

Refer to [sample code](example/samples) and request BLUETOOTH_CONNECT permission before starting to communicate with or search for the printer.

### Windows

- Add Capability in `Package.appxmanifest`.
  - Bluetooth
  - Internet (Client)
  - Private Networks (Client & Server)
- Add "Visual C++ 2015-2019 UWP Desktop Runtime for native apps" to the project "References".

## Limitations 
### When using Android device, an image specified by URL is sometimes printed in a low resolution

In Android, when an image file size is large, and its URL is specified as the source of the ImageParameter which is the argument of the actionPrintImage method, the image may be printed in low resolution. 

This can be solved by either of the following methods: 

- Reduce a file size of an image by lowering the resolution beforehand. 
- Download an image in the app and specify the image file directly as the source. 

## Examples

StarXpand SDK includes an [example](example) application that can be used in combination with the printer to check its operation. Please use it in conjunction with the explanations of each function in the linked pages.

#### 1. [Discover printers](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/en/searchPrinter.html)

#### 2. [Create printing data](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/en/basic-step1.html)

Printing samples of labels (sample code and print results) for each type of business that you can use for your print layouts are [also available](example/samples/printing_samples/PrintingSamples.md).

> :warning: Some printer models may not be able to print some samples. Please adjust the layout accordingly when using this samples.

#### 3. [Send printing data](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/en/basic-step2.html)

#### 4. [Send printing data using spooler function](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/en/spooler.html)

#### 5. [Get printer status](#GetPrinterStatus)

#### 6. [Monitor printer](#MonitorPrinter)

<a id="GetPrinterStatus"></a>
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

<a id="MonitorPrinter"></a>
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

## Copyright

Copyright 2021 Star Micronics Co., Ltd. All rights reserved.
