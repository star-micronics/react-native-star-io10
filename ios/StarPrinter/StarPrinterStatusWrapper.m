#import "StarPrinterStatusWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>
@import StarIO10;


@interface StarPrinterStatusWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation StarPrinterStatusWrapper

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

RCT_REMAP_METHOD(dispose,
                 disposeWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [_objManager remove:objID];
 
    resolve(nil);
}

RCT_REMAP_METHOD(getHasError,
                 getHasErrorWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    resolve(@(status.hasError));
}

RCT_REMAP_METHOD(getPaperEmpty,
                 getPaperEmptyWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
   
    resolve(@(status.paperEmpty));
}

RCT_REMAP_METHOD(getPaperNearEmpty,
                 getPaperNearEmptyWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    resolve(@(status.paperNearEmpty));
}

RCT_REMAP_METHOD(getCoverOpen,
                 getCoverOpenWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    resolve(@(status.coverOpen));
}

RCT_REMAP_METHOD(getDrawerOpenCloseSignal,
                 getDrawerOpenCloseSignalWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    resolve(@(status.drawerOpenCloseSignal));
}

RCT_REMAP_METHOD(getCutterError,
                 getCutterErrorWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullableCutterError = status.detail.nullableCutterError;
    
    if (nullableCutterError != nil) {
        resolve(@(nullableCutterError.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getDetectedPaperWidth,
                 getDetectedPaperWidthWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableInt *nullableDetectedPaperWidth = status.detail.nullableDetectedPaperWidth;
    
    if (nullableDetectedPaperWidth != nil) {
        resolve(@(nullableDetectedPaperWidth.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getDrawerOpenError,
                 getDrawerOpenErrorWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullableDrawerOpenError = status.detail.nullableDrawerOpenError;
    
    if (nullableDrawerOpenError != nil) {
        resolve(@(nullableDrawerOpenError.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getPaperJamError,
                 getPaperJamErrorWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullablePaperJamError = status.detail.nullablePaperJamError;
    
    if (nullablePaperJamError != nil) {
        resolve(@(nullablePaperJamError.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getPaperPresent,
                 getPaperPresentWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullablePaperPresent = status.detail.nullablePaperPresent;
    
    if (nullablePaperPresent != nil) {
        resolve(@(nullablePaperPresent.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getPaperSeparatorError,
                 getPaperSeparatorErrorWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullablePaperSeparatorError = status.detail.nullablePaperSeparatorError;
    
    if (nullablePaperSeparatorError != nil) {
        resolve(@(nullablePaperSeparatorError.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getDrawer1OpenedMethod,
                 getDrawer1OpenedMethodWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableDrawerOpenedMethod *nullableDrawer1OpenedMethod = status.detail.nullableDrawer1OpenedMethod;
    
    if (nullableDrawer1OpenedMethod != nil) {
        resolve(([StarIO10ValueConverter toStringFromDrawerOpenedMethod:nullableDrawer1OpenedMethod.value]));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getDrawer1OpenCloseSignal,
                 getDrawer1OpenCloseSignalWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullableDrawer1OpenCloseSignal = status.detail.nullableDrawer1OpenCloseSignal;
    
    if (nullableDrawer1OpenCloseSignal != nil) {
        resolve(@(nullableDrawer1OpenCloseSignal.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getDrawer2OpenedMethod,
                 getDrawer2OpenedMethodWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableDrawerOpenedMethod *nullableDrawer2OpenedMethod = status.detail.nullableDrawer2OpenedMethod;
    
    if (nullableDrawer2OpenedMethod != nil) {
        resolve(([StarIO10ValueConverter toStringFromDrawerOpenedMethod:nullableDrawer2OpenedMethod.value]));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getDrawer2OpenCloseSignal,
                 getDrawer2OpenCloseSignalWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullableDrawer2OpenCloseSignal = status.detail.nullableDrawer2OpenCloseSignal;
    
    if (nullableDrawer2OpenCloseSignal != nil) {
        resolve(@(nullableDrawer2OpenCloseSignal.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getExternalDevice1Connected,
                 getExternalDevice1ConnectedWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullableExternalDevice1Connected = status.detail.nullableExternalDevice1Connected;
    
    if (nullableExternalDevice1Connected != nil) {
        resolve(@(nullableExternalDevice1Connected.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getExternalDevice2Connected,
                 getExternalDevice2ConnectedWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullableExternalDevice2Connected = status.detail.nullableExternalDevice2Connected;
    
    if (nullableExternalDevice2Connected != nil) {
        resolve(@(nullableExternalDevice2Connected.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getPartsReplacementNotification,
                 getPartsReplacementNotificationWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullablePartsReplacementNotification = status.detail.nullablePartsReplacementNotification;
    
    if (nullablePartsReplacementNotification != nil) {
        resolve(@(nullablePartsReplacementNotification.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getPrintUnitOpen,
                 getPrintUnitOpenWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullablePrintUnitOpen = status.detail.nullablePrintUnitOpen;
    
    if (nullablePrintUnitOpen != nil) {
        resolve(@(nullablePrintUnitOpen.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getCleaningNotification,
                 getCleaningNotificationWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullableCleaningNotification = status.detail.nullableCleaningNotification;
    
    if (nullableCleaningNotification != nil) {
        resolve(@(nullableCleaningNotification.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getRollPositionError,
                 getRollPositionErrorWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10NullableBool *nullableRollPositionError = status.detail.nullableRollPositionError;
    
    if (nullableRollPositionError != nil) {
        resolve(@(nullableRollPositionError.value));
    }
    else {
        resolve(nil);
    }
}

RCT_REMAP_METHOD(getReserved,
                 getReservedWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinterStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    resolve([StarIO10ValueConverter toJSNamingDictionary:status.reserved]);
}

@end
