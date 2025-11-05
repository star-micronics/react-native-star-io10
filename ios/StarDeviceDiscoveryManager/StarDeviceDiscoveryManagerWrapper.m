#import "StarDeviceDiscoveryManagerWrapper.h"

#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import "EventParameter.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface StarDeviceDiscoveryManagerWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end


@implementation StarDeviceDiscoveryManagerWrapper

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

RCT_EXPORT_MODULE();


#pragma mark - Method

RCT_REMAP_METHOD(init,
                 createWithInterfaceTypes:(nonnull NSArray<NSString *> *)types
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSMutableArray<NSNumber *> *numberArray = [[NSMutableArray alloc] init];
    
    for (NSString *type in types) {
        STARIO10InterfaceType nativeType = [StarIO10ValueConverter toInterfaceType:type];
        [numberArray addObject:@(nativeType)];
    }

    NSError *error = nil;
    id<STARIO10StarDeviceDiscoveryManager> manager = [STARIO10StarDeviceDiscoveryManagerFactory createWithInterfaceTypes:numberArray error:&error];
    
    if (error) {
        NSString *errorID = [_objManager add:error];
        reject(errorID, error.localizedDescription, nil);
        return;
    }
    
    manager.delegate = self;
    NSString *objID = [_objManager add:manager];
    resolve(objID);
}

RCT_REMAP_METHOD(dispose,
                 disposeWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [_objManager remove:objID];

    resolve(nil);
}

#pragma mark -

RCT_REMAP_METHOD(startDiscovery,
                 startDiscoveryWithObjectIdentifier:(nonnull NSString *)objID
                 discoveryTime:(nonnull NSNumber *)discoveryTime
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    id<STARIO10StarDeviceDiscoveryManager> manager = [_objManager getObject:objID];
    
    if (manager == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    manager.discoveryTime = discoveryTime.integerValue;
    
    NSError *error = nil;
    [manager startDiscoveryWithError:&error];
    
    if (error) {
        NSString *errorID = [_objManager add:error];
        reject(errorID, error.localizedDescription, nil);
        return;
    }
    
    resolve(nil);
}

RCT_REMAP_METHOD(stopDiscovery,
                 stopDiscoveryWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    id<STARIO10StarDeviceDiscoveryManager> manager = [_objManager getObject:objID];
    
    if (manager == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [manager stopDiscovery];
    
    resolve(nil);
}

#pragma mark - Event

- (NSArray<NSString *> *)supportedEvents {
    return @[kNamePrinterFound,
             kNameDiscoveryFinished];
}

- (void)manager:(id<STARIO10StarDeviceDiscoveryManager>)manager didFindPrinter:(STARIO10StarPrinter *)printer {
    NSString* objID = [_objManager getExsitingIdentifier:manager];
    
    if (objID) {
        NSString *interfaceTypeString = [StarIO10ValueConverter toStringFromInterfaceType:printer.connectionSettings.interfaceType];
        NSString *modelString = [StarIO10ValueConverter toStringFromStarPrinterModel:printer.information.model];
        NSString *emulationString = [StarIO10ValueConverter toStringFromStarPrinterEmulation:printer.information.emulation];
        
        NSMutableDictionary *params = [NSMutableDictionary dictionary];
        [params setObject:objID forKey: kKeyIdentifier];
        [params setObject:interfaceTypeString forKey:kKeyInterfaceType];
        [params setObject:printer.connectionSettings.identifier forKey:kKeyConnectionIdentifier];
        [params setObject:modelString forKey:kKeyModel];
        [params setObject:emulationString forKey:kKeyEmulation];
        [params setObject:[StarIO10ValueConverter toJSNamingDictionary:printer.information.reserved] forKey:kKeyReserved];
        
        if([printer.information.detail.lan.macAddress length] >0){
            [params setObject:printer.information.detail.lan.macAddress forKey:kKeyLanMacAddress];
        }
        if([printer.information.detail.lan.ipAddress length] >0){
            [params setObject:printer.information.detail.lan.ipAddress forKey:kKeyLanIPAddress];
        }
        if([printer.information.detail.bluetooth.portName length] >0){
            [params setObject:printer.information.detail.bluetooth.portName forKey:kKeyBluetoothPortName];
        }
        if([printer.information.detail.bluetooth.serialNumber length] >0){
            [params setObject:printer.information.detail.bluetooth.serialNumber forKey:kKeyBluetoothSerialNumber];
        }
        if([printer.information.detail.bluetooth.address length] >0){
            [params setObject:printer.information.detail.bluetooth.address forKey:kKeyBluetoothAddress];
        }
        if([printer.information.detail.bluetoothLE.address length] >0){
            [params setObject:printer.information.detail.bluetoothLE.address forKey:kKeyBluetoothLEAddress];
        }
        if([printer.information.detail.usb.portName length] >0){
            [params setObject:printer.information.detail.usb.portName forKey:kKeyUsbPortName];
        }
        if([printer.information.detail.usb.productSerialNumber length] >0){
            [params setObject:printer.information.detail.usb.productSerialNumber forKey:kKeyUsbProductSN];
        }
        if([printer.information.detail.usb.usbSerialNumber length] >0){
            [params setObject:printer.information.detail.usb.usbSerialNumber forKey:kKeyUsbUsbSN];
        }

        [self sendEventWithName:kNamePrinterFound body:[params copy]];
    }
}

- (void)managerDidFinishDiscovery:(id<STARIO10StarDeviceDiscoveryManager> _Nonnull)manager {
    NSString* objID = [_objManager getExsitingIdentifier:manager];
    
    if (objID) {
        [self sendEventWithName:kNameDiscoveryFinished body:@{kKeyIdentifier: objID}];
    }
}

@end
