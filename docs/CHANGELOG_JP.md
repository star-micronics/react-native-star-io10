- [English](../CHANGELOG.md)

# 変更点

## 1.3.0 (2023/03/31)

* mC-Label3 に対応
* SM-S210i/SM-S230i/SM-T300i/SM-T400iのBluetooth変更に伴い必要な内部処理を追加
* React Native のバージョンを0.71.4に更新
* スプーラー機能APIを追加
* ページモードAPIを追加
* Star Configuration設定・読み込みAPIを追加
* 詳細ステータス取得APIを追加
* exampleにスプーラー機能の印刷サンプルと、ラベル用の印刷パターンのサンプルを複数追加
* iOS: Xcode 14に対応
  * Appleの指針に基づき、Bitcodeを含まないように変更
* Windows: Visual Studio 2022に対応
* Windows: StarDeviceDiscoveryManagerクラスを利用した際かつ、一部のプリンター(TSP100IIIBI、mPOP、mC-Print2/3、mC-Label3、SM-L200/300)のBluetoothデバイス名が初期値の場合において、モデルを推定し取得できる仕様を追加

* 不具合修正
  * インスタンス生成直後のBuilderをaddすると、コマンド生成が行われない問題を修正 [#72](https://github.com/star-micronics/react-native-star-io10/issues/72)

  * Android
    * 検索の実行中にまれにクラッシュする問題を修正
    * 特定の端末においてUSBで印刷に失敗することがあり、失敗後はUSBケーブルの挿抜を行わないと復帰しない問題を修正

## 1.2.0 (2022/05/10)

* POP10CI に対応
* SM-L200のBluetoothモジュール情報を新規追加
* React Native のバージョンを0.67.2に更新
* Android: StarDeviceDiscoveryManagerクラスを利用した際かつ、一部のプリンター(TSP100IIIBI、mPOP、mC-Print2/3、SM-L200/300)のBluetoothデバイス名が初期値の場合において、モデルを推定し取得できる仕様を追加
* Android: 不要な部分まで難読化されないように修正
* Windows: Microsoft Storeからインストールしたアプリにおいて、本ライブラリのいずれかのAPI呼び出しによりクラッシュする問題を修正

## 1.1.0 (2021/11/19)

* TSP100IV に対応
* React Native のバージョンを0.66に更新
* 使用するライブラリの更新
* 印刷速度の高速化
* TypeScript用の型定義ファイルを追加
* iOS: Xcode 13 に対応
* iOS: Apple Silicon Mac上のiOSシミュレーターに対応
* Android: JCenter廃止への対応
* 不具合修正
  * iOS
    * アプリ終了時にStarLoggerクラスがクラッシュする問題を修正
    * LANプリンター検索中にメモリ使用量が増加し続ける問題を修正
    * StarDeviceDiscoveryManagerクラスのstartDiscoveryメソッドが、検索開始後にネットワークに参加したプリンターを検出できない問題を修正
    * 実機ビルド時、StarIO10からシミュレータ用バイナリを除外する処理を追加
    * 内部処理改善
  * Android
    * USBアクセスを求めるダイアログにて、数秒間放置するかキャンセルを選択するとクラッシュする問題を修正
    * StarDeviceDiscoveryManagerクラスのstartDiscoveryメソッドが、検索開始後にネットワークに参加したプリンターを検出できない問題を修正
    * Android 12にてUSB通信をする際のAndroid OS仕様変更に対応

* example (Android:1.0.1)
    * Android 12をターゲットとする場合の新しいBluetooth権限に対応

## 1.0.0 (2021/05/14)

* example (iOS:1.0.1)
    * Xcode12.5において、ビルドができない不具合を修正。([詳細](https://github.com/facebook/react-native/issues/31480))

## 1.0.0 (2021/03/28)

* 初回リリース
