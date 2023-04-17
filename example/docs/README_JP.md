- [English](../README.md)

# Example - react-native-star-io10

本サンプルは以下機能を含みます。

* [印刷](../samples/printing/App.tsx) - プリンターで印刷
* [印刷（スプーラー）](../samples/printing_spooler/App.tsx) - プリンターのスプーラー機能を利用して印刷
* [印刷データのサンプル](../samples/printing_samples/PrintingSamples.md) - 各業態のラベル用印刷サンプル（サンプルコードと印刷結果画像）
* [検索](../samples/discovery/App.tsx) - デバイスの検索
* [ステータス](../samples/status/App.tsx) - デバイスのステータスを取得
* [監視](../samples/monitor/App.tsx) - デバイスを監視

## 使用方法

以下は`印刷`機能の例です。

```
yarn install
cp samples/printing(or another function)/App.tsx ./
```

### iOS

```bash
cd ios
pod update
cd ..
npx react-native run-ios
```

### Android

```
npx react-native run-android
```

### Windows

```
npx react-native run-windows
```

> :warning: ビルドに失敗する場合、[こちらのページ](https://www.star-m.jp/products/s_print/sdk/react-native-star-io10/manual/ja/qanda.html)の「Windowsサンプルアプリのビルドに失敗します」をご参照ください。