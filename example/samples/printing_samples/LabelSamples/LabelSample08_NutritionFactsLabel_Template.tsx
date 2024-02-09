import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';
import { TextParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextParameter';
import { TextWidthParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/TextWidthParameter';

export class LabelSample08_NutritionFactsLabel_Template {
    static async createNutritionFactsLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();
        
        builder.addDocument(new StarXpandCommand.DocumentBuilder()
        .settingPrintableArea(72.0)
        .addPrinter(
            new StarXpandCommand.PrinterBuilder()
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleAlignment(Alignment.Center)
                .styleMagnification(new MagnificationParameter(3, 3))
                .actionPrintText(
                    "Nutrition Facts\n"
                )
        )
        .styleAlignment(Alignment.Left)
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .actionPrintText(
            "${servings_per_container} servings per container\n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleBold(true)
                .actionPrintText(
                    "Serving size"
                )
                .actionPrintText(
                    "${serving_size}",
                    new TextParameter()
                        .setWidth(
                            36,
                            new TextWidthParameter()
                                .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                        )
                )
                .actionPrintRuledLine(
                    new RuledLineParameter(72.0)
                        .setThickness(4.0)
                )
                .actionPrintText(
                    "Amount per serving\n"
                )
                .styleMagnification(new MagnificationParameter(3, 3))
                .actionPrintText(
                    "${amount_per_serving}\n"
                )
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(2.0)
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleAlignment(Alignment.Right)
                .styleBold(true)
                .actionPrintText(
                    "% Daily Value*\n"
                )
        )
        .add(
            new StarXpandCommand.PrinterBuilder(
                new StarXpandCommand.Printer.PrinterParameter()
                    .setTemplateExtension(
                        new StarXpandCommand.TemplateExtensionParameter()
                            .setEnableArrayFieldData(true)
                    )
            )
                .actionPrintRuledLine(
                    new RuledLineParameter(72.0)
                        .setThickness(0.1)
                )
                .actionPrintText(
                    "${item1_list.name} ${item1_list.amount}",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(44)
                )
                .actionPrintText(
                    "${item1_list.percentage}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            4,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                        )
                )
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(4.0)
        )
        .add(
            new StarXpandCommand.PrinterBuilder(
                new StarXpandCommand.Printer.PrinterParameter()
                    .setTemplateExtension(
                        new StarXpandCommand.TemplateExtensionParameter()
                            .setEnableArrayFieldData(true)
                    )
            )
                .actionPrintText(
                    "${item2_list.name} ${item2_list.amount}",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(44)
                )
                .actionPrintText(
                    "${item2_list.percentage}\n",
                    new StarXpandCommand.Printer.TextParameter()
                        .setWidth(
                            4,
                            new StarXpandCommand.Printer.TextWidthParameter()
                                .setAlignment(StarXpandCommand.Printer.TextAlignment.Right)
                        )
                )
                .actionPrintRuledLine(
                    new RuledLineParameter(72.0)
                        .setThickness(0.1)
                )
        )
        .actionPrintText(
            "* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.\n" +
                    "↑ One Serving adds 17g of sugar to your diet and represents 34% of the daily value for addded sugars.\n"
        )
        .actionCut(CutType.Partial)
        )
        );
        
        return await builder.getCommands();
    }
}