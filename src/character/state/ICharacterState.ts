import { CharacterMovingDirection } from "./CharacterMovingDirection";

export interface ICharacterState {

    update(): void;

    idle(): void;

    move(movingDirection: CharacterMovingDirection): void;

    harm(): void;

    attack(): void;

    useSkill(): void;

}
