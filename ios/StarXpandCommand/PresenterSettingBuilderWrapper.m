#import "PresenterSettingBuilderWrapper.h"
#import "StarObjectManager.h"
#import "../Util/StarIO10ValueConverter.h"

@import StarIO10;

@interface PresenterSettingBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation PresenterSettingBuilderWrapper

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
    STARIO10StarXpandCommandPresenterSettingBuilder *builder = [[STARIO10StarXpandCommandPresenterSettingBuilder alloc] init];
    
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

RCT_REMAP_METHOD(settingMode,
                 settingModeWithObjectIdentifier:(nonnull NSString *)objID
                 loop:(BOOL)loop
                 hold:(BOOL)hold
                 retract:(BOOL)retract
                 holdTime:(nonnull NSNumber *)holdTime
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPresenterSettingBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    STARIO10StarXpandCommandPresenterModeParameter *param = [StarIO10ValueConverter toPresenterModeParameterWithLoop:loop hold:hold retract:retract holdTime:holdTime];
    
    builder = [builder settingMode:param];

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
    STARIO10StarXpandCommandPresenterSettingBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPresenterLEDAutomaticBlinkParameter *parameter = [StarIO10ValueConverter toPresenterLEDAutomaticBlinkParameterWithType:type
                                                                                                                                            onTime:onTime
                                                                                                                                           offTime:offTime];
    
    builder = [builder settingLEDAutomaticBlinkWithParameter:parameter];
    resolve(nil);
}

@end
