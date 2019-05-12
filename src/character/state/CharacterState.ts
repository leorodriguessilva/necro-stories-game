import { CharacterStateContext } from "./CharacterStateContext";
import { Character } from "../Character";
import { ICharacterState } from "./ICharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";

export abstract class CharacterState implements ICharacterState {

    protected stateContext: CharacterStateContext;
    protected character: Character;

    constructor(stateContext: CharacterStateContext, character: Character) {
        this.stateContext = stateContext;
        this.character = character;
        this.configureState();
    }

    public abstract update(): void;

    public abstract idle(): void;

    public abstract move(movingDirection: CharacterMovingDirection): void;

    public abstract harm(): void;

    public abstract attack(locationX: number, locationY: number): void;

    public abstract useSkill(): void;

    protected abstract configureState(): void;

}
