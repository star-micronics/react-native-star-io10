#import "StarIO10LoggerWrapper.h"
#import <React/RCTLog.h>
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"

@interface StarIO10LoggerWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end


@implementation StarIO10LoggerWrapper

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

#pragma mark -

RCT_REMAP_METHOD(appendHeader,
                 appendHeaderWithString:(nonnull NSString *)string
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [STARIO10InternalInterface appendLogHeader:string];
    resolve(nil);
}

RCT_REMAP_METHOD(start,
                 startWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [STARIO10Logger.sharedObject start];
    resolve(nil);
}

RCT_REMAP_METHOD(stop,
                 stopWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [STARIO10Logger.sharedObject stop];
    resolve(nil);
}

@end
