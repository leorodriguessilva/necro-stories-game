var MovementInputHandler = require('../input/movement-input-handler');
var CharacterState = require('./character-state');

class CharacterMovingState extends CharacterState {

    update() {
        this.hasNoInput = true;
        this.movementInputHandlers.forEach(inputHandler => {
            if (this.handleInput(inputHandler)) {
                this.hasNoInput = false;
                return;
            }
        });

        if (this.hasNoInput) {
            this.stateContext.setCurrentState = this.stateContext.IDLE_STATE;
        }
    }

    idle() { }

    move() { }

    harm() {
        this.stateContext.setCurrentState = this.stateContext.HARMED_STATE;
    }

    handleInput(inputHandler) {
        if (inputHandler.isKeyDown) {
            inputHandler.handle();
            return true;
        }
        return false;
    }

    configureState() {
        this.movementInputHandlers = [];

        this.character.inputHandlers.forEach(inputHandler => {
            if (inputHandler instanceof MovementInputHandler) {
                this.movementInputHandlers.push(inputHandler);
            }
        });
    }

}

module.exports = CharacterMovingState;