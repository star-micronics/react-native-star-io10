- [English](../CHANGELOG.md)

# 変更点

## 1.6.0 (2024/02/09)

* POP10CBI に対応
* テンプレート印刷APIを追加
* サンプルアプリにテンプレート印刷画面を追加
* 文字数指定APIを追加
* Unicodeあいまい文字全半角設定APIを追加
* インターフェイス自動切り替え機能をデフォルト有効に変更
* インターフェイス自動切り替え機能の切り替え速度を改善
* テンプレート印刷APIを使った印刷パターンのサンプルを複数追加
* Apple社の指針に従い、`react-native-star-io10`にプライバシーマニフェストファイルを追加（Required Reason APIは使用していません）
* React Native のバージョンを0.73.2に更新
* React Native for Windows のバージョンを0.73.4に更新
* Android: Android14 に対応
* iOS: use_frameworks! に対応 [#90](https://github.com/star-micronics/react-native-star-io10/issues/90)
* 使用していないimportと変数を削除 [#107](https://github.com/star-micronics/react-native-star-io10/pull/107)

## 1.5.0 (2023/10/27)

* MCP31CI/CBI に対応
* 印刷データ生成の高速化
* iOS/Android: テキストデータからレシート画像を生成するサンプルを追加

* 不具合修正
  * iOS/Windows: 異なるセグメントのネットワークのプリンターにIPアドレス指定で印刷できるよう修正
  * `DocumentBuilder.addPrinter()`で設定した装飾（styleで始まるメソッド）が、メソッド終了時に解除されない問題を修正

## 1.4.0 (2023/09/08)

* TSP100IV SK に対応
* React Native のバージョンを0.72.4に更新
* React Native for Windows のバージョンを0.72.7に更新
* iOS: 最低サポートOSバージョンを12から13に変更
* Android: 最低サポートOSバージョンを6から9に変更
* Windows: 最低サポートOSバージョンをWindows 10 1909から22H2に変更
* Android/Windows: SM-L200のBluetoothモジュール情報を更新

## 1.3.0 (2023/05/29)

* Xcode14.3においてexampleアプリがビルドできない問題を修正するため、React Native のバージョンを0.71.6に更新([詳細](https://github.com/facebook/react-native/issues/36739))
* Windowsにおいて、x86アーキテクチャ向けビルドに失敗する問題とReact Native CodeGenのビルドに失敗する問題を解消するため、React Native for Windows のバージョンを0.71.6に更新

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
