import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";

export class CharacterIdleState extends CharacterState {

    private sprite: Phaser.Physics.Arcade.Sprite;
    private characterName: string;

    public update(): void {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.characterName + "-idle", true);
    }

    public idle(): void { }

    public move(movingDirection: CharacterMovingDirection): void {
        this.stateContext.setCurrentState(this.stateContext.MOVING_STATE);
        this.stateContext.move(movingDirection);
    }

    public harm(): void {
        this.stateContext.setCurrentState(this.stateContext.HARMED_STATE);
    }

    public attack(locationX: number, locationY: number): void {
        this.character.getBasicAttackSkill().cast(locationX, locationY, () => {
            this.stateContext.setCurrentState(this.stateContext.MOVING_STATE);
        });
        this.stateContext.setCurrentState(this.stateContext.ATTACKING_STATE);
    }

    public useSkill(): void { }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getSprite();
        this.characterName = this.character.getName();
    }

}
