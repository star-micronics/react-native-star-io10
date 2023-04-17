//
//  StarPrinterWrapper.m
//  StarIO10
//
//  Created by u3237 on 2020/07/22.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "StarPrinterWrapper.h"
#import <React/RCTLog.h>
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import "EventParameter.h"

@interface StarPrinterWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end


@implementation StarPrinterWrapper

- (instancetype)init
{
    self = [super init];
    if (self) {
        _objManager = StarObjectManager.sharedManager;
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}


RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(init,
                 createWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [[STARIO10StarPrinter alloc] initWithConnectionSettings:[[STARIO10StarConnectionSettings alloc]
                                                                                            initWithInterfaceType:STARIO10InterfaceTypeUnknown
                                                                                            identifier:STARIO10StarConnectionSettingsFirstFoundDevice
                                                                                            autoSwitchInterface:false]];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to create object.", nil);
        return;
    }
    
    NSString *objID = [_objManager add:printer];
    resolve(objID);
}

RCT_REMAP_METHOD(dispose,
                 disposeWithNativeObject:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [_objManager remove:objID];
    resolve(nil);
}

#pragma mark -

RCT_REMAP_METHOD(activatePrinterDelegate,
                 activatePrinterDelegateWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.printerDelegate = self;
}

RCT_REMAP_METHOD(activateDrawerDelegate,
                 activateDrawerDelegateWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.drawerDelegate = self;
}

RCT_REMAP_METHOD(activateInputDeviceDelegate,
                 activateInputDeviceDelegateWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.inputDeviceDelegate = self;
}

RCT_REMAP_METHOD(activateDisplayDelegate,
                 activateDisplayDelegateWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.displayDelegate = self;
}

#pragma mark -

RCT_REMAP_METHOD(getModel,
                 getModelWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSString *result = [StarIO10ValueConverter toStringFromStarPrinterModel:printer.information.model];
    
    resolve(result);
}

RCT_REMAP_METHOD(getEmulation,
                 getEmulationWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSString *result = [StarIO10ValueConverter toStringFromStarPrinterEmulation:printer.information.emulation];
    
    resolve(result);
}

RCT_REMAP_METHOD(getReserved,
                 getReservedWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    resolve([StarIO10ValueConverter toJSNamingDictionary:printer.information.reserved]);
}

#pragma mark -

RCT_REMAP_METHOD(open,
                 openWithObjectIdentifier:(nonnull NSString *)objID
                 interfaceType:(nonnull NSString *)interfaceType
                 identifier:(nonnull NSString *)identifier
                 openTimeout:(nonnull NSNumber *)openTimeout
                 autoSwitchInterface:(BOOL)autoSwitchInterface
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10InterfaceType nativeInterfaceType = [StarIO10ValueConverter toInterfaceType:interfaceType];
    
    printer.openTimeout = openTimeout.integerValue;
    printer.connectionSettings.identifier = identifier;
    printer.connectionSettings.interfaceType = nativeInterfaceType;
    printer.connectionSettings.autoSwitchInterface = autoSwitchInterface;

    [printer openWithCompletion:^(NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            resolve(nil);
        }
    }];
}

RCT_REMAP_METHOD(printRawData,
                 printRawDataWithObjectIdentifier:(nonnull NSString *)objID
                 dataArray:(nonnull NSArray<NSNumber *> *)dataArray
                 printTimeout:(nonnull NSNumber *)printTimeout
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSData *data = [StarIO10ValueConverter toData:dataArray];
    
    printer.printTimeout = printTimeout.integerValue;
    
    [printer printWithRaw:data completion:^(NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            resolve(nil);
        }
    }];
}

RCT_REMAP_METHOD(print,
                 printWithObjectIdentifier:(nonnull NSString *)objID
                 code:(nonnull NSString *)code
                 printTimeout:(nonnull NSNumber *)printTimeout
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.printTimeout = printTimeout.integerValue;

    [printer printWithCommand:code completion:^(NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            resolve(nil);
        }
    }];
}

RCT_REMAP_METHOD(spoolPrint,
                 spoolPrintWithObjectIdentifier:(nonnull NSString *)objID
                 code:(nonnull NSString *)code
                 isRetryEnabled:(BOOL)isRetryEnabled
                 retryTimeout:(nonnull NSNumber *)retryTimeout
                 note:(NSString *)note
                 printTimeout:(nonnull NSNumber *)printTimeout
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.printTimeout = printTimeout.integerValue;

    STARIO10StarSpoolJobSettings *jobSettings = [[STARIO10StarSpoolJobSettings alloc] initWithIsRetryEnabled:isRetryEnabled
                                                                                                     timeout:retryTimeout.integerValue
                                                                                                        note:note];
        
    [printer printWithCommand:code starSpoolJobSettings:jobSettings completionHandler:^(NSInteger jobId, NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            resolve([NSNumber numberWithInteger:jobId]);
        }
    }];
}

RCT_REMAP_METHOD(getStatus,
                 getStatusWithObjectIdentifier:(nonnull NSString *)objID
                 getStatusTimeout:(nonnull NSNumber *)getStatusTimeout
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.getStatusTimeout = getStatusTimeout.integerValue;
    
    [printer getStatusWithCompletion:^(STARIO10StarPrinterStatus *status, NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            NSString *statusID = [self.objManager add:status];
            resolve(statusID);
        }
    }];
}

RCT_REMAP_METHOD(getSpoolJobStatus,
                 getSpoolJobStatusWithObjectIdentifier:(nonnull NSString *)objID
                 jobId:(nonnull NSNumber *)jobId
                 getStatusTimeout:(nonnull NSNumber *)getStatusTimeout
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.getStatusTimeout = getStatusTimeout.integerValue;
    
    [printer getSpoolJobStatusWithJobId:jobId.integerValue completionHandler:^(STARIO10StarSpoolJobStatus *status, NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            NSString *statusID = [self.objManager add:status];
            resolve(statusID);
        }
    }];
}

RCT_REMAP_METHOD(getSpoolJobStatusList,
                 getSpoolJobStatusListWithObjectIdentifier:(nonnull NSString *)objID
                 size:(nonnull NSNumber *)size
                 getStatusTimeout:(nonnull NSNumber *)getStatusTimeout
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.getStatusTimeout = getStatusTimeout.integerValue;
    
    [printer getSpoolJobStatusListWithSize:size.integerValue completionHandler:^(NSArray<STARIO10StarSpoolJobStatus *> *statusList, NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            NSString *statusListID = [self.objManager add:statusList];
            resolve(statusListID);
        }
    }];
}

RCT_REMAP_METHOD(getStarConfiguration,
                 getStarConfigurationWithObjectIdentifier:(nonnull NSString *)objID
                 password:(NSString *)password
                 starConfigurationTimeout:(nonnull NSNumber *)starConfigurationTimeout
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.starConfigurationTimeout = starConfigurationTimeout.integerValue;
    
    [printer getStarConfigurationWithPassword:password completion:^(NSString *starConfig, NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            resolve(starConfig);
        }
    }];
}

RCT_REMAP_METHOD(getDefaultStarConfiguration,
                 getDefaultStarConfigurationWithObjectIdentifier:(nonnull NSString *)objID
                 starConfigurationTimeout:(nonnull NSNumber *)starConfigurationTimeout
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.starConfigurationTimeout = starConfigurationTimeout.integerValue;
    
    [printer getDefaultStarConfigurationWithCompletion:^(NSString *starConfig, NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            resolve(starConfig);
        }
    }];
}

RCT_REMAP_METHOD(setStarConfiguration,
                 setStarConfigurationWithObjectIdentifier:(nonnull NSString *)objID
                 starConfiguration:(nonnull NSString *)starConfiguration
                 starConfigurationTimeout:(nonnull NSNumber *)starConfigurationTimeout
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    printer.starConfigurationTimeout = starConfigurationTimeout.integerValue;
    
    [printer setStarConfigurationWithStarConfiguration:starConfiguration completionHandler:^(STARIO10StarConfigurationSetResult result, NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            resolve([StarIO10ValueConverter toStringFromStarConfigurationSetResult:result]);
        }
    }];
}

RCT_REMAP_METHOD(close,
                 closeWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:objID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [printer closeWithCompletion:^{
        resolve(nil);
    }];
}

#pragma mark - Delegate

- (NSArray<NSString *> *)supportedEvents
{
    return @[kNamePrinterDelegateReady,
             kNamePrinterDelegateError,
             kNamePrinterDelegatePaperReady,
             kNamePrinterDelegatePaperNearEmpty,
             kNamePrinterDelegatePaperEmpty,
             kNamePrinterDelegateCoverOpened,
             kNamePrinterDelegateCoverClosed,
             kNamePrinterDelegateCommunicationError,
             kNameDrawerDelegateOpenCloseSignalSwitched,
             kNameDrawerDelegateCommunicationError,
             kNameInputDeviceDelegateConnected,
             kNameInputDeviceDelegateDisconnected,
             kNameInputDeviceDelegateDataReceived,
             kNameInputDeviceDelegateCommunicationError,
             kNameDisplayDelegateConnected,
             kNameDisplayDelegateDisconnected,
             kNameDisplayDelegateCommunicationError
    ];
}

- (void)printer:(STARIO10StarPrinter * _Nonnull)printer communicationErrorDidOccur:(NSError * _Nonnull)error
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    NSString *errorID = [self->_objManager add:error];
    
    if (objID) {
        [self sendEventWithName:kNamePrinterDelegateCommunicationError body:@{kKeyIdentifier: objID, kKeyErrorIdentifier: errorID}];
    }
}

- (void)printerIsReady:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNamePrinterDelegateReady body:@{kKeyIdentifier: objID}];
    }
}

- (void)printerDidHaveError:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNamePrinterDelegateError body:@{kKeyIdentifier: objID}];
    }
}

- (void)printerIsPaperReady:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNamePrinterDelegatePaperReady body:@{kKeyIdentifier: objID}];
    }
}

- (void)printerIsPaperNearEmpty:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNamePrinterDelegatePaperNearEmpty body:@{kKeyIdentifier: objID}];
    }
}

- (void)printerIsPaperEmpty:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNamePrinterDelegatePaperEmpty body:@{kKeyIdentifier: objID}];
    }
}

- (void)printerIsCoverOpen:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNamePrinterDelegateCoverOpened body:@{kKeyIdentifier: objID}];
    }
}

- (void)printerIsCoverClose:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNamePrinterDelegateCoverClosed body:@{kKeyIdentifier: objID}];
    }
}

- (void)drawerWithPrinter:(STARIO10StarPrinter * _Nonnull)printer communicationErrorDidOccur:(NSError * _Nonnull)error
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    NSString *errorID = [self->_objManager add:error];
    
    if (objID) {
        [self sendEventWithName:kNameDrawerDelegateCommunicationError body:@{kKeyIdentifier: objID, kKeyErrorIdentifier: errorID}];
    }
}

- (void)drawerWithPrinter:(STARIO10StarPrinter * _Nonnull)printer didSwitch:(BOOL)openCloseSignal
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNameDrawerDelegateOpenCloseSignalSwitched body:@{kKeyIdentifier: objID, kKeyDraweOpenCloseSognalState: @(openCloseSignal)}];
    }
}

- (void)inputDeviceWithPrinter:(STARIO10StarPrinter * _Nonnull)printer communicationErrorDidOccur:(NSError * _Nonnull)error
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    NSString *errorID = [self->_objManager add:error];
    
    if (objID) {
        [self sendEventWithName:kNameInputDeviceDelegateCommunicationError body:@{kKeyIdentifier: objID, kKeyErrorIdentifier: errorID}];
    }
}

- (void)inputDeviceDidConnectWithPrinter:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNameInputDeviceDelegateConnected body:@{kKeyIdentifier: objID}];
    }
}

- (void)inputDeviceDidDisconnectWithPrinter:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNameInputDeviceDelegateDisconnected body:@{kKeyIdentifier: objID}];
    }
}

- (void)inputDeviceWithPrinter:(STARIO10StarPrinter * _Nonnull)printer didReceive:(NSData * _Nonnull)data
{
    NSString* objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        NSArray<NSNumber *> *numberArray = [StarIO10ValueConverter toNumberArray:data];
        
        [self sendEventWithName:kNameInputDeviceDelegateDataReceived body:@{kKeyIdentifier: objID, kKeyInputDeviceData: numberArray}];
    }
}

- (void)displayWithPrinter:(STARIO10StarPrinter * _Nonnull)printer communicationErrorDidOccur:(NSError * _Nonnull)error
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    NSString *errorID = [self->_objManager add:error];
    
    if (objID) {
        [self sendEventWithName:kNameDisplayDelegateCommunicationError body:@{kKeyIdentifier: objID, kKeyErrorIdentifier: errorID}];
    }
}

- (void)displayDidConnectWithPrinter:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNameDisplayDelegateConnected body:@{kKeyIdentifier: objID}];
    }
}

- (void)displayDidDisconnectWithPrinter:(STARIO10StarPrinter * _Nonnull)printer
{
    NSString *objID = [_objManager getExsitingIdentifier:printer];
    
    if (objID) {
        [self sendEventWithName:kNameDisplayDelegateDisconnected body:@{kKeyIdentifier: objID}];
    }
}

@end
