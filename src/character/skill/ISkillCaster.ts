import { ISkill } from "./ISkill";
import { CharacterMovingDirection } from "../state/CharacterMovingDirection";

export interface ISkillCaster {

    addSkill(skill: ISkill): void;

    useSkill(id: number, movingDirection: CharacterMovingDirection): void;

    getSkill(id: number): ISkill;

    update(): void;

}
