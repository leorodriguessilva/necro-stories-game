import { ISkill } from "./ISkill";
import { Character } from "../Character";

export interface ISkillInternal extends ISkill {
    
    enableColision(): void;

    disableColision(): void;

    activateSprite(locationX: number, locationY: number): void;

    inactivateSprite(): void;

    getOwner(): Character;

    playAnimation(): void;

    getPhysicsSprite(): Phaser.Physics.Arcade.Sprite;

}
