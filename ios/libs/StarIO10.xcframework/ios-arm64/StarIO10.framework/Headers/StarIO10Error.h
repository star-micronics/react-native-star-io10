//
//  StarIO10Error.h
//  StarIO10
//
//  Created by 上田　雄磨 on 2020/10/22.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSInteger, STARIO10Error) {
    STARIO10ErrorArgument = 0,
    STARIO10ErrorBadResponse = 1,
    STARIO10ErrorCommunication = 2,
    STARIO10ErrorIllegalDeviceState = 3,
    STARIO10ErrorInUse = 4,
    STARIO10ErrorInvalidOperation = 5,
    STARIO10ErrorNotFound = 6,
    STARIO10ErrorUnprintable = 7,
    STARIO10ErrorUnknown = 8
};

@interface StarIO10Error : NSObject

extern NSString * const STARIO10ErrorDetailErrorCodeKey;
extern NSString * const STARIO10ErrorStatusKey;

@end

NS_ASSUME_NONNULL_END
