export class Lock {
    private _locked: boolean = false;
    private _sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    async lock() {
        while (this._locked) {
            await this._sleep(10);
        }

        this._locked = true;
    }

    unlock() {
        this._locked = false;
    }
}