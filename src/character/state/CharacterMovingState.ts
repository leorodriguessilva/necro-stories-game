import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";
import { ISpriteColliderWrapper } from "../../collider/ISpriteColliderWrapper";

export class CharacterMovingState extends CharacterState {

    private spriteColliderWrapper: ISpriteColliderWrapper;
    private movingDirection: CharacterMovingDirection;

    public update(): void {
        this.animate();
        this.stateContext.setCurrentState(this.stateContext.IDLE_STATE);
    }

    public idle(): void { }

    public move(movingDirection: CharacterMovingDirection): void {
        this.movingDirection = movingDirection;
    }

    public harm(amountOfDamage: number): void {
        this.stateContext.setCurrentState(this.stateContext.HARMED_STATE);
        this.stateContext.harm(amountOfDamage);
    }

    public attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void {
        this.character.getBasicAttackSkill().cast(locationX, locationY, movingDirection, () => {
            this.stateContext.setCurrentState(this.stateContext.IDLE_STATE);
        });
        this.stateContext.setCurrentState(this.stateContext.ATTACKING_STATE);
    }

    public cast(): void { }

    protected configureState() {
        this.spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.movingDirection = CharacterMovingDirection.RIGHT;
    }

    private animate() {
        const sprite = this.spriteColliderWrapper.getGameObject() as Phaser.Physics.Arcade.Sprite;
        let turnFactor = 1;
        sprite.resetFlip();
        if (this.movingDirection === CharacterMovingDirection.LEFT) {
            turnFactor = -1;
            sprite.setFlipX(true);
        }
        sprite.setVelocityX(this.character.getStats().getMoveSpeed() * turnFactor);
        sprite.anims.play(this.character.getWalkAnimAlias(), true);
    }

}
