//
//  StarIO10ValueConverter.m
//  react-native-star-io10
//
//  Created by 上田　雄磨 on 2020/10/23.
//

#import "StarIO10ValueConverter.h"

@implementation StarIO10ValueConverter

NSDictionary<NSNumber *, NSString *> *kStarPrinterModelDictionary;
NSDictionary<NSNumber *, NSString *> *kStarPrinterEmulationDictionary;
NSDictionary<NSNumber *, NSString *> *kInterfaceTypeDictionary;
NSDictionary<NSNumber *, NSString *> *kLEDTypeDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterAlignmentDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterPageModePrintDirectionDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterBlackMarkPositionDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterFontTypeDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterInternationalCharacterTypeDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterCharacterEncodingTypeDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterCJKCharacterTypeDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterCutTypeDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterBarcodeSymbologyDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterBarcodeBarRatioLevelDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterPDF417LevelDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterQRCodeModelDictionary;
NSDictionary<NSNumber *, NSString *> *kPrinterQRCodeLevelDictionary;
NSDictionary<NSNumber *, NSString *> *kDrawerChannelDictionary;
NSDictionary<NSNumber *, NSString *> *kBuzzerChannelDictionary;
NSDictionary<NSNumber *, NSString *> *kMelodySpeakerSoundStorageAreaDictionary;

+ (void)initialize
{
    static dispatch_once_t oncePredicate;
    dispatch_once(&oncePredicate, ^{
        kStarPrinterModelDictionary = @{
            @(STARIO10StarPrinterModelUnknown): @"Unknown",
            @(STARIO10StarPrinterModelTSP650II): @"TSP650II",
            @(STARIO10StarPrinterModelTSP700II): @"TSP700II",
            @(STARIO10StarPrinterModelTSP800II): @"TSP800II",
            @(STARIO10StarPrinterModelFVP10): @"FVP10",
            @(STARIO10StarPrinterModelTSP100LAN): @"TSP100LAN",
            @(STARIO10StarPrinterModelTSP100IIIW): @"TSP100IIIW",
            @(STARIO10StarPrinterModelTSP100IIILAN): @"TSP100IIILAN",
            @(STARIO10StarPrinterModelTSP100IIIBI): @"TSP100IIIBI",
            @(STARIO10StarPrinterModelTSP100IIIU): @"TSP100IIIU",
            @(STARIO10StarPrinterModelmPOP): @"mPOP",
            @(STARIO10StarPrinterModelmC_Print2): @"mC_Print2",
            @(STARIO10StarPrinterModelmC_Print3): @"mC_Print3",
            @(STARIO10StarPrinterModelSM_S210i): @"SM_S210i",
            @(STARIO10StarPrinterModelSM_S230i): @"SM_S230i",
            @(STARIO10StarPrinterModelSM_T300i): @"SM_T300i",
            @(STARIO10StarPrinterModelSM_T400i): @"SM_T400i",
            @(STARIO10StarPrinterModelSM_L200): @"SM_L200",
            @(STARIO10StarPrinterModelSM_L300): @"SM_L300",
            @(STARIO10StarPrinterModelBSC10): @"BSC10",
            @(STARIO10StarPrinterModelSP700): @"SP700"
        };
        
        kStarPrinterEmulationDictionary = @{
            @(STARIO10StarPrinterEmulationUnknown): @"Unknown",
            @(STARIO10StarPrinterEmulationStarLine): @"StarLine",
            @(STARIO10StarPrinterEmulationStarDot): @"StarDot",
            @(STARIO10StarPrinterEmulationStarGraphic): @"StarGraphic",
            @(STARIO10StarPrinterEmulationStarPRNT): @"StarPRNT",
            @(STARIO10StarPrinterEmulationEscPos): @"EscPos",
            @(STARIO10StarPrinterEmulationEscPosMobile): @"EscPosMobile"
        };
        
        kInterfaceTypeDictionary = @{
            @(STARIO10InterfaceTypeLAN): @"Lan",
            @(STARIO10InterfaceTypeBluetooth): @"Bluetooth",
            @(STARIO10InterfaceTypeUSB): @"Usb"
        };
        
        kLEDTypeDictionary = @{
            @(STARIO10StarXpandCommandLEDTypePrinting): @"Printing",
            @(STARIO10StarXpandCommandLEDTypeError): @"Error",
            @(STARIO10StarXpandCommandLEDTypeIdle): @"Idle"
        };
        
        kPrinterAlignmentDictionary = @{
            @(STARIO10StarXpandCommandPrinterAlignmentLeft): @"Left",
            @(STARIO10StarXpandCommandPrinterAlignmentCenter): @"Center",
            @(STARIO10StarXpandCommandPrinterAlignmentRight): @"Right"
        };
        
        kPrinterPageModePrintDirectionDictionary = @{
            @(STARIO10StarXpandCommandPrinterPageModePrintDirectionBottomToTop): @"BottomToTop",
            @(STARIO10StarXpandCommandPrinterPageModePrintDirectionLeftToRight): @"LeftToRight",
            @(STARIO10StarXpandCommandPrinterPageModePrintDirectionRightToLeft): @"RightToLeft",
            @(STARIO10StarXpandCommandPrinterPageModePrintDirectionTopToBottom): @"TopToBottom"
        };
        
        kPrinterBlackMarkPositionDictionary = @{
            @(STARIO10StarXpandCommandPrinterBlackMarkPositionFront): @"Front",
            @(STARIO10StarXpandCommandPrinterBlackMarkPositionBack): @"Back"
        };
        
        kPrinterFontTypeDictionary = @{
            @(STARIO10StarXpandCommandPrinterFontTypeA): @"A",
            @(STARIO10StarXpandCommandPrinterFontTypeB): @"B"
        };
        
        kPrinterInternationalCharacterTypeDictionary = @{
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeUsa): @"Usa",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeFrance): @"France",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeGermany): @"Germany",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeUk): @"UK",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeDenmark): @"Denmark",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeSweden): @"Sweden",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeItaly): @"Italy",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeSpain): @"Spain",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeJapan): @"Japan",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeNorway): @"Norway",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeDenmark2): @"Denmark2",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeSpain2): @"Spain2",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeLatinAmerica): @"LatinAmerica",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeKorea): @"Korea",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeIreland): @"Ireland",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeSlovenia): @"Slovenia",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeCroatia): @"Croatia",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeChina): @"China",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeVietnam): @"Vietnam",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeArabic): @"Arabic",
            @(STARIO10StarXpandCommandPrinterInternationalCharacterTypeLegal): @"Legal"
        };
        
        kPrinterCharacterEncodingTypeDictionary = @{
            @(STARIO10StarXpandCommandPrinterCharacterEncodingTypeShiftJIS): @"ShiftJis",
            @(STARIO10StarXpandCommandPrinterCharacterEncodingTypeGb18030): @"GB18030",
            @(STARIO10StarXpandCommandPrinterCharacterEncodingTypeBig5): @"Big5",
            @(STARIO10StarXpandCommandPrinterCharacterEncodingTypeKorean): @"Korean",
            @(STARIO10StarXpandCommandPrinterCharacterEncodingTypeCodePage): @"CodePage"
        };
        
        kPrinterCJKCharacterTypeDictionary = @{
            @(STARIO10StarXpandCommandPrinterCJKCharacterTypeJapanese): @"Japanese",
            @(STARIO10StarXpandCommandPrinterCJKCharacterTypeSimplifiedChinese): @"SimplifiedChinese",
            @(STARIO10StarXpandCommandPrinterCJKCharacterTypeTraditionalChinese): @"TraditionalChinese",
            @(STARIO10StarXpandCommandPrinterCJKCharacterTypeHangul): @"Hangul"
        };
        
        kPrinterCutTypeDictionary = @{
            @(STARIO10StarXpandCommandPrinterCutTypeFull): @"Full",
            @(STARIO10StarXpandCommandPrinterCutTypePartial): @"Partial",
            @(STARIO10StarXpandCommandPrinterCutTypeFullDirect): @"FullDirect",
            @(STARIO10StarXpandCommandPrinterCutTypePartialDirect): @"PartialDirect"
        };
        
        kPrinterBarcodeSymbologyDictionary = @{
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyUpcE): @"UpcE",
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyUpcA): @"UpcA",
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyJan8): @"Jan8",
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyEan8): @"Ean8",
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyJan13): @"Jan13",
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyEan13): @"Ean13",
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyCode39): @"Code39",
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyItf): @"Itf",
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyCode128): @"Code128",
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyCode93): @"Code93",
            @(STARIO10StarXpandCommandPrinterBarcodeSymbologyNw7): @"NW7"
        };
        
        kPrinterBarcodeBarRatioLevelDictionary = @{
            @(STARIO10StarXpandCommandPrinterBarcodeBarRatioLevelLevelPlus1): @"LevelPlus1",
            @(STARIO10StarXpandCommandPrinterBarcodeBarRatioLevelLevel0): @"Level0",
            @(STARIO10StarXpandCommandPrinterBarcodeBarRatioLevelLevelMinus1): @"LevelMinus1"
        };
        
        kPrinterPDF417LevelDictionary = @{
            @(STARIO10StarXpandCommandPrinterPDF417LevelEcc0): @"Ecc0",
            @(STARIO10StarXpandCommandPrinterPDF417LevelEcc1): @"Ecc1",
            @(STARIO10StarXpandCommandPrinterPDF417LevelEcc2): @"Ecc2",
            @(STARIO10StarXpandCommandPrinterPDF417LevelEcc3): @"Ecc3",
            @(STARIO10StarXpandCommandPrinterPDF417LevelEcc4): @"Ecc4",
            @(STARIO10StarXpandCommandPrinterPDF417LevelEcc5): @"Ecc5",
            @(STARIO10StarXpandCommandPrinterPDF417LevelEcc6): @"Ecc6",
            @(STARIO10StarXpandCommandPrinterPDF417LevelEcc7): @"Ecc7",
            @(STARIO10StarXpandCommandPrinterPDF417LevelEcc8): @"Ecc8"
        };
        
        kPrinterQRCodeModelDictionary = @{
            @(STARIO10StarXpandCommandPrinterQRCodeModelModel1): @"Model1",
            @(STARIO10StarXpandCommandPrinterQRCodeModelModel2): @"Model2"
        };
        
        kPrinterQRCodeLevelDictionary = @{
            @(STARIO10StarXpandCommandPrinterQRCodeLevelL): @"L",
            @(STARIO10StarXpandCommandPrinterQRCodeLevelM): @"M",
            @(STARIO10StarXpandCommandPrinterQRCodeLevelQ): @"Q",
            @(STARIO10StarXpandCommandPrinterQRCodeLevelH): @"H"
        };
        
        kDrawerChannelDictionary = @{
            @(STARIO10StarXpandCommandDrawerChannelNo1): @"No1",
            @(STARIO10StarXpandCommandDrawerChannelNo2): @"No2"
        };
        
        kBuzzerChannelDictionary = @{
            @(STARIO10StarXpandCommandBuzzerChannelNo1): @"No1",
            @(STARIO10StarXpandCommandBuzzerChannelNo2): @"No2"
        };
        
        kMelodySpeakerSoundStorageAreaDictionary = @{
            @(STARIO10StarXpandCommandMelodySpeakerSoundStorageAreaArea1): @"Area1",
            @(STARIO10StarXpandCommandMelodySpeakerSoundStorageAreaArea2): @"Area2"
        };
    });
}

+ (NSData *)toData:(NSArray<NSNumber *> *)values
{
    NSMutableData *data = [NSMutableData data];

    [values enumerateObjectsUsingBlock:^(NSNumber *number, NSUInteger idx, BOOL *stop) {
        // 0x00-0xff の範囲か確認
        if (([number compare:@(0x00)] == NSOrderedAscending) ||
            ([number compare:@(0xff)] == NSOrderedDescending)) {
            *stop = YES;
        }
            
        uint8_t rawByte = number.unsignedCharValue;
        [data appendBytes:&rawByte length:1];
    }];
    
    if (data.length < values.count) {
        return nil;
    }
    
    return data;
}

+ (NSArray<NSNumber *> *)toNumberArray:(NSData *)data
{
    NSMutableArray<NSNumber *> *numberArray = [NSMutableArray array];
    
    uint8_t *bytes = (uint8_t *)data.bytes;
    
    for (NSUInteger i = 0; i < data.length; i++) {
        [numberArray addObject:@(*(bytes + i))];
    }
    
    return numberArray;
}

+ (NSString *)toStringFromStarPrinterModel:(STARIO10StarPrinterModel)value
{
    return kStarPrinterModelDictionary[@(value)];
}

+ (NSString *)toStringFromStarPrinterEmulation:(STARIO10StarPrinterEmulation)value
{
    return kStarPrinterEmulationDictionary[@(value)];
}

+ (NSString *)toStringFromInterfaceType:(STARIO10InterfaceType)value
{
    return kInterfaceTypeDictionary[@(value)];
}

+ (NSArray<NSNumber *> *)toPrinterCJKCharacterPriorityTypes:(nonnull NSArray<NSString *> *)types
{
    NSMutableArray<NSNumber *> *numberArray = [[NSMutableArray alloc] init];
    
    for (NSString *type in types) {
        STARIO10StarXpandCommandPrinterCJKCharacterType nativeType = [StarIO10ValueConverter toPrinterCJKCharacterType:type];
        [numberArray addObject:@(nativeType)];
    }
    
    return (NSArray *)numberArray;
}

+ (STARIO10StarPrinterModel)toStarPrinterModel:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kStarPrinterModelDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarPrinterModelUnknown;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10InterfaceType)toInterfaceType:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kInterfaceTypeDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10InterfaceTypeUnknown;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandLEDType)toLEDType:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kLEDTypeDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandLEDTypePrinting;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterAlignment)toPrinterAlignment:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterAlignmentDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterAlignmentLeft;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterPageModePrintDirection)toPrinterPageModePrintDirection:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterPageModePrintDirectionDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterPageModePrintDirectionLeftToRight;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterBlackMarkPosition)toPrinterBlackMarkPosition:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterBlackMarkPositionDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterBlackMarkPositionFront;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterFontType)toPrinterFontType:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterFontTypeDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterFontTypeA;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterInternationalCharacterType)toPrinterInternationalCharacterType:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterInternationalCharacterTypeDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterInternationalCharacterTypeUsa;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterCharacterEncodingType)toPrinterCharacterEncodingType:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterCharacterEncodingTypeDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterCharacterEncodingTypeShiftJIS;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterCJKCharacterType)toPrinterCJKCharacterType:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterCJKCharacterTypeDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterCJKCharacterTypeJapanese;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterCutType)toPrinterCutType:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterCutTypeDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterCutTypePartial;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterBarcodeSymbology)toPrinterBarcodeSymbology:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterBarcodeSymbologyDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterBarcodeSymbologyUpcE;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterBarcodeBarRatioLevel)toPrinterBarcodeBarRatioLevel:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterBarcodeBarRatioLevelDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterBarcodeBarRatioLevelLevel0;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterPDF417Level)toPrinterPDF417Level:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterPDF417LevelDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterPDF417LevelEcc0;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterQRCodeModel)toPrinterQRCodeModel:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterQRCodeModelDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterQRCodeModelModel2;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPrinterQRCodeLevel)toPrinterQRCodeLevel:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kPrinterQRCodeLevelDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandPrinterQRCodeLevelL;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}


+ (STARIO10StarXpandCommandDrawerChannel)toDrawerChannel:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kDrawerChannelDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandDrawerChannelNo1;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandBuzzerChannel)toBuzzerChannel:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kBuzzerChannelDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandBuzzerChannelNo1;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandMelodySpeakerSoundStorageArea)toMelodySpeakerSoundStorageArea:(NSString *)value
{
    NSArray<NSNumber *> *allKeys = [kMelodySpeakerSoundStorageAreaDictionary allKeysForObject:value];
    
    if (allKeys == nil) {
        return STARIO10StarXpandCommandMelodySpeakerSoundStorageAreaArea1;
    }
    
    return [[allKeys objectAtIndex:0] intValue];
}

+ (STARIO10StarXpandCommandPresenterModeParameter *)toPresenterModeParameterWithLoop:(BOOL)loop
                                                                                hold:(BOOL)hold
                                                                             retract:(BOOL)retract
                                                                            holdTime:(nonnull NSNumber *)holdTime
{
    STARIO10StarXpandCommandPresenterModeParameter *param = [[STARIO10StarXpandCommandPresenterModeParameter alloc] init];
    param = [param setLoop:loop];
    param = [param setHold:hold];
    param = [param setRetract:retract];
    param = [param setHoldTime:holdTime.intValue];
    
    return param;
}

+ (STARIO10StarXpandCommandPrinterPageModeParameter *)toPrinterPageModeParameterWithX:(nonnull NSNumber *)x
                                                                                    y:(nonnull NSNumber *)y
                                                                                width:(nonnull NSNumber *)width
                                                                               height:(nonnull NSNumber *)height
                                                                       printDirection:(nonnull NSString *)printDirection
{
    STARIO10StarXpandCommandPrinterPageModePrintDirection nativePrintDirection = [StarIO10ValueConverter toPrinterPageModePrintDirection:printDirection];
    
    STARIO10StarXpandCommandPrinterPageModeParameter *param = [[STARIO10StarXpandCommandPrinterPageModeParameter alloc] initWithWidth:width.doubleValue
                                                                                                                               height:height.doubleValue];
    param = [param setX:x.doubleValue];
    param = [param setY:y.doubleValue];
    param = [param setPrintDirection:nativePrintDirection];
    
    return param;
}

+ (STARIO10StarXpandCommandPrinterBlackMarkParameter *)toPrinterBlackMarkParameterWithStart:(BOOL)start
                                                                                        end:(BOOL)end
                                                                                   position:(nonnull NSString *)position
{
    STARIO10StarXpandCommandPrinterBlackMarkPosition nativePosition = [StarIO10ValueConverter toPrinterBlackMarkPosition:position];
    
    STARIO10StarXpandCommandPrinterBlackMarkParameter *param = [[STARIO10StarXpandCommandPrinterBlackMarkParameter alloc] init];
    param = [param setPosition:nativePosition];
    param = [param setStart:start];
    param = [param setEnd:end];
    
    return param;
}

+ (STARIO10StarXpandCommandPrinterLabelParameter *)toPrinterLabelParameterWithStart:(BOOL)start
                                                                                end:(BOOL)end
{
    STARIO10StarXpandCommandPrinterLabelParameter *param = [[STARIO10StarXpandCommandPrinterLabelParameter alloc] init];
    param = [param setStart:start];
    param = [param setEnd:end];
    
    return param;
}

+ (STARIO10StarXpandCommandPrinterHoldPrintParameter *)toPrinterHoldPrintParameterWithEnable:(BOOL)enable
{
    STARIO10StarXpandCommandPrinterHoldPrintParameter *param = [[STARIO10StarXpandCommandPrinterHoldPrintParameter alloc] initWithEnable:enable];
    
    return param;
}

+ (STARIO10StarXpandCommandMagnificationParameter *)toMagnificationParameterWithWidth:(nonnull NSNumber *)width
                                                                               height:(nonnull NSNumber *)height
{
    STARIO10StarXpandCommandMagnificationParameter *param = [[STARIO10StarXpandCommandMagnificationParameter alloc] initWithWidth:width.integerValue height:height.integerValue];
    
    return param;
}

+ (STARIO10StarXpandCommandPrinterLogoParameter *)toPrinterLogoParameterWithKeyCode:(nonnull NSString *)keyCode
{
    STARIO10StarXpandCommandPrinterLogoParameter *param = [[STARIO10StarXpandCommandPrinterLogoParameter alloc] initWithKeyCode:keyCode];
    
    return param;
}

+ (STARIO10StarXpandCommandPrinterBarcodeParameter *)toPrinterBarcodeParameterWithContent:(nonnull NSString *)content
                                                                                symbology:(nonnull NSString *)symbology
                                                                                 printHRI:(BOOL)printHRI
                                                                                  barDots:(nonnull NSNumber *)barDots
                                                                            barRatioLevel:(nonnull NSString *)barRatioLevel
                                                                                   height:(nonnull NSNumber *)height
{
    STARIO10StarXpandCommandPrinterBarcodeSymbology nativeSymbology = [StarIO10ValueConverter toPrinterBarcodeSymbology:symbology];
    STARIO10StarXpandCommandPrinterBarcodeBarRatioLevel nativeBarRatioLevel = [StarIO10ValueConverter toPrinterBarcodeBarRatioLevel:barRatioLevel];
    
    STARIO10StarXpandCommandPrinterBarcodeParameter *param = [[STARIO10StarXpandCommandPrinterBarcodeParameter alloc] initWithContent:content
                                                                                                                            symbology:nativeSymbology];
    param = [param setPrintHRI:printHRI];
    param = [param setBarDots:barDots.integerValue];
    param = [param setBarRatioLevel:nativeBarRatioLevel];
    param = [param setHeight:height.doubleValue];
    
    return param;
}

+ (STARIO10StarXpandCommandPrinterPDF417Parameter *)toPrinterPDF417ParameterWithContent:(nonnull NSString *)content
                                                                                 column:(nonnull NSNumber *)column
                                                                                   line:(nonnull NSNumber *)line
                                                                                 module:(nonnull NSNumber *)module
                                                                                 aspect:(nonnull NSNumber *)aspect
                                                                                  level:(nonnull NSString *)level
{
    STARIO10StarXpandCommandPrinterPDF417Level nativeLevel = [StarIO10ValueConverter toPrinterPDF417Level:level];
    
    STARIO10StarXpandCommandPrinterPDF417Parameter *param = [[STARIO10StarXpandCommandPrinterPDF417Parameter alloc] initWithContent:content];
    param = [param setColumn:column.integerValue];
    param = [param setLine:line.integerValue];
    param = [param setModule:module.integerValue];
    param = [param setAspect:aspect.integerValue];
    param = [param setLevel:nativeLevel];
    
    return param;
}

+ (STARIO10StarXpandCommandPrinterQRCodeParameter *)toPrinterQRCodeParameterWithContent:(nonnull NSString *)content
                                                                                  model:(nonnull NSString *)model
                                                                                  level:(nonnull NSString *)level
                                                                               cellSize:(nonnull NSNumber *)cellSize
{
    STARIO10StarXpandCommandPrinterQRCodeModel nativeModel = [StarIO10ValueConverter toPrinterQRCodeModel:model];
    STARIO10StarXpandCommandPrinterQRCodeLevel nativeLevel = [StarIO10ValueConverter toPrinterQRCodeLevel:level];
    
    STARIO10StarXpandCommandPrinterQRCodeParameter *param = [[STARIO10StarXpandCommandPrinterQRCodeParameter alloc] initWithContent:content];
    param = [param setModel:nativeModel];
    param = [param setLevel:nativeLevel];
    param = [param setCellSize:cellSize.integerValue];
    
    return param;
}

+ (STARIO10StarXpandCommandPrinterImageParameter *)toPrinterImageParameterWithSource:(nonnull NSString *)source
                                                                                width:(nonnull NSNumber *)width
                                                                                effectDiffusion:(BOOL)effectDiffusion
                                                                                threshold:(nonnull NSNumber *)threshold
{
    NSData *imageData = [[NSData alloc] initWithBase64EncodedString:source options:NSDataBase64DecodingIgnoreUnknownCharacters];
    UIImage *image = [UIImage imageWithData:imageData];
    if (image == nil) {
        return nil;
    }
    
    STARIO10StarXpandCommandPrinterImageParameter *param = [[STARIO10StarXpandCommandPrinterImageParameter alloc] initWithImage:image width:width.integerValue];
    param = [param setEffectDiffusion:effectDiffusion];
    param = [param setThreshold:threshold.integerValue];
    
    return param;
}

+ (STARIO10StarXpandCommandDrawerOpenParameter *)toDrawerOpenParameterWithChannel:(nonnull NSString *)channel
                                                                           onTime:(nonnull NSNumber *)onTime
{
    STARIO10StarXpandCommandDrawerChannel nativeChannel = [StarIO10ValueConverter toDrawerChannel:channel];
    
    STARIO10StarXpandCommandDrawerOpenParameter *param = [[STARIO10StarXpandCommandDrawerOpenParameter alloc] init];
    param = [param setChannel:nativeChannel];
    param = [param setOnTime:onTime.integerValue];
    
    return param;
}

+ (STARIO10StarXpandCommandBuzzerDriveParameter *)toBuzzerDriveParameterWithChannel:(nonnull NSString *)channel
                                                                             repeat:(nonnull NSNumber *)repeat
                                                                             onTime:(nonnull NSNumber *)onTime
                                                                            offTime:(nonnull NSNumber *)offTime
{
    STARIO10StarXpandCommandBuzzerChannel nativeChannel = [StarIO10ValueConverter toBuzzerChannel:channel];
    
    STARIO10StarXpandCommandBuzzerDriveParameter *param = [[STARIO10StarXpandCommandBuzzerDriveParameter alloc] init];
    param = [param setChannel:nativeChannel];
    param = [param setRepeat:repeat.integerValue];
    param = [param setOnTime:onTime.integerValue];
    param = [param setOffTime:offTime.integerValue];
    
    return param;
}

+ (STARIO10StarXpandCommandMelodySpeakerDriveRegisteredSoundParameter *)toMelodySpeakerDriveRegisteredSoundParameterWithArea:(nonnull NSString *)area
                                                                                                                      number:(nonnull NSNumber *)number
                                                                                                                      volume:(nonnull NSNumber *)volume
{
    STARIO10StarXpandCommandMelodySpeakerSoundStorageArea nativeArea = [StarIO10ValueConverter toMelodySpeakerSoundStorageArea:area];
    
    STARIO10StarXpandCommandMelodySpeakerDriveRegisteredSoundParameter *param = [[STARIO10StarXpandCommandMelodySpeakerDriveRegisteredSoundParameter alloc] initWithArea:nativeArea number:number.integerValue];
    param = [param setVolume:volume.integerValue];
    
    return param;
}

+ (STARIO10StarXpandCommandMelodySpeakerDriveOneTimeSoundParameter *)toMelodySpeakerDriveOneTimeSoundParameterWithSource:(nonnull NSArray<NSNumber *> *)source
                                                                                                                  volume:(nonnull NSNumber *)volume
{
    NSData *data = [StarIO10ValueConverter toData:source];
    
    STARIO10StarXpandCommandMelodySpeakerDriveOneTimeSoundParameter *param = [[STARIO10StarXpandCommandMelodySpeakerDriveOneTimeSoundParameter alloc] initWithSource:data];
    param = [param setVolume:volume.integerValue];
    
    return param;
}

+ (STARIO10StarXpandCommandLEDAutomaticBlinkParameter *)toLEDAutomaticBlinkParameterWithType:(nonnull NSString *)type
                                                                                      onTime:(nonnull NSNumber *)onTime
                                                                                     offTime:(nonnull NSNumber *)offTime
{
    STARIO10StarXpandCommandLEDType nativeType = [StarIO10ValueConverter toLEDType:type];

    STARIO10StarXpandCommandLEDAutomaticBlinkParameter *param = [[STARIO10StarXpandCommandLEDAutomaticBlinkParameter alloc] initWithType:nativeType];
    param = [param setOnTime:onTime.integerValue];
    param = [param setOffTime:offTime.integerValue];
    
    return param;
}

@end
