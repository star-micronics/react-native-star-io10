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

## ドキュメント

StarXpand SDKのドキュメントは[こちら](https://www.star-m.jp/react-native-stario10-oml.html)を参照ください。

ドキュメントにはSDKの概要、サンプルアプリのビルド方法、APIの使用方法、APIリファレンスなどが含まれます。

## 動作環境

| Platform | OS Version | Arch |
| --- | --- | --- |
| iOS | iOS 12.0 以降 | 実機: arm64<br> シミュレータ: x86_64, arm64 | 
| Android | Android 6.0 以降 | arm64-v8a, armeabi-v7a, x86, x86_64 |
| Windows | Windows 11 / Windows 10 1909 以降 | x86, x64 |

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
[サンプルコード](../example/samples)を参考にして、プリンターとの通信や検索を開始する前に、BLUETOOTH_CONNECTパーミッションを要求してください。

### Windows
- 機能を`Package.appxmanifest`に追加してください。
  - Bluetooth
  - インターネット(クライアント)
  - プライベート ネットワーク (クライアントとサーバー)
- プロジェクトの「参照」に"Visual C++ 2015-2019 UWP Desktop Runtime for native apps"を追加してください。

## 制限事項

### Windowsのx86向けビルドが出来ない

React Native for Windows V0.71.3を利用するStarXpand SDK V1.3.0では、Windowsのx86アーキテクチャ向けビルドは出来ません。x64アーキテクチャのみ利用可能です。

### Android端末を使用する場合、URLで指定した画像が低い解像度で印字されることがある

actionPrintImageメソッドの引数ImageParameterのsourceにある程度サイズが大きい画像ファイルのURLを指定した場合、Android端末から印刷データが送付されると、画像が粗く印字されることがあります。

下記いずれかの方法により回避することができます。 

- あらかじめ画像の解像度を下げるなどして画像のデータ量を下げる 
- アプリ内で画像をダウンロードし、sourceには画像ファイルを直接指定する 

## Examples

StarXpand SDKにはプリンターと組み合わせて動作を確認できる[サンプルアプリ](../example)が含まれています。リンク先の各機能の解説と合わせてご利用ください。

#### 1. [プリンターの検索](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/searchPrinter.html)

#### 2. [印刷データの生成](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/basic-step1.html)

ラベル用の印刷レイアウトを作成するのに活用できる各業態の[印刷サンプル](../example/samples/printing_samples/PrintingSamples.md)（サンプルコードと印刷結果画像）もご利用ください。

> :warning: プリンターのモデルによっては印刷できないサンプルがあります。また、ご利用の際は適宜レイアウトを調節してください。

#### 3. [印刷データの送信](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/basic-step2.html)

#### 4. [スプーラー機能を利用した印刷データの送信](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/spooler.html)

#### 5. [プリンターステータスの取得](#GetPrinterStatus)

#### 6. [プリンターステータスの監視](#MonitorPrinter)

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
