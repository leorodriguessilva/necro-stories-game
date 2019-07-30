import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { AbstractSkillState } from "./AbstractSkillState";

export class CastSkillState extends AbstractSkillState {

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void { }

    public interrupt(): void {
        throw new Error("Method not implemented.");
    }

    public hit(firstCollider: import("../ISkill").ISkill, secondCollider: ICollider<IDestructibleObjectStats>): void {
        throw new Error("Method not implemented.");
    }

}
