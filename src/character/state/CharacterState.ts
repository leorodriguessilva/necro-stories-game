import { CharacterStateContext } from "./CharacterStateContext";
import { Character } from "../Character";

export abstract class CharacterState {

    protected stateContext: CharacterStateContext;
    protected character: Character;

    constructor(stateContext: CharacterStateContext, character: Character) {
        this.stateContext = stateContext;
        this.character = character;
        this.configureState();
    }
    
    public abstract update(): void;

    public abstract idle(): void;

    public abstract move(): void

    public abstract harm(): void

    protected abstract configureState(): void;

}