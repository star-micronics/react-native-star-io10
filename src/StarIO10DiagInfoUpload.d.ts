export declare class StarIO10DiagInfoUpload {
    private static _instance;
    private constructor();
    static get instance(): StarIO10DiagInfoUpload;
    get isEnabled(): Promise<Boolean>;
    set isEnabled(isEnabled: Boolean);
}
