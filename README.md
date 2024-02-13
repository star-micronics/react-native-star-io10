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
| iOS | iOS 13.0 or later | Device: arm64<br> Simulator: x86_64, arm64 |
| Android | Android 9.0 or later | arm64-v8a, armeabi-v7a, x86, x86_64 |
| Windows | Windows 11 / Windows 10 22H2 | x86, x64 |

## Installation

```
npm install react-native-star-io10 --save
```

### iOS
#### Privacy manifest file
In accordance with Apple's guidelines, `react-native-star-io10` V1.6.0 or later includes a privacy manifest file. Please see [here](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files) for the Manifest file.
However, `react-native-star-io10` does not use the Required Reason API from the first release. (As of January 29, 2024)

#### Some settings and approvals are required depending on the printer interface
Please check the table below and take action.

| Interface of the printer  | Necessary actions                                                                       |
|---------------------------|-----------------------------------------------------------------------------------------|
| Bluetooth                 | [1.](#SupportedEAProtocols) & [2.](#BluetoothAlwaysUsageDescription) & [4.](#MFi) |
| Bluetooth Low Energy      | [2.](#BluetoothAlwaysUsageDescription)                                                |
| Ethernet (iOS14 or later) | [3.](#LocalNetworkUsageDescription)                                                   |
| Lightning USB             | [1.](#SupportedEAProtocols) & [4.](#MFi)                                            |

<a id="SupportedEAProtocols"></a>
##### 1. Set `Supported external accessory protocols` 

1. Click on the information property list file (default : “Info.plist”).
2. Add the `Supported external accessory protocols` Key.
3. Click the triangle of this key and set the value for the “Item 0” to `jp.star-m.starpro`.

> :warning: If you do not use the printer concerned, do not configure this setting.

<a id="BluetoothAlwaysUsageDescription"></a>
##### 2. Set `Bluetooth Always Usage Description` and `Bluetooth Peripheral Usage Description`

1. Click on the information property list file (default : “Info.plist”).
2. Add the `Privacy – Bluetooth Always Usage Description` Key.
3. If you set `Deployment Target` to iOS12, add the `Privacy – Bluetooth Peripheral Usage Description` Key.
4. Set the reason for using Bluetooth in Value (e.g. `Use Bluetooth for communication with the printer.`)
5. When communicating with the Bluetooth printer on iOS 13 or later, an alert requesting permission to access Bluetooth is displayed. The string set in Value is displayed in the alert as the reason for using Bluetooth.

For more information, please refer to the following URL.

https://developer.apple.com/documentation/bundleresources/information_property_list/nsbluetoothperipheralusagedescription

<a id="LocalNetworkUsageDescription"></a>
##### 3. Set `Local Network Usage Description`

1. Click on the information property list file (default : “Info.plist”).
2. Add the `Privacy - Local Network Usage Description` Key.
3. Set the reason for using Local Network in Value (e.g. `Use Local Network for communication with the printer or discovery the printers.`)
4. When communicating with the Ethernet printer on iOS 14 or later, an alert requesting permission to access Local Network is displayed. The string set in Value is displayed in the alert as the reason for using Local Network.

<a id="MFi"></a>
##### 4. Apple Approval Process for STAR MFi Applications

In order to offer your application that communicates a MFi certified printer on the Apple iTunes App Store, your application needs to be approved by the Apple MFi program before you submit it to the Apple iTunes App Store. Please follow the steps described in the URL below to obtain the app approval. This procedure must be completed before the app is reviewed by Apple.

https://star-m.jp/eng/products/s_print/apple_app_mfi.html

> :warning: In case of a Bluetooth Low Energy printer, you do not need to obtain this app approval.

### Android
#### 1. Add settings for library dependencies

Add the following configuration to the build.gradle of the app module of the app you wish to embed, which refers to the local Maven repository.

```gradle
allprojects {
    repositories {
        flatDir {
            dirs "$rootDir/../node_modules/react-native-star-io10/android/src/lib"
        }
    }
}
```

#### 2. When using a Bluetooth printer 

Refer to [sample code](example/samples) and request BLUETOOTH_CONNECT permission before starting to communicate with or search for the printer.

#### 3. To prevent the connection permission dialog from being displayed every time the USB cable is plugged in or unplugged

When communicating with a USB printer, a dialog box will appear asking for connection permission. This permission is reset when the USB cable is plugged in or unplugged (including when the printer is turned on or off).

If you do not want to display the connection permission dialog every time the USB cable is plugged in or unplugged, configure the following settings. This setting will also allow the application to start automatically when the USB cable is plugged.

##### 2.1. Add settings to AndroidManifest.xml
Add the following `<intent-filter>` and `<meta-data>` elements to AndroidManifest.xml.

```xml
<intent-filter>
    <action android:name="android.hardware.usb.action.USB_DEVICE_ATTACHED" />
    <action android:name="android.hardware.usb.action.USB_ACCESSORY_ATTACHED" />
</intent-filter>

<meta-data android:name="android.hardware.usb.action.USB_DEVICE_ATTACHED" android:resource="@xml/device_filter" />
<meta-data android:name="android.hardware.usb.action.USB_ACCESSORY_ATTACHED" android:resource="@xml/accessory_filter" />
```

##### 2.2. Add a resource file
Store the following resource files under `res/xml` with the names `device_filter.xml` and `accessory_filter.xml`.

- device_filter.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <usb-device class="255" subclass="66" protocol="1" />

    <usb-device vendor-id="1305" product-id="0003" />   <!--TSP100IIU+/IIIU/IV/IV SK-->
    <usb-device vendor-id="1305" product-id="0071" />   <!--mC-Print3-->
    <usb-device vendor-id="1305" product-id="0073" />   <!--mC-Print2-->
    <usb-device vendor-id="1305" product-id="0025" />   <!--mC-Label3-->
    <usb-device vendor-id="1305" product-id="0023" />   <!--mPOP-->
    <usb-device vendor-id="1305" product-id="0001" />   <!--TSP650II/TSP650II SK/TSP700II/TSP800II/SP700/TUP500-->
    <usb-device vendor-id="1305" product-id="0011" />   <!--BSC10-->
    <usb-device vendor-id="1305" product-id="0015" />   <!--TSP043-->
    <usb-device vendor-id="1305" product-id="0017" />   <!--BSC10BR-->
    <usb-device vendor-id="1305" product-id="0075" />   <!--SK1-211/221/V211-->
    <usb-device vendor-id="1305" product-id="0077" />   <!--SK1-311/321/V311-->
    <usb-device vendor-id="1305" product-id="0067" />   <!--SM-S230i-->

</resources>
```

- accessory_filter.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <usb-accessory model="Star TSP143IV-UE" manufacturer="STAR"/>
    <usb-accessory model="Star TSP143IV-UE SK" manufacturer="STAR"/>
    <usb-accessory model="mC-Print3" manufacturer="Star Micronics"/>
    <usb-accessory model="mC-Label3" manufacturer="Star Micronics"/>
    <usb-accessory model="mPOP" manufacturer="Star Micronics"/>
</resources>
```

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

The sample code and printed result images are also [available here](example/samples/printing_samples/README.md).

- Sample to create print layouts for receipts and labels for each type of business
- Sample to generate receipt images from text data (iOS/Android)

> :warning: Some printer models may not be able to print some samples. Please adjust the layout accordingly when using this samples.

#### 3. [Create printing data using template printing function](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/en/template-step1.html)

#### 4. [Send printing data](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/en/basic-step2.html)

#### 5. [Send printing data using spooler function](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/en/spooler.html)

#### 6. [Get printer status](#GetPrinterStatus)

#### 7. [Monitor printer](#MonitorPrinter)

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
