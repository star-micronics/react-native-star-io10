import { StarXpandCommand } from '../../index';
import { BlackMarkPosition } from './Printer/BlackMarkPosition';
import { Alignment } from './Printer/Alignment';
import { FontType } from './Printer/FontType';
import { CjkCharacterType } from './Printer/CjkCharacterType';
import { AmbiguousCharacterWidthType } from './Printer/AmbiguousCharacterWidthType';
import { CutType } from './Printer/CutType';
import { BarcodeSymbology } from './Printer/BarcodeSymbology';
import { BarcodeBarRatioLevel } from './Printer/BarcodeBarRatioLevel';
import { Pdf417Level } from './Printer/Pdf417Level';
import { QRCodeModel } from './Printer/QRCodeModel';
import { QRCodeLevel } from './Printer/QRCodeLevel';
import { TextWidthType } from './Printer/TextWidthType';
import { TextAlignment } from './Printer/TextAlignment';
import { TextEllipsizeType } from './Printer/TextEllipsizeType';
import { TextPrintType } from './Printer/TextPrintType';
import { SoundStorageArea } from './MelodySpeaker/SoundStorageArea';
import { CursorState } from './Display/CursorState';
import { Contrast } from './Display/Contrast';
import { FormatConverter } from '../Util/FormatConverter';

export class StarXpandCommandParameterConverter {

    static convertNumber(value: number): string {
        return value.toString();
    }

    static convertString(value: string): string {
        var output = value;

        output = output.replace(/\\/g, '\\\\');

        output = FormatConverter.replaceNewLineCodes(output, '\\n');

        output = output.replace(/\"/g, '\\\"');

        output = output.replace(/\t/g, '\\t');

        return output;
    }

    static convertBlackMarkPosition(value: BlackMarkPosition): string {
        let commandMap = new Map([
            [BlackMarkPosition.Front, "Front"],
            [BlackMarkPosition.Back, "Back"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertAlignment(value: Alignment): string {
        let commandMap = new Map([
            [Alignment.Left,   "Left"],
            [Alignment.Center, "Center"],
            [Alignment.Right,  "Right"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertFontType(value: FontType): string {
        let commandMap = new Map([
            [FontType.A, "A"],
            [FontType.B, "B"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertPrinterInternationalCharacterType(value: StarXpandCommand.Printer.InternationalCharacterType): string {
        let commandMap = new Map([
            [StarXpandCommand.Printer.InternationalCharacterType.Usa, "Usa"],
            [StarXpandCommand.Printer.InternationalCharacterType.France, "France"],
            [StarXpandCommand.Printer.InternationalCharacterType.Germany, "Germany"],
            [StarXpandCommand.Printer.InternationalCharacterType.UK, "UK"],
            [StarXpandCommand.Printer.InternationalCharacterType.Denmark, "Denmark"],
            [StarXpandCommand.Printer.InternationalCharacterType.Sweden, "Sweden"],
            [StarXpandCommand.Printer.InternationalCharacterType.Italy, "Italy"],
            [StarXpandCommand.Printer.InternationalCharacterType.Spain, "Spain"],
            [StarXpandCommand.Printer.InternationalCharacterType.Japan, "Japan"],
            [StarXpandCommand.Printer.InternationalCharacterType.Norway, "Norway"],
            [StarXpandCommand.Printer.InternationalCharacterType.Denmark2, "Denmark2"],
            [StarXpandCommand.Printer.InternationalCharacterType.Spain2, "Spain2"],
            [StarXpandCommand.Printer.InternationalCharacterType.LatinAmerica, "LatinAmerica"],
            [StarXpandCommand.Printer.InternationalCharacterType.Korea, "Korea"],
            [StarXpandCommand.Printer.InternationalCharacterType.Ireland, "Ireland"],
            [StarXpandCommand.Printer.InternationalCharacterType.Slovenia, "Slovenia"],
            [StarXpandCommand.Printer.InternationalCharacterType.Croatia, "Croatia"],
            [StarXpandCommand.Printer.InternationalCharacterType.China, "China"],
            [StarXpandCommand.Printer.InternationalCharacterType.Vietnam, "Vietnam"],
            [StarXpandCommand.Printer.InternationalCharacterType.Arabic, "Arabic"],
            [StarXpandCommand.Printer.InternationalCharacterType.Legal, "Legal"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertCjkCharacterTypeArray(values: Array<CjkCharacterType>): Array<string> {
        let commandMap = new Map([
            [CjkCharacterType.Japanese, "Japanese"],
            [CjkCharacterType.SimplifiedChinese, "SimplifiedChinese"],
            [CjkCharacterType.TraditionalChinese, "TraditionalChinese"],
            [CjkCharacterType.Korean, "Korean"]
        ]);

        return values.map( value => {
            return commandMap.get(value) as string;
        });
    }

    static convertPrinterCharacterEncodingType(value: StarXpandCommand.Printer.CharacterEncodingType): string {
        let commandMap = new Map([
            [StarXpandCommand.Printer.CharacterEncodingType.Japanese, "Japanese"],
            [StarXpandCommand.Printer.CharacterEncodingType.SimplifiedChinese, "SimplifiedChinese"],
            [StarXpandCommand.Printer.CharacterEncodingType.TraditionalChinese, "TraditionalChinese"],
            [StarXpandCommand.Printer.CharacterEncodingType.Korean, "Korean"],
            [StarXpandCommand.Printer.CharacterEncodingType.CodePage, "CodePage"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertAmbiguousCharacterWidthType(value: AmbiguousCharacterWidthType): string {
        let commandMap = new Map([
            [AmbiguousCharacterWidthType.Half, "Half"],
            [AmbiguousCharacterWidthType.Full, "Full"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertCutType(value: CutType): string {
        let commandMap = new Map([
            [CutType.Full, "Full"],
            [CutType.Partial, "Partial"],
            [CutType.FullDirect, "FullDirect"],
            [CutType.PartialDirect, "PartialDirect"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertBarcodeSymbology(value: BarcodeSymbology): string {
        let commandMap = new Map([
            [BarcodeSymbology.UpcE, "UpcE"],
            [BarcodeSymbology.UpcA, "UpcA"],
            [BarcodeSymbology.Jan8, "Jan8"],
            [BarcodeSymbology.Ean8, "Ean8"],
            [BarcodeSymbology.Jan13, "Jan13"],
            [BarcodeSymbology.Ean13, "Ean13"],
            [BarcodeSymbology.Code39, "Code39"],
            [BarcodeSymbology.Itf, "Itf"],
            [BarcodeSymbology.Code128, "Code128"],
            [BarcodeSymbology.Code93, "Code93"],
            [BarcodeSymbology.NW7, "NW7"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertBarcodeBarRatioLevel(value: BarcodeBarRatioLevel): string {
        let commandMap = new Map([
            [BarcodeBarRatioLevel.LevelPlus1, "LevelPlus1"],
            [BarcodeBarRatioLevel.Level0, "Level0"],
            [BarcodeBarRatioLevel.LevelMinus1, "LevelMinus1"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertPdf417Level(value: Pdf417Level): string {
        let commandMap = new Map([
            [Pdf417Level.Ecc0, "Ecc0"],
            [Pdf417Level.Ecc1, "Ecc1"],
            [Pdf417Level.Ecc2, "Ecc2"],
            [Pdf417Level.Ecc3, "Ecc3"],
            [Pdf417Level.Ecc4, "Ecc4"],
            [Pdf417Level.Ecc5, "Ecc5"],
            [Pdf417Level.Ecc6, "Ecc6"],
            [Pdf417Level.Ecc7, "Ecc7"],
            [Pdf417Level.Ecc8, "Ecc8"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertQRCodeModel(value: QRCodeModel): string {
        let commandMap = new Map([
            [QRCodeModel.Model1, "Model1"],
            [QRCodeModel.Model2, "Model2"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertQRCodeLevel(value: QRCodeLevel): string {
        let commandMap = new Map([
            [QRCodeLevel.L, "L"],
            [QRCodeLevel.M, "M"],
            [QRCodeLevel.Q, "Q"],
            [QRCodeLevel.H, "H"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertTextWidthType(value: TextWidthType): string {
        let commandMap = new Map([
            [TextWidthType.Half, "Half"],
            [TextWidthType.Full, "Full"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertTextAlignment(value: TextAlignment): string {
        let commandMap = new Map([
            [TextAlignment.Left, "Left"],
            [TextAlignment.Center, "Center"],
            [TextAlignment.Right, "Right"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertTextEllipsizeType(value: TextEllipsizeType): string {
        let commandMap = new Map([
            [TextEllipsizeType.None, "None"],
            [TextEllipsizeType.Start, "Start"],
            [TextEllipsizeType.Middle, "Middle"],
            [TextEllipsizeType.End, "End"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertTextPrintType(value: TextPrintType): string {
        let commandMap = new Map([
            [TextPrintType.GoneWhenEmpty, "GoneWhenEmpty"],
            [TextPrintType.Always, "Always"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertDrawerChannel(value: StarXpandCommand.Drawer.Channel): string {
        let commandMap = new Map([
            [StarXpandCommand.Drawer.Channel.No1, "No.1"],
            [StarXpandCommand.Drawer.Channel.No2, "No.2"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertBuzzerChannel(value: StarXpandCommand.Buzzer.Channel): string {
        let commandMap = new Map([
            [StarXpandCommand.Buzzer.Channel.No1, "No.1"],
            [StarXpandCommand.Buzzer.Channel.No2, "No.2"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertSoundStorageArea(value: SoundStorageArea): string {
        let commandMap = new Map([
            [SoundStorageArea.Area1, "Area1"],
            [SoundStorageArea.Area2, "Area2"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertDisplayInternationalCharacterType(value: StarXpandCommand.Display.InternationalCharacterType): string {
        let commandMap = new Map([
            [StarXpandCommand.Display.InternationalCharacterType.Usa, "Usa"],
            [StarXpandCommand.Display.InternationalCharacterType.France, "France"],
            [StarXpandCommand.Display.InternationalCharacterType.Germany, "Germany"],
            [StarXpandCommand.Display.InternationalCharacterType.UK, "UK"],
            [StarXpandCommand.Display.InternationalCharacterType.Denmark, "Denmark"],
            [StarXpandCommand.Display.InternationalCharacterType.Sweden, "Sweden"],
            [StarXpandCommand.Display.InternationalCharacterType.Italy, "Italy"],
            [StarXpandCommand.Display.InternationalCharacterType.Spain, "Spain"],
            [StarXpandCommand.Display.InternationalCharacterType.Japan, "Japan"],
            [StarXpandCommand.Display.InternationalCharacterType.Norway, "Norway"],
            [StarXpandCommand.Display.InternationalCharacterType.Denmark2, "Denmark2"],
            [StarXpandCommand.Display.InternationalCharacterType.Spain2, "Spain2"],
            [StarXpandCommand.Display.InternationalCharacterType.LatinAmerica, "LatinAmerica"],
            [StarXpandCommand.Display.InternationalCharacterType.Korea, "Korea"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertDisplayCharacterEncodingType(value: StarXpandCommand.Display.CharacterEncodingType): string {
        let commandMap = new Map([
            [StarXpandCommand.Display.CharacterEncodingType.Japanese, "Japanese"],
            [StarXpandCommand.Display.CharacterEncodingType.SimplifiedChinese, "SimplifiedChinese"],
            [StarXpandCommand.Display.CharacterEncodingType.TraditionalChinese, "TraditionalChinese"],
            [StarXpandCommand.Display.CharacterEncodingType.Korean, "Korean"],
            [StarXpandCommand.Display.CharacterEncodingType.CodePage, "CodePage"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertCursorState(value: CursorState): string {
        let commandMap = new Map([
            [CursorState.On, "On"],
            [CursorState.Blink, "Blink"],
            [CursorState.Off, "Off"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertContrast(value: Contrast): string {
        let commandMap = new Map([
            [Contrast.Plus3, "Plus3"],
            [Contrast.Plus2, "Plus2"],
            [Contrast.Plus1, "Plus1"],
            [Contrast.Default, "Default"],
            [Contrast.Minus1, "Minus1"],
            [Contrast.Minus2, "Minus2"],
            [Contrast.Minus3, "Minus3"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertPresenterLedType(value: StarXpandCommand.Presenter.LedType): string {
        let commandMap = new Map([
            [StarXpandCommand.Presenter.LedType.Holding, "Holding"],
            [StarXpandCommand.Presenter.LedType.Error, "Error"],
            [StarXpandCommand.Presenter.LedType.Idle, "Idle"]
        ]);

        return commandMap.get(value) as string;
    }
    
    static convertBezelLedType(value: StarXpandCommand.Bezel.LedType): string {
        let commandMap = new Map([
            [StarXpandCommand.Bezel.LedType.Holding, "Holding"],
            [StarXpandCommand.Bezel.LedType.Error, "Error"],
            [StarXpandCommand.Bezel.LedType.Idle, "Idle"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertLineStyle(value: StarXpandCommand.Printer.LineStyle): string {
        let commandMap = new Map([
            [StarXpandCommand.Printer.LineStyle.Single,"Single"],
            [StarXpandCommand.Printer.LineStyle.Double,"Double"]
        ]);

        return commandMap.get(value) as string;
    }

    static convertPageModePrintDirection(value:StarXpandCommand.Printer.PageModePrintDirection): string {
        let commandMap = new Map([
            [StarXpandCommand.Printer.PageModePrintDirection.BottomToTop , "BottomToTop"],
            [StarXpandCommand.Printer.PageModePrintDirection.LeftToRight , "LeftToRight"],
            [StarXpandCommand.Printer.PageModePrintDirection.RightToLeft , "RightToLeft"],
            [StarXpandCommand.Printer.PageModePrintDirection.TopToBottom , "TopToBottom"],
        ]);

        return commandMap.get(value) as string;
    }
    
}