#import "StarSpoolJobStatusWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>
@import StarIO10;


@interface StarSpoolJobStatusWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation StarSpoolJobStatusWrapper

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

RCT_REMAP_METHOD(getJobStatus,
                 getJobStatusWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    STARIO10StarSpoolJobStatus *status = [_objManager getObject:objID];
    
    if (status == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    resolve([StarIO10ValueConverter toStarSpoolJobStatusDictionary:status]);
}

@end
