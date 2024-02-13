export declare class JsonBuilder {
    static serialize(parameter: Map<string, any>): string;
    private static convertValue;
    private static convertString;
    private static convertNumber;
    private static convertMap;
    private static convertArray;
}
