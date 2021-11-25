- [English](../CHANGELOG.md)

# 変更点

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
