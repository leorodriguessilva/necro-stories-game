import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { ISkill } from "../ISkill";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { AbstractSkillState } from "./AbstractSkillState";

export class InterruptedSkillState extends AbstractSkillState {

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void {
    }

    public interrupt(): void {
        this.getSkill().interrupt();
        this.setCurrentState(this.getSkillStateContext().NOT_CAST_SKILL_STATE);
    }

    public hit(
        firstCollider: ISkill,
        secondCollider: ICollider<IDestructibleObjectStats>): void { }

}
