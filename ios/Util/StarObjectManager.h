#import <Foundation/Foundation.h>
@import StarIO10;

NS_ASSUME_NONNULL_BEGIN

@interface StarObjectManager : NSObject

+ (instancetype)sharedManager;

- (NSString *)add:(id)obj;
- (id)getObject:(NSString *) identifier;
- (NSString *) getExsitingIdentifier:(id)obj;
- (void)remove:(NSString *) identifier;

@end

NS_ASSUME_NONNULL_END
