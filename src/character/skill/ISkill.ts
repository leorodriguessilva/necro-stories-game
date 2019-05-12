import { IGameObject } from "../../gameobject/IGameObject";

export interface ISkill extends IGameObject {

    getSprite(): Phaser.Physics.Arcade.Sprite;

    getId(): number;

    getName(): string;

    cast(locationX: number, locationY: number, callbackWhenDoneCasting: () => void): void;
}
