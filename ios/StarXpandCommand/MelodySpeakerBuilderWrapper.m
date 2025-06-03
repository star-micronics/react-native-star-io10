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

RCT_REMAP_METHOD(actionDriveOneTimeSound,
                 source:(nonnull NSString *)source
                 volume:(nonnull NSNumber *)volume
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    @try{
        
        STARIO10StarXpandCommandMelodySpeakerDriveOneTimeSoundParameter *parameter = [StarIO10ValueConverter toMelodySpeakerDriveOneTimeSoundParameterWithSource:source volume:volume];
        
        if (parameter == nil) {
            NSError *error = [NSError errorWithDomain:@""
                                                 code:STARIO10ErrorArgument
                                             userInfo:@{NSLocalizedDescriptionKey:@"Invalid source.",
                                                        STARIO10ErrorDetailErrorCodeKey:[NSNumber numberWithInt:STARIO10ErrorCodeNone]}];
            NSString *errorID = [self->_objManager add:error];
            reject(errorID, error.localizedDescription, error);
            return;
        }
        
        STARIO10StarXpandCommandMelodySpeakerBuilder *melodySpeakerBuilder =[[STARIO10StarXpandCommandMelodySpeakerBuilder alloc] init ];
        melodySpeakerBuilder = [melodySpeakerBuilder actionDriveOneTimeSound:parameter];
        
        STARIO10StarXpandCommandDocumentBuilder *documentBuilder =[ [STARIO10StarXpandCommandDocumentBuilder alloc] init];
        documentBuilder = [documentBuilder addMelodySpeaker:melodySpeakerBuilder];
        
        STARIO10StarXpandCommandBuilder *commandBuilder = [[STARIO10StarXpandCommandBuilder alloc]init];
        commandBuilder = [commandBuilder addDocument:documentBuilder];
        
        NSString *jsonString = [commandBuilder getCommands];
        
        NSDictionary *jsonObject = [NSJSONSerialization JSONObjectWithData:[jsonString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:nil];
        
        NSArray *contentsArray = [jsonObject objectForKey:@"contents"];
        NSDictionary *contentsDictionary = [contentsArray objectAtIndex:0];
        
        NSArray *contentsArray2 = [contentsDictionary objectForKey:@"contents"];
        NSDictionary *contentsDictionary2 = [contentsArray2 objectAtIndex:0];
        
        NSArray *contentsArray3 = [contentsDictionary2 objectForKey:@"contents"];
        NSDictionary *contentsDictionary3 = [contentsArray3 objectAtIndex:0];

        NSError *error = nil;
        NSData *parameterData = [NSJSONSerialization dataWithJSONObject:contentsDictionary3 options:0 error:&error];
        if(error != nil){
            reject(@"Error", @"Fail to get object.", nil);
            return;
        }
        NSString *contents = [[NSString alloc]initWithData:parameterData encoding:NSUTF8StringEncoding];

        resolve(contents);
        
    }
    @catch(NSException *exception) {
        
        reject(@"Error", @"Fail to get object.", nil);
    }
}

@end
