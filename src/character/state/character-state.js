var NotImplementedException = require('../../common/exception/not-implemented-exception');

class CharacterState {

    constructor(stateContext, character) {
        this.stateContext = stateContext;
        this.character = character;
        this.configureState();
    }

    update() {
        throw new NotImplementedException();
    }

    idle() {
        throw new NotImplementedException();
    }

    move() {
        throw new NotImplementedException();
    }

    harm() {
        throw new NotImplementedException();
    }

    configureState() {
        throw new NotImplementedException();
    }

}

module.exports = CharacterState;