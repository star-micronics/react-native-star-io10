import { StarXpandCommand } from 'react-native-star-io10';
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas';
import React from 'react';

/* This sample code only works on iOS and Android, not on Windows.
This is because it uses react-native-canvas, which does not support Windows. */

export default function App() {
    async function createGraphicReceipt(): Promise<string> {

        var builder = new StarXpandCommand.StarXpandCommandBuilder();
        builder.addDocument(new StarXpandCommand.DocumentBuilder()
            .addPrinter(new StarXpandCommand.PrinterBuilder()
                .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
                .actionPrintImage(new StarXpandCommand.Printer.ImageParameter("logo_01.png", 406))

                .actionPrintImage(await createImageParameterFromText(
                    "Star Clothing Boutique\n" +
                    "123 Star Road\n" +
                    "City, State 12345\n" +
                    "\n" +
                    "Date:MM/DD/YYYY Time:HH:MM PM\n" +
                    "-----------------------------\n" +
                    "\n" +
                    "SKU       Description   Total\n" +
                    "300678566 PLAIN T-SHIRT 10.99\n" +
                    "300692003 BLACK DENIM   29.99\n" +
                    "300651148 BLUE DENIM    29.99\n" +
                    "300642980 STRIPED DRESS 49.99\n" +
                    "300638471 BLACK BOOTS   35.99\n" +
                    "\n" +
                    "Subtotal               156.95\n" +
                    "Tax                      0.00\n" +
                    "-----------------------------\n" +
                    "\n" +
                    "Total                 $156.95\n" +
                    "------------------------------\n" +
                    "\n" +
                    "Charge\n" +
                    "156.95\n" +
                    "Visa XXXX-XXXX-XXXX-0123\n" +
                    "\n"
                )
                )
                .actionCut(StarXpandCommand.Printer.CutType.Partial)
            )
        );

        return await builder.getCommands();
    }

    const canvas = React.useRef<Canvas>(null);
    const ctx = React.useRef<CanvasRenderingContext2D>(null);

    async function createImageParameterFromText(text: string): Promise<StarXpandCommand.Printer.ImageParameter> {
        const width = 384;
        var bitmap = await createBitmapFromText(text, 20, width);
        return new StarXpandCommand.Printer.ImageParameter(bitmap, width);
    }

    async function createBitmapFromText(text: string, fontSize: number, width: number): Promise<string> {
        const lines = text.split("\n");
        const printHeight = fontSize * (lines.length - 1) * 1.5;

        if (canvas.current) {
            canvas.current.width = width;
            canvas.current.height = printHeight;

            ctx.current = canvas.current.getContext('2d');
            if (ctx.current) {
                ctx.current.clearRect(0, 0, width, printHeight);
                ctx.current.textAlign = "left";
                ctx.current.font = fontSize + "px monospace";

                var y = fontSize;
                for (var i = 0; i < lines.length; i++) {
                    ctx.current.fillText(lines[i], 0, y);
                    y += fontSize * 1.5;
                }
            }
        }

        var imageBase64 = "";

        if (canvas.current) {
            var imageDataURL: string = await canvas.current.toDataURL('image/png');
            imageBase64 = imageDataURL.substring(imageDataURL.indexOf(",") + 1, imageDataURL.length - 1);
        }
        return imageBase64;
    }

/*
Add the following code to your return function in App.tsx.

    return (
        <View style={{ margin: 10, marginTop: 50, marginBottom: 50, flex: 1 }}>
            *
            *
            *
                    <Text style={styles.buttonText}>Print</Text>
                </Pressable>
            </View>

            <View style={{ margin: 10, flex: 1 }}>
                <ScrollView
                    style={{ margin: 5 }}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                >
                    <ScrollView
                        style={{ margin: 0 }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Canvas ref={canvas}
                            style={{ width: 1024, height: 2000, backgroundColor: 'white' }}
                        />
                    </ScrollView>
                </ScrollView>
            </View>

        </View>
    );
*/
};