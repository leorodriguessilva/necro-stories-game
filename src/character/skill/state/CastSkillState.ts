import { CharacterMovingDirection } from "../../state/CharacterMovingDirection";
import { ICollider } from "../../../collider/ICollider";
import { IDestructibleObjectStats } from "../../../stats/IDestructibleObjectStats";
import { AbstractSkillState } from "./AbstractSkillState";
import { ISkill } from "../ISkill";

export class CastSkillState extends AbstractSkillState {

    private xVelocity: number;

    public update() { 
        this.getSkill().playAnimation();
        const physicsSprite = this.getSkill().getPhysicsSprite();
        physicsSprite.setVelocityY(-5);
        physicsSprite.setVelocityX(this.xVelocity);
    }

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void {
            this.getSkill().enableColision();

            const calculatedX = this.preparePositionXToDraw(locationX, movingDirection);
            this.xVelocity = this.calculateXVelocity(movingDirection);

            this.getSkill().activateSprite(calculatedX, locationY);
            callbackWhenDoneCasting();
    }

    public interrupt(): void { }

    public hit(firstCollider: ISkill, secondCollider: ICollider<IDestructibleObjectStats>): void { }

    private preparePositionXToDraw(locationX: number, movingDirection: CharacterMovingDirection): number {
        const sprite = this.getSkill().getSpriteColliderWrapper().getGameObject();
        sprite.resetFlip();
        const characterFrontDistance = this.calculateCharacterFrontDistance();
        let calculatedX = locationX + characterFrontDistance;
        if (movingDirection === CharacterMovingDirection.LEFT) {
            sprite.setFlipX(true);
            calculatedX = locationX - characterFrontDistance;
        }
        return calculatedX;
    }

    private calculateXVelocity(movingDirection: CharacterMovingDirection): number {
        const ownerStats = this.getSkill().getOwner().getStats();
        const inteligence = ownerStats.getInteligence();
        const inteligenceFactorCalculated = (ownerStats.getInteligence() * 1);
        let directionFactor = 1;
        if (movingDirection === CharacterMovingDirection.LEFT) {
            directionFactor = -1;
        }
        return (inteligence + inteligenceFactorCalculated) * directionFactor;
    }

    private calculateCharacterFrontDistance(): number {
        const sprite = this.getSkill().getSpriteColliderWrapper().getGameObject();
        return (sprite.width);
    }
}
