#import "StarPrinterSettingWrapper.h"
#import <React/RCTLog.h>
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
@import StarIO10;


@interface StarPrinterSettingWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation StarPrinterSettingWrapper

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
                 initWithObjectIdentifier:(nonnull NSString *)printerObjID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarPrinter *printer = [_objManager getObject:printerObjID];
    
    if (printer == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    STARIO10StarPrinterSetting *setting = printer.setting;
    
    if (setting == nil) {
        resolve(nil);
        return;
    }
    
    NSString *objID = [_objManager add:setting];
    resolve(objID);
}

RCT_REMAP_METHOD(dispose,
                 disposeWithNativeObject:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [_objManager remove:objID];
    resolve(nil);
}

#pragma mark -

@end
