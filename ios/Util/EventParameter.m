#import "EventParameter.h"

@implementation EventParameter

NSString * const kKeyIdentifier = @"identifier";
NSString * const kKeyErrorIdentifier = @"errorIdentifier";
NSString * const kKeyDraweOpenCloseSognalState = @"openCloseSignal";
NSString * const kKeyInputDeviceData = @"data";
NSString * const kKeyInterfaceType = @"interfaceType";
NSString * const kKeyConnectionIdentifier = @"connectionIdentifier";
NSString * const kKeyModel = @"model";
NSString * const kKeyEmulation = @"emulation";
NSString * const kKeyReserved = @"reserved";
NSString * const kKeyLanMacAddress = @"macAddress";
NSString * const kKeyLanIPAddress = @"ipAddress";
NSString * const kKeyBluetoothPortName = @"bluetoothPortName";
NSString * const kKeyBluetoothSerialNumber = @"bluetoothSerialNumber";
NSString * const kKeyBluetoothAddress = @"bluetoothAddress";
NSString * const kKeyBluetoothLEAddress = @"bluetoothLEAddress";
NSString * const kKeyUsbPortName = @"usbPortName";
NSString * const kKeyUsbProductSN = @"productSerialNumber";
NSString * const kKeyUsbUsbSN = @"usbSerialNumber";

NSString * const kNamePrinterDelegateReady = @"PrinterReady";
NSString * const kNamePrinterDelegateError = @"PrinterError";
NSString * const kNamePrinterDelegatePaperReady = @"PrinterPaperReady";
NSString * const kNamePrinterDelegatePaperNearEmpty = @"PrinterPaperNearEmpty";
NSString * const kNamePrinterDelegatePaperEmpty = @"PrinterPaperEmpty";
NSString * const kNamePrinterDelegateCoverOpened = @"PrinterCoverOpened";
NSString * const kNamePrinterDelegateCoverClosed = @"PrinterCoverClosed";
NSString * const kNamePrinterDelegateCommunicationError = @"PrinterCommunicationError";
NSString * const kNameDrawerDelegateOpenCloseSignalSwitched = @"DrawerOpenCloseSignalSwitched";
NSString * const kNameDrawerDelegateCommunicationError = @"DrawerCommunicationError";
NSString * const kNameInputDeviceDelegateConnected = @"InputDeviceConnected";
NSString * const kNameInputDeviceDelegateDisconnected = @"InputDeviceDisconnected";
NSString * const kNameInputDeviceDelegateDataReceived = @"InputDeviceDataReceived";
NSString * const kNameInputDeviceDelegateCommunicationError = @"InputDeviceCommunicationError";
NSString * const kNameDisplayDelegateConnected = @"DisplayConnected";
NSString * const kNameDisplayDelegateDisconnected = @"DisplayDisconnected";
NSString * const kNameDisplayDelegateCommunicationError = @"DisplayCommunicationError";
NSString * const kNamePrinterFound = @"PrinterFound";
NSString * const kNameDiscoveryFinished = @"DiscoveryFinished";

@end
