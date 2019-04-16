class CharacterMovingState extends CharacterState {

    handle () {
        this.movementInputHandlers.forEach(inputHandler => {
            if (this.handleInput(inputHandler)) {
                return;
            }
        });
        this.stateContext.setCurrentState = this.stateContext.IDLE_STATE;
    }

    configureState () {
        this.movementInputHandlers = [];

        this.character.inputHandlers.forEach(inputHandler => {
            if (inputHandler instanceof MovementInputHandler) {
                this.movementInputHandlers.push(inputHandler);
            }
        });
    }

}