import { Character } from "../Character";
import { CharacterIdleState } from "./CharacterIdleState";
import { CharacterMovingState } from "./CharacterMovingState";
import { CharacterHarmedState } from "./CharacterHarmedState";
import { ICharacterState } from "./ICharacterState";
import { CharacterAttackingState } from "./CharacterAttackingState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";
import { CharacterDyingState } from "./CharacterDyingState";
import { ISkillCaster } from "../skill/ISkillCaster";
import { SkillCaster } from "../skill/SkillCaster";
import { CharacterUsingSkillState } from "./CharacterUsingSkillState";
import { ISkill } from "../skill/ISkill";

export class CharacterStateContext implements ISkillCaster {

    public readonly IDLE_STATE: ICharacterState;
    public readonly MOVING_STATE: ICharacterState;
    public readonly HARMED_STATE: ICharacterState;
    public readonly ATTACKING_STATE: ICharacterState;
    public readonly USING_SKILL_STATE: ICharacterState;
    public readonly DYING_STATE: ICharacterState;

    private currentState: ICharacterState;
    private lastMovingDirection: CharacterMovingDirection;
    private skills: ISkillCaster;

    constructor(character: Character) {
        this.IDLE_STATE = new CharacterIdleState(this, character);
        this.MOVING_STATE = new CharacterMovingState(this, character);
        this.HARMED_STATE = new CharacterHarmedState(this, character);
        this.ATTACKING_STATE = new CharacterAttackingState(this, character);
        this.USING_SKILL_STATE = new CharacterUsingSkillState(this, character);
        this.DYING_STATE = new CharacterDyingState(this, character);

        this.currentState = this.IDLE_STATE;
        this.lastMovingDirection = CharacterMovingDirection.RIGHT;
        this.skills = new SkillCaster(character, () => {
            this.setCurrentState(this.IDLE_STATE);
        });
    }

    public update(): void {
        this.currentState.update();
        this.skills.update();
    }

    public idle(): void {
        this.currentState.idle();
    }

    public move(movingDirection: CharacterMovingDirection): void {
        this.lastMovingDirection = movingDirection;
        this.currentState.move(movingDirection);
    }

    public harm(amountOfDamage: number): void {
        this.currentState.harm(amountOfDamage);
    }

    public attack(locationX: number, locationY: number): void {
        this.currentState.attack(locationX, locationY, this.lastMovingDirection);
    }

    public addSkill(skill: ISkill): void {
        this.skills.addSkill(skill);
    }

    public useSkill(id: number): void {
        this.currentState.useSkill(id, this.lastMovingDirection);
    }

    public getSkills(): ISkillCaster {
        return this.skills;
    }

    public getSkill(id: number): ISkill {
        return this.skills.getSkill(id);
    }

    public setCurrentState(state: ICharacterState): void {
        this.currentState = state;
    }

}
