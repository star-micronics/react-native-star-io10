using Microsoft.ReactNative.Managed;
using StarMicronics.StarIO10;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Buzzer;
using StarMicronics.StarIO10.StarXpandCommand.Display;
using StarMicronics.StarIO10.StarXpandCommand.Drawer;
using StarMicronics.StarIO10.StarXpandCommand.MelodySpeaker;
using StarMicronics.StarIO10.StarXpandCommand.Presenter;
using StarMicronics.StarIO10.StarXpandCommand.Printer;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using System.Threading.Tasks;
using Windows.ApplicationModel;
using Windows.Graphics.Imaging;
using Windows.Storage;
using Windows.Storage.Streams;

namespace StarMicronics.ReactNative.StarIO10
{
    internal class StarIO10ValueConverter
    {
        private static readonly IReadOnlyDictionary<InterfaceType, string> InterfaceTypeDictionary = new Dictionary<InterfaceType, string>()
        {
            { InterfaceType.Lan, "Lan" },
            { InterfaceType.Bluetooth, "Bluetooth" },
            { InterfaceType.BluetoothLE, "BluetoothLE" },
            { InterfaceType.Usb, "Usb" }
        };

        private static readonly IReadOnlyDictionary<StarPrinterModel, string> StarPrinterModelDictionary = new Dictionary<StarPrinterModel, string>()
        {
            { StarPrinterModel.Unknown, "Unknown" },
            { StarPrinterModel.TSP650II, "TSP650II" },
            { StarPrinterModel.TSP700II, "TSP700II" },
            { StarPrinterModel.TSP800II, "TSP800II" },
            { StarPrinterModel.TSP100IIIW, "TSP100IIIW" },
            { StarPrinterModel.TSP100IIILAN, "TSP100IIILAN" },
            { StarPrinterModel.TSP100IIIBI, "TSP100IIIBI" },
            { StarPrinterModel.TSP100IIIU, "TSP100IIIU" },
            { StarPrinterModel.TSP100IV, "TSP100IV" },
            { StarPrinterModel.mPOP, "mPOP" },
            { StarPrinterModel.mCPrint2, "mC_Print2" },
            { StarPrinterModel.mCPrint3, "mC_Print3" },
            { StarPrinterModel.SMS210i, "SM_S210i" },
            { StarPrinterModel.SMS230i, "SM_S230i" },
            { StarPrinterModel.SMT300,  "SM_T300" },
            { StarPrinterModel.SMT300i, "SM_T300i" },
            { StarPrinterModel.SMT400i, "SM_T400i" },
            { StarPrinterModel.SML200, "SM_L200" },
            { StarPrinterModel.SML300, "SM_L300" },
            { StarPrinterModel.BSC10, "BSC10" },
            { StarPrinterModel.TSP043, "TSP043" },
            { StarPrinterModel.SP700, "SP700" },
            { StarPrinterModel.TUP500, "TUP500" },
            { StarPrinterModel.SK12xx, "SK1_2xx" },
            { StarPrinterModel.SK13xx, "SK1_3xx" }
        };

        private static readonly IReadOnlyDictionary<StarPrinterEmulation, string> StarPrinterEmulationDictionary = new Dictionary<StarPrinterEmulation, string>()
        {
            { StarPrinterEmulation.Unknown, "Unknown" },
            { StarPrinterEmulation.StarLine, "StarLine" },
            { StarPrinterEmulation.StarDot, "StarDot" },
            { StarPrinterEmulation.StarGraphic, "StarGraphic" },
            { StarPrinterEmulation.StarPRNT, "StarPRNT" },
            { StarPrinterEmulation.EscPos, "EscPos" },
            { StarPrinterEmulation.EscPosMobile, "EscPosMobile" }
        };

        private static readonly IReadOnlyDictionary<StarMicronics.StarIO10.StarXpandCommand.Bezel.LedType, string> BezelLedTypeDictionary = new Dictionary<StarMicronics.StarIO10.StarXpandCommand.Bezel.LedType, string>()
        {
            { StarMicronics.StarIO10.StarXpandCommand.Bezel.LedType.Holding, "Holding" },
            { StarMicronics.StarIO10.StarXpandCommand.Bezel.LedType.Error, "Error" },
            { StarMicronics.StarIO10.StarXpandCommand.Bezel.LedType.Idle, "Idle" }
        };

        private static readonly IReadOnlyDictionary<StarMicronics.StarIO10.StarXpandCommand.Presenter.LedType, string> PresenterLedTypeDictionary = new Dictionary<StarMicronics.StarIO10.StarXpandCommand.Presenter.LedType, string>()
        {
            { StarMicronics.StarIO10.StarXpandCommand.Presenter.LedType.Holding, "Holding" },
            { StarMicronics.StarIO10.StarXpandCommand.Presenter.LedType.Error, "Error" },
            { StarMicronics.StarIO10.StarXpandCommand.Presenter.LedType.Idle, "Idle" }
        };

        private static readonly IReadOnlyDictionary<BlackMarkPosition, string> PrinterBlackMarkPositionDictionary = new Dictionary<BlackMarkPosition, string>()
        {
            { BlackMarkPosition.Front, "Front" },
            { BlackMarkPosition.Back, "Back" }
        };

        private static readonly IReadOnlyDictionary<Alignment, string> PrinterAlignmentDictionary = new Dictionary<Alignment, string>()
        {
            { Alignment.Left, "Left" },
            { Alignment.Center, "Center" },
            { Alignment.Right, "Right" }
        };

        private static readonly IReadOnlyDictionary<PageModePrintDirection, string> PrinterPageModePrintDirectionDictionary = new Dictionary<PageModePrintDirection, string>()
        {
            { PageModePrintDirection.BottomToTop, "BottomToTop" },
            { PageModePrintDirection.LeftToRight, "LeftToRight" },
            { PageModePrintDirection.RightToLeft, "RightToLeft" },
            { PageModePrintDirection.TopToBottom, "TopToBottom" },
        };

        private static readonly IReadOnlyDictionary<FontType, string> PrinterFontTypeDictionary = new Dictionary<FontType, string>()
        {
            { FontType.A, "A" },
            { FontType.B, "B" },
        };

        private static readonly IReadOnlyDictionary<StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType, string> PrinterInternationalCharacterTypeDictionary = new Dictionary<StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType, string>()
        {
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Usa, "Usa" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.France, "France" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Germany, "Germany" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.UK, "UK" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Denmark, "Denmark" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Sweden, "Sweden" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Italy, "Italy" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Spain, "Spain" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Japan, "Japan" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Norway, "Norway" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Denmark2, "Denmark2" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Spain2, "Spain2" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.LatinAmerica, "LatinAmerica" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Korea, "Korea" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Ireland, "Ireland" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Slovenia, "Slovenia" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Croatia, "Croatia" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.China, "China" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Vietnam, "Vietnam" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Arabic, "Arabic" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType.Legal, "Legal" },
        };

        private static readonly IReadOnlyDictionary<StarMicronics.StarIO10.StarXpandCommand.Printer.CharacterEncodingType, string> PrinterCharacterEncodingTypeDictionary = new Dictionary<StarMicronics.StarIO10.StarXpandCommand.Printer.CharacterEncodingType, string>()
        {
            { StarMicronics.StarIO10.StarXpandCommand.Printer.CharacterEncodingType.Japanese, "Japanese" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.CharacterEncodingType.SimplifiedChinese, "SimplifiedChinese" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.CharacterEncodingType.TraditionalChinese, "TraditionalChinese" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.CharacterEncodingType.Korean, "Korean" },
            { StarMicronics.StarIO10.StarXpandCommand.Printer.CharacterEncodingType.CodePage, "CodePage" },
        };

        private static readonly IReadOnlyDictionary<CjkCharacterType, string> PrinterCjkCharacterTypeDictionary = new Dictionary<CjkCharacterType, string>()
        {
            { CjkCharacterType.Japanese, "Japanese" },
            { CjkCharacterType.SimplifiedChinese, "SimplifiedChinese" },
            { CjkCharacterType.TraditionalChinese, "TraditionalChinese" },
            { CjkCharacterType.Korean, "Korean" },
        };

        private static readonly IReadOnlyDictionary<CutType, string> PrinterCutTypeDictionary = new Dictionary<CutType, string>()
        {
            { CutType.Full, "Full" },
            { CutType.Partial, "Partial" },
            { CutType.FullDirect, "FullDirect" },
            { CutType.PartialDirect, "PartialDirect" },
        };

        private static readonly IReadOnlyDictionary<BarcodeSymbology, string> PrinterBarcodeSymbologyDictionary = new Dictionary<BarcodeSymbology, string>()
        {
            { BarcodeSymbology.UpcE, "UpcE" },
            { BarcodeSymbology.UpcA, "UpcA" },
            { BarcodeSymbology.Jan8, "Jan8" },
            { BarcodeSymbology.Ean8, "Ean8" },
            { BarcodeSymbology.Jan13, "Jan13" },
            { BarcodeSymbology.Ean13, "Ean13" },
            { BarcodeSymbology.Code39, "Code39" },
            { BarcodeSymbology.Itf, "Itf" },
            { BarcodeSymbology.Code128, "Code128" },
            { BarcodeSymbology.Code93, "Code93" },
            { BarcodeSymbology.NW7, "NW7" },
        };

        private static readonly IReadOnlyDictionary<BarcodeBarRatioLevel, string> PrinterBarcodeBarRatioLevelDictionary = new Dictionary<BarcodeBarRatioLevel, string>()
        {
            { BarcodeBarRatioLevel.LevelPlus1, "LevelPlus1" },
            { BarcodeBarRatioLevel.Level0, "Level0" },
            { BarcodeBarRatioLevel.LevelMinus1, "LevelMinus1" },
        };

        private static readonly IReadOnlyDictionary<Pdf417Level, string> PrinterPdf417LevelDictionary = new Dictionary<Pdf417Level, string>()
        {
            { Pdf417Level.Ecc0, "Ecc0" },
            { Pdf417Level.Ecc1, "Ecc1" },
            { Pdf417Level.Ecc2, "Ecc2" },
            { Pdf417Level.Ecc3, "Ecc3" },
            { Pdf417Level.Ecc4, "Ecc4" },
            { Pdf417Level.Ecc5, "Ecc5" },
            { Pdf417Level.Ecc6, "Ecc6" },
            { Pdf417Level.Ecc7, "Ecc7" },
            { Pdf417Level.Ecc8, "Ecc8" },
        };

        private static readonly IReadOnlyDictionary<QRCodeModel, string> PrinterQRCodeModelDictionary = new Dictionary<QRCodeModel, string>()
        {
            { QRCodeModel.Model1, "Model1" },
            { QRCodeModel.Model2, "Model2" },
        };

        private static readonly IReadOnlyDictionary<QRCodeLevel, string> PrinterQRCodeLevelDictionary = new Dictionary<QRCodeLevel, string>()
        {
            { QRCodeLevel.L, "L" },
            { QRCodeLevel.M, "M" },
            { QRCodeLevel.Q, "Q" },
            { QRCodeLevel.H, "H" },
        };

        private static readonly IReadOnlyDictionary<StarMicronics.StarIO10.StarXpandCommand.Buzzer.Channel, string> BuzzerChannelDictionary = new Dictionary<StarMicronics.StarIO10.StarXpandCommand.Buzzer.Channel, string>()
        {
            { StarMicronics.StarIO10.StarXpandCommand.Buzzer.Channel.No1, "No1" },
            { StarMicronics.StarIO10.StarXpandCommand.Buzzer.Channel.No2, "No2" },
        };

        private static readonly IReadOnlyDictionary<StarMicronics.StarIO10.StarXpandCommand.Drawer.Channel, string> DrawerChannelDictionary = new Dictionary<StarMicronics.StarIO10.StarXpandCommand.Drawer.Channel, string>()
        {
            { StarMicronics.StarIO10.StarXpandCommand.Drawer.Channel.No1, "No1" },
            { StarMicronics.StarIO10.StarXpandCommand.Drawer.Channel.No2, "No2" }
        };

        private static readonly IReadOnlyDictionary<SoundStorageArea, string> MelodySpeakerSoundStorageAreaDictionary = new Dictionary<SoundStorageArea, string>()
        {
            { SoundStorageArea.Area1, "Area1" },
            { SoundStorageArea.Area2, "Area2" },
        };

        private static readonly IReadOnlyDictionary<Contrast, string> DisplayContrastDictionary = new Dictionary<Contrast, string>()
        {
            { Contrast.Plus3, "Plus3" },
            { Contrast.Plus2, "Plus2" },
            { Contrast.Plus1, "Plus1" },
            { Contrast.Default, "Default" },
            { Contrast.Minus1, "Minus1" },
            { Contrast.Minus2, "Minus2" },
            { Contrast.Minus3, "Minus3" }
        };

        private static readonly IReadOnlyDictionary<CursorState, string> DisplayCursorStateDictionary = new Dictionary<CursorState, string>()
        {
            { CursorState.On, "On" },
            { CursorState.Blink, "Blink" },
            { CursorState.Off, "Off" }
        };

        private static readonly IReadOnlyDictionary<StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType, string> DisplayInternationalCharacterTypeDictionary = new Dictionary<StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType, string>()
        {
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Usa, "Usa" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.France, "France" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Germany, "Germany" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.UK, "UK" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Denmark, "Denmark" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Sweden, "Sweden" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Italy, "Italy" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Spain, "Spain" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Japan, "Japan" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Norway, "Norway" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Denmark2, "Denmark2" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Spain2, "Spain2" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.LatinAmerica, "LatinAmerica" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType.Korea, "Korea" }
        };

        private static readonly IReadOnlyDictionary<StarMicronics.StarIO10.StarXpandCommand.Display.CharacterEncodingType, string> DisplayCharacterEncodingTypeDictionary = new Dictionary<StarMicronics.StarIO10.StarXpandCommand.Display.CharacterEncodingType, string>()
        {
            { StarMicronics.StarIO10.StarXpandCommand.Display.CharacterEncodingType.Japanese, "Japanese" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.CharacterEncodingType.SimplifiedChinese, "SimplifiedChinese" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.CharacterEncodingType.TraditionalChinese, "TraditionalChinese" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.CharacterEncodingType.Korean, "Korean" },
            { StarMicronics.StarIO10.StarXpandCommand.Display.CharacterEncodingType.CodePage, "CodePage" },
        };

        public static bool ToInterfaceType(string value, out InterfaceType output)
        {
            return InterfaceTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToBezelLedType(string value, out StarMicronics.StarIO10.StarXpandCommand.Bezel.LedType output)
        {
            return BezelLedTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToPresenterLedType(string value, out StarMicronics.StarIO10.StarXpandCommand.Presenter.LedType output)
        {
            return PresenterLedTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterBlackMarkPosition(string value, out BlackMarkPosition output)
        {
            return PrinterBlackMarkPositionDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterAlignment(string value, out Alignment output)
        {
            return PrinterAlignmentDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterPageModePrintDirection(string value, out PageModePrintDirection output)
        {
            return PrinterPageModePrintDirectionDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterFontType(string value, out FontType output)
        {
            return PrinterFontTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterInternationalCharacterType(string value, out StarMicronics.StarIO10.StarXpandCommand.Printer.InternationalCharacterType output)
        {
            return PrinterInternationalCharacterTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterCharacterEncodingType(string value, out StarMicronics.StarIO10.StarXpandCommand.Printer.CharacterEncodingType output)
        {
            return PrinterCharacterEncodingTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterCjkCharacterType(string value, out CjkCharacterType output)
        {
            return PrinterCjkCharacterTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterCutType(string value, out CutType output)
        {
            return PrinterCutTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterBarcodeSymbology(string value, out BarcodeSymbology output)
        {
            return PrinterBarcodeSymbologyDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterBarcodeBarRatioLevel(string value, out BarcodeBarRatioLevel output)
        {
            return PrinterBarcodeBarRatioLevelDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterPdf417Level(string value, out Pdf417Level output)
        {
            return PrinterPdf417LevelDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterQRCodeModel(string value, out QRCodeModel output)
        {
            return PrinterQRCodeModelDictionary.TryGetKey(value, out output);
        }

        public static bool ToPrinterQRCodeLevel(string value, out QRCodeLevel output)
        {
            return PrinterQRCodeLevelDictionary.TryGetKey(value, out output);
        }

        public static bool ToBuzzerChannel(string value, out StarMicronics.StarIO10.StarXpandCommand.Buzzer.Channel output)
        {
            return BuzzerChannelDictionary.TryGetKey(value, out output);
        }

        public static bool ToDrawerChannel(string value, out StarMicronics.StarIO10.StarXpandCommand.Drawer.Channel output)
        {
            return DrawerChannelDictionary.TryGetKey(value, out output);
        }

        public static bool ToMelodySpeakerSoundStorageArea(string value, out SoundStorageArea output)
        {
            return MelodySpeakerSoundStorageAreaDictionary.TryGetKey(value, out output);
        }

        public static bool ToDisplayContrast(string value, out Contrast output)
        {
            return DisplayContrastDictionary.TryGetKey(value, out output);
        }

        public static bool ToDisplayCursorState(string value, out CursorState output)
        {
            return DisplayCursorStateDictionary.TryGetKey(value, out output);
        }

        public static bool ToDisplayInternationalCharacterType(string value, out StarMicronics.StarIO10.StarXpandCommand.Display.InternationalCharacterType output)
        {
            return DisplayInternationalCharacterTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToDisplayCharacterEncodingType(string value, out StarMicronics.StarIO10.StarXpandCommand.Display.CharacterEncodingType output)
        {
            return DisplayCharacterEncodingTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToString(InterfaceType value, out string output)
        {
            return InterfaceTypeDictionary.TryGetValue(value, out output);
        }

        public static bool ToString(StarPrinterModel value, out string output)
        {
            bool result = StarPrinterModelDictionary.TryGetValue(value, out output);

            if (!result)
            {
                output = "Unknown";
            }

            return true;
        }

        public static bool ToString(StarPrinterEmulation value, out string output)
        {
            bool result = StarPrinterEmulationDictionary.TryGetValue(value, out output);

            if (!result)
            {
                output = "Unknown";
            }

            return true;
        }

        public static bool ToPresenterModeParameter(bool loop, bool hold, bool retract, int holdTime, out ModeParameter parameter)
        {
            parameter = new ModeParameter();
            parameter.SetLoop(loop);
            parameter.SetHold(hold);
            parameter.SetRetract(retract);
            parameter.SetHoldTime(holdTime);

            return true;
        }

        public static bool ToBezelLedAutomaticBlinkParameter(string type, int onTime, int offTime, out StarMicronics.StarIO10.StarXpandCommand.Bezel.LedAutomaticBlinkParameter parameter)
        {
            parameter = null;

            if (!ToBezelLedType(type, out StarMicronics.StarIO10.StarXpandCommand.Bezel.LedType nativeType))
            {
                return false;
            }

            parameter = new StarMicronics.StarIO10.StarXpandCommand.Bezel.LedAutomaticBlinkParameter(nativeType);
            parameter.SetOnTime(onTime);
            parameter.SetOffTime(offTime);

            return true;
        }

        public static bool ToPresenterLedAutomaticBlinkParameter(string type, int onTime, int offTime, out StarMicronics.StarIO10.StarXpandCommand.Presenter.LedAutomaticBlinkParameter parameter)
        {
            parameter = null;

            if (!ToPresenterLedType(type, out StarMicronics.StarIO10.StarXpandCommand.Presenter.LedType nativeType))
            {
                return false;
            }

            parameter = new StarMicronics.StarIO10.StarXpandCommand.Presenter.LedAutomaticBlinkParameter(nativeType);
            parameter.SetOnTime(onTime);
            parameter.SetOffTime(offTime);

            return true;
        }

        public static bool ToPrinterBlackMarkParameter(bool enable, string position, out BlackMarkParameter parameter)
        {
            parameter = null;

            if (!ToPrinterBlackMarkPosition(position, out BlackMarkPosition nativePosition))
            {
                return false;
            }

            parameter = new BlackMarkParameter();
            parameter.SetEnable(enable);
            parameter.SetPosition(nativePosition);

            return true;
        }

        public static bool ToPrinterLabelParameter(bool enable, out LabelParameter parameter)
        {
            parameter = new LabelParameter();
            parameter.SetEnable(enable);

            return true;
        }

        public static bool ToPrinterHoldPrintParameter(bool enable, out HoldPrintParameter parameter)
        {
            parameter = new HoldPrintParameter(enable);

            return true;
        }

        public static bool ToPrinterPageModeAreaParameter(double x, double y, double width, double height, out PageModeAreaParameter parameter)
        {
            parameter = new PageModeAreaParameter(width, height);
            parameter.SetX(x);
            parameter.SetY(y);

            return true;
        }

        public static bool ToMagnificationParameter(int width, int height, out MagnificationParameter parameter)
        {
            parameter = new MagnificationParameter(width, height);

            return true;
        }

        public static bool ToPrinterLogoParameter(string keyCode, out LogoParameter parameter)
        {
            parameter = new LogoParameter(keyCode);

            return true;
        }

        public static bool ToPrinterBarcodeParameter(string content, string symbology, bool printHri, int barDots, string barRatioLevel, double height, out BarcodeParameter parameter)
        {
            parameter = null;

            if (!ToPrinterBarcodeSymbology(symbology, out BarcodeSymbology nativeSymbology) ||
                !ToPrinterBarcodeBarRatioLevel(barRatioLevel, out BarcodeBarRatioLevel nativeBarRatioLevel))
            {
                return false;
            }

            parameter = new BarcodeParameter(content, nativeSymbology);
            parameter.SetPrintHri(printHri);
            parameter.SetBarDots(barDots);
            parameter.SetBarRatioLevel(nativeBarRatioLevel);
            parameter.SetHeight(height);

            return true;
        }

        public static bool ToPrinterPdf417Parameter(string content, int column, int line, int module, int aspect, string level, out Pdf417Parameter parameter)
        {
            parameter = null;

            if (!ToPrinterPdf417Level(level, out Pdf417Level nativeLevel))
            {
                return false;
            }

            parameter = new Pdf417Parameter(content);
            parameter.SetColumn(column);
            parameter.SetLine(line);
            parameter.SetModule(module);
            parameter.SetAspect(aspect);
            parameter.SetLevel(nativeLevel);

            return true;
        }

        public static bool ToPrinterQRCodeParameter(string content, string model, string level, int cellSize, out QRCodeParameter parameter)
        {
            parameter = null;

            if (!ToPrinterQRCodeModel(model, out QRCodeModel nativeModel) ||
                !ToPrinterQRCodeLevel(level, out QRCodeLevel nativeLevel))
            {
                return false;
            }

            parameter = new QRCodeParameter(content);
            parameter.SetModel(nativeModel);
            parameter.SetLevel(nativeLevel);
            parameter.SetCellSize(cellSize);

            return true;
        }

        public static async Task<StarMicronics.StarIO10.StarXpandCommand.Printer.ImageParameter> ToPrinterImageParameterAsync(string source, int width, bool effectDiffusion, int threshold)
        {
            SoftwareBitmap image = await SourceToImageAsync(source);

            StarMicronics.StarIO10.StarXpandCommand.Printer.ImageParameter parameter = new StarMicronics.StarIO10.StarXpandCommand.Printer.ImageParameter(image, width);
            parameter.SetEffectDiffusion(effectDiffusion);
            parameter.SetThreshold(threshold);

            return parameter;
        }

        public static bool ToBuzzerDriveParameter(string channel, int repeat, int onTime, int offTime, out DriveParameter parameter)
        {
            parameter = null;

            if (!ToBuzzerChannel(channel, out StarMicronics.StarIO10.StarXpandCommand.Buzzer.Channel nativeChannel))
            {
                return false;
            }

            parameter = new DriveParameter();
            parameter.SetChannel(nativeChannel);
            parameter.SetRepeat(repeat);
            parameter.SetOnTime(onTime);
            parameter.SetOffTime(offTime);

            return true;
        }

        public static bool ToDrawerOpenParameter(string channel, int onTime, out OpenParameter parameter)
        {
            parameter = null;

            if (!ToDrawerChannel(channel, out StarMicronics.StarIO10.StarXpandCommand.Drawer.Channel nativeChannel))
            {
                return false;
            }

            parameter = new OpenParameter();
            parameter.SetChannel(nativeChannel);
            parameter.SetOnTime(onTime);

            return true;
        }

        public static bool ToMelodySpeakerDriveRegisteredSoundParameter(string area, int number, int volume, out DriveRegisteredSoundParameter parameter)
        {
            parameter = null;

            if (!ToMelodySpeakerSoundStorageArea(area, out SoundStorageArea nativeArea))
            {
                return false;
            }

            parameter = new DriveRegisteredSoundParameter(nativeArea, number);
            parameter.SetVolume(volume);

            return true;
        }

        public static async Task<StarMicronics.StarIO10.StarXpandCommand.Display.ImageParameter> ToDisplayImageParameterAsync(string source, bool effectDiffusion, int threshold)
        {
            SoftwareBitmap image = await SourceToImageAsync(source);

            StarMicronics.StarIO10.StarXpandCommand.Display.ImageParameter parameter = new StarMicronics.StarIO10.StarXpandCommand.Display.ImageParameter(image);
            parameter.SetEffectDiffusion(effectDiffusion);
            parameter.SetThreshold(threshold);

            return parameter;
        }

        public static bool ToDisplayPositionParameter(int x, int y, out PositionParameter parameter)
        {
            parameter = new PositionParameter(x, y);

            return true;
        }

        public static async Task<DriveOneTimeSoundParameter> ToMelodySpeakerDriveOneTimeSoundParameterAsync(string source, int volume)
        {
            byte[] sourceBytes = await SourceToBytesAsync(source);

            DriveOneTimeSoundParameter parameter = new DriveOneTimeSoundParameter(sourceBytes);
            parameter.SetVolume(volume);

            return parameter;
        }

        public static JSValue ToJSValue(dynamic value)
        {
            JSValue result;

            if (value is string stringValue)
            {
                result = new JSValue(stringValue);
            }
            else if (value is bool boolValue)
            {
                result = new JSValue(boolValue);
            }
            else if (value is sbyte sbyteValue)
            {
                result = new JSValue(sbyteValue);
            }
            else if (value is short shortValue)
            {
                result = new JSValue(shortValue);
            }
            else if (value is int intValue)
            {
                result = new JSValue(intValue);
            }
            else if (value is long longValue)
            {
                result = new JSValue(longValue);
            }
            else if (value is byte byteValue)
            {
                result = new JSValue(byteValue);
            }
            else if (value is ushort ushortValue)
            {
                result = new JSValue(ushortValue);
            }
            else if (value is uint uintValue)
            {
                result = new JSValue(uintValue);
            }
            else if (value is ulong ulongValue)
            {
                result = new JSValue(ulongValue);
            }
            else if (value is float floatValue)
            {
                result = new JSValue(floatValue);
            }
            else if (value is double doubleValue)
            {
                result = new JSValue(doubleValue);
            }
            else if (value is IDictionary<string, dynamic> dictionaryValue)
            {
                result = new JSValue(ToJSDictionary(dictionaryValue));
            }
            else if (value is IEnumerable<dynamic> collectionValue)
            {
                result = ToJSCollection(collectionValue);
            }
            else if (value is Array arrayValue)
            {
                result = ToJSCollection(arrayValue.OfType<dynamic>().ToList());
            }
            else
            {
                result = JSValue.Null;
            }

            return result;
        }

        public static ReadOnlyCollection<JSValue> ToJSCollection(IEnumerable<dynamic> colleciton)
        {
            List<JSValue> result = new List<JSValue>();

            foreach (dynamic item in colleciton)
            {
                result.Add(ToJSValue(item));
            }

            return new ReadOnlyCollection<JSValue>(result);
        }

        public static IReadOnlyDictionary<string, JSValue> ToJSDictionary(IEnumerable<KeyValuePair<string, object>> dictionary)
        {
            Dictionary<string, object> jsNamingDictionary = new Dictionary<string, object>();

            foreach (KeyValuePair<string, object> item in dictionary)
            {
                jsNamingDictionary[ToJSNaming(item.Key)] = item.Value;
            }

            return ToJSDictionaryGeneral(jsNamingDictionary);
        }

        public static IReadOnlyDictionary<TKey, JSValue> ToJSDictionaryGeneral<TKey, TValue>(IEnumerable<KeyValuePair<TKey, TValue>> dictionary)
        {
            Dictionary<TKey, JSValue> result = new Dictionary<TKey, JSValue>();

            foreach (KeyValuePair<TKey, TValue> item in dictionary)
            {
                result[item.Key] = ToJSValue(item.Value);
            }

            return result;
        }

        private static async Task<SoftwareBitmap> SourceToImageAsync(string source)
        {
            SoftwareBitmap image = null;

            if (image == null)
            {
                try
                {
                    image = await UriToImageAsync(source);
                }
                catch { }
            }

            if (image == null)
            {
                try
                {
                    image = await ResourceFileToImageAsync(source);
                }
                catch { }
            }

            if (image == null)
            {
                try
                {
                    image = await Base64ToImageAsync(source);
                }
                catch { }
            }

            if (image == null)
            {
                throw new StarIO10ArgumentException("Invalid source.");
            }

            return image;
        }

        private static async Task<SoftwareBitmap> Base64ToImageAsync(string base64String)
        {
            SoftwareBitmap image;

            using (InMemoryRandomAccessStream stream = new InMemoryRandomAccessStream())
            {
                byte[] base64Bytes = Convert.FromBase64String(base64String);

                await stream.WriteAsync(base64Bytes.AsBuffer());
                stream.Seek(0);

                BitmapDecoder decoder = await BitmapDecoder.CreateAsync(stream);

                image = await decoder.GetSoftwareBitmapAsync(BitmapPixelFormat.Bgra8, BitmapAlphaMode.Premultiplied);
            }

            return image;
        }

        private static async Task<SoftwareBitmap> UriToImageAsync(string uri)
        {
            WebRequest request = WebRequest.Create(uri);
            WebResponse response = request.GetResponse();
            Stream stream = response.GetResponseStream();

            SoftwareBitmap image;

            using (MemoryStream memoryStream = new MemoryStream())
            {
                stream.CopyTo(memoryStream);
                BitmapDecoder decoder = await BitmapDecoder.CreateAsync(memoryStream.AsRandomAccessStream());
                image = await decoder.GetSoftwareBitmapAsync(BitmapPixelFormat.Bgra8, BitmapAlphaMode.Premultiplied);
            }

            return image;
        }

        private static async Task<SoftwareBitmap> ResourceFileToImageAsync(string fileName)
        {
            SoftwareBitmap image = null;
            StorageFile file = await GetResourceFileAsync(fileName);

            if (file != null)
            {
                using (IRandomAccessStream stream = await file.OpenAsync(FileAccessMode.Read))
                {
                    BitmapDecoder decoder = await BitmapDecoder.CreateAsync(stream);
                    image = await decoder.GetSoftwareBitmapAsync(BitmapPixelFormat.Bgra8, BitmapAlphaMode.Premultiplied);
                }

            }

            return image;
        }

        private static async Task<byte[]> SourceToBytesAsync(string source)
        {
            byte[] sourceBytes = null;

            if (sourceBytes == null)
            {
                try
                {
                    sourceBytes = UriToBytes(source);
                }
                catch { }
            }

            if (sourceBytes == null)
            {
                try
                {
                    sourceBytes = await ResourceFileToBytesAsync(source);
                }
                catch { }
            }


            if (sourceBytes == null)
            {
                try
                {
                    sourceBytes = Convert.FromBase64String(source);
                }
                catch { }
            }

            if (sourceBytes == null)
            {
                throw new StarIO10ArgumentException("Invalid source.");
            }

            return sourceBytes;
        }

        private static byte[] UriToBytes(string uri)
        {
            WebRequest request = WebRequest.Create(uri);
            WebResponse response = request.GetResponse();
            Stream stream = response.GetResponseStream();

            byte[] buffer;

            using (MemoryStream memoryStream = new MemoryStream())
            {
                stream.CopyTo(memoryStream);
                buffer = memoryStream.ToArray();
            }

            return buffer;
        }

        private static async Task<byte[]> ResourceFileToBytesAsync(string fileName)
        {
            byte[] buffer = null;
            StorageFile file = await GetResourceFileAsync(fileName);

            if (file != null)
            {
                using (IRandomAccessStream stream = await file.OpenAsync(FileAccessMode.Read))
                {
                    buffer = new byte[stream.Size];
                    await stream.ReadAsync(buffer.AsBuffer(), (uint)stream.Size, InputStreamOptions.None);
                }

            }

            return buffer;
        }

        private static async Task<StorageFile> GetResourceFileAsync(string fileName)
        {
            StorageFile file = null;

            try
            {
                file = await Package.Current.InstalledLocation.GetFileAsync(@"Assets\" + fileName);
            }
            catch (Exception) { }

            //if (file == null)
            //{
            //    try
            //    {
            //        file = await ApplicationData.Current.LocalFolder.GetFileAsync(fileName);
            //    }
            //    catch (Exception) { }
            //}

            return file;
        }

        private static string ToJSNaming(string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return value;
            }

            StringBuilder result = new StringBuilder();

            char[] characters = value.ToCharArray();

            for(int i = 0; i < characters.Length; i++)
            {
                char character = characters[i];

                if(char.IsUpper(character))
                {
                    StringBuilder upperWord = new StringBuilder();
                    upperWord.Append(character);

                    for(int j = i + 1; j < characters.Length; j++)
                    {
                        i = j;

                        char nextCharacter = characters[j];

                        if(char.IsUpper(nextCharacter))
                        {
                            upperWord.Append(nextCharacter);
                        }
                        else
                        {
                            i = j - 1;
                            break;
                        }
                    }

                    if(2 <= upperWord.Length && i != characters.Length - 1)
                    {
                        upperWord.Remove(upperWord.Length - 1, 1);
                        i--;
                    }

                    if(result.Length == 0)
                    {
                        result.Append(upperWord.ToString().ToLower());
                    }
                    else
                    {
                        result.Append(ToProperString(upperWord.ToString()));
                    }
                }
                else
                {
                    result.Append(character);
                }
            }

            return ToTopLowerString(result.ToString());
        }

        private static string ToProperString(string value)
        {
            StringBuilder result = new StringBuilder();

            char[] characters = value.ToCharArray();

            for (int i = 0; i < characters.Length; i++)
            {
                char character = characters[i];

                if (i == 0 || characters.Length <= 2)
                {
                    result.Append(char.ToUpper(character));
                }
                else
                {
                    result.Append(char.ToLower(character));
                }
            }

            return result.ToString();
        }

        private static string ToTopLowerString(string value)
        {
            char[] characters = value.ToCharArray();
            characters[0] = char.ToLower(characters[0]);

            return new string(characters);
        }
    }
}
