class CharacterIdleState extends CharacterState {

    handle () {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.characterName + '-idle', true);
    }

    configureState () {
        this.sprite = this.character.getSprite;
        this.characterName = this.character.getName;
    }

}