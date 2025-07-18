#import "StarIO10DiagInfoUploadWrapper.h"
#import <React/RCTLog.h>
#import "StarObjectManager.h"

@interface StarIO10DiagInfoUploadWrapper()

@end


@implementation StarIO10DiagInfoUploadWrapper

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

RCT_EXPORT_MODULE()

#pragma mark -

RCT_REMAP_METHOD(getIsEnabled,
                 getIsEnabledWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    BOOL isEnabled = [STARIO10DiagInfoUpload.sharedObject isEnabled];
    resolve(@(isEnabled));
}

RCT_REMAP_METHOD(setIsEnabled,
                 setIsEnabledWithIsEnabled:(BOOL)isEnabled
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [STARIO10DiagInfoUpload.sharedObject setIsEnabled:isEnabled];
    resolve(nil);
}

@end
