import { SkillStateContext } from "./SkillStateContext";
import { ISkillState } from "./ISkillState";
import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { ISkill } from "../ISkill";

export abstract class AbstractSkillState implements ISkillState {

    protected skillStateContext: SkillStateContext;

    constructor(skillStateContext: SkillStateContext) {
        this.skillStateContext = skillStateContext;
    }

    public abstract cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void;

    public abstract interrupt(): void;

    public abstract hit(firstCollider: ISkill, secondCollider: ICollider<IDestructibleObjectStats>): void;
}
