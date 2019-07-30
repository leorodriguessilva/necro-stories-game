import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { AbstractSkillState } from "./AbstractSkillState";
import { ISkill } from "../ISkill";

export class CastSkillState extends AbstractSkillState {

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void {
            this.getSkill().cast(
                locationX,
                locationY,
                movingDirection,
                callbackWhenDoneCasting);
    }

    public interrupt(): void {
        throw new Error("Method not implemented.");
    }

    public hit(firstCollider: ISkill, secondCollider: ICollider<IDestructibleObjectStats>): void {
        throw new Error("Method not implemented.");
    }

}
