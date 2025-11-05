- [日本語](docs/CHANGELOG_JP.md)

# Change Log

## 1.10.1 (2025/10/31)

* Android : Fixed an issue where communication with USB printers occasionally failes. [#49](https://github.com/star-micronics/StarXpand-SDK-Android/issues/49)

## 1.10.0 (2025/7/14)

* Added API to update printer firmware.
* Added the following printers support (Maintenance support)
  * TSP100LAN
  * TSP100ECO (Android only)
  * TSP650II (LAN : IFBD-HE05)
  * SP700 (LAN : IFBD-HE06)
* Added some properties for printer detail status API (StarPrinterStatusDetail).
* Added supported models for PrinterBuilder actionSeparatorFeed() method.
* Android : Support for 16KB page size native library.
* Android : Performance improvement of log storage with StarIO10Logger.
* Bug Fix:
  * Android : Performance improvement of actionPrintImage() method.
  * Android Crash when searching for Bluetooth printer without proper permission.
  * Android : Location Permission Conflict [#140](https://github.com/star-micronics/react-native-star-io10/issues/140)
  * StarPrinter.printAsync() method may crashes depending on StarXpandCommandBuilder API parameters specified.
  * iOS : Fixed an issue related to Bluetooth and USB interface communication.

## 1.9.0 (2025/05/19)

* Added mC-Label2 support.
* Added the actionSeparatorFeed method to execute paper feeding per black mark and gap for die-cut label paper, etc.
* Added the styleBaseMagnification method to set the base print size.
* Added [Printing Samples](example/samples/printing_samples/README.md) for mC-Label2 (300dpi model).
* Changed the example app to use Pressable instead of CheckBox.
* Updated React Native version to 0.78.2.
* Updated React Native Windows version to 0.78.4.
* iOS: Changed minimum supported OS version from 13 to 15.1.
* Android: Changed minimum supported OS version from 9 to 10.
* Android: Added Android 16 support (tested on platform stability version).
* Bug Fix:
  * Fixed an issue where the execution of StarPrinter.print() occasionally failed immediately after the printer came back online (when PrinterDelegate onReady() was called) with the LAN interface of TSP650II, TSP700II, TSP800II, SP700, and TUP500.

## 1.8.0 (2024/11/01)

* Added TSP100IV-UEWB and TSP100IV-UEWB SK support.
* Added API to get detail information of printer.
  * detail property of StarPrinterInformation
  * StarPrinterInformationDetail
  * StarPrinterInformationLan
  * StarPrinterInformationBluetooth
  * StarPrinterInformationBluetoothLE
  * StarPrinterInformationUsb
* Added API to get detail information of error.
  * errorDetail property of StarPrinter
  * StarIO10ErrorDetail
* Bug Fix:
  * Fixed an issue where `react-native-star-io10` failed to open and discover printer via LAN with the Xcode16 and iOS 18. [#124](https://github.com/star-micronics/react-native-star-io10/issues/124)

## 1.7.0 (2024/06/24)

* Added BSC10II support.
* Added TearOff (feed to tear bar) to the CutType enum.
* Added India to the Printer.InternationalCharacterType enum.
* Changed the example app to use function components instead of class components.
* Changed the example app to use CheckBox instead of Picker.
* Updated React Native version to 0.73.8.
* Updated React Native for Windows version to 0.73.13.
* iOS/Windows: Changed so that StarIO10InUseError is thrown immediately when StarPrinter.open() is executed for a LAN printer that has already been opened by another device if autoSwitchInterface is false.
* Bug Fix:
  * iOS: Fixed an issue where occasionally caused a crash when executing print operations on multiple printers at the same time.
  * Fixed the value of the name property of the StarIO10Error subclass to be the string of the class name when the app bundle is generated with the minify option enabled.
  * iOS: Fixed an issue where StarIO10IllegalDeviceStateError(message: "Network Unavailable.") could occasionally be thrown even though the iOS device is actually connected to the network.

## 1.6.1 (2024/03/27)

* Bug Fix:
  * iOS: Fixed privacy manifest file according to Apple's App Review. (`react-native-star-io10` does not use Required Reason API.)
* Updated React Native version to 0.73.6.
* Updated React Native Windows version to 0.73.11.

## 1.6.0 (2024/02/09)

* Added POP10CBI support.
* Added API for template printing function.
* Added a screen for template printing to the sample app.
* Added API for specifying number of character function.
* Added API for setting full/half-width of Unicode ambiguous characters.
* Changed the Auto Switch Interface function to enabled by default.
* Improved switching speed of the Auto Switch Interface function.
* Added several samples of printing patterns using template printing function.
* Added privacy manifest file according to Apple's guidelines. (`react-native-star-io10` does not use Required Reason API.)
* Updated React Native version to 0.73.2.
* Updated React Native for Windows version to 0.73.4.
* Android: Added Android 14 support.
* iOS: Added use_frameworks! support. [#90](https://github.com/star-micronics/react-native-star-io10/issues/90)
* Remove unused imports and variables. [#107](https://github.com/star-micronics/react-native-star-io10/pull/107)

## 1.5.0 (2023/10/27)

* Added MCP31CI/CBI support.
* Faster print data generation.
* iOS/Android: Added a sample to generate receipt images from text data.

* Bug Fix:
  * iOS/Windows: Fixed to be able to print to printers on different segment networks by specifying IP address.
  * Fixed an issue where decorations (methods starting with `style`) set with `DocumentBuilder.addPrinter()` were not reset when the method ended.

## 1.4.0 (2023/09/08)

* Added TSP100IV SK support.
* Updated React Native version to 0.72.4.
* Updated React Native for Windows version to 0.72.7.
* iOS: Changed minimum supported OS version from 12 to 13.
* Android: Changed minimum supported OS version from 6 to 9.
* Windows: Changed minimum supported OS version from Windows 10 1909 to 22H2.
* Android/Windows: Updated Bluetooth module information for SM-L200.

## 1.3.0 (2023/05/29)

* Updated React Native version to 0.71.6 to fix an issue that the example app cannot be built in Xcode14.3. ([Detail here](https://github.com/facebook/react-native/issues/36739))
* Updated React Native for Windows version to 0.71.6 to resolve build failure for x86 architecture and React Native CodeGen build failure on Windows.

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
