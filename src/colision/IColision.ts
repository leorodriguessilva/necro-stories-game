import { ICollider } from "../collider/ICollider";
import { IDestructibleObjectStats } from "../stats/IDestructibleObjectStats";

export interface IColision<FirstStats, SecondStats> {

    onColisionHappen: (firstCollider: ICollider<FirstStats>, secondCollider: ICollider<SecondStats>) => void;

    getFirstCollider(): ICollider<FirstStats>;

    getSecondCollider(): ICollider<SecondStats>;

    getCallbackOwner(): ICollider<IDestructibleObjectStats>;

}
