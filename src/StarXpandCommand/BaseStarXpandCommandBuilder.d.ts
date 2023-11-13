export declare abstract class BaseStarXpandCommandBuilder {
    protected _actions: Array<() => Promise<void>>;
    protected _children: Array<BaseStarXpandCommandBuilder>;
    protected _addChild(builder: BaseStarXpandCommandBuilder): void;
    protected _removeChild(builder: BaseStarXpandCommandBuilder): void;
    protected _addAction(action: () => Promise<void>): void;
    protected _executeAllActions(): Promise<void>;
}
