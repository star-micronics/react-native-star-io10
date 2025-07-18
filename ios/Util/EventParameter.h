#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface EventParameter : NSObject

extern NSString * const kKeyIdentifier;
extern NSString * const kKeyErrorIdentifier;
extern NSString * const kKeyDraweOpenCloseSognalState;
extern NSString * const kKeyFirmwareUpdateStep;
extern NSString * const kKeyInputDeviceData;
extern NSString * const kKeyInterfaceType;
extern NSString * const kKeyConnectionIdentifier;
extern NSString * const kKeyModel;
extern NSString * const kKeyEmulation;
extern NSString * const kKeyReserved;
extern NSString * const kKeyLanMacAddress;
extern NSString * const kKeyLanIPAddress;
extern NSString * const kKeyBluetoothPortName;
extern NSString * const kKeyBluetoothSerialNumber;
extern NSString * const kKeyBluetoothAddress;
extern NSString * const kKeyBluetoothLEAddress;
extern NSString * const kKeyUsbPortName;
extern NSString * const kKeyUsbProductSN;
extern NSString * const kKeyUsbUsbSN;

extern NSString * const kNamePrinterDelegateReady;
extern NSString * const kNamePrinterDelegateError;
extern NSString * const kNamePrinterDelegatePaperReady;
extern NSString * const kNamePrinterDelegatePaperNearEmpty;
extern NSString * const kNamePrinterDelegatePaperEmpty;
extern NSString * const kNamePrinterDelegateCoverOpened;
extern NSString * const kNamePrinterDelegateCoverClosed;
extern NSString * const kNamePrinterDelegateCommunicationError;
extern NSString * const kNameDrawerDelegateOpenCloseSignalSwitched;
extern NSString * const kNameDrawerDelegateCommunicationError;
extern NSString * const kNameInputDeviceDelegateConnected;
extern NSString * const kNameInputDeviceDelegateDisconnected;
extern NSString * const kNameInputDeviceDelegateDataReceived;
extern NSString * const kNameInputDeviceDelegateCommunicationError;
extern NSString * const kNameDisplayDelegateConnected;
extern NSString * const kNameDisplayDelegateDisconnected;
extern NSString * const kNameDisplayDelegateCommunicationError;
extern NSString * const kNamePrinterFound;
extern NSString * const kNameDiscoveryFinished;

extern NSString * const kNameFirmwareUpdateDelegateProgress;
extern NSString * const kNameFirmwareUpdateDelegateTransmitComplete;
extern NSString * const kNameFirmwareUpdateDelegateError;

@end

NS_ASSUME_NONNULL_END
