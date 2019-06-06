import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";

export interface IEffect {

    apply(destructibleObjectStats: IDestructibleObjectStats): void;

}
