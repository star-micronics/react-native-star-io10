import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { RuledLineParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/RuledLineParameter';

export class Sample03_NutritionFactsLabel {
    static async createNutritionFactsLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();
        
        builder.addDocument(new StarXpandCommand.DocumentBuilder()
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
            "16 servings per container\n"
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleBold(true)
                .actionPrintText(
                    "Serving size                        1 Tbsp.(21g)\n"
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
                    "Calories      60\n"
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
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .actionPrintText(
            "Total Fat 0g                                  0%\n"
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleHorizontalPositionBy(3.0)
                .actionPrintText(
                    "Saturated Fat 0g                            0%\n"
                )
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleHorizontalPositionBy(3.0)
                .actionPrintText(
                    "Trans Fat 0g\n"
                )
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .actionPrintText(
            "Cholesterol 0mg                               0%\n"
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .actionPrintText(
            "Sodium 0mg                                    0%\n"
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .actionPrintText(
            "Total Carbohydrate 17g                        6%\n"
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleHorizontalPositionBy(3.0)
                .actionPrintText(
                    "Dietary Fiber 0g                            0%\n"
                )
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .add(
            new StarXpandCommand.PrinterBuilder()
                .styleHorizontalPositionBy(3.0)
                .actionPrintText(
                    "Total Sugars 17g\n"
                )
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .actionPrintText(
            "                                             34%\n"
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .actionPrintText(
            "Protein 0g\n"
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(4.0)
        )
        .actionPrintText(
            "Vitamin D 0mcg                                0%\n"
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .actionPrintText(
            "Calcium 0mg                                   0%\n"
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .actionPrintText(
            "Iron 0mg                                      0%\n"
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
        )
        .actionPrintText(
            "Potassium 0mg                                 0%\n"
        )
        .actionPrintRuledLine(
            new RuledLineParameter(72.0)
                .setThickness(0.1)
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