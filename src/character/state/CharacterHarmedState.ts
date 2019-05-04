import "phaser";
import { CharacterState } from './CharacterState';

export class CharacterHarmedState extends CharacterState {

    private sprite: Phaser.Physics.Arcade.Sprite;

    configureState(): void {
        this.sprite = this.character.getSpriteColliderWrapper().getSprite();
    }

    update(): void {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.character.getName + '-harm', true);
        var animationProgress = this.sprite.anims.getProgress();

        if (animationProgress === 1) {
            this.stateContext.setCurrentState(this.stateContext.MOVING_STATE);
        }
    }

    idle(): void { }

    move(): void { }

    harm(): void { }

}