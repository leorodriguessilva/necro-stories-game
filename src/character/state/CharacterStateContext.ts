import { Character } from "../Character";
import { CharacterState } from "./CharacterState";
import { CharacterIdleState } from "./CharacterIdleState";
import { CharacterMovingState } from "./CharacterMovingState";
import { CharacterHarmedState } from "./CharacterHarmedState";

export class CharacterStateContext {

    public readonly IDLE_STATE: CharacterState;
    public readonly MOVING_STATE: CharacterState;
    public readonly HARMED_STATE: CharacterState;

    private currentState: CharacterState;

    constructor(character: Character) {
        this.IDLE_STATE = new CharacterIdleState(this, character);
        this.MOVING_STATE = new CharacterMovingState(this, character);
        this.HARMED_STATE = new CharacterHarmedState(this, character);

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

    public setCurrentState(state: CharacterState): void {
        this.currentState = state;
    }

}
