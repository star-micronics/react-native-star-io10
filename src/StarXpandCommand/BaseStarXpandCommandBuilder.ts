export abstract class BaseStarXpandCommandBuilder {
    protected _actions: Array<() => Promise<void>> = [];
    protected _children: Array<BaseStarXpandCommandBuilder> = [];

    protected _addChild(builder: BaseStarXpandCommandBuilder): void {
        this._children.push(builder);
    }

    protected _removeChild(builder: BaseStarXpandCommandBuilder): void {
        var index = this._children.findIndex((child) => child === builder);

        if(index !== -1) {
            this._children.splice(index, 1);
        }
    }

    protected _addAction(action: () => Promise<void>): void {
        this._actions.push(action);
    }

    protected async _executeAllActions(): Promise<void> {
        await (async () => {
            for(let child of this._children) {
                await child._executeAllActions();
            }

            for(let action of this._actions) {
                await action();
            }
        })();
    }
}