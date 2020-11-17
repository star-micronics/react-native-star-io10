#import "StarObjectManager.h"

@interface StarObjectManager()

@property(nonatomic) NSMutableDictionary<NSString *, id> *objectDict;

@end


@implementation StarObjectManager

static StarObjectManager *sharedData_ = nil;

+ (StarObjectManager *)sharedManager {
    if (sharedData_ == nil) {
        sharedData_ = [StarObjectManager new];
    }
    return sharedData_;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        _objectDict = [NSMutableDictionary new];
    }
    
    return self;
}

- (NSString *)add:(id)obj {
    @synchronized (self) {
        NSString *objID;
        
        while (YES) {
            NSString *_objID = [NSUUID UUID].UUIDString;
            
            if ([_objectDict.allKeys containsObject:_objID] == NO) {
                objID = _objID;
                [_objectDict addEntriesFromDictionary:@{objID: obj}];
                break;
            }
            
            [NSThread sleepForTimeInterval:0.01];
        }
        
        return objID;
    }
}

- (NSString *) getExsitingIdentifier:(id)obj {
    @synchronized (self) {
        NSArray<NSString *> *allKey = [_objectDict allKeysForObject:obj];
        
        if (allKey.count == 0) {
            return nil;
        }
        
        return [allKey objectAtIndex:0];
    }
}

- (id)getObject:(NSString *) identifier {
    @synchronized (self) {
        return _objectDict[identifier];
    }
}

- (void)remove:(NSString *) identifier {
    @synchronized (self) {
        _objectDict[identifier] = nil;
    }
}


@end
