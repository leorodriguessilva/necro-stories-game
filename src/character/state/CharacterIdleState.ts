import { CharacterState } from './CharacterState';

export class CharacterIdleState extends CharacterState {

    private sprite: Phaser.Physics.Arcade.Sprite;
    private characterName: string;

    configureState(): void {
        this.sprite = this.character.getSprite;
        this.characterName = this.character.getName;
    }

    update(): void {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.characterName + '-idle', true);
    }

    idle(): void { }

    move(): void {
        this.stateContext.setCurrentState(this.stateContext.MOVING_STATE);
    }

    harm(): void {
        this.stateContext.setCurrentState(this.stateContext.HARMED_STATE);
    }

}