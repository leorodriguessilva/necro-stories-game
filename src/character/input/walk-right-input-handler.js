import InputHandler from './input-handler.js';

export default class WalkLeftInputHandler extends InputHandler {
    
    constructor (sprite, animAlias, moveSpeed) {
        this.sprite = sprite;
        this.animAlias = animAlias;
        this.moveSpeed = moveSpeed;
    }

    handle () {
        this.sprite.setVelocityX(moveSpeed);
        this.sprite.anims.play(animAlias, true);
    }
}