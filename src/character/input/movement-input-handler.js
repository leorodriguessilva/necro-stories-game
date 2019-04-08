class MovementInputHandler extends InputHandler { 

    constructor (key, character, animAlias) {
        super(key, character);
        this.animAlias = animAlias;
    }

    get getAnimAlias () {
        return '';
    }

}