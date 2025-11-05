#import "React/RCTBridgeModule.h"
#import <Foundation/Foundation.h>
#import "React/RCTEventEmitter.h"
@import StarIO10;

@interface StarPrinterWrapper : RCTEventEmitter <RCTBridgeModule, STARIO10PrinterDelegate, STARIO10DrawerDelegate, STARIO10InputDeviceDelegate, STARIO10DisplayDelegate>

@end
