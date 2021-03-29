#import "DocumentBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface DocumentBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation DocumentBuilderWrapper

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

/// init(): Promise<string>
RCT_REMAP_METHOD(init,
                 createWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [[STARIO10StarXpandCommandDocumentBuilder alloc] init];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to create object.", nil);
        return;
    }
    
    NSString *objID = [_objManager add:builder];
    
    resolve(objID);
}

/// dispose(objectIdentifier: string): Promise<void>
RCT_REMAP_METHOD(dispose,
                 disposeWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [_objManager remove:objID];
    
    resolve(nil);
}

RCT_REMAP_METHOD(settingTopMargin,
                 settingTopMarginWithObjectIdentifier:(nonnull NSString *)objID
                 height:(nonnull NSNumber *)height
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder settingTopMargin:height.doubleValue];

    resolve(nil);
}

RCT_REMAP_METHOD(settingBlackMark,
                 settingBlackMarkWithObjectIdentifier:(nonnull NSString *)objID
                 enable:(BOOL)enable
                 position:(nonnull NSString *)position
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPrinterBlackMarkParameter *param = [StarIO10ValueConverter toPrinterBlackMarkParameterWithStart:enable position:position];

    [builder settingBlackMark:param];
    
    resolve(nil);
}

RCT_REMAP_METHOD(settingLabel,
                 settingLabelWithObjectIdentifier:(nonnull NSString *)objID
                 enable:(BOOL)enable
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPrinterLabelParameter *param = [StarIO10ValueConverter toPrinterLabelParameterWithStart:enable];
    
    [builder settingLabel:param];
    
    resolve(nil);
}

RCT_REMAP_METHOD(settingHoldPrint,
                 settingHoldPrintWithObjectIdentifier:(nonnull NSString *)objID
                 enable:(BOOL)enable
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPrinterHoldPrintParameter *param = [StarIO10ValueConverter toPrinterHoldPrintParameterWithEnable:enable];
    
    [builder settingHoldPrint:param];
    
    resolve(nil);
}

RCT_REMAP_METHOD(settingPrintableArea,
                 settingPrintableAreaWithObjectIdentifier:(nonnull NSString *)objID
                 width:(nonnull NSNumber *)width
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder settingPrintableArea:width.doubleValue];
    
    resolve(nil);
}

RCT_REMAP_METHOD(addPrinter,
                 addPrinterWithObjectIdentifier:(nonnull NSString *)objID
                 printerBuilderIdentifier:(nonnull NSString *)printerBuilderID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPrinterBuilder *printerRootBuilder = [_objManager getObject:printerBuilderID];
    
    if (printerRootBuilder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder addPrinter:printerRootBuilder];
    
    resolve(nil);
}

RCT_REMAP_METHOD(addDrawer,
                 addDrawerWithObjectIdentifier:(nonnull NSString *)objID
                 drawerBuilderIdentifier:(nonnull NSString *)drawerBuilderID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandDrawerBuilder *drawerBuilder = [_objManager getObject:drawerBuilderID];
    if (drawerBuilder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder addDrawer:drawerBuilder];
    
    resolve(nil);
}

RCT_REMAP_METHOD(addBuzzer,
                 addBuzzerWithObjectIdentifier:(nonnull NSString *)objID
                 buzzerBuilderIdentifier:(nonnull NSString *)buzzerBuilderID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandBuzzerBuilder *buzzerBuilder = [_objManager getObject:buzzerBuilderID];
    if (buzzerBuilder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder addBuzzer:buzzerBuilder];
    
    resolve(nil);
}

RCT_REMAP_METHOD(addMelodySpeaker,
                 addMelodySpeakerWithObjectIdentifier:(nonnull NSString *)objID
                 melodySpeakerBuilderIdentifier:(nonnull NSString *)melodySpeakerBuilderID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandMelodySpeakerBuilder *melodySpeakerBuilder = [_objManager getObject:melodySpeakerBuilderID];
    if (melodySpeakerBuilder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder addMelodySpeaker:melodySpeakerBuilder];
    
    resolve(nil);
}

RCT_REMAP_METHOD(addDisplay,
                 addDisplayWithObjectIdentifier:(nonnull NSString *)objID
                 displayBuilderIdentifier:(nonnull NSString *)displayBuilderID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandDisplayBuilder *displayBuilder = [_objManager getObject:displayBuilderID];
    if (displayBuilder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder addDisplay:displayBuilder];
    
    resolve(nil);
}

RCT_REMAP_METHOD(addRaw,
                 addRawWithObjectIdentifier:(nonnull NSString *)objID
                 content:(nonnull NSArray<NSNumber *> *)content
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandDocumentBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSData *data = [StarIO10ValueConverter toData:content];
    
    [builder addRaw:data];
    
    resolve(nil);
}

@end
