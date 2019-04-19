var CharacterIdleState = require('./character-idle-state');
var CharacterMovingState = require('./character-moving-state');
var CharacterHarmedState = require('./character-harmed-state');

class CharacterStateContext {

    constructor(character) {
        this.IDLE_STATE = new CharacterIdleState(this, character);
        this.MOVING_STATE = new CharacterMovingState(this, character);
        this.HARMED_STATE = new CharacterHarmedState(this, character);

        this.currentState = this.IDLE_STATE;
    }

    update() {
        this.currentState.update();
    }

    idle() {
        this.currentState.idle();
    }

    move() {
        this.currentState.move();
    }

    harm() {
        this.currentState.harm();
    }

    setCurrentState(state) {
        this.currentState = state;
    }

}

module.exports = CharacterStateContext;