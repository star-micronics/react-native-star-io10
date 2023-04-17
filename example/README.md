- [日本語](docs/README_JP.md)

# Example - react-native-star-io10

These samples includes following functions.

* [printing](samples/printing/App.tsx) - To print by the printer
* [printing (spooler)](samples/printing_spooler/App.tsx) - To print using the printer's spooler function
* [printing samples](samples/printing_samples/PrintingSamples.md) - Printing samples of labels (sample code and print results) for each type of business
* [discovery](samples/discovery/App.tsx) - To discover devices
* [status](samples/status/App.tsx) - To get the status of the device
* [monitor](samples/monitor/App.tsx) - To monitor the device

## Usage

The following example is for the `printing` function.

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

> :warning: If the build fails, please refer to "What should I do when Windows sample app build fails" on [this page](https://www.star-m.jp/products/s_print/sdk/react-native-star-io10/manual/en/qanda.html).