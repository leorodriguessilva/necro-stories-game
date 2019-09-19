import { ISkill } from "../ISkill";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { AbstractSkillState } from "./AbstractSkillState";

export class NotCastSkillState extends AbstractSkillState {

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void {
            this.setCurrentState(this.getSkillStateContext().CAST_SKILL_STATE);
            this.getSkillStateContext().cast(
                locationX,
                locationY,
                movingDirection,
                callbackWhenDoneCasting);
    }

    public interrupt(): void { }

    public hit(
        firstCollider: ISkill,
        secondCollider: ICollider<IDestructibleObjectStats>): void { }

}
