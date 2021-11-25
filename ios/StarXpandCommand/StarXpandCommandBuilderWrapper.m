#import "StarXpandCommandBuilderWrapper.h"
#import "StarObjectManager.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface StarXpandCommandBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation StarXpandCommandBuilderWrapper

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
    STARIO10StarXpandCommandBuilder *builder = [[STARIO10StarXpandCommandBuilder alloc] init];
    
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

RCT_REMAP_METHOD(setPreSetting,
                 setPreSettingWithObjectIdentifier:(nonnull NSString *)objID
                 preSettingBuilderIdentifier:(nonnull NSString *)preSettingBuilderID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPreSettingBuilder *preSettingBuilder = [_objManager getObject:preSettingBuilderID];
    
    if (preSettingBuilder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder setPreSetting:preSettingBuilder];

    resolve(nil);
}

RCT_REMAP_METHOD(addDocument,
                 addDocumentWithObjectIdentifier:(nonnull NSString *)objID
                 documentBuilderIdentifier:(nonnull NSString *)documentBuilderID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandDocumentBuilder *docBuilder = [_objManager getObject:documentBuilderID];
    if (docBuilder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    builder = [builder addDocument:docBuilder];
    
    resolve(nil);
}

RCT_REMAP_METHOD(getCommands,
                 getCommandsWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    NSString *command = [builder getCommands];

    resolve(command);
}

@end
