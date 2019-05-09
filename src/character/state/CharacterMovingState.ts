import "phaser";
import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";
import { ISpriteColliderWrapper } from "../../collider/ISpriteColliderWrapper";

export class CharacterMovingState extends CharacterState {

    private movingDirection: CharacterMovingDirection;
    private spriteColliderWrapper: ISpriteColliderWrapper;

    public update(): void {
        const sprite = this.spriteColliderWrapper.getSprite();
        let turnFactor = 1;
        sprite.resetFlip();
        if (this.movingDirection === CharacterMovingDirection.LEFT) {
            turnFactor = -1;
            sprite.setFlipX(true);
        }
        sprite.setVelocityX(this.character.getStats().getMoveSpeed() * turnFactor);
    }

    public idle(): void {
        this.stateContext.setCurrentState(this.stateContext.IDLE_STATE);
    }

    public move(movingDirection: CharacterMovingDirection): void {
        this.movingDirection = movingDirection;
    }

    public harm(): void {
        this.stateContext.setCurrentState(this.stateContext.HARMED_STATE);
    }

    public attack(): void { }

    public useSkill(): void { }

    protected configureState() {
        this.spriteColliderWrapper = this.character.getSpriteColliderWrapper();
    }

}
