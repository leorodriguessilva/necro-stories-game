import { CharacterMovingDirection } from "./CharacterMovingDirection";

export interface ICharacterState {

    update(): void;

    idle(): void;

    move(movingDirection: CharacterMovingDirection): void;

    harm(): void;

    attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void;

    cast(): void;

}
