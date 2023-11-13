#import "DisplayBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface DisplayBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation DisplayBuilderWrapper

RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(actionShowImage,
                 source:(nonnull NSString *)source
                 effectDiffusion:(BOOL)effectDiffusion
                 threshold:(nonnull NSNumber *)threshold
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    @try{
        
        STARIO10StarXpandCommandDisplayImageParameter *parameter = [StarIO10ValueConverter toDisplayImageParameterWithSource:source
                                                                                                             effectDiffusion:effectDiffusion
                                                                                                                   threshold:threshold];
        
        STARIO10StarXpandCommandDisplayBuilder *displayBuilder =[[STARIO10StarXpandCommandDisplayBuilder alloc] init ];
        displayBuilder = [displayBuilder actionShowImage:parameter];
        
        STARIO10StarXpandCommandDocumentBuilder *documentBuilder =[ [STARIO10StarXpandCommandDocumentBuilder alloc] init];
        documentBuilder = [documentBuilder addDisplay:displayBuilder];
        
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
