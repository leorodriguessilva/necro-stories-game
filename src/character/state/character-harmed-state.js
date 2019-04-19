var CharacterState = require('./character-state');

class CharacterHarmedState extends CharacterState {

    configureState() {
        this.sprite = this.character.getSprite;
    }

    update() {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.character.getName + '-harm', true);
        var animationProgress = this.sprite.anims.getProgress();

        if (animationProgress === 1) {
            this.move();
        }
    }

    idle() { }

    move() {
        this.stateContext.setCurrentState = this.stateContext.MOVING_STATE;
    }

    harm() { }

}

module.exports = CharacterHarmedState;