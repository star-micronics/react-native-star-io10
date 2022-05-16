//
//  StarIO10Error.h
//  StarIO10
//
//  Copyright 2021 Star Micronics Co., Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSInteger, STARIO10Error) {
    STARIO10ErrorUnknown = 0,
    STARIO10ErrorArgument = 1,
    STARIO10ErrorBadResponse = 2,
    STARIO10ErrorCommunication = 3,
    STARIO10ErrorIllegalDeviceState = 4,
    STARIO10ErrorInUse = 5,
    STARIO10ErrorInvalidOperation = 6,
    STARIO10ErrorNotFound = 7,
    STARIO10ErrorUnprintable = 8,
    STARIO10ErrorUnsupportedModel = 9,
    STARIO10ErrorUnsupportedOSVersion = 10
};

@interface StarIO10Error : NSObject

extern NSString * const STARIO10ErrorDetailErrorCodeKey;
extern NSString * const STARIO10ErrorStatusKey;

@end

NS_ASSUME_NONNULL_END
