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
| iOS | iOS 13.0 以降 | 実機: arm64<br> シミュレータ: x86_64, arm64 | 
| Android | Android 9.0 以降 | arm64-v8a, armeabi-v7a, x86, x86_64 |
| Windows | Windows 11 / Windows 10 22H2 | x86, x64 |

## 導入

```
npm install react-native-star-io10 --save
```

### iOS
#### プライバシーマニュフェスト
Apple社の指針に従い、`react-native-star-io10` V1.6.1以降はプライバシーマニフェストファイルを含みます。
Manifest fileについては[こちら](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files)をご参照ください。
ただし、`react-native-star-io10`では過去バージョンを含め、Required Reason APIは使用しておりません。（2024年1月29日現在）

#### プリンターのインターフェースごとに必要な対応
下記表を確認し対応をしてください。

| プリンターのインターフェース  | 必要な対応                                                                                |
|--------------------------|-----------------------------------------------------------------------------------------|
| Bluetooth                | [1.](#SupportedEAProtocols) & [2.](#BluetoothAlwaysUsageDescription) & [4.](#MFi) |
| Bluetooth Low Energy     | [2.](#BluetoothAlwaysUsageDescription)                                                |
| Ethernet (iOS14以上)      | [3.](#LocalNetworkUsageDescription)                                                   |
| Lightning USB           | [1.](#SupportedEAProtocols) & [4.](#MFi)                                            |

<a id="SupportedEAProtocols"></a>
##### 1. `Supported external accessory protocols` 項目の設定

1. Information Property List（デフォルトでは"Info.plist"）を選択します。
2. Keyに `Supported external accessory protocols` を追加します。
3. 項目名左側の▽をクリックして表示される"Item 0"の[Value]に `jp.star-m.starpro` を設定します。

> :warning: 該当するプリンターを使用しない場合は、この設定を行わないでください。

<a id="BluetoothAlwaysUsageDescription"></a>
##### 2. `Bluetooth Always Usage Description` 項目および `Bluetooth Peripheral Usage Description` 項目の設定

1. Information Property List（デフォルトでは"Info.plist"）を選択します。
2. Keyに `Privacy – Bluetooth Always Usage Description` を追加します。
3. `Deployment Target` をiOS12に設定する場合、Keyに `Privacy – Bluetooth Peripheral Usage Description` を追加します。
3. それぞれのValue に Bluetoothの利用目的（例: `Use Bluetooth for communication with the printer.`）を設定します。
4. Bluetoothにてプリンターと通信するとき、Bluetoothへのアクセス許可を求めるダイアログが表示されます。その際、Valueに設定した文字列がBluetoothを利用する理由として表示されます。

より詳しくは、下記URLを参照してください。

https://developer.apple.com/documentation/bundleresources/information_property_list/nsbluetoothperipheralusagedescription

<a id="LocalNetworkUsageDescription"></a>
##### 3. `Local Network Usage Description` 項目の設定

1. Information Property List（デフォルトでは"Info.plist"）を選択します。
2. Keyに `Privacy - Local Network Usage Description` を追加します。
3. Value に Local Networkの利用目的（例: `Use Local Network for communication with the printer or discovery the printers.`）を設定します。
4. iOS14以上でEthernetプリンターと通信するとき、Local Networkへのアクセス許可を求めるダイアログが表示されます。その際、Valueに設定した文字列がLocal Networkを利用する理由として表示されます。

<a id="MFi"></a>
##### 4. MFi対応プリンター向けアプリ認証を取得

MFi認証プリンターに対応したiOSアプリケーションを設計・開発し、 Apple iTunes App Storeにアプリケーション登録を行う場合、下記のURLに記載の手順によりアプリ認証を取得してください。Appleによるアプリ審査前に完了しておく必要があります。

https://star-m.jp/products/s_print/apple_app_mfi/index.html

> :warning: Bluetooth Low Energyプリンターを使用する場合は、このアプリ認証を行う必要はありません。

### Android
#### 1. ライブラリの依存関係の設定

組み込みたいアプリのappモジュールのbuild.gradleに、下記のローカルのMavenリポジトリを参照する設定を追加してください。

```gradle
allprojects {
    repositories {
        flatDir {
            dirs "$rootDir/../node_modules/react-native-star-io10/android/src/lib"
        }
    }
}
```

#### 2. Bluetoothプリンターを使用する場合

[サンプルコード](../example/samples)を参考にして、プリンターとの通信や検索を開始する前に、BLUETOOTH_CONNECTパーミッションを要求してください。

#### 3. USBケーブル挿抜の度に接続許可ダイアログを表示させないようにしたい場合

USBプリンターと通信を行うとき、接続許可を求めるダイアログが表示されます。この接続許可は、USBケーブルを挿抜する（プリンターの電源オンオフも含む）とリセットされます。

USBケーブル挿抜の度に接続許可ダイアログを表示させないようにしたい場合、次の設定を行ってください。また、この設定を行うことで、USBケーブルを挿入したときにアプリケーションが自動で起動するようになります。

##### 2.2. AndroidManifest.xmlに設定を追加する
AndroidManifest.xmlに下記の `<intent-filter>` 要素と `<meta-data>` 要素を追加してください。

```xml
<intent-filter>
    <action android:name="android.hardware.usb.action.USB_DEVICE_ATTACHED" />
    <action android:name="android.hardware.usb.action.USB_ACCESSORY_ATTACHED" />
</intent-filter>

<meta-data android:name="android.hardware.usb.action.USB_DEVICE_ATTACHED" android:resource="@xml/device_filter" />
<meta-data android:name="android.hardware.usb.action.USB_ACCESSORY_ATTACHED" android:resource="@xml/accessory_filter" />
```

##### 2.2. リソースファイルを追加する
下記のリソースファイルを `res/xml` 以下に `device_filter.xml`、`accessory_filter.xml` という名前で保存してください。

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
- 機能を`Package.appxmanifest`に追加してください。
  - Bluetooth
  - インターネット(クライアント)
  - プライベート ネットワーク (クライアントとサーバー)
- プロジェクトの「参照」に"Visual C++ 2015-2019 UWP Desktop Runtime for native apps"を追加してください。

## 制限事項
### Android端末を使用する場合、URLで指定した画像が低い解像度で印字されることがある

actionPrintImageメソッドの引数ImageParameterのsourceにある程度サイズが大きい画像ファイルのURLを指定した場合、Android端末から印刷データが送付されると、画像が粗く印字されることがあります。

下記いずれかの方法により回避することができます。 

- あらかじめ画像の解像度を下げるなどして画像のデータ量を下げる 
- アプリ内で画像をダウンロードし、sourceには画像ファイルを直接指定する 

## Examples

StarXpand SDKにはプリンターと組み合わせて動作を確認できる[サンプルアプリ](../example)が含まれています。リンク先の各機能の解説と合わせてご利用ください。

#### 1. [プリンターの検索](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/searchPrinter.html)

#### 2. [印刷データの生成](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/basic-step1.html)

[こちら](../example/samples/printing_samples/README.md)のサンプルコードと印刷結果画像もご活用ください。

- 各業態のレシートやラベル用の印刷レイアウトを作成するサンプル
- テキストデータからレシート画像を生成するサンプル(iOS/Android)

> :warning: プリンターのモデルによっては印刷できないサンプルがあります。また、ご利用の際は適宜レイアウトを調節してください。

#### 3. [テンプレート印刷機能を利用した印刷データの生成](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/template-step1.html)

#### 4. [印刷データの送信](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/basic-step2.html)

#### 5. [スプーラー機能を利用した印刷データの送信](https://star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/spooler.html)

#### 6. [プリンターステータスの取得](#GetPrinterStatus)

#### 7. [プリンターステータスの監視](#MonitorPrinter)

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
