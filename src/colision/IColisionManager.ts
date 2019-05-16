import { ColisionType } from "./ColisionType";
import { ICollider } from "../collider/ICollider";
import { ISkill } from "../character/skill/ISkill";

export interface IColisionManager {

    addColisionToHandle<FirstStats, SecondStats>(
        firstCollider: ICollider<FirstStats>,
        secondCollider: ICollider<SecondStats>,
        colisionCallback: ArcadePhysicsCallback,
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
