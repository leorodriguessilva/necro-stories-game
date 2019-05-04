import "phaser";
import { Character } from "../Character";

export abstract class InputHandler {

    protected character: Character;
    private key: Phaser.Input.Keyboard.Key;

    constructor(key: Phaser.Input.Keyboard.Key, character: Character) {
        this.key = key;
        this.character = character;
    }

    public abstract handle(): void;

    protected isKeyDown(): boolean {
        return this.key.isDown;
    }

    protected getKeyCode(): number {
        return this.key.keyCode;
    }

}
