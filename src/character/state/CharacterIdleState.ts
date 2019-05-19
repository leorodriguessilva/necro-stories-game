import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";

export class CharacterIdleState extends CharacterState {

    private sprite: Phaser.Physics.Arcade.Sprite;

    public update(): void {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.character.getIdleAnimAlias(), true);
    }

    public idle(): void { }

    public move(movingDirection: CharacterMovingDirection): void {
        this.stateContext.setCurrentState(this.stateContext.MOVING_STATE);
        this.stateContext.move(movingDirection);
    }

    public harm(): void {
        this.stateContext.setCurrentState(this.stateContext.HARMED_STATE);
        this.stateContext.harm();
    }

    public attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void {
        this.character.getBasicAttackSkill().cast(locationX, locationY, movingDirection, () => {
            this.stateContext.setCurrentState(this.stateContext.IDLE_STATE);
        });
        this.stateContext.setCurrentState(this.stateContext.ATTACKING_STATE);
    }

    public cast(): void { }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getSprite();
    }

}
