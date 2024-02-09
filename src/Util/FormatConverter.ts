export class FormatConverter {
    static replaceNewLineCodes(input: string, newValue: string): string {
        return input.replace(/\n|\r\n|\r/g, newValue);
    }
}