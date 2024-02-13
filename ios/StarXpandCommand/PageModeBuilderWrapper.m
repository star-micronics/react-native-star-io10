#import "PageModeBuilderWrapper.h"
#import "StarObjectManager.h"
#import "StarIO10ValueConverter.h"
#import <React/RCTLog.h>

@import StarIO10;

@interface PageModeBuilderWrapper()

@property(assign, nonatomic) StarObjectManager *objManager;

@end

@implementation PageModeBuilderWrapper

RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(actionPrintImage,
                 source:(nonnull NSString *)source
                 x:(nonnull NSNumber *)x
                 y:(nonnull NSNumber *)y
                 width:(nonnull NSNumber *)width
                 effectDiffusion:(BOOL)effectDiffusion
                 threshold:(nonnull NSNumber *)threshold
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    @try{
        
        STARIO10StarXpandCommandPrinterPageModeImageParameter *parameter = [StarIO10ValueConverter toPrinterPageModeImageParameterWithSource: source x:x y:y  width:width effectDiffusion:effectDiffusion threshold:threshold];
        
        STARIO10StarXpandCommandPrinterPageModeAreaParameter *pageModeArea =[StarIO10ValueConverter toPrinterPageModeAreaParameterWithX:x y:y width:width height:@300];
        //PageModeAreaの必要な高さはこの時点で未定であるため、仮の値として最大値3001を入れる。
        //heightの値は生成されるactionPrintImageのコマンドに影響を与えない。
        
        STARIO10StarXpandCommandPageModeBuilder *pageModeBuilder =[[STARIO10StarXpandCommandPageModeBuilder alloc] init ];
        pageModeBuilder = [pageModeBuilder actionPrintImage:parameter];
        
        STARIO10StarXpandCommandPrinterBuilder *printerBuilder =[[STARIO10StarXpandCommandPrinterBuilder alloc] init ];
        
        printerBuilder = [printerBuilder addPageModeWithParameter:pageModeArea builder:pageModeBuilder];
        
        STARIO10StarXpandCommandDocumentBuilder *documentBuilder =[ [STARIO10StarXpandCommandDocumentBuilder alloc] init];
        documentBuilder = [documentBuilder addPrinter:printerBuilder];
        
        STARIO10StarXpandCommandBuilder *commandBuilder = [[STARIO10StarXpandCommandBuilder alloc]init];
        commandBuilder = [commandBuilder addDocument:((void)(pageModeArea),documentBuilder)];
        
        
        
        NSString *jsonString = [commandBuilder getCommands];
        
        NSDictionary *jsonObject = [NSJSONSerialization JSONObjectWithData:[jsonString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:nil];
        
        NSArray *contentsArray = [jsonObject objectForKey:@"contents"];
        NSDictionary *contentsDictionary = [contentsArray objectAtIndex:0];
        
        NSArray *contentsArray2 = [contentsDictionary objectForKey:@"contents"];
        NSDictionary *contentsDictionary2 = [contentsArray2 objectAtIndex:0];
        
        NSArray *contentsArray3 = [contentsDictionary2 objectForKey:@"contents"];
        NSDictionary *contentsDictionary3 = [contentsArray3 objectAtIndex:0];
        
        NSArray *contentsArray4 = [contentsDictionary3 objectForKey:@"contents"];
        NSDictionary *contentsDictionary4 = [contentsArray4 objectAtIndex:0];
        
        NSError *error = nil;
        NSData *parameterData = [NSJSONSerialization dataWithJSONObject:contentsDictionary4 options:0 error:&error];
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

