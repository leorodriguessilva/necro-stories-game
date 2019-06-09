import { PhaserColision } from "./PhaserColision";
import { IDestructibleObjectStats } from "../stats/IDestructibleObjectStats";
import { ISkill } from "../character/skill/ISkill";
import { ICollider } from "../collider/ICollider";

export class PhaserSkillColision extends PhaserColision<IDestructibleObjectStats, IDestructibleObjectStats> {

    constructor(
        firstCollider: ISkill,
        secondCollider: ICollider<IDestructibleObjectStats>) {
            super(firstCollider, secondCollider, firstCollider.onHit);
    }

}
