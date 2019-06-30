import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";
import { ISkill } from "../skill/ISkill";

export class CharacterUsingSkillState extends CharacterState {

    private skill: ISkill;
    private sprite: Phaser.Physics.Arcade.Sprite;

    public update(): void {
        this.sprite.setVelocityX(0);
        this.skill.update();
    }

    public idle(): void { }

    public move(movingDirection: CharacterMovingDirection): void { }

    public harm(amountOfDamage: number): void { }

    public attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void { }

    public useSkill(id: number, movingDirection: CharacterMovingDirection): void {
        this.stateContext.getSkills().useSkill(id, movingDirection);
        this.skill = this.stateContext.getSkill(id);
    }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getGameObject() as Phaser.Physics.Arcade.Sprite;
    }

}
