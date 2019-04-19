var MovementInputHandler = require('./movement-input-handler');

class WalkLeftInputHandler extends MovementInputHandler {

    constructor(key, character) {
        super(key, character);
    }

    flipSprite(sprite) {
        sprite.setFlipX(true);
    }

    get getTurnMoveFactor() {
        return -1;
    }
}

module.exports = WalkLeftInputHandler;