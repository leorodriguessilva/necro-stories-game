import { ColisionType } from "./ColisionType";
import { ICollider } from "../collider/ICollider";

export interface IColisionManager {

    addColisionToHandle<FirstStats, SecondStats>(
        firstCollider: ICollider<FirstStats>,
        secondCollider: ICollider<SecondStats>,
        colisionCallback: ArcadePhysicsCallback,
        colisionType: ColisionType): void;

    isColisionOn(): boolean;

    turnColisionOn(): void;

    turnColisionOff(): void;
}
