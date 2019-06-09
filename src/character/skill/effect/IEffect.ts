import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { ICollider } from "../../../collider/ICollider";

export interface IEffect {

    apply(collider: ICollider<IDestructibleObjectStats>): void;

}
