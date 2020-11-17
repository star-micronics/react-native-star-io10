# Example - react-native-star-io10

These samples includes following functions.

* [printing](https://github.com/star-micronics/react-native-star-io10/tree/master/example/samples/printing) - To print by the printer
* [discovery](https://github.com/star-micronics/react-native-star-io10/tree/master/example/samples/discovery) - To discover devices
* [status](https://github.com/star-micronics/react-native-star-io10/tree/master/example/samples/status) - To get the status of the device
* [monitor](https://github.com/star-micronics/react-native-star-io10/tree/master/example/samples/monitor) - To monitor the device

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

1. Execute the following command

```
windows\example.sln
yarn start
```

2. After Visual Studio starts, select the Debug configuration and the x64 platform from the combo box controls to the left of the Run button.

3. Click the Run button to the right of the platform combo box control.
