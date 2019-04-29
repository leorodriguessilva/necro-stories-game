//var MovementInputHandler = require('../input/movement-input-handler');
import { CharacterState } from './CharacterState';

export class CharacterMovingState extends CharacterState {
  
    update(): void {
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

    idle(): void { }

    move(): void { }

    harm(): void {
        this.stateContext.setCurrentState(this.stateContext.HARMED_STATE);
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