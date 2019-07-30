import { ISkillState } from "./ISkillState";
import { NotCastSkillState } from "./NotCastSkillState";
import { CastSkillState } from "./CastSkillState";
import { InterruptedSkillState } from "./InterruptSkillState";
import { HitSkillState } from "./HitSkillState";
import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { ISkill } from "../ISkill";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";

export class SkillStateContext {

    public readonly NOT_CAST_SKILL_STATE: ISkillState;
    public readonly CAST_SKILL_STATE: ISkillState;
    public readonly INTERRUPTED_SKILL_STATE: ISkillState;
    public readonly HIT_SKILL_STATE: ISkillState;

    private currentState: ISkillState;

    constructor() {
        this.NOT_CAST_SKILL_STATE = new NotCastSkillState(this);
        this.CAST_SKILL_STATE = new CastSkillState(this);
        this.INTERRUPTED_SKILL_STATE = new InterruptedSkillState(this);
        this.HIT_SKILL_STATE = new HitSkillState(this);
        this.currentState = this.NOT_CAST_SKILL_STATE;
    }

    public setCurrentState(currentState: ISkillState) {
        this.currentState = currentState;
    }

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void {
            this.currentState.cast(
                locationX,
                locationY,
                movingDirection,
                callbackWhenDoneCasting);
    }

    public interrupt(): void {
        this.currentState.interrupt();
    }

    public hit(
        firstCollider: ISkill,
        secondCollider: ICollider<IDestructibleObjectStats>): void {
            this.currentState.hit(firstCollider, secondCollider);
    }

}
