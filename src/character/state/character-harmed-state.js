class CharacterHarmedState extends CharacterState {
    
    handle () {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.getName + '-harm', true);
        var animationProgress = this.sprite.anims.getProgress();
        
        if (animationProgress === 1) {
            this.stateContext.setCurrentState(this.stateContext.IDLE_STATE);
        }
    }

    configureState () { 
        this.sprite = this.character.getSprite;
    }

}