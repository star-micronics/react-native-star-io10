- [日本語](docs/CHANGELOG_JP.md)

# Change Log

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
