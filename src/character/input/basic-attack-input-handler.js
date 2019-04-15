class BasicAttackInputHandler extends InputHandler {
    
    constructor (key, character) {
        super(key, character);
    }

    handle () {
        super.handle ();
        var sprite = this.character.getSprite;
        sprite.anims.play(animAlias, true);
    }
}