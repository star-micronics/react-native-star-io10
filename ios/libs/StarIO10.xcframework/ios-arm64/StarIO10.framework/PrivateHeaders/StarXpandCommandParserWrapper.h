//
//  StarXpandCommandParserWrapper.h
//  StarIO10
//
//  Copyright 2021 Star Micronics Co., Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface StarXpandCommandParserWrapper : NSObject

+ (nullable NSData *)parseWithCommand:(NSString *)command
                            emulation:(NSString *)emulation
                                model:(NSString *)model;
@end

NS_ASSUME_NONNULL_END
