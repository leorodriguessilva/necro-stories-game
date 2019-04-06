import InputHandler from './input-handler.js';

export default class BasicAttackInputHandler extends InputHandler {
    
    constructor (sprite, animAlias) {
        this.sprite = sprite;
        this.animAlias = animAlias;
    }

    handle () {
        this.sprite.anims.play(animAlias, true);
    }
}