#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <Foundation/Foundation.h>
@import StarIO10;

@interface StarDeviceDiscoveryManagerWrapper : RCTEventEmitter <RCTBridgeModule, STARIO10StarDeviceDiscoveryManagerDelegate>


@end
