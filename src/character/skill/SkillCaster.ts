import { ISkillCaster } from "./ISkillCaster";
import { ISkill } from "./ISkill";
import { Character } from "../Character";
import { CharacterMovingDirection } from "../state/CharacterMovingDirection";

export class SkillCaster implements ISkillCaster {

    private skills: ISkill[];
    private owner: Character;
    private callbackWhenDoneCasting: () => void;

    constructor(owner: Character, callbackWhenDoneCasting: () => void) {
        this.skills = new Array();
        this.owner = owner;
        this.callbackWhenDoneCasting = callbackWhenDoneCasting;
    }

    public addSkill(skill: ISkill): void {
        if (this.hasSkill(skill.getObjectId())) {
            return;
        }
        this.skills.push(skill);
    }

    public useSkill(id: number, movingDirection: CharacterMovingDirection): void {
        const skill = this.getSkill(id);
        if (skill) {
            const ownerSprite = this.owner.getSpriteColliderWrapper();
            skill.cast(ownerSprite.getX(), ownerSprite.getY(), movingDirection, this.callbackWhenDoneCasting);
        }
    }

    public getSkill(id: number): ISkill {
        const skill = this.skills.find((s) => s.getObjectId() === id);
        return skill;
    }

    public update(): void {
        this.skills.forEach((skill) => {
            skill.update();
        });
    }

    private hasSkill(id: number) {
        const skill = this.getSkill(id);
        return skill != null;
    }

}
