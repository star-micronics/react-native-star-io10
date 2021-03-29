//
//  StarIO10ValueConverter.h
//  react-native-star-io10
//
//  Created by 上田　雄磨 on 2020/10/23.
//

#import <Foundation/Foundation.h>
@import StarIO10;

NS_ASSUME_NONNULL_BEGIN

@interface StarIO10ValueConverter : NSObject

+ (NSData *)toData:(NSArray<NSNumber *> *)values;
+ (NSArray<NSNumber *> *)toNumberArray:(NSData *)data;
+ (NSString *)toStringFromStarPrinterModel:(STARIO10StarPrinterModel)value;
+ (NSString *)toStringFromStarPrinterEmulation:(STARIO10StarPrinterEmulation)value;
+ (NSString *)toStringFromInterfaceType:(STARIO10InterfaceType)value;
+ (NSArray<NSNumber *> *)toPrinterCJKCharacterPriorityTypes:(nonnull NSArray<NSString *> *)types;
+ (STARIO10StarPrinterModel)toStarPrinterModel:(NSString *)value;
+ (STARIO10InterfaceType)toInterfaceType:(NSString *)value;
+ (STARIO10StarXpandCommandPresenterLEDType)toPresenterLEDType:(NSString *)value;
+ (STARIO10StarXpandCommandBezelLEDType)toBezelLEDType:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterInternationalCharacterType)toPrinterInternationalCharacterType:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterCharacterEncodingType)toPrinterCharacterEncodingType:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterCJKCharacterType)toPrinterCJKCharacterType:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterCutType)toPrinterCutType:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterFontType)toPrinterFontType:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterAlignment)toPrinterAlignment:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterPageModePrintDirection)toPrinterPageModePrintDirection:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterBlackMarkPosition)toPrinterBlackMarkPosition:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterBarcodeSymbology)toPrinterBarcodeSymbology:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterBarcodeBarRatioLevel)toPrinterBarcodeBarRatioLevel:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterPDF417Level)toPrinterPDF417Level:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterQRCodeModel)toPrinterQRCodeModel:(NSString *)value;
+ (STARIO10StarXpandCommandPrinterQRCodeLevel)toPrinterQRCodeLevel:(NSString *)value;
+ (STARIO10StarXpandCommandDrawerChannel)toDrawerChannel:(NSString *)value;
+ (STARIO10StarXpandCommandBuzzerChannel)toBuzzerChannel:(NSString *)value;
+ (STARIO10StarXpandCommandMelodySpeakerSoundStorageArea)toMelodySpeakerSoundStorageArea:(NSString *)value;
+ (STARIO10StarXpandCommandDisplayContrast)toDisplayContrast:(NSString *)value;
+ (STARIO10StarXpandCommandDisplayCursorState)toDisplayCursorState:(NSString *)value;
+ (STARIO10StarXpandCommandDisplayInternationalCharacterType)toDisplayInternationalCharacterType:(NSString *)value;
+ (STARIO10StarXpandCommandDisplayCharacterEncodingType)toDisplayCharacterEncodingType:(NSString *)value;
+ (STARIO10StarXpandCommandPresenterLEDAutomaticBlinkParameter *)toPresenterLEDAutomaticBlinkParameterWithType:(nonnull NSString *)type
                                                                                                        onTime:(nonnull NSNumber *)onTime
                                                                                                       offTime:(nonnull NSNumber *)offTime;
+ (STARIO10StarXpandCommandBezelLEDAutomaticBlinkParameter *)toBezelLEDAutomaticBlinkParameterWithType:(nonnull NSString *)type
                                                                                                onTime:(nonnull NSNumber *)onTime
                                                                                               offTime:(nonnull NSNumber *)offTime;

+ (STARIO10StarXpandCommandPresenterModeParameter *)toPresenterModeParameterWithLoop:(BOOL)loop
                                                                                hold:(BOOL)hold
                                                                             retract:(BOOL)retract
                                                                            holdTime:(nonnull NSNumber *)holdTime;
+ (STARIO10StarXpandCommandPrinterPageModeAreaParameter *)toPrinterPageModeAreaParameterWithX:(nonnull NSNumber *)x
                                                                                            y:(nonnull NSNumber *)y
                                                                                        width:(nonnull NSNumber *)width
                                                                                       height:(nonnull NSNumber *)height;

+ (STARIO10StarXpandCommandPrinterBlackMarkParameter *)toPrinterBlackMarkParameterWithStart:(BOOL)enable
                                                                                   position:(nonnull NSString *)position;
+ (STARIO10StarXpandCommandPrinterLabelParameter *)toPrinterLabelParameterWithStart:(BOOL)enable;
+ (STARIO10StarXpandCommandPrinterHoldPrintParameter *)toPrinterHoldPrintParameterWithEnable:(BOOL)enable;
+ (STARIO10StarXpandCommandMagnificationParameter *)toMagnificationParameterWithWidth:(nonnull NSNumber *)width
                                                                               height:(nonnull NSNumber *)height;
+ (STARIO10StarXpandCommandPrinterLogoParameter *)toPrinterLogoParameterWithKeyCode:(nonnull NSString *)keyCode;
+ (STARIO10StarXpandCommandPrinterBarcodeParameter *)toPrinterBarcodeParameterWithContent:(nonnull NSString *)content
                                                                                symbology:(nonnull NSString *)symbology
                                                                                 printHRI:(BOOL)printHRI
                                                                                  barDots:(nonnull NSNumber *)barDots
                                                                            barRatioLevel:(nonnull NSString *)barRatioLevel
                                                                                   height:(nonnull NSNumber *)height;
+ (STARIO10StarXpandCommandPrinterPDF417Parameter *)toPrinterPDF417ParameterWithContent:(nonnull NSString *)content
                                                                                 column:(nonnull NSNumber *)column
                                                                                   line:(nonnull NSNumber *)line
                                                                                 module:(nonnull NSNumber *)module
                                                                                 aspect:(nonnull NSNumber *)aspect
                                                                                  level:(nonnull NSString *)level;
+ (STARIO10StarXpandCommandPrinterQRCodeParameter *)toPrinterQRCodeParameterWithContent:(nonnull NSString *)content
                                                                                  model:(nonnull NSString *)model
                                                                                  level:(nonnull NSString *)level
                                                                               cellSize:(nonnull NSNumber *)cellSize;
+ (STARIO10StarXpandCommandPrinterImageParameter *)toPrinterImageParameterWithSource:(nonnull NSString *)source
                                                                                width:(nonnull NSNumber *)width
                                                                                effectDiffusion:(BOOL)effectDiffusion
                                                                           threshold:(nonnull NSNumber *)threshold;
+ (STARIO10StarXpandCommandDrawerOpenParameter *)toDrawerOpenParameterWithChannel:(nonnull NSString *)channel
                                                                           onTime:(nonnull NSNumber *)onTime;
+ (STARIO10StarXpandCommandBuzzerDriveParameter *)toBuzzerDriveParameterWithChannel:(nonnull NSString *)channel
                                                                             repeat:(nonnull NSNumber *)repeat
                                                                             onTime:(nonnull NSNumber *)onTime
                                                                            offTime:(nonnull NSNumber *)offTime;
+ (STARIO10StarXpandCommandMelodySpeakerDriveRegisteredSoundParameter *)toMelodySpeakerDriveRegisteredSoundParameterWithArea:(nonnull NSString *)area
                                                                                                                      number:(nonnull NSNumber *)number
                                                                                                                      volume:(nonnull NSNumber *)volume;
+ (STARIO10StarXpandCommandMelodySpeakerDriveOneTimeSoundParameter *)toMelodySpeakerDriveOneTimeSoundParameterWithSource:(nonnull NSString *)source
                                                                                                                  volume:(nonnull NSNumber *)volume;
+ (STARIO10StarXpandCommandDisplayImageParameter *)toDisplayImageParameterWithSource:(nonnull NSString *)source
                                                                     effectDiffusion:(BOOL)effectDiffusion
                                                                           threshold:(nonnull NSNumber *)threshold;
+ (STARIO10StarXpandCommandDisplayPositionParameter *)toDisplayPositionParameterWithX:(nonnull NSNumber *)x
                                                                                    y:(nonnull NSNumber *)y;
+ (NSDictionary<NSString *, id> *)toJSNamingDictionary:(NSDictionary<NSString *, id> *)dictionary;

@end

NS_ASSUME_NONNULL_END
