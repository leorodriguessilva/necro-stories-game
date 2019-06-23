import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";
import { ISkill } from "../skill/ISkill";

export class CharacterUsingSkillState extends CharacterState {

    private skill: ISkill;

    public update(): void {
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

    protected configureState(): void { }

}
