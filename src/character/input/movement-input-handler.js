class MovementInputHandler extends InputHandler { 

    constructor (key, character, animAlias) {
        super(key, character);
        this.animAlias = animAlias;
    }

    handle () {
        this.character.setLastMovementAnimAlias = this.getAnimAlias;
    }

    get getAnimAlias () {
        return '';
    }

}