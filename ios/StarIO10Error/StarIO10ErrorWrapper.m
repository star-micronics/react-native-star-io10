#import "StarIO10ErrorWrapper.h"
#import "StarObjectManager.h"
#import <React/RCTLog.h>

@import StarIO10;


@interface StarIO10ErrorWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation StarIO10ErrorWrapper

NSString * const kSTARIO10ErrorTypeArgument = @"Argument";
NSString * const kSTARIO10ErrorTypeBadResponse = @"BadResponse";
NSString * const kSTARIO10ErrorTypeCommunication = @"Communication";
NSString * const kSTARIO10ErrorTypeIllegalDeviceState = @"IllegalDeviceState";
NSString * const kSTARIO10ErrorTypeInUse = @"InUse";
NSString * const kSTARIO10ErrorTypeInvalidOperation = @"InvalidOperation";
NSString * const kSTARIO10ErrorTypeNotFound = @"NotFound";
NSString * const kSTARIO10ErrorTypeUnprintable = @"Unprintable";
NSString * const kSTARIO10ErrorTypeUnknown = @"Unknown";

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

RCT_REMAP_METHOD(getType,
                 getTypeWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSError *error = [_objManager getObject:objID];
    
    if (error == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSString *type = nil;
    
    switch (error.code) {
        case STARIO10ErrorArgument:
            type = kSTARIO10ErrorTypeArgument;
            break;
            
        case STARIO10ErrorBadResponse:
            type = kSTARIO10ErrorTypeBadResponse;
            break;
            
        case STARIO10ErrorCommunication:
            type = kSTARIO10ErrorTypeCommunication;
            break;
            
        case STARIO10ErrorIllegalDeviceState:
            type = kSTARIO10ErrorTypeIllegalDeviceState;
            break;
            
        case STARIO10ErrorInUse:
            type = kSTARIO10ErrorTypeInUse;
            break;
            
        case STARIO10ErrorInvalidOperation:
            type = kSTARIO10ErrorTypeInvalidOperation;
            break;
            
        case STARIO10ErrorNotFound:
            type = kSTARIO10ErrorTypeNotFound;
            break;
            
        case STARIO10ErrorUnprintable:
            type = kSTARIO10ErrorTypeUnprintable;
            break;
            
        case STARIO10ErrorUnknown:
            type = kSTARIO10ErrorTypeUnknown;
            break;

        default:
            break;
    }
    
    resolve(type);
}

RCT_REMAP_METHOD(getMessage,
                 getMessageWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSError *error = [_objManager getObject:objID];
    
    if (error == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    resolve(error.localizedDescription);
}

RCT_REMAP_METHOD(getErrorCode,
                 getErrorCodeWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSError *error = [_objManager getObject:objID];
    
    if (error == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSNumber *errorCodeNumber = [error.userInfo objectForKey:STARIO10ErrorDetailErrorCodeKey];
    
    if(errorCodeNumber == nil) {
        reject(@"Error", @"Error code is undefined.", nil);
        return;
    }
    
    resolve(@([errorCodeNumber intValue]));
}

RCT_REMAP_METHOD(getStatus,
                 getStatusWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSError *error = [_objManager getObject:objID];
    
    if (error == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarPrinterStatus *status = [error.userInfo objectForKey:STARIO10ErrorStatusKey];
    
    if(status == nil) {
        reject(@"Error", @"Status is undefined.", nil);
        return;
    }
    
    NSString *statusID = [_objManager add:status];

    resolve(statusID);
}

@end
