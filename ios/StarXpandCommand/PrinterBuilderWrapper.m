#import "PrinterBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface PrinterBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation PrinterBuilderWrapper

RCT_EXPORT_MODULE()


RCT_REMAP_METHOD(actionPrintImage,
                 source:(nonnull NSString *)source
                 width:(nonnull NSNumber *)width
                 effectDiffusion:(BOOL)effectDiffusion
                 threshold:(nonnull NSNumber *)threshold
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    @try{
        
        STARIO10StarXpandCommandPrinterImageParameter *parameter = [StarIO10ValueConverter toPrinterImageParameterWithSource: source width:width effectDiffusion:effectDiffusion threshold:threshold];
        
        STARIO10StarXpandCommandPrinterBuilder *printerBuilder =[[STARIO10StarXpandCommandPrinterBuilder alloc] init ];
        printerBuilder = [printerBuilder actionPrintImage:parameter];
        
        STARIO10StarXpandCommandDocumentBuilder *documentBuilder =[ [STARIO10StarXpandCommandDocumentBuilder alloc] init];
        documentBuilder = [documentBuilder addPrinter:printerBuilder];
        
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
        NSData *parameterData = [NSJSONSerialization dataWithJSONObject:contentsDictionary3  options:0 error:&error];
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
