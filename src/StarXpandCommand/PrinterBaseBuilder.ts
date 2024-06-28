import { StarXpandCommand } from '../../index';
import { StarXpandCommandParameterConverter } from './StarXpandCommandParameterConverter';

export class PrinterBaseBuilder {

    static addPrinterParameter(parameters: Map<string, any>, printerParameter: StarXpandCommand.Printer.PrinterParameter) {
        let parameter = parameters.get("parameters")as Array<Map<string, any>>;

        if (printerParameter.templateExtension !== undefined) {
            parameter.push(
                new Map<string, any>([
                    ["method", "Setting.TemplateExtension"],
                    ["parameter", new Map([
                        ["enableArrayFieldData", printerParameter.templateExtension.enableArrayFieldData]
                    ])]
                ])
            );
        }
    }

    static addPageModeParameter(parameters: Map<string, any>, pageModeParameter: StarXpandCommand.Printer.PageModeParameter) {
        let parameter = parameters.get("parameters")as Array<Map<string, any>>;

        if (pageModeParameter.templateExtension !== undefined) {
            parameter.push(
                new Map<string, any>([
                    ["method", "Setting.TemplateExtension"],
                    ["parameter", new Map([
                        ["enableArrayFieldData", pageModeParameter.templateExtension.enableArrayFieldData]
                    ])]
                ])
            );
        }
    }


    static styleAlignment(parameters: Map<string, any>, position: StarXpandCommand.Printer.Alignment) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.Alignment"],
                ["parameter", new Map([
                    ["position", StarXpandCommandParameterConverter.convertAlignment(position)]
                ])]
            ])
        );
    }

    static styleFont(parameters: Map<string, any>, type: StarXpandCommand.Printer.FontType) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.Font"],
                ["parameter", new Map([
                    ["type", StarXpandCommandParameterConverter.convertFontType(type)]
                ])]
            ])
        )
    }

    static styleBold(parameters: Map<string, any>, enable: boolean) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.Bold"],
                ["parameter", new Map([
                    ["enable", enable]
                ])]
            ])
        )
    }

    static styleInvert(parameters: Map<string, any>, enable: boolean) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.Invert"],
                ["parameter", new Map([
                    ["enable", enable]
                ])]
            ])
        )
    }

    static styleUnderLine(parameters: Map<string, any>, enable: boolean) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.UnderLine"],
                ["parameter", new Map([
                    ["enable", enable]
                ])]
            ])
        )
    }

    static styleMagnification(parameters: Map<string, any>, parameter: StarXpandCommand.MagnificationParameter) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.Magnification"],
                ["parameter", new Map([
                    ["width", Math.floor(parameter.width)],
                    ["height", Math.floor(parameter.height)]
                ])]
            ])
        )
    }

    static styleCharacterSpace(parameters: Map<string, any>, width: number) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.CharacterSpace"],
                ["parameter", new Map([
                    ["width", width]
                ])]
            ])
        )
    }

    static styleLineSpace(parameters: Map<string, any>, height: number) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.LineSpace"],
                ["parameter", new Map([
                    ["height", height]
                ])]
            ])
        )
    }

    static styleHorizontalPositionTo(parameters: Map<string, any>, position: number) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.HorizontalPositionTo"],
                ["parameter", new Map([
                    ["position", position]
                ])]
            ])
        )
    }

    static styleHorizontalPositionBy(parameters: Map<string, any>, position: number) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.HorizontalPositionBy"],
                ["parameter", new Map([
                    ["position", position]
                ])]
            ])
        )
    }

    static styleHorizontalTabPositions(parameters: Map<string, any>, positions: Array<number>) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.HorizontalTabPositions"],
                ["parameter", new Map([
                    ["positions", positions]
                ])]
            ])
        )
    }

    static styleVerticalPositionTo(parameters: Map<string, any>, position: number) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.VerticalPositionTo"],
                ["parameter", new Map<string, any>([
                    ["position",position]
                ])]
            ])
        );
    }

    static styleVerticalPositionBy(parameters: Map<string, any>, position: number) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.VerticalPositionBy"],
                ["parameter", new Map<string, any>([
                    ["position",position]
                ])]
            ])
        );
    }

    static styleInternationalCharacter(parameters: Map<string, any>, type: StarXpandCommand.Printer.InternationalCharacterType) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.InternationalCharacter"],
                ["parameter", new Map([
                    ["type", StarXpandCommandParameterConverter.convertPrinterInternationalCharacterType(type)]
                ])]
            ])
        )
    }

    static styleSecondPriorityCharacterEncoding(parameters: Map<string, any>, type: StarXpandCommand.Printer.CharacterEncodingType) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.SecondPriorityCharacterEncoding"],
                ["parameter", new Map([
                    ["type", StarXpandCommandParameterConverter.convertPrinterCharacterEncodingType(type)]
                ])]
            ])
        )
    }

    static styleCjkCharacterPriority(parameters: Map<string, any>, types: Array<StarXpandCommand.Printer.CjkCharacterType>) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.CjkCharacterPriority"],
                ["parameter", new Map([
                    ["types", StarXpandCommandParameterConverter.convertCjkCharacterTypeArray(types)]
                ])]
            ])
        )
    }

    static stylePrintDirection(parameters: Map<string, any>, PageModePrintDirection: StarXpandCommand.Printer.PageModePrintDirection) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.PrintDirection"],
                ["parameter", new Map<string, any>([
                    ["direction", StarXpandCommandParameterConverter.convertPageModePrintDirection(PageModePrintDirection)]
                ])]
            ])
        );
    }

    static styleAmbiguousCharacterWidthType(parameters: Map<string, any>, type: StarXpandCommand.Printer.AmbiguousCharacterWidthType) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Style.AmbiguousCharacterWidthType"],
                ["parameter", new Map<string, any>([
                    ["type", StarXpandCommandParameterConverter.convertAmbiguousCharacterWidthType(type)]
                ])]
            ])
        );
    }

    static actionCut(parameters: Map<string, any>, type: StarXpandCommand.Printer.CutType) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Action.Cut"],
                ["parameter", new Map([
                    ["type", StarXpandCommandParameterConverter.convertCutType(type)]
                ])]
            ])
        )
    }

    static actionFeed(parameters: Map<string, any>, height: number) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Action.Feed.Unit"],
                ["parameter", new Map([
                    ["height", height]
                ])]
            ])
        )
    }

    static actionFeedLine(parameters: Map<string, any>, lines: number) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Action.Feed.Line"],
                ["parameter", new Map([
                    ["lines", Math.floor(lines)]
                ])]
            ])
        )
    }

    static actionPrintText(parameters: Map<string, any>, content: string, parameter: StarXpandCommand.Printer.TextParameter | undefined) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        let parameterMap = new Map<string, any>([
            ["content", StarXpandCommandParameterConverter.convertString(content)]
        ]);

        if (parameter?.width !== undefined) {
            parameterMap.set("width", parameter?.width);

            let widthParameter = parameter.widthParameter ?? new StarXpandCommand.Printer.TextWidthParameter()

            parameterMap.set("widthType", StarXpandCommandParameterConverter.convertTextWidthType(widthParameter.widthType));
            parameterMap.set("alignment", StarXpandCommandParameterConverter.convertTextAlignment(widthParameter.alignment));
            parameterMap.set("ellipsizeType", StarXpandCommandParameterConverter.convertTextEllipsizeType(widthParameter.ellipsizeType));
            parameterMap.set("printType", StarXpandCommandParameterConverter.convertTextPrintType(widthParameter.printType));
        }

        contents.push(
            new Map<string, any>([
                ["method", "Action.Print.Text"],
                ["parameter", parameterMap]
            ])
        );
    }

    static actionPrintLogo(parameters: Map<string, any>, parameter: StarXpandCommand.Printer.LogoParameter) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Action.Print.Logo"],
                ["parameter", new Map([
                    ["key_code", StarXpandCommandParameterConverter.convertString(parameter.keyCode)]
                ])]
            ])
        )
    }

    static actionPrintBarcode(parameters: Map<string, any>, parameter: StarXpandCommand.Printer.BarcodeParameter) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Action.Print.Barcode"],
                ["parameter", new Map<string, any>([
                    ["content", StarXpandCommandParameterConverter.convertString(parameter.content)],
                    ["symbology", StarXpandCommandParameterConverter.convertBarcodeSymbology(parameter.symbology)],
                    ["bar_dots", Math.floor(parameter.barDots)],
                    ["bar_ratio_level", StarXpandCommandParameterConverter.convertBarcodeBarRatioLevel(parameter.barRatioLevel)],
                    ["height", parameter.height],
                    ["print_hri", parameter.printHri]
                ])]
            ])
        )
    }

    static actionPrintPdf417(parameters: Map<string, any>, parameter: StarXpandCommand.Printer.Pdf417Parameter) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Action.Print.Pdf417"],
                ["parameter", new Map<string, any>([
                    ["content", StarXpandCommandParameterConverter.convertString(parameter.content)],
                    ["column", Math.floor(parameter.column)],
                    ["line", Math.floor(parameter.line)],
                    ["module", Math.floor(parameter.module)],
                    ["aspect", Math.floor(parameter.aspect)],
                    ["level", StarXpandCommandParameterConverter.convertPdf417Level(parameter.level)]
                ])]
            ])
        )
    }

    static actionPrintQRCode(parameters: Map<string, any>, parameter: StarXpandCommand.Printer.QRCodeParameter) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Action.Print.QRCode"],
                ["parameter", new Map<string, any>([
                    ["content", StarXpandCommandParameterConverter.convertString(parameter.content)],
                    ["model", StarXpandCommandParameterConverter.convertQRCodeModel(parameter.model)],
                    ["level", StarXpandCommandParameterConverter.convertQRCodeLevel(parameter.level)],
                    ["cell_size", Math.floor(parameter.cellSize)]
                ])]
            ])
        )
    }
    
    static actionPrintRuledLine(parameters: Map<string, any>, RuledLineParameter: StarXpandCommand.Printer.RuledLineParameter) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Action.Print.RuledLine"],
                ["parameter", new Map<string, any>([
                    ["x", RuledLineParameter.x],
                    ["width", RuledLineParameter.width],
                    ["thickness", RuledLineParameter.thickness],
                    ["lineStyle", StarXpandCommandParameterConverter.convertLineStyle(RuledLineParameter.lineStyle)],
                ])]
            ])
        );
    }
    
    static stylePageModeArea(parameters: any, PageModeRectangleParameter: StarXpandCommand.Printer.PageModeAreaParameter) {
        let pageModeContents = parameters.get("parameters") as Array<Map<string, any>>;

        pageModeContents.unshift(
            new Map<string, any>([
                ["method", "Style.PageMode.Area"],
                ["parameter", new Map([
                    ["x", PageModeRectangleParameter.x],
                    ["y", PageModeRectangleParameter.y],
                    ["width", PageModeRectangleParameter.width],
                    ["height", PageModeRectangleParameter.height]
                ])]
            ])
        );
    }

    static actionPrintPageModeRuledLine(parameters: Map<string, any>, PageModeRuledLineParameter: StarXpandCommand.Printer.PageModeRuledLineParameter) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Action.Print.PageModeRuledLine"],
                ["parameter", new Map<string, any>([
                    ["xStart", PageModeRuledLineParameter.xStart],
                    ["yStart", PageModeRuledLineParameter.yStart],
                    ["xEnd", PageModeRuledLineParameter.xEnd],
                    ["yEnd", PageModeRuledLineParameter.yEnd],
                    ["thickness", PageModeRuledLineParameter.thickness],
                    ["lineStyle", StarXpandCommandParameterConverter.convertLineStyle(PageModeRuledLineParameter.lineStyle)],
                ])]
            ])
        );
    }

    static actionPrintRectangle(parameters: Map<string, any>, PageModeRectangleParameter: StarXpandCommand.Printer.PageModeRectangleParameter) {
        let contents = parameters.get("contents") as Array<Map<string, any>>;

        contents.push(
            new Map<string, any>([
                ["method", "Action.Print.PageModeRectangle"],
                ["parameter", new Map<string, any>([
                    ["x", PageModeRectangleParameter.x],
                    ["y", PageModeRectangleParameter.y],
                    ["width", PageModeRectangleParameter.width],
                    ["height", PageModeRectangleParameter.height],
                    ["thickness", PageModeRectangleParameter.thickness],
                    ["lineStyle", StarXpandCommandParameterConverter.convertLineStyle(PageModeRectangleParameter.lineStyle)],
                    ["roundCorner", PageModeRectangleParameter.roundCorner],
                    ["cornerRadius", PageModeRectangleParameter.cornerRadius],
                ])]
            ])
        );
    }

    
    static actionPrintImage(parameters: Map<string, any>, source: string) {
        let printImageObject = JSON.parse(source);

        if (!printImageObject.hasOwnProperty('parameter')) {
            return;
        }

        let parameter = printImageObject.parameter;

        if (!parameter.hasOwnProperty('source') ||
            !parameter.hasOwnProperty('width') ||
            !parameter.hasOwnProperty('height')) {
            return;
        }

        let contents = parameters.get("contents") as Array<Map<string, any>>;
        
        contents.push(
            new Map<string, any>([
                ["method", "Action.Print.Image"],
                ["parameter", new Map<string, any>([
                    ["source", StarXpandCommandParameterConverter.convertString(parameter.source)],
                    ["width",  parameter.width],
                    ["height", parameter.height]
                ])]
            ])
        );
    }

    static actionPrintPageModeImage(parameters: Map<string, any>, source: string,x:number , y:number) {
        let printImageObject = JSON.parse(source);

        if (!printImageObject.hasOwnProperty('parameter')) {
            return;
        }

        let parameter = printImageObject.parameter;

        if (!parameter.hasOwnProperty('source') ||
            !parameter.hasOwnProperty('width') ||
            !parameter.hasOwnProperty('height')) {
            return;
        }

        let contents = parameters.get("contents") as Array<Map<string, any>>;
        
        contents.push(
            new Map<string, any>([
                ["method", "Action.Print.PageModeImage"],
                ["parameter", new Map<string, any>([
                    ["source", StarXpandCommandParameterConverter.convertString(parameter.source)],
                    ["x",x],
                    ["y",y],
                    ["width",  parameter.width],
                    ["height", parameter.height]
                ])]
            ])
        );
    }
}