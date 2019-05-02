import { InputHandler } from './InputHandler';
import { Character } from '../Character';

export class BasicAttackInputHandler extends InputHandler {

    animAlias: string;

    constructor(key: Phaser.Input.Keyboard.Key, character: Character) {
        super(key, character);
        this.animAlias = character.getName() + '-attack';
    }

    handle() {
        /*var sprite = this.character.getSprite();
        sprite.anims.play(this.animAlias, true);*/
    }
}