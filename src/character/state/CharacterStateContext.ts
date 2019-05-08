import { Character } from "../Character";
import { CharacterState } from "./CharacterState";
import { CharacterIdleState } from "./CharacterIdleState";
import { CharacterMovingState } from "./CharacterMovingState";
import { CharacterHarmedState } from "./CharacterHarmedState";
import { ICharacterState } from "./ICharacterState";
import { CharacterAttackingState } from "./CharacterAttackingState";

export class CharacterStateContext {

    public readonly IDLE_STATE: ICharacterState;
    public readonly MOVING_STATE: ICharacterState;
    public readonly HARMED_STATE: ICharacterState;
    public readonly ATTACKING_STATE: ICharacterState;
    public readonly USING_SKILL_STATE_STATE: ICharacterState;

    private currentState: ICharacterState;

    constructor(character: Character) {
        this.IDLE_STATE = new CharacterIdleState(this, character);
        this.MOVING_STATE = new CharacterMovingState(this, character);
        this.HARMED_STATE = new CharacterHarmedState(this, character);
        this.ATTACKING_STATE = new CharacterAttackingState(this, character);

        this.currentState = this.IDLE_STATE;
    }

    public update(): void {
        this.currentState.update();
    }

    public idle(): void {
        this.currentState.idle();
    }

    public move(): void {
        this.currentState.move();
    }

    public harm(): void {
        this.currentState.harm();
    }

    public attack(): void {
        this.currentState.attack();
    }

    public useSkill(): void {
        this.currentState.useSkill();
    }

    public setCurrentState(state: ICharacterState): void {
        this.currentState = state;
    }

}
