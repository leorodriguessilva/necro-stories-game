import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";

export class CharacterUsingSkillState extends CharacterState {

    private sprite: Phaser.Physics.Arcade.Sprite;

    public update(): void { }

    public idle(): void { }

    public move(movingDirection: CharacterMovingDirection): void { }

    public harm(): void { }

    public attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void { }

    public useSkill(): void { }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getSprite();
    }

}
