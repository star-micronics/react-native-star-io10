import { StarXpandCommand } from 'react-native-star-io10';
import Canvas, { CanvasRenderingContext2D, ImageData } from 'react-native-canvas';

/* This sample code only works on iOS and Android, not on Windows.
This is because it uses react-native-canvas, which does not support Windows. */

export class GraphicSample01_GraphicReceipt {
    async createGraphicReceipt(): Promise<string> {

        var builder = new StarXpandCommand.StarXpandCommandBuilder();
        builder.addDocument(new StarXpandCommand.DocumentBuilder()

        .addPrinter(new StarXpandCommand.PrinterBuilder()
            .styleAlignment(StarXpandCommand.Printer.Alignment.Center)
            .actionPrintImage(new StarXpandCommand.Printer.ImageParameter("logo_01.png", 406))

            .actionPrintImage(await this.createImageParameterFromText(
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

    private canvas : React.RefObject<Canvas>;
    private ctx!: CanvasRenderingContext2D;

    private async createImageParameterFromText(text:string):Promise<StarXpandCommand.Printer.ImageParameter>{
        const width=384;
        var bitmap =await this.createBitmapFromText(text, 20,width);
        return new StarXpandCommand.Printer.ImageParameter(bitmap,width);
    }

    private async createBitmapFromText(text:string, textSize:number,width:number):Promise<string>{
        const lines = text.split("\n");
        const printHeight=textSize*(lines.length-1)*1.5;

        if(this.canvas.current){
            this.canvas.current.width=width;
            this.canvas.current.height=printHeight;
        }

        this.ctx.clearRect(0,0,width,printHeight);
        var y=textSize;
        this.ctx.textAlign="left";
        this.ctx.font =textSize+"px monospace";

        for(var i=0;i<lines.length;i++){ 
            this.ctx.fillText(lines[i],0,y);
            y+=textSize*1.5;
        }

        var imageBase64 = "";

        if(this.canvas.current){
            var imageDataURL:string  = await this.canvas.current.toDataURL('image/png');
            imageBase64 =imageDataURL.substring(imageDataURL.indexOf(",")+1,imageDataURL.length-1);
        }
        return imageBase64;
    }

    componentDidMount(){
        if(this.canvas.current){
            this.ctx= this.canvas.current.getContext('2d');
        }
    }

/*
Add the following code to the constructor and render in App.tsx.

    constructor(props: any) {
        *
        *
        * 
        
        this.canvas=React.createRef<Canvas>();

    }

    render() {
        return (
            <View style={{ margin: 50 }}>
                *
                *
                *

                <View style ={{marginTop:10, height:300}}>
                    <ScrollView 
                    style={{marginTop:5,marginBottom:5,marginLeft:5,marginRight:5}} 
                    horizontal={true}>
                        <Canvas ref={this.canvas} 
                        style={{ width: 1024, height: 2000, backgroundColor: 'white' }} 
                        />
                    </ScrollView>
                </View>

            </View>
        );
    }
*/

};