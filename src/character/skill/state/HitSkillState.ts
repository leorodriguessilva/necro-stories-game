import { ISkillState } from "./ISkillState";
import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { ISkill } from "../ISkill";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { AbstractSkillState } from "./AbstractSkillState";

export class HitSkillState extends AbstractSkillState {

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void {
        throw new Error("Method not implemented.");
    }

    public interrupt(): void {
        throw new Error("Method not implemented.");
    }

    public hit(
        firstCollider: ISkill,
        secondCollider: ICollider<IDestructibleObjectStats>): void {
        throw new Error("Method not implemented.");
    }

}
