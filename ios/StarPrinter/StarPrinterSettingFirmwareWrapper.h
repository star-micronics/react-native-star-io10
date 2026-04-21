#import "React/RCTBridgeModule.h"
#import <Foundation/Foundation.h>
#import "React/RCTEventEmitter.h"
@import StarIO10ReactNative;

@interface StarPrinterSettingFirmwareWrapper : RCTEventEmitter <RCTBridgeModule, STARIO10FirmwareUpdateDelegate>

@end
