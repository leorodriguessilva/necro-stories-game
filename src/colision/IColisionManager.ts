import { ColisionType } from "./ColisionType";
import { ICollider } from "../collider/ICollider";
import { ISkill } from "../character/skill/ISkill";
import { IColision } from "./IColision";

export interface IColisionManager {

    addColisionToHandle<FirstStats, SecondStats>(
        colision: IColision<FirstStats, SecondStats>,
        colisionType: ColisionType): void;

    addSkillColisionToHandle<Stats>(
        firstCollider: ICollider<Stats>,
        secondCollider: ISkill,
        colisionCallback: ArcadePhysicsCallback,
        colisionType: ColisionType): void;

    isColisionOn(): boolean;

    turnColisionOn(): void;

    turnColisionOff(): void;
}
