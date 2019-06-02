import { Character } from "../Character";
import { CharacterIdleState } from "./CharacterIdleState";
import { CharacterMovingState } from "./CharacterMovingState";
import { CharacterHarmedState } from "./CharacterHarmedState";
import { ICharacterState } from "./ICharacterState";
import { CharacterAttackingState } from "./CharacterAttackingState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";
import { CharacterDyingState } from "./CharacterDyingState";

export class CharacterStateContext {

    public readonly IDLE_STATE: ICharacterState;
    public readonly MOVING_STATE: ICharacterState;
    public readonly HARMED_STATE: ICharacterState;
    public readonly ATTACKING_STATE: ICharacterState;
    public readonly USING_SKILL_STATE_STATE: ICharacterState;
    public readonly DYING_STATE: ICharacterState;

    private currentState: ICharacterState;
    private lastMovingDirection: CharacterMovingDirection;

    constructor(character: Character) {
        this.IDLE_STATE = new CharacterIdleState(this, character);
        this.MOVING_STATE = new CharacterMovingState(this, character);
        this.HARMED_STATE = new CharacterHarmedState(this, character);
        this.ATTACKING_STATE = new CharacterAttackingState(this, character);
        this.DYING_STATE = new CharacterDyingState(this, character);

        this.currentState = this.IDLE_STATE;
        this.lastMovingDirection = CharacterMovingDirection.RIGHT;
    }

    public update(): void {
        this.currentState.update();
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

    public useSkill(): void {
        this.currentState.cast();
    }

    public setCurrentState(state: ICharacterState): void {
        this.currentState = state;
    }

}
