class CharacterStateContext {

    constructor (character) {
        this.IDLE_STATE = new CharacterIdleState(this, character);
        this.MOVING_STATE = new CharacterMovingState(this, character);
        this.HARMED_STATE = new CharacterHarmedState(this, character);

        this.currentState = this.IDLE_STATE;
    }

    handle () {
        this.currentState.handle();
    }

    set setCurrentState (state) {
        this.currentState = state;
    }
    
}