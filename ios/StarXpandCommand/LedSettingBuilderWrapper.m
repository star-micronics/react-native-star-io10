#import "LedSettingBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"

@import StarIO10;

@interface LedSettingBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation LedSettingBuilderWrapper

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
    STARIO10StarXpandCommandLEDSettingBuilder *builder = [[STARIO10StarXpandCommandLEDSettingBuilder alloc] init];
    
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

RCT_REMAP_METHOD(settingAutomaticBlink,
                 settingAutomaticBlinkWithObjectIdentifier:(nonnull NSString *)objID
                 type:(nonnull NSString *)type
                 onTime:(nonnull NSNumber *)onTime
                 offTime:(nonnull NSNumber *)offTime
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandLEDSettingBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandLEDAutomaticBlinkParameter *param = [StarIO10ValueConverter toLEDAutomaticBlinkParameterWithType:type onTime:onTime offTime:offTime];
    
    [builder settingAutomaticBlink:param];
    
    resolve(nil);
}

@end
