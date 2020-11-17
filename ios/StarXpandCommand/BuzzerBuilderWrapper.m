#import "BuzzerBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface BuzzerBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end


@implementation BuzzerBuilderWrapper

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
    STARIO10StarXpandCommandBuzzerBuilder *builder = [[STARIO10StarXpandCommandBuzzerBuilder alloc] init];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to create object.", nil);
        return;
    }
    
    NSString *objID = [_objManager add:builder];
    
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

RCT_REMAP_METHOD(actionDrive,
                 actionDriveWithObjectIdentifier:(nonnull NSString *)objID
                 channel:(nonnull NSString *)channel
                 repeat:(nonnull NSNumber *)repeat
                 onTime:(nonnull NSNumber *)onTime
                 offTime:(nonnull NSNumber *)offTime
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandBuzzerBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandBuzzerDriveParameter *param = [StarIO10ValueConverter toBuzzerDriveParameterWithChannel:channel repeat:repeat onTime:onTime offTime:offTime];
    
    [builder actionDrive:param];
    
    resolve(nil);
}

@end
