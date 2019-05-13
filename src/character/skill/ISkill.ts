import { IGameObject } from "../../gameobject/IGameObject";
import { CharacterMovingDirection } from "../state/CharacterMovingDirection";

export interface ISkill extends IGameObject {

    getSprite(): Phaser.GameObjects.Sprite;

    getId(): number;

    getName(): string;

    cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void;
}
