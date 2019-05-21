import { IColision } from "./IColision";

export interface IColisionWatcher {

    addColisionWatcherOver<FistStats, SecondStats>(
        colision: IColision<FistStats, SecondStats>,
        isColisionOn: () => boolean): void;

    addOverlapWatcherOver<FistStats, SecondStats>(
        colision: IColision<FistStats, SecondStats>,
        isColisionOn: () => boolean): void;

}
