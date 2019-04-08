class InputHandler {

    constructor (key, character) {
        this.key = key;
        this.character = character;
    }

    handle () {
        console.log('Some input has not been configured.');
    }

    get getKey () {
        return this.key;
    }
}