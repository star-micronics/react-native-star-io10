<p align="center">
  <img
    src="logo.png"
    width="600"
    style="margin-top: 20px; margin-bottom: 20px;"
  />
</p>

- [English](../README.md)

# react-native-star-io10

`react-native-star-io10`はスター精密デバイス向けアプリケーション開発をサポートするライブラリです。

本ライブラリはStarXpand SDKに含まれます。

## 動作環境

| Platform | OS Version | Arch |
| --- | --- | --- |
| iOS | iOS 12.0 以降 | 実機: arm64<br> シミュレータ: x86_64, arm64 | 
| Android | Android 6.0 以降 | arm64-v8a, armeabi-v7a, x86, x86_64 |
| Windows | Windows 10 1909 以降 | x86, x64 |

## 導入

```
npm install react-native-star-io10 --save
```

### iOS
プリンターのインターフェースによって、必要な対応があります。  
下記表を確認し対応をしてください。

| プリンターのインターフェース  | 必要な対応                                                                                |
|--------------------------|-----------------------------------------------------------------------------------------|
| Bluetooth                | [1.](#SupportedEAProtocols) & [2.](#BluetoothAlwaysUsageDescription) & [4.](#MFi) |
| Bluetooth Low Energy     | [2.](#BluetoothAlwaysUsageDescription)                                                |
| Ethernet (iOS14以上)      | [3.](#LocalNetworkUsageDescription)                                                   |
| Lightning USB           | [1.](#SupportedEAProtocols) & [4.](#MFi)                                            |

<a id="SupportedEAProtocols"></a>
#### 1. `Supported external accessory protocols` 項目の設定

1. Information Property List（デフォルトでは"Info.plist"）を選択します。
2. Keyに `Supported external accessory protocols` を追加します。
3. 項目名左側の▽をクリックして表示される"Item 0"の[Value]に `jp.star-m.starpro` を設定します。

> :warning: 該当するプリンターを使用しない場合は、この設定を行わないでください。

<a id="BluetoothAlwaysUsageDescription"></a>
#### 2. `Bluetooth Always Usage Description` 項目および `Bluetooth Peripheral Usage Description` 項目の設定

1. Information Property List（デフォルトでは"Info.plist"）を選択します。
2. Keyに `Privacy – Bluetooth Always Usage Description` を追加します。
3. `Deployment Target` をiOS12に設定する場合、Keyに `Privacy – Bluetooth Peripheral Usage Description` を追加します。
3. それぞれのValue に Bluetoothの利用目的（例: `Use Bluetooth for communication with the printer.`）を設定します。
4. Bluetoothにてプリンターと通信するとき、Bluetoothへのアクセス許可を求めるダイアログが表示されます。その際、Valueに設定した文字列がBluetoothを利用する理由として表示されます。

より詳しくは、下記URLを参照してください。

https://developer.apple.com/documentation/bundleresources/information_property_list/nsbluetoothperipheralusagedescription

<a id="LocalNetworkUsageDescription"></a>
#### 3. `Local Network Usage Description` 項目の設定

1. Information Property List（デフォルトでは"Info.plist"）を選択します。
2. Keyに `Privacy - Local Network Usage Description` を追加します。
3. Value に Local Networkの利用目的（例: `Use Local Network for communication with the printer or discovery the printers.`）を設定します。
4. iOS14以上でEthernetプリンターと通信するとき、Local Networkへのアクセス許可を求めるダイアログが表示されます。その際、Valueに設定した文字列がLocal Networkを利用する理由として表示されます。

<a id="MFi"></a>
#### 4. MFi対応プリンター向けアプリ認証を取得

MFi認証プリンターに対応したiOSアプリケーションを設計・開発し、 Apple iTunes App Storeにアプリケーション登録を行う場合、下記のURLに記載の手順によりアプリ認証を取得してください。Appleによるアプリ審査前に完了しておく必要があります。

https://star-m.jp/products/s_print/apple_app_mfi/index.html

> :warning: Bluetooth Low Energyプリンターを使用する場合は、このアプリ認証を行う必要はありません。

### Android
#### targetSdkVersionを31以降に設定する場合
[サンプルコード](../example/samples)を参考にして、プリンターとの通信や検索を開始する前に、BLUETOOTH_CONNECTパーミッションを要求してください。

#### targetSdkVersionを30以前に設定する場合
`react-native-star-io10` ライブラリには、APIレベル 31にて追加されたBLUETOOTH_CONNECTパーミッションが含まれています。AndroidManifest.xmlに下記二つの設定を行い、BLUETOOTH_CONNECTパーミッションを削除してください。

* `manifest` 要素に `xmlns:tools="http://schemas.android.com/tools"` 属性を追加します。
* `<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" tools:node="remove"/>` 要素を追加します。

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
- 機能を`Package.appxmanifest`に追加してください。
  - Bluetooth
  - インターネット(クライアント)
  - プライベート ネットワーク (クライアントとサーバー)
- プロジェクトの「参照」に"Visual C++ 2015-2019 UWP Desktop Runtime for native apps"を追加してください。

## ドキュメント

[ここを参照ください。](https://www.star-m.jp/react-native-stario10-oml.html)

## 制限事項

### Android端末を使用する場合、URLで指定した画像が低い解像度で印字されることがある

actionPrintImageメソッドの引数ImageParameterのsourceにある程度サイズが大きい画像ファイルのURLを指定した場合、Android端末から印刷データが送付されると、画像が粗く印字されることがあります。

下記いずれかの方法により回避することができます。 

- あらかじめ画像の解像度を下げるなどして画像のデータ量を下げる 
- アプリ内で画像をダウンロードし、sourceには画像ファイルを直接指定する 

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

- [`example`プロジェクトはここを参照ください。](../example)

## Copyright

Copyright 2021 Star Micronics Co., Ltd. All rights reserved.
