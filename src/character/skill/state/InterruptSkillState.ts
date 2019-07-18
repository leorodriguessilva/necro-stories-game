import { ISkillState } from "./ISkillState";
import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { ISkill } from "../ISkill";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";

export class InterruptedSkillState implements ISkillState {

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void {

    }

    public interrupt(): void { }

    public hit(
        firstCollider: ISkill,
        secondCollider: ICollider<IDestructibleObjectStats>): void { }

}
