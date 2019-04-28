var NotImplementedException = require('../../common/exception/NotImplementedException');

class InputHandler {

    constructor(key, character) {
        this.key = key;
        this.character = character;
    }

    handle() {
        throw new NotImplementedException();
    }

    get isKeyDown() {
        return this.key.isDown;
    }

    get getKeyCode() {
        return this.key.keyCode;
    }
}

module.exports = InputHandler;