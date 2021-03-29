#import "StarPrinterStatusWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>
@import StarIO10;


@interface StarPrinterStatusWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation StarPrinterStatusWrapper

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

RCT_REMAP_METHOD(getHasError,
                 getHasErrorWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    resolve(@(status.hasError));
}

RCT_REMAP_METHOD(getPaperEmpty,
                 getPaperEmptyWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
   
    resolve(@(status.paperEmpty));
}

RCT_REMAP_METHOD(getPaperNearEmpty,
                 getPaperNearEmptyWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    resolve(@(status.paperNearEmpty));
}

RCT_REMAP_METHOD(getCoverOpen,
                 getCoverOpenWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    resolve(@(status.coverOpen));
}

RCT_REMAP_METHOD(getDrawerOpenCloseSignal,
                 getDrawerOpenCloseSignalWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    resolve(@(status.drawerOpenCloseSignal));
}

RCT_REMAP_METHOD(getReserved,
                 getReservedWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    resolve([StarIO10ValueConverter toJSNamingDictionary:status.reserved]);
}

@end
