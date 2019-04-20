var NotImplementedException = require('../../common/exception/not-implemented-exception');
var InputHandler = require('./input-handler');

class MovementInputHandler extends InputHandler {

    constructor(key, character) {
        super(key, character);
        this.animAlias = character.getName + '-walk';
    }

    handle() {
        var sprite = this.character.getSprite;
        var stats = this.character.getStats;
        this.flipSprite(sprite);
        sprite.setVelocityX(stats.getMoveSpeed * this.getTurnMoveFactor);
        sprite.anims.play(this.animAlias, true);
    }

    flipSprite(sprite) {
        throw new NotImplementedException();
    }

    get getTurnMoveFactor() {
        throw new NotImplementedException();
    }

}

module.exports = MovementInputHandler;