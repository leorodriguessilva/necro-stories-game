import { ICollider } from "../collider/ICollider";

export interface IColision<FirstStats, SecondStats> {

    onColisionHappen: (firstCollider: ICollider<FirstStats>, secondCollider: ICollider<SecondStats>) => void;

    getFirstCollider(): ICollider<FirstStats>;

    getSecondCollider(): ICollider<SecondStats>;

    hasCollided(): boolean;
    
}
