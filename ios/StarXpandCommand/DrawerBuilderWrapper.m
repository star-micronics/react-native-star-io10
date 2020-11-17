#import "DrawerBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface DrawerBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation DrawerBuilderWrapper

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
    STARIO10StarXpandCommandDrawerBuilder *builder = [[STARIO10StarXpandCommandDrawerBuilder alloc] init];
    
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

RCT_REMAP_METHOD(actionOpen,
                 actionOpenWithObjectIdentifier:(nonnull NSString *)objID
                 channel:(nonnull NSString *)channel
                 onTime:(nonnull NSNumber *)onTime
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDrawerBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandDrawerOpenParameter *param = [StarIO10ValueConverter toDrawerOpenParameterWithChannel:channel onTime:onTime];
  
    [builder actionOpen:param];

    resolve(nil);
}

@end
