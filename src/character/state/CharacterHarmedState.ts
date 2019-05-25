import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";

export class CharacterHarmedState extends CharacterState {

    private sprite: Phaser.Physics.Arcade.Sprite;

    public update(): void {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.character.getHarmAnimAlias(), true);
        const animationProgress = this.sprite.anims.getProgress();

        if (animationProgress === 1) {
            this.stateContext.setCurrentState(this.stateContext.MOVING_STATE);
        }
    }

    public idle(): void { }

    public move(movingDirection: CharacterMovingDirection): void { }

    public harm(): void { }

    public attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void { }

    public cast(): void { }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getGameObject() as Phaser.Physics.Arcade.Sprite;
    }

}
