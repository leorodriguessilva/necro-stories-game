export interface ICharacterState {

    update(): void;

    idle(): void;

    move(): void;

    harm(): void;

    attack(): void;

    useSkill(): void;
    
}
