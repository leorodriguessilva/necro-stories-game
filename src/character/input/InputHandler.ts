import "phaser";
import { Character } from "../Character";

export abstract class InputHandler {

    key: Phaser.Input.Keyboard.Key;
    character: Character;

    constructor(key: Phaser.Input.Keyboard.Key, character: Character) {
        this.key = key;
        this.character = character;
    }

    abstract handle(): void;

    isKeyDown(): boolean {
        return this.key.isDown;
    }

    getKeyCode(): number {
        return this.key.keyCode;
    }
}