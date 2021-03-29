#import "PageModeBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface PageModeBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation PageModeBuilderWrapper

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
    STARIO10StarXpandCommandPageModeBuilder *builder = [[STARIO10StarXpandCommandPageModeBuilder alloc] init];
    
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

RCT_REMAP_METHOD(stylePrintDirection,
                 stylePrintDirectionWithObjectIdentifier:(nonnull NSString *)objID
                 direction:(nonnull NSString *)direction
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPrinterPageModePrintDirection directionType = [StarIO10ValueConverter toPrinterPageModePrintDirection:direction];

    [builder stylePrintDirection:directionType];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleFont,
                 styleFontWithObjectIdentifier:(nonnull NSString *)objID
                 type:(nonnull NSString *)type
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPrinterFontType nativeType = [StarIO10ValueConverter toPrinterFontType:type];
    
    [builder styleFont:nativeType];

    resolve(nil);
}

RCT_REMAP_METHOD(styleBold,
                 styleBoldWithObjectIdentifier:(nonnull NSString *)objID
                 enable:(BOOL)enable
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder styleBold:enable];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleInvert,
                 styleInvertWithObjectIdentifier:(nonnull NSString *)objID
                 enable:(BOOL)enable
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder styleInvert:enable];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleUnderLine,
                 styleUnderLineWithObjectIdentifier:(nonnull NSString *)objID
                 enable:(BOOL)enable
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder styleUnderLine:enable];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleMagnification,
                 styleMagnificationWithObjectIdentifier:(nonnull NSString *)objID
                 width:(nonnull NSNumber *)width
                 height:(nonnull NSNumber *)height
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandMagnificationParameter *param = [StarIO10ValueConverter toMagnificationParameterWithWidth:width height:height];
    
    [builder styleMagnification:param];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleCharacterSpace,
                 styleCharacterSpaceWithObjectIdentifier:(nonnull NSString *)objID
                 width:(nonnull NSNumber *)width
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder styleCharacterSpace:width.doubleValue];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleLineSpace,
                 styleLineSpaceWithObjectIdentifier:(nonnull NSString *)objID
                 height:(nonnull NSNumber *)height
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder styleLineSpace:height.doubleValue];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleVerticalPositionTo,
                 styleVerticalPositionToWithObjectIdentifier:(nonnull NSString *)objID
                 position:(nonnull NSNumber *)position
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    [builder styleVerticalPositionTo:position.doubleValue];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleVerticalPositionBy,
                 styleVerticalPositionByWithObjectIdentifier:(nonnull NSString *)objID
                 position:(nonnull NSNumber *)position
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder styleVerticalPositionBy:position.doubleValue];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleHorizontalPositionTo,
                 styleHorizontalPositionToWithObjectIdentifier:(nonnull NSString *)objID
                 position:(nonnull NSNumber *)position
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    [builder styleHorizontalPositionTo:position.doubleValue];
    
    resolve(nil);
}

RCT_REMAP_METHOD(styleHorizontalPositionBy,
                 styleHorizontalPositionByWithObjectIdentifier:(nonnull NSString *)objID
                 position:(nonnull NSNumber *)position
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
 
    [builder styleHorizontalPositionBy:position.doubleValue];
     
    resolve(nil);
}

RCT_REMAP_METHOD(styleHorizontalTabPositions,
                 styleHorizontalTabPositionsWithObjectIdentifier:(nonnull NSString *)objID
                 positions:(nonnull NSArray<NSNumber *> *)positions
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
     if (builder == nil) {
         reject(@"Error", @"Fail to get object.", nil);
         return;
    }
    
    [builder styleHorizontalTabPositions:positions];
     
    resolve(nil);
}

RCT_REMAP_METHOD(styleInternationalCharacter,
                 styleInternationalCharacterWithObjectIdentifier:(nonnull NSString *)objID
                 type:(nonnull NSString *)type
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    STARIO10StarXpandCommandPrinterInternationalCharacterType nativeType = [StarIO10ValueConverter toPrinterInternationalCharacterType:type];
    
    [builder styleInternationalCharacter:nativeType];
     
    resolve(nil);
}

RCT_REMAP_METHOD(styleSecondPriorityCharacterEncoding,
                 styleSecondPriorityCharacterEncodingWithObjectIdentifier:(nonnull NSString *)objID
                 types:(nonnull NSString *)type
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPrinterCharacterEncodingType nativeType = [StarIO10ValueConverter toPrinterCharacterEncodingType:type];
    
    [builder styleSecondPriorityCharacterEncoding:nativeType];
     
    resolve(nil);
}

RCT_REMAP_METHOD(styleCjkCharacterPriority,
                 styleCjkCharacterPriorityWithObjectIdentifier:(nonnull NSString *)objID
                 types:(nonnull NSArray<NSString *> *)types
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    NSArray<NSNumber *> *nativeTypes = [StarIO10ValueConverter toPrinterCJKCharacterPriorityTypes:types];
    
    [builder styleCJKCharacterPriority:nativeTypes];
     
    resolve(nil);
}

RCT_REMAP_METHOD(actionPrintText,
                 actionPrintTextWithObjectIdentifier:(nonnull NSString *)objID
                 content:(nonnull NSString *)content
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    [builder actionPrintText:content];
     
    resolve(nil);
}

RCT_REMAP_METHOD(actionPrintBarcode,
                 actionPrintBarcodeWithObjectIdentifier:(nonnull NSString *)objID
                 content:(nonnull NSString *)content
                 symbology:(nonnull NSString *)symbology
                 printHRI:(BOOL)printHRI
                 barDots:(nonnull NSNumber *)barDots
                 barRatioLevel:(nonnull NSString *)barRatioLevel
                 height:(nonnull NSNumber *)height
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    STARIO10StarXpandCommandPrinterBarcodeParameter *param = [StarIO10ValueConverter toPrinterBarcodeParameterWithContent:content
                                                                                                                symbology:symbology
                                                                                                                 printHRI:printHRI
                                                                                                                  barDots:barDots
                                                                                                            barRatioLevel:barRatioLevel
                                                                                                                   height:height];

    [builder actionPrintBarcode:param];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionPrintPdf417,
                 actionPrintPdf417WithObjectIdentifier:(nonnull NSString *)objID
                 content:(nonnull NSString *)content
                 column:(nonnull NSNumber *)column
                 line:(nonnull NSNumber *)line
                 module:(nonnull NSNumber *)module
                 aspect:(nonnull NSNumber *)aspect
                 level:(nonnull NSString *)level
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPrinterPDF417Parameter *param = [StarIO10ValueConverter toPrinterPDF417ParameterWithContent:content
                                                                                                                 column:column
                                                                                                                   line:line
                                                                                                                 module:module
                                                                                                                 aspect:aspect
                                                                                                                  level:level];

    [builder actionPrintPDF417:param];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionPrintQRCode,
                 actionPrintQRCodeWithObjectIdentifier:(nonnull NSString *)objID
                 content:(nonnull NSString *)content
                 model:(nonnull NSString *)model
                 level:(nonnull NSString *)level
                 cellSize:(nonnull NSNumber *)cellSize
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPrinterQRCodeParameter *param = [StarIO10ValueConverter toPrinterQRCodeParameterWithContent:content
                                                                                                                  model:model
                                                                                                                  level:level
                                                                                                               cellSize:cellSize];

    [builder actionPrintQRCode:param];
    
    resolve(nil);
}

RCT_REMAP_METHOD(actionPrintImage,
                 actionPrintImageWithObjectIdentifier:(nonnull NSString *)objID
                 source:(nonnull NSString *)source
                 width:(nonnull NSNumber *)width
                 effectDiffusion:(BOOL)effectDiffusion
                 threshold:(nonnull NSNumber *)threshold
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPrinterImageParameter *param = [StarIO10ValueConverter toPrinterImageParameterWithSource:source
                                                                                                               width:width
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
    
    [builder actionPrintImage:param];
    
    resolve(nil);
}

RCT_REMAP_METHOD(add,
                 addWithObjectIdentifier:(nonnull NSString *)objID
                 pageModeBuilderIdentifier:(nonnull NSString *)pageModeBuilderID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarXpandCommandPageModeBuilder *builder = [_objManager getObject:objID];
    
    if (builder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarXpandCommandPageModeBuilder *pageModeBuilder = [_objManager getObject:pageModeBuilderID];
    if (pageModeBuilder == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }

    [builder add:pageModeBuilder];
    
    resolve(nil);
}
@end
