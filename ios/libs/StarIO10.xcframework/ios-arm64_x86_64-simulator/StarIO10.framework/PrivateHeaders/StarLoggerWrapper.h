//
//  StarLoggerWrapper.h
//  StarIO10
//
//  Copyright 2021 Star Micronics Co., Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface StarLoggerWrapper : NSObject

+ (void)initialize:(nonnull NSString *)directoryPath;

+ (void)setHeader:(nonnull NSString *)header;

+ (void)logWithMessage:(nonnull NSString *)message;

@end

NS_ASSUME_NONNULL_END
