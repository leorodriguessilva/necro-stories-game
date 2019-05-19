import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";

export class CharacterAttackingState extends CharacterState {

    private sprite: Phaser.Physics.Arcade.Sprite;

    public update(): void {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.character.getAttackAnimAlias(), true);
        this.character.getBasicAttackSkill().update();
    }

    public idle(): void { }

    public move(movingDirection: CharacterMovingDirection): void { }

    public harm(): void {
        this.stateContext.setCurrentState(this.stateContext.HARMED_STATE);
        this.character.getBasicAttackSkill().interrupt();
        this.stateContext.harm();
    }

    public attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void { }

    public cast(): void { }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getSprite();
    }

}
