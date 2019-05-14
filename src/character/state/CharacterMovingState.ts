import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";
import { ISpriteColliderWrapper } from "../../collider/ISpriteColliderWrapper";

export class CharacterMovingState extends CharacterState {

    private spriteColliderWrapper: ISpriteColliderWrapper;

    public update(): void {
        const sprite = this.spriteColliderWrapper.getSprite();
        sprite.anims.play(this.character.getName() + "-walk", true);
    }

    public idle(): void {
        this.stateContext.setCurrentState(this.stateContext.IDLE_STATE);
        this.stateContext.idle();
    }

    public move(movingDirection: CharacterMovingDirection): void {
        const sprite = this.spriteColliderWrapper.getSprite();
        let turnFactor = 1;
        sprite.resetFlip();
        if (movingDirection === CharacterMovingDirection.LEFT) {
            turnFactor = -1;
            sprite.setFlipX(true);
        }
        sprite.setVelocityX(this.character.getStats().getMoveSpeed() * turnFactor);
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
        this.stateContext.attack(locationX, locationY);
    }

    public useSkill(): void { }

    protected configureState() {
        this.spriteColliderWrapper = this.character.getSpriteColliderWrapper();
    }

}
