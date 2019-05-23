import { ColisionType } from "./ColisionType";
import { IColision } from "./IColision";

export interface IColisionManager {

    addColisionToHandle<FirstStats, SecondStats>(
        colision: IColision<FirstStats, SecondStats>,
        colisionType: ColisionType): void;

    isColisionOn(): boolean;

    turnColisionOn(): void;

    turnColisionOff(): void;
}
