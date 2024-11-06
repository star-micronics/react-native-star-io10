#import "StarIO10ErrorDetailWrapper.h"
#import "StarObjectManager.h"
#import <React/RCTLog.h>

@import StarIO10;


@interface StarIO10ErrorDetailWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation StarIO10ErrorDetailWrapper

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

RCT_REMAP_METHOD(dispose,
                 disposeWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [_objManager remove:objID];

    resolve(nil);
}

RCT_REMAP_METHOD(getAutoSwitchInterfaceLanErrorIdentifier,
                 getAutoSwitchInterfaceLanErrorIdentifierWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10ErrorDetail *errorDetail = [_objManager getObject:objID];
    
    if (errorDetail == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSDictionary *openErrors = errorDetail.autoSwitchInterfaceOpenErrors;
    
    if (openErrors == nil) {
        reject(@"Error", @"Fail to get LAN error object.", nil);
        return;
    }
    
    NSObject *lanError = [openErrors objectForKey:[NSNumber numberWithLong:STARIO10InterfaceTypeLAN]];

    if ([lanError isKindOfClass:[NSNull class]]) {
        reject(@"Error", @"Fail to get Bluetooth error object.", nil);
        return;
    }
    
    if ([lanError isKindOfClass:[NSError class]]) {
        NSString *lanErrorID = [self->_objManager add:lanError];
        resolve(lanErrorID);
    }
    else {
        reject(@"Error", @"Fail to get Bluetooth error object.", nil);
    }
}

RCT_REMAP_METHOD(getAutoSwitchInterfaceBluetoothErrorIdentifier,
                 getAutoSwitchInterfaceBluetoothErrorIdentifierWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10ErrorDetail *errorDetail = [_objManager getObject:objID];
    
    if (errorDetail == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSDictionary *openErrors = errorDetail.autoSwitchInterfaceOpenErrors;
    
    if (openErrors == nil) {
        reject(@"Error", @"Fail to get Bluetooth error object.", nil);
        return;
    }
    
    NSObject *bluetoothError = [openErrors objectForKey:[NSNumber numberWithLong:STARIO10InterfaceTypeBluetooth]];

    if ([bluetoothError isKindOfClass:[NSNull class]]) {
        reject(@"Error", @"Fail to get Bluetooth error object.", nil);
        return;
    }
    
    if ([bluetoothError isKindOfClass:[NSError class]]) {
        NSString *bluetoothErrorID = [self->_objManager add:bluetoothError];
        resolve(bluetoothErrorID);
    }
    else {
        reject(@"Error", @"Fail to get Bluetooth error object.", nil);
    }
}

RCT_REMAP_METHOD(getAutoSwitchInterfaceUsbErrorIdentifier,
                 getAutoSwitchInterfaceUsbErrorIdentifierWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10ErrorDetail *errorDetail = [_objManager getObject:objID];
    
    if (errorDetail == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSDictionary *openErrors = errorDetail.autoSwitchInterfaceOpenErrors;
    
    if (openErrors == nil) {
        reject(@"Error", @"Fail to get USB error object.", nil);
        return;
    }
    
    NSObject *usbError = [openErrors objectForKey:[NSNumber numberWithLong:STARIO10InterfaceTypeUSB]];

    if ([usbError isKindOfClass:[NSNull class]]) {
        reject(@"Error", @"Fail to get USB error object.", nil);
        return;
    }
    
    if ([usbError isKindOfClass:[NSError class]]) {
        NSString *usbErrorID = [self->_objManager add:usbError];
        resolve(usbErrorID);
    }
    else {
        reject(@"Error", @"Fail to get USB error object.", nil);
    }
}

RCT_REMAP_METHOD(getAutoSwitchInterfaceBluetoothLEErrorIdentifier,
                 getAutoSwitchInterfaceBluetoothLEErrorIdentifierWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10ErrorDetail *errorDetail = [_objManager getObject:objID];
    
    if (errorDetail == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSDictionary *openErrors = errorDetail.autoSwitchInterfaceOpenErrors;
    
    if (openErrors == nil) {
        reject(@"Error", @"Fail to get BluetoothLE error object.", nil);
        return;
    }
    
    NSObject *bleError = [openErrors objectForKey:[NSNumber numberWithLong:STARIO10InterfaceTypeBluetoothLE]];

    if ([bleError isKindOfClass:[NSNull class]]) {
        reject(@"Error", @"Fail to get BluetoothLE error object.", nil);
        return;
    }
    
    if ([bleError isKindOfClass:[NSError class]]) {
        NSString *bleErrorID = [self->_objManager add:bleError];
        resolve(bleErrorID);
    }
    else {
        reject(@"Error", @"Fail to get BluetoothLE error object.", nil);
    }
}

@end
