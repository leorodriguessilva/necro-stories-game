import InputHandler from './input-handler.js';

export default class WalkLeftInputHandler extends InputHandler {
    
    constructor (sprite, animAlias) {
        this.sprite = sprite;
        this.animAlias = animAlias;
    }

    handle () {
        this.sprite.setVelocityX(160);
        this.sprite.anims.play(animAlias, true);
    }
}