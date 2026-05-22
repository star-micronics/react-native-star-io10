#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface StarXpandCommandParserWrapper : NSObject

+ (nullable NSData *)parseWithCommand:(NSString *)command
                            emulation:(NSString *)emulation
                                model:(NSString *)model;

+ (nullable NSString *)replaceWithTemplate:(NSString *)templateStr
                                 fieldData:(NSString *)fieldData
                               errorTypeId:(int *)errorTypeId
                                 errorCode:(int *)errorCode
                            errorMessageId:(int *)errorMessageId;
@end

NS_ASSUME_NONNULL_END
