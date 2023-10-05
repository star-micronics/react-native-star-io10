#import "StarSpoolJobStatusListWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>
@import StarIO10;


@interface StarSpoolJobStatusListWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation StarSpoolJobStatusListWrapper

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

RCT_REMAP_METHOD(getJobStatusList,
                 getJobStatusListWithObjectIdentifier:(nonnull NSString *)objID
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSArray<STARIO10StarSpoolJobStatus *> *statusList = [_objManager getObject:objID];
    
    if (statusList == nil) {
        reject(@"Error", @"Fail to get object.", nil);
        return;
    }
    
    resolve([StarIO10ValueConverter toStarSpoolJobStatusDictionaryArray:statusList]);
}

@end
