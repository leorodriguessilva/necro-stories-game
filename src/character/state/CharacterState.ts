import { CharacterStateContext } from "./CharacterStateContext";
import { Character } from "../Character";

export abstract class CharacterState {

    stateContext: CharacterStateContext;
    character: Character;

    constructor(stateContext: CharacterStateContext, character: Character) {
        this.stateContext = stateContext;
        this.character = character;
        this.configureState();
    }
    
    abstract update(): void;

    abstract idle(): void;

    abstract move(): void

    abstract harm(): void

    abstract configureState(): void;

}