import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { ISkill } from "../ISkill";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { SkillStateContext } from "./SkillStateContext";

export interface ISkillState {

    update(): void;

    cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void;

    interrupt(): void;

    hit(firstCollider: ISkill, secondCollider: ICollider<IDestructibleObjectStats>): void;

    setStateContext(skillStateContext: SkillStateContext): void;

    setUpdateCallback(updateCallback: () => void);

}
