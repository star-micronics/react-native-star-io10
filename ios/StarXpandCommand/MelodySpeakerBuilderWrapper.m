#import "MelodySpeakerBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface MelodySpeakerBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation MelodySpeakerBuilderWrapper

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
    STARIO10StarXpandCommandMelodySpeakerBuilder *builder = [[STARIO10StarXpandCommandMelodySpeakerBuilder alloc] init];
    
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

RCT_REMAP_METHOD(actionDriveRegisteredSound,
                 actionDriveRegisteredSoundWithObjectIdentifier:(nonnull NSString *)objID
                 area:(nonnull NSString *)area
                 number:(nonnull NSNumber *)number
                 volume:(nonnull NSNumber *)volume
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandMelodySpeakerBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandMelodySpeakerDriveRegisteredSoundParameter *param = [StarIO10ValueConverter toMelodySpeakerDriveRegisteredSoundParameterWithArea:area number:number volume:volume];
    
    [builder actionDriveRegisteredSound:param];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionDriveOneTimeSound,
                 actionDriveOneTimeSoundWithObjectIdentifier:(nonnull NSString *)objID
                 source:(nonnull NSString *)source
                 volume:(nonnull NSNumber *)volume
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandMelodySpeakerBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandMelodySpeakerDriveOneTimeSoundParameter *param = [StarIO10ValueConverter toMelodySpeakerDriveOneTimeSoundParameterWithSource:source volume:volume];

    if (param == nil) {
        NSDictionary *info = @{
            NSLocalizedDescriptionKey: @"Invalid source.",
            STARIO10ErrorDetailErrorCodeKey: [[NSNumber alloc] initWithInt:STARIO10ErrorCodeNone]
        };
        NSError *error = [[NSError alloc] initWithDomain:@"StarIO10.STARIO10Error" code:STARIO10ErrorArgument userInfo:info];
        NSString *errorID = [self->_objManager add:error];
        reject(errorID, error.localizedDescription, error);
        return;
    }
    
    [builder actionDriveOneTimeSound:param];
    
    resolve(nil);
}

@end
