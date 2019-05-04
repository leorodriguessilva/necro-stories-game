import "phaser";
import { InputHandler } from './InputHandler';
import { Character } from '../Character';

export abstract class MovementInputHandler extends InputHandler {

    animAlias: string;

    constructor(key: Phaser.Input.Keyboard.Key, character: Character) {
        super(key, character);
        this.animAlias = character.getName() + '-walk';
    }

    handle(): void {
        /*var sprite = this.character.getSprite();
        var stats = this.character.getStats();
        this.flipSprite(sprite);
        sprite.setVelocityX(stats.getMoveSpeed() * this.getTurnMoveFactor());
        sprite.anims.play(this.animAlias, true);*/
    }

    abstract flipSprite(sprite: Phaser.Physics.Arcade.Sprite): void;

    abstract getTurnMoveFactor(): number;

}