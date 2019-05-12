import { IKey } from "./IKey";

export class PhaserKey implements IKey {

    private key: Phaser.Input.Keyboard.Key;

    constructor(key: Phaser.Input.Keyboard.Key) {
        this.key = key;
    }

    public isDown(): boolean {
        return this.key.isDown;
    }

}
