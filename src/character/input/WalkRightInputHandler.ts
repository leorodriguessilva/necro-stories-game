import "phaser";
import { MovementInputHandler } from './MovementInputHandler';
import { Character } from '../Character';

export abstract class WalkRightInputHandler extends MovementInputHandler {

    constructor(key: Phaser.Input.Keyboard.Key, character: Character) {
        super(key, character);
    }

    flipSprite(sprite: Phaser.Physics.Arcade.Sprite): void {
        sprite.resetFlip();
    }

    getTurnMoveFactor(): number {
        return 1;
    }
}