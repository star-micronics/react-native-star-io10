//
//  StarXpandCommandParserWrapper.h
//  StarIO10
//
//  Created by 上田　雄磨 on 2020/10/19.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface StarXpandCommandParserWrapper : NSObject

+ (nullable NSData *)parseWithCommand:(NSString *)command
                            emulation:(NSString *)emulation
                                model:(NSString *)model;
@end

NS_ASSUME_NONNULL_END
