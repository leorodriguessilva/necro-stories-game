import { IEffect } from "./IEffect";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { ICollider } from "../../../collider/ICollider";

export class PhysicalDamageEffect implements IEffect {

    private damageAmount: number;

    constructor(damageAmount: number) {
        this.damageAmount = damageAmount;
    }

    public apply(collider: ICollider<IDestructibleObjectStats>): void {
        if (collider == null) {
            return;
        }
        collider.beingHitted(this.damageAmount);
    }

}
