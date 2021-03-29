#import "BezelSettingBuilderWrapper.h"
#import "../Util/StarIO10ValueConverter.h"
#import "StarObjectManager.h"

@import StarIO10;

@interface BezelSettingBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation BezelSettingBuilderWrapper

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
    STARIO10StarXpandCommandBezelSettingBuilder *builder = [[STARIO10StarXpandCommandBezelSettingBuilder alloc] init];
    
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

RCT_REMAP_METHOD(settingAutomaticPageLength,
                 settingAutomaticPageLengthWithObjectIdentifier:(nonnull NSString *)objID
                 enable:(BOOL)enable
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandBezelSettingBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder settingAutomaticPageLength:enable];
    
    resolve(nil);
}

RCT_REMAP_METHOD(settingLedAutomaticBlink,
                 settingLedAutomaticBlinkWithObjectIdentifier:(nonnull NSString *)objID
                 type:(nonnull NSString *)type
                 onTime:(nonnull NSNumber *)onTime
                 offTime:(nonnull NSNumber *)offTime
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandBezelSettingBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandBezelLEDAutomaticBlinkParameter *parameter = [StarIO10ValueConverter toBezelLEDAutomaticBlinkParameterWithType:type
                                                                                                                                    onTime:onTime
                                                                                                                                   offTime:offTime];
    [builder settingLEDAutomaticBlink:parameter];

    resolve(nil);
}

@end
