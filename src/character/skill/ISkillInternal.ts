import { ISkill } from "./ISkill";
import { Character } from "../Character";
import { CharacterMovingDirection } from "../state/CharacterMovingDirection";

export interface ISkillInternal extends ISkill {

    internalCast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void);

}
