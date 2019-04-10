class WalkLeftInputHandler extends MovementInputHandler {
    
    constructor (key, character) {
        super(key, character);
    }

    flipSprite (sprite) {
        sprite.setFlipX(true);
    }

    get getTurnMoveFactor () {
        return -1;
    }
}