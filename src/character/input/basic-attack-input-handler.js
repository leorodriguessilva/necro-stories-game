class BasicAttackInputHandler extends InputHandler {
    
    constructor (key, character, animAlias) {
        super(key, character);
        this.animAlias = animAlias;
    }

    handle () {
        var sprite = this.character.getSprite();
        sprite.anims.play(animAlias, true);
    }
}