//
//  EventParameter.h
//  react-native-star-io10
//
//  Created by 上田　雄磨 on 2020/10/23.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface EventParameter : NSObject

extern NSString * const kKeyIdentifier;
extern NSString * const kKeyErrorIdentifier;
extern NSString * const kKeyDraweOpenCloseSognalState;
extern NSString * const kKeyInputDeviceData;
extern NSString * const kKeyInterfaceType;
extern NSString * const kKeyConnectionIdentifier;
extern NSString * const kKeyModel;
extern NSString * const kKeyEmulation;
extern NSString * const kKeyReserved;

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

@end

NS_ASSUME_NONNULL_END
