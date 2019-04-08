class WalkRightInputHandler extends MovementInputHandler {
    
    constructor (key, character, animAlias) {
        super(key, character, animAlias);
    }

    handle () {
        var sprite = this.character.getSprite;
        var stats = this.character.getStats;
        sprite.setVelocityX(stats.getMoveSpeed);
        sprite.anims.play(this.animAlias, true);
    }

    get getAnimAlias () {
        return this.animAlias;
    }
}