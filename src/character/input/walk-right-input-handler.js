class WalkRightInputHandler extends MovementInputHandler {
    
    constructor (key, character) {
        super(key, character);
    }

    flipSprite (sprite) {
        sprite.resetFlip();
    }

    get getTurnMoveFactor () {
        return 1;
    }
}