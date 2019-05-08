import "phaser";
import { IKey } from "./IKey";

export class PhaserKey implements IKey {

    private key: Phaser.Input.Keyboard.Key;

    public isDown(): boolean {
        return this.key.isDown;
    }

}
