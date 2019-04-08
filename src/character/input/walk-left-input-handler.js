class WalkLeftInputHandler extends MovementInputHandler {
    
    constructor (key, character, animAlias) {
        super(key, character, animAlias);
    }

    handle () {
        var sprite = this.character.getSprite;
        var stats = this.character.getStats;
        sprite.setVelocityX(stats.getMoveSpeed * -1);
        sprite.anims.play(this.animAlias, true);
    }

    get getAnimAlias () {
        return this.animAlias;
    }
}