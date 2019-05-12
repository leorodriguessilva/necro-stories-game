import { MovementInputHandler } from "./MovementInputHandler";
import { Character } from "../Character";

export class WalkLeftInputHandler extends MovementInputHandler {

    constructor(key: Phaser.Input.Keyboard.Key, character: Character) {
        super(key, character);
    }

    protected flipSprite(sprite: Phaser.Physics.Arcade.Sprite): void {
        sprite.setFlipX(true);
    }

    protected getTurnMoveFactor(): number {
        return -1;
    }

}
