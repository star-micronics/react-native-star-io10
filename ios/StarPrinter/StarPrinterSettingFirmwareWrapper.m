#import "StarPrinterSettingFirmwareWrapper.h"
#import <React/RCTLog.h>
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import "EventParameter.h"
@import StarIO10;


@interface StarPrinterSettingFirmwareWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation StarPrinterSettingFirmwareWrapper

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
                 initWithObjectIdentifier:(nonnull NSString *)printerObjID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:printerObjID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarPrinterSettingFirmware *firmware = printer.setting.firmware;
    
    if (firmware == nil) {
        resolve(nil);
        return;
    }
    
    NSString *objID = [_objManager add:firmware];
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

RCT_REMAP_METHOD(activateFirmwareUpdateDelegate,
                 activateFirmwareUpdateDelegateWithObjectIdentifier:(nonnull NSString *)firmwareObjID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterSettingFirmware *firmware = [_objManager getObject:firmwareObjID];
    
    if (firmware == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    firmware.updateDelegate = self;
}

RCT_REMAP_METHOD(getIsUpdatableProp,
                 getIsUpdatablePropWithObjectIdentifier:(nonnull NSString *)printerObjID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:printerObjID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    BOOL isUpdatable = printer.setting.firmware.isUpdatable;
        
    resolve(@(isUpdatable));
}

RCT_REMAP_METHOD(getCurrentVersionProp,
                 getCurrentVersionPropWithObjectIdentifier:(nonnull NSString *)firmwareObjID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterSettingFirmware *firmware = [_objManager getObject:firmwareObjID];
    
    if (firmware == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSString *currentVersion = firmware.currentVersion;
        
    resolve(currentVersion);
}

RCT_REMAP_METHOD(getLatestVersionProp,
                 getLatestVersionPropWithObjectIdentifier:(nonnull NSString *)firmwareObjID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterSettingFirmware *firmware = [_objManager getObject:firmwareObjID];
    
    if (firmware == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSString *latestVersion = firmware.latestVersion;
        
    resolve(latestVersion);
}

RCT_REMAP_METHOD(getCurrentVersion,
                 getCurrentVersionWithObjectIdentifier:(nonnull NSString *)firmwareObjID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterSettingFirmware *firmware = [_objManager getObject:firmwareObjID];
    
    if (firmware == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [firmware getCurrentVersionWithCompletion:^(NSString *currentVersion, NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            resolve(currentVersion);
        }
    }];
}

RCT_REMAP_METHOD(checkVersions,
                 checkVersionsWithObjectIdentifier:(nonnull NSString *)firmwareObjID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterSettingFirmware *firmware = [_objManager getObject:firmwareObjID];
    
    if (firmware == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [firmware checkVersionsWithCompletion:^(NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            resolve(nil);
        }
    }];
}

RCT_REMAP_METHOD(update,
                 updateWithObjectIdentifier:(nonnull NSString *)firmwareObjID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterSettingFirmware *firmware = [_objManager getObject:firmwareObjID];
    
    if (firmware == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [firmware updateWithCompletion:^(NSError *error) {
        if (error) {
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
        } else {
            resolve(nil);
        }
    }];
}

- (NSArray<NSString *> *)supportedEvents
{
    return @[kNameFirmwareUpdateDelegateProgress,
             kNameFirmwareUpdateDelegateTransmitComplete,
             kNameFirmwareUpdateDelegateError,
    ];
}

#pragma mark - Delegate

- (void)firmwareUpdateProgress:(STARIO10StarPrinterSettingFirmware * _Nonnull)firmware step:(enum STARIO10FirmwareUpdateStep)step {
    NSString *objID = [_objManager getExsitingIdentifier:firmware];
    
    NSString *stepString = [StarIO10ValueConverter toStringFromFirmwareUpdateStep:step];
    
    if (objID) {
        [self sendEventWithName:kNameFirmwareUpdateDelegateProgress body:@{kKeyIdentifier: objID, kKeyFirmwareUpdateStep: stepString}];
    }
}

- (void)firmwareUpdateTransmitComplete:(STARIO10StarPrinterSettingFirmware * _Nonnull)firmware {
    NSString *objID = [_objManager getExsitingIdentifier:firmware];
    
    if (objID) {
        [self sendEventWithName:kNameFirmwareUpdateDelegateTransmitComplete body:@{kKeyIdentifier: objID}];
    }
}

- (void)firmwareUpdate:(STARIO10StarPrinterSettingFirmware * _Nonnull)firmware errorDidOccur:(NSError * _Nonnull)error {
    NSString *objID = [_objManager getExsitingIdentifier:firmware];
    NSString *errorID = [self->_objManager add:error];
    
    if (objID) {
        [self sendEventWithName:kNameFirmwareUpdateDelegateError body:@{kKeyIdentifier: objID, kKeyErrorIdentifier: errorID}];
    }
}

@end
