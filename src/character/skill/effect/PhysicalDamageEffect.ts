import { IEffect } from "./IEffect";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";

export class PhysicalDamageEffect implements IEffect {

    private damageAmount: number;

    constructor(damageAmount: number) {
        this.damageAmount = damageAmount;
    }

    public apply(destructibleObjectStats: IDestructibleObjectStats): void {
        destructibleObjectStats.diminishCurrentHealth(this.damageAmount);
    }

}
