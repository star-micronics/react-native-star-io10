import { StarXpandCommand } from 'react-native-star-io10';
import { MagnificationParameter } from 'react-native-star-io10/src/StarXpandCommand/MagnificationParameter';
import { Alignment } from 'react-native-star-io10/src/StarXpandCommand/Printer/Alignment';
import { CutType } from 'react-native-star-io10/src/StarXpandCommand/Printer/CutType';
import { ImageParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/ImageParameter';
import { QRCodeLevel } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeLevel';
import { QRCodeModel } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeModel';
import { QRCodeParameter } from 'react-native-star-io10/src/StarXpandCommand/Printer/QRCodeParameter';

export class Sample01_TamperProofLabel {
    static async createTamperProofLabel(): Promise<string> {
        var builder = new StarXpandCommand.StarXpandCommandBuilder();

        builder.addDocument(new StarXpandCommand.DocumentBuilder()
        .addPrinter(new StarXpandCommand.PrinterBuilder()
            .styleAlignment(Alignment.Center)
                .styleBold(true)
                .styleMagnification(new MagnificationParameter(4, 4))
                .actionPrintText(
                    "SEALED\n"
                )
                .actionPrintText(
                    "FRESH\n"
                )
                .styleBold(false)
                .styleMagnification(new MagnificationParameter(3, 3))
                .actionPrintText(
                    "for Safety\n"
                )
                .actionPrintImage(
                    new ImageParameter("iVBORw0KGgoAAAANSUhEUgAAAHIAAABuCAYAAAD7yUedAAABU2lDQ1BJQ0MgUHJvZmlsZQAAGJV1kL1LQmEchR/TMCwoogiiwaGgwiLMooYGk4jAQexbKLpeTQO1y/VG9B/0FzQJbY3REjY0NLQ3FAZBtPW1Bi4lt9/VSi164XAeDoeXHwcaUDQt5QDSGUMPz067V1YjbucjLuw00cqgomY1fygUlArfXv+KBWyWXw9Zf511Fa6mgpOeyPHGYe713vm3X/dcsXhWFf8Q9auaboCtVzi0a2gWi+jQ5SjhfYsTFc5ZHK3wSbmzEA4IXwq3qUklJnwj7InW5IkaTqd21K8brOtb4pnFectFPcywhBcfY4z/0/OVewG20dhDZ4sESQzc+CXRSBEXniODyjAeYS8jIq+17+/dqpm+CRMPAs/VbP0FTmXHzqdq1idbtHfD+Zqm6MrPmraiI7s56q1wcx4aD0zzbRmcA1C6Nc33vGmWjsB+BxfFT6iWYjPsvYZRAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAAByoAMABAAAAAEAAABuAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdOMGRHMAAAHWaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjExMDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMTQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KAAYccgAAD9pJREFUeAHtnXnoVkUXx8ctDQOJICmKpIgSIinLJIIirEglg9QiscjA1MqoCCppoYVow+gNrCDS7I/CVkXB6K20smixzaVC21ej1bRV553Pxflxf9c7956ZO/d57vN7nwMPd5uZe8753pk5M+fMPP20IdWljtdA/46XoCtAooEukH3kQ+gC2QWyj2igj4jRrZFdIPuIBvqIGN0a2QWyj2igj4jRrZF9BMiBnSjHV199pb799lv15ZdfJkeuv/nmG2Xvcw7tv//+ar/99lMHHHBAcs6R6wMPPLDnfifKn8dzv06Yotu8ebPauHGjevvtt9Wzzz6r3nnnnTxZvO8dddRRatKkSWr06NFq5MiR6pBDDvEuoykZGgvkRx99pN544w21dOlS9cQTT7REX5MnT1ZnnHGGGjNmjDrssMNa8s5oL6FGNoV+++03/dxzz+lLLrmEify2/uABXuCpE0g1gckffvhBL1myRJ988sltBS/v44EneIPHmPTjjz/qt956S2/bti1KsW0Fkq/9qaee0ieccELjAMyCCo/wWrWG7ty5U7/w3xf0SSedpPfdd19tmvLk+q+//qoEaNuAfPnll/UFF1zQeACzgMIzvIeQsab1DTfcoIcNG7ab3BdeeGHSlP/6668hReuWA/nFF1/oe+65ZzdBsgpr+jUyIIuE/v33X/3KK6+Udh3UUGrqqlWrJMX2StNSIFevXq2NZdjxINqPDFmQqYhoiu+77z6xzMccc4xet25dUZG5z1oC5Natv+tHH31ULIxVVKcckQ0Zs2SGUPrcc88Vy00//MEHH2SLEV3XDqSZfdF33nmnWBgpeJdffrl++OGH9Ysvvqg3bNigzUxPYoj8/fffPYJzTo3gGWlISx7ySt8jTYeMyArt2LEj6UepXdL8o0aNCqqJVthagfzwww/11VdfLRamSOgzzzwzAeHdd9+NYrJj9lMWwFJ20bulzz755BON9fn444/rQw89VFwmNTGkObUgcqwNSJqISy+9VCyMS1nz58/XZkpOY7bXRZTNO3iXi4+i+1ihNKN8HLfddlsyrChKn352xBFHBDenaX3UAiQgXnzxxUFKsUIuXLhQbBWmBap6jiXK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", 100)
                )
                .styleBold(true)
                .actionPrintText(
                    "................\n"
                )
                .styleBold(false)
                .actionPrintText(
                    "Scan to leave\n"
                )
                .actionPrintText(
                    "a review\n"
                )
                .actionPrintQRCode(
                    new QRCodeParameter("http://starmicronics.com/")
                .setCellSize(8)
                .setLevel(QRCodeLevel.Q)
                .setModel(QRCodeModel.Model2))
                .actionCut(CutType.Partial)
            )
        );

        return await builder.getCommands();
    }
}