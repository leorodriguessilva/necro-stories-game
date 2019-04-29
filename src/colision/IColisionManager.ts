import { CollidedObjectData } from "../collider/CollidedObjectData";
import { ColisionType } from "./ColisionType";

export interface IColisionManager {

    addColisionToHandle<FirstStats, SecondStats>(
        firstCollider: CollidedObjectData<FirstStats>, 
        secondCollider: CollidedObjectData<SecondStats>,
        colisionCallback: ArcadePhysicsCallback,
        colisionType: ColisionType): void;

    isColisionOn(): boolean;

    turnColisionOn(): void;

    turnColisionOff(): void;
}