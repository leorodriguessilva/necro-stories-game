class MovementInputHandler extends InputHandler { 

    static WALK_ANIM_ALIAS = '-walk';
    
    constructor (key, character) {
        super(key, character);
        this.animAlias = character.getName + MovementInputHandler.WALK_ANIM_ALIAS;
    }

    handle () { 
        var sprite = this.character.getSprite;
        var stats = this.character.getStats;
        this.flipSprite(sprite);
        sprite.setVelocityX(stats.getMoveSpeed * this.getTurnMoveFactor);
        sprite.anims.play(this.animAlias, true);
    }

    flipSprite (sprite) {
        throw new NotImplementedException();
    }

    get getTurnMoveFactor () {
        throw new NotImplementedException();
    }

}