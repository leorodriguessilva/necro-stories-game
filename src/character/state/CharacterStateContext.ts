import { Character } from "../Character";
import { CharacterState } from "./CharacterState";
import { CharacterIdleState } from './CharacterIdleState';
import { CharacterMovingState } from './CharacterMovingState';
import { CharacterHarmedState } from './CharacterHarmedState';

export class CharacterStateContext {

    IDLE_STATE: CharacterState;
    MOVING_STATE: CharacterState;
    HARMED_STATE: CharacterState;

    currentState: CharacterState;

    constructor(character: Character) {
        this.IDLE_STATE = new CharacterIdleState(this, character);
        this.MOVING_STATE = new CharacterMovingState(this, character);
        this.HARMED_STATE = new CharacterHarmedState(this, character);

        this.currentState = this.IDLE_STATE;
    }

    update(): void {
        this.currentState.update();
    }

    idle(): void {
        this.currentState.idle();
    }

    move(): void {
        this.currentState.move();
    }

    harm(): void {
        this.currentState.harm();
    }

    setCurrentState(state: CharacterState): void {
        this.currentState = state;
    }
}