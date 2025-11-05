export class JsonBuilder {

    static serialize(parameter: Map<string, any>): string {
        return JsonBuilder.convertMap(parameter);
    }

    private static convertValue(value: any): string {
        var result = "";
        
        if (typeof value === 'string') {
            result = JsonBuilder.convertString(value);
        }
        else if (typeof value === 'number') {
            result = JsonBuilder.convertNumber(value);
        }
        else if (value instanceof Map) {
            result = JsonBuilder.convertMap(value);
        }
        else if (value instanceof Array) {
            result = JsonBuilder.convertArray(value);
        }
        else {
            result = value.toString();
        }

        return result;
    }

    private static convertString(value: string): string {
        return "\"" + value + "\"";
    }

    private static convertNumber(value: number): string {
        return value.toString();
    }

    private static convertMap(parameter: Map<string, any>): string {
        var result = "{";

        var index = 0;

        parameter.forEach((value: any, key: string) => {
            result += "\"" + key + "\": ";
            result += JsonBuilder.convertValue(value);

            if (index != parameter.size - 1) {
                result += ","
            }

            index++;
        });

        result += "}";

        return result;
    }

    private static convertArray(values: Array<any>): string {
        var result = "[";

        var index = 0;

        values.forEach((value: any) => {
            if (value != null) {
                result += JsonBuilder.convertValue(value);
            }

            if (index != values.length - 1) {
                result += ","
            }

            index++;
        });

        result += "]";

        return result;
    }
}