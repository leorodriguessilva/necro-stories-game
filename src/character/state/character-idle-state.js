var CharacterState = require('./character-state');

class CharacterIdleState extends CharacterState {

    configureState() {
        this.sprite = this.character.getSprite;
        this.characterName = this.character.getName;
    }

    update() {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.characterName + '-idle', true);
    }

    idle() { }

    move() {
        this.stateContext.setCurrentState = this.stateContext.MOVING_STATE;
    }

    harm() {
        this.stateContext.setCurrentState = this.stateContext.HARMED_STATE;
    }

}

module.exports = CharacterIdleState;