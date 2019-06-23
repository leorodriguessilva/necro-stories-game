import { CharacterMovingDirection } from "./CharacterMovingDirection";

export interface ICharacterState {

    update(): void;

    idle(): void;

    move(movingDirection: CharacterMovingDirection): void;

    harm(amountOfDamage: number): void;

    attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void;

    useSkill(id: number, movingDirection: CharacterMovingDirection): void;

}
