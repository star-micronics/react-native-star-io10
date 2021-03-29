- [English](../README.md)

# Example - react-native-star-io10

本サンプルは以下機能を含みます。

* [印刷](../samples/printing/App.tsx) - プリンターで印刷
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
