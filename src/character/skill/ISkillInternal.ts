import { ISkill } from "./ISkill";
import { Character } from "../Character";
import { CharacterMovingDirection } from "../state/CharacterMovingDirection";

export interface ISkillInternal extends ISkill {

    enableColision(): void;

    disableColision(): void;

    activateSprite(locationX: number, locationY: number): void;

    inactivateSprite(): void;

    getOwner(): Character;

    playAnimation(): void;

    getPhysicsSprite(): Phaser.Physics.Arcade.Sprite;

    internalCast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void);

}
