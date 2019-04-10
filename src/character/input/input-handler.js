class InputHandler {

    constructor (key, character) {
        this.key = key;
        this.character = character;
    }

    handle () {
        console.log('Some input has not been configured.');
    }

    get isKeyDown () {
        return this.key.isDown;
    }

    get getKeyCode() {
        return this.key.keyCode;
    }
}