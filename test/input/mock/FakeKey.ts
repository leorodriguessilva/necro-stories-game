import { IKey } from "../../../src/input/IKey";

export class FakeKey implements IKey {

    private isButtonDown: boolean;

    constructor(isButtonDown: boolean) {
        this.isButtonDown = isButtonDown;
    }

    public isDown(): boolean {
        return this.isButtonDown;
    }

}
