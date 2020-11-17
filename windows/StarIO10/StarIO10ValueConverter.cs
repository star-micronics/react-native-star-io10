using StarMicronics.StarIO10;
using StarMicronics.StarIO10.StarXpandCommand;
using StarMicronics.StarIO10.StarXpandCommand.Buzzer;
using StarMicronics.StarIO10.StarXpandCommand.Drawer;
using StarMicronics.StarIO10.StarXpandCommand.Led;
using StarMicronics.StarIO10.StarXpandCommand.MelodySpeaker;
using StarMicronics.StarIO10.StarXpandCommand.Presenter;
using StarMicronics.StarIO10.StarXpandCommand.Printer;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using Windows.Graphics.Imaging;
using Windows.Storage.Streams;

namespace StarMicronics.ReactNative.StarIO10
{
    internal class StarIO10ValueConverter
    {
        private static readonly IReadOnlyDictionary<InterfaceType, string> InterfaceTypeDictionary = new Dictionary<InterfaceType, string>()
        {
            { InterfaceType.Lan, "Lan" },
            { InterfaceType.Bluetooth, "Bluetooth" },
            { InterfaceType.Usb, "Usb" }
        };

        private static readonly IReadOnlyDictionary<StarPrinterModel, string> StarPrinterModelDictionary = new Dictionary<StarPrinterModel, string>()
        {
            { StarPrinterModel.Unknown, "Unknown" },
            { StarPrinterModel.TSP650II, "TSP650II" },
            { StarPrinterModel.TSP700II, "TSP700II" },
            { StarPrinterModel.TSP800II, "TSP800II" },
            { StarPrinterModel.FVP10, "FVP10" },
            { StarPrinterModel.TSP100U, "TSP100U" },
            { StarPrinterModel.TSP100GT, "TSP100GT" },
            { StarPrinterModel.TSP100ECO, "TSP100ECO" },
            { StarPrinterModel.TSP100LAN, "TSP100LAN" },
            { StarPrinterModel.TSP100IIIW, "TSP100IIIW" },
            { StarPrinterModel.TSP100IIILAN, "TSP100IIILAN" },
            { StarPrinterModel.TSP100IIIBI, "TSP100IIIBI" },
            { StarPrinterModel.TSP100IIIU, "TSP100IIIU" },
            { StarPrinterModel.mPOP, "mPOP" },
            { StarPrinterModel.mCPrint2, "mC_Print2" },
            { StarPrinterModel.mCPrint3, "mC_Print3" },
            { StarPrinterModel.SMS210i, "SM_S210i" },
            { StarPrinterModel.SMS220i, "SM_S220i" },
            { StarPrinterModel.SMS230i, "SM_S230i" },
            { StarPrinterModel.SMT300i, "SM_T300i" },
            { StarPrinterModel.SMT400i, "SM_T400i" },
            { StarPrinterModel.SML200, "SM_L200" },
            { StarPrinterModel.SML300, "SM_L300" },
            { StarPrinterModel.BSC10, "BSC10" },
            { StarPrinterModel.SP700, "SP700" },
            { StarPrinterModel.TUP500, "TUP500" }
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

        private static readonly IReadOnlyDictionary<StarMicronics.StarIO10.StarXpandCommand.Led.Type, string> LedTypeDictionary = new Dictionary<StarMicronics.StarIO10.StarXpandCommand.Led.Type, string>()
        {
            { StarMicronics.StarIO10.StarXpandCommand.Led.Type.Printing, "Printing" },
            { StarMicronics.StarIO10.StarXpandCommand.Led.Type.Error, "Error" },
            { StarMicronics.StarIO10.StarXpandCommand.Led.Type.Idle, "Idle" }
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

        private static readonly IReadOnlyDictionary<CharacterEncodingType, string> PrinterCharacterEncodingTypeDictionary = new Dictionary<CharacterEncodingType, string>()
        {
            { CharacterEncodingType.ShiftJis, "ShiftJis" },
            { CharacterEncodingType.GB18030, "GB18030" },
            { CharacterEncodingType.Big5, "Big5" },
            { CharacterEncodingType.Korean, "Korean" },
            { CharacterEncodingType.CodePage, "CodePage" },
        };

        private static readonly IReadOnlyDictionary<CjkCharacterType, string> PrinterCjkCharacterTypeDictionary = new Dictionary<CjkCharacterType, string>()
        {
            { CjkCharacterType.Japanese, "Japanese" },
            { CjkCharacterType.SimplifiedChinese, "SimplifiedChinese" },
            { CjkCharacterType.TraditionalChinese, "TraditionalChinese" },
            { CjkCharacterType.Hangul, "Hangul" },
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

        public static bool ToInterfaceType(string value, out InterfaceType output)
        {
            return InterfaceTypeDictionary.TryGetKey(value, out output);
        }

        public static bool ToLedType(string value, out StarMicronics.StarIO10.StarXpandCommand.Led.Type output)
        {
            return LedTypeDictionary.TryGetKey(value, out output);
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

        public static bool ToString(InterfaceType value, out string output)
        {
            return InterfaceTypeDictionary.TryGetValue(value, out output);
        }

        public static bool ToString(StarPrinterModel value, out string output)
        {
            return StarPrinterModelDictionary.TryGetValue(value, out output);
        }

        public static bool ToString(StarPrinterEmulation value, out string output)
        {
            return StarPrinterEmulationDictionary.TryGetValue(value, out output);
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

        public static bool ToLedAutomaticBlinkParameter(string type, int onTime, int offTime, out AutomaticBlinkParameter parameter)
        {
            parameter = null;

            if (!ToLedType(type, out StarMicronics.StarIO10.StarXpandCommand.Led.Type nativeType))
            {
                return false;
            }

            parameter = new AutomaticBlinkParameter(nativeType);
            parameter.SetOnTime(onTime);
            parameter.SetOffTime(offTime);

            return true;
        }

        public static bool ToPrinterBlackMarkParameter(bool start, bool end, string position, out BlackMarkParameter parameter)
        {
            parameter = null;

            if (!ToPrinterBlackMarkPosition(position, out BlackMarkPosition nativePosition))
            {
                return false;
            }

            parameter = new BlackMarkParameter();
            parameter.SetStart(start);
            parameter.SetEnd(end);
            parameter.SetPosition(nativePosition);

            return true;
        }

        public static bool ToPrinterLabelParameter(bool start, bool end, out LabelParameter parameter)
        {
            parameter = new LabelParameter();
            parameter.SetStart(start);
            parameter.SetEnd(end);

            return true;
        }

        public static bool ToPrinterHoldPrintParameter(bool enable, out HoldPrintParameter parameter)
        {
            parameter = new HoldPrintParameter(enable);

            return true;
        }

        public static bool ToPrinterPageModeParameter(double x, double y, double width, double height, string printDirection, out PageModeParameter parameter)
        {
            parameter = null;

            if (!ToPrinterPageModePrintDirection(printDirection, out PageModePrintDirection nativePrintDirection))
            {
                return false;
            }

            parameter = new PageModeParameter(width, height);
            parameter.SetX(x);
            parameter.SetY(y);
            parameter.SetPrintDirection(nativePrintDirection);

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

        public static async Task<ImageParameter> ToPrinterImageParameterAsync(string source, int width, bool effectDiffusion, int threshold)
        {
            SoftwareBitmap image = await Base64ToImageAsync(source);

            ImageParameter parameter = new StarMicronics.StarIO10.StarXpandCommand.Printer.ImageParameter(image, width);
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

        public static bool ToMelodySpeakerDriveOneTimeSoundParameter(byte[] source, int volume, out DriveOneTimeSoundParameter parameter)
        {
            parameter = new DriveOneTimeSoundParameter(source);
            parameter.SetVolume(volume);

            return true;
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
    }
}
