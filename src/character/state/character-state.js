class CharacterState {

    static IDLE = 0;
    
    static MOVING = 1;
    
    static ATTACKING = 2;

    static CASTING = 3;
    
    static HARMED = 4;

    constructor (stateContext, character) {
        this.stateContext = stateContext;
        this.character = character;
        this.configureState();
    }

    handle () {
        throw new NotImplementedException();
    }

    configureState () {
        throw new NotImplementedException();
    }

}