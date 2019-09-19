import { SkillStateContext } from "./SkillStateContext";
import { ISkillState } from "./ISkillState";
import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { ISkill } from "../ISkill";
import { ISkillInternal } from "../ISkillInternal";

export abstract class AbstractSkillState implements ISkillState {

    private skillStateContext: SkillStateContext;

    private updateCallback: () => void;

    constructor(skillStateContext: SkillStateContext) {
        this.skillStateContext = skillStateContext;
    }

    public update(): void {
        if (this.updateCallback) {
            this.updateCallback();
        }
    }

    public abstract cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void;

    public abstract interrupt(): void;

    public abstract hit(firstCollider: ISkill, secondCollider: ICollider<IDestructibleObjectStats>): void;

    public setStateContext(skillStateContext: SkillStateContext) {
        this.skillStateContext = skillStateContext;
    }

    public setUpdateCallback(updateCallback: () => void) {
        this.updateCallback = updateCallback;
    }

    protected getSkillStateContext(): SkillStateContext {
        return this.skillStateContext;
    }

    protected setCurrentState(skillState: ISkillState): void {
        this.skillStateContext.setCurrentState(skillState);
    }

    protected getSkill(): ISkillInternal {
        return this.skillStateContext.getSkill();
    }
}
