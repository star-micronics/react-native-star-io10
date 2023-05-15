- [日本語](docs/CHANGELOG_JP.md)

# Change Log

## 1.3.0 (2023/03/31)

* Added mC-Label3 support.
* Added internal processing required for Bluetooth changes of SM-S210i, SM-S230i, SM-T300i and SM-T400i.
* Updated React Native version to 0.71.4.
* Added API for spooler function.
* Added API for Page Mode.
* Added API for setting/getting Star Configuration.
* Added API for getting detailed status.
* Added printing samples of the spooler function and several samples of printing patterns for labels to the example app.
* iOS: Supported for Xcode 14.
  * Changed to not include Bitcode based on Apple policy.
* Windows: Supported for Visual Studio 2022.
* Windows: Added a specification that the model can be estimated and acquired for some printers with Bluetooth device name set to the initial value (TSP100IIIBI, mPOP, mC-Print2/3, mC-Label3 and SM-L200/300) when using the StarDeviceDiscoveryManager class.

* Bug Fix:
  * Fixed an issue that command generation does not execute when adding a Builder immediately after instantiation. [#72](https://github.com/star-micronics/react-native-star-io10/issues/72)

  * Android
    * Fixed a rare crash while performing a discovery.
    * Fixed an issue that printing may fail via USB in certain devices and will not recover after failure without the USB cable removal and insertion.

## 1.2.0 (2022/05/10)

* Added POP10CI support.
* Added new Bluetooth module information for SM-L200.
* Updated React Native version to 0.67.2.
* Android: Added a specification that the model can be estimated and acquired for some printers with Bluetooth device name set to the initial value (TSP100IIIBI, mPOP, mC-Print2/3 and SM-L200/300) when using the StarDeviceDiscoveryManager class.
* Android: Fixed to avoid obfuscation to unnecessary parts.
* Windows: Fixed a crash in applications installed from the Microsoft Store caused by API calls to any of this library.

## 1.1.0 (2021/11/19)

* Added TSP100IV support.
* Updated React Native version to 0.66.
* Updated libraries to be used.
* Improved printing speed.
* Added type definition files for TypeScript.
* iOS: Supported for Xcode 13.
* iOS: Added support for the iOS simulator on Apple Silicon Mac.
* Android: Responded to the JCenter shutdown.
* Bug Fix:
  * iOS
    * Fixed a crash of StarLogger class when exiting the application.
    * Fixed an issue where memory usage kept increasing while searching for LAN printers.
    * Fixed an issue that the startDiscovery method of the StarDeviceDiscoveryManager class could not detect printers that joined the network after the search started.
    * Added a process to exclude simulator binaries from StarIO10 when building for devices.
    * Improved internal processing
  * Android
    * Fixed a crash when leaving the dialog asking for USB access for a few seconds or selecting cancel.
    * Fixed an issue that the startDiscovery method of the StarDeviceDiscoveryManager class could not detect printers that joined the network after the search started.
    * Support for Android OS specification change when using USB communication.

* example (Android:1.0.1)
  * Support for new Bluetooth permission request when targeting Android 12.

## 1.0.0 (2021/05/14)

* example (iOS : 1.0.1)
    * Fixed iOS build issue in Xcode 12.5. ([Detail here](https://github.com/facebook/react-native/issues/31480))

## 1.0.0 (2021/03/28)

* First release
