#import "DisplayBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface DisplayBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation DisplayBuilderWrapper

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
    STARIO10StarXpandCommandDisplayBuilder *builder = [[STARIO10StarXpandCommandDisplayBuilder alloc] init];
    
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

RCT_REMAP_METHOD(styleInternationalCharacter,
                 styleInternationalCharacterWithObjectIdentifier:(nonnull NSString *)objID
                 type:(nonnull NSString *)type
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDisplayBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandDisplayInternationalCharacterType nativeType = [StarIO10ValueConverter toDisplayInternationalCharacterType:type];
    
    [builder styleInternationalCharacter:nativeType];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleCharacterEncoding,
                 styleCharacterEncodingWithObjectIdentifier:(nonnull NSString *)objID
                 type:(nonnull NSString *)type
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDisplayBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandDisplayCharacterEncodingType nativeType = [StarIO10ValueConverter toDisplayCharacterEncodingType:type];
    
    [builder styleCharacterEncoding:nativeType];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleCursorPositionTo,
                 styleCursorPositionToWithObjectIdentifier:(nonnull NSString *)objID
                 x:(nonnull NSNumber *)x
                 y:(nonnull NSNumber *)y
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDisplayBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandDisplayPositionParameter *param = [StarIO10ValueConverter toDisplayPositionParameterWithX:x y:y];
    
    [builder styleCursorPositionTo:param];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionClearLine,
                 actionClearLineWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDisplayBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder actionClearLine];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionClearAll,
                 actionClearAllWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDisplayBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder actionClearAll];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionSetBackLightState,
                 actionSetBackLightStateWithObjectIdentifier:(nonnull NSString *)objID
                 on:(BOOL)on
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDisplayBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder actionSetBackLightState:on];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionSetCursorState,
                 actionSetCursorStateWithObjectIdentifier:(nonnull NSString *)objID
                 state:(nonnull NSString *)state
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDisplayBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandDisplayCursorState nativeState = [StarIO10ValueConverter toDisplayCursorState:state];
    
    [builder actionSetCursorState:nativeState];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionSetContrast,
                 actionSetContrastWithObjectIdentifier:(nonnull NSString *)objID
                 value:(nonnull NSString *)value
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDisplayBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandDisplayContrast nativeValue = [StarIO10ValueConverter toDisplayContrast:value];
    
    [builder actionSetContrast:nativeValue];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionShowText,
                 actionShowTextWithObjectIdentifier:(nonnull NSString *)objID
                 content:(nonnull NSString *)content
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDisplayBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    [builder actionShowText:content];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionShowImage,
                 actionShowImageWithObjectIdentifier:(nonnull NSString *)objID
                 source:(nonnull NSString *)source
                 effectDiffusion:(BOOL)effectDiffusion
                 threshold:(nonnull NSNumber *)threshold
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDisplayBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandDisplayImageParameter *param = [StarIO10ValueConverter toDisplayImageParameterWithSource:source
                                                                                                     effectDiffusion:effectDiffusion
                                                                                                           threshold:threshold];
    
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
    
    [builder actionShowImage:param];
     
    resolve(nil);
}

@end
