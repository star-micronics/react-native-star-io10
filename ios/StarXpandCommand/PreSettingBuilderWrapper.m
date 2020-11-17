#import "PreSettingBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarXpandCommandBuilderWrapper.h"

@import StarIO10;

@interface PreSettingBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end


@implementation PreSettingBuilderWrapper

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
    STARIO10StarXpandCommandPreSettingBuilder *builder = [[STARIO10StarXpandCommandPreSettingBuilder alloc] init];
    
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

RCT_REMAP_METHOD(addPresenterSetting,
                 addPresenterSettingWithObjectIdentifier:(nonnull NSString *)objID
                 presenterSettingBuilderIdentifier:(nonnull NSString *)presenterSettingBuilderID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPreSettingBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPreSettingBuilder *presenterSettingBuilder = [_objManager getObject:presenterSettingBuilderID];
    
    if (presenterSettingBuilder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder addPresenterSetting:presenterSettingBuilder];

    resolve(nil);
}

RCT_REMAP_METHOD(addBezelSetting,
                 addBezelSettingWithObjectIdentifier:(nonnull NSString *)objID
                 bezelSettingBuilderIdentifier:(nonnull NSString *)bezelSettingBuilderID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPreSettingBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandBezelSettingBuilder *bezelSettingBuilder = [_objManager getObject:bezelSettingBuilderID];
    if (bezelSettingBuilder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder addBezelSetting:bezelSettingBuilder];

    resolve(nil);
}

@end
