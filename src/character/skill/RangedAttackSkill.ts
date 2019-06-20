import { ISkill } from "./ISkill";
import { CollidedObjectData } from "../../collider/CollidedObjectData";
import { ObstacleStats } from "../../stats/ObstacleStats";
import { ICollider } from "../../collider/ICollider";
import { IDestructibleObjectStats } from "../../stats/IDestructibleObjectStats";
import { CharacterMovingDirection } from "../state/CharacterMovingDirection";
import { ColliderType } from "../../collider/ColliderType";
import { ISpriteColliderWrapper } from "../../collider/ISpriteColliderWrapper";
import { Character } from "../Character";
import { IEffect } from "./effect/IEffect";
import { PhysicalDamageEffect } from "./effect/PhysicalDamageEffect";

export class RangedAttackSkill extends CollidedObjectData<ObstacleStats> implements ISkill {
    
    private readonly ASSET_NAME: string;
    private readonly CAST_ANIM_ALIAS: string;

    private spriteColliderWrapper: ISpriteColliderWrapper;
    private anims: Phaser.Animations.AnimationManager;
    private callbackWhenDoneCasting: () => void;

    private damageOnHit: IEffect;
    private owner: Character;
    private isColisionEnabled: boolean;

    constructor(id: number) {
        super(id);
        this.ASSET_NAME = "assets/energy-ball.png";
        this.CAST_ANIM_ALIAS = `${this.getName()}-cast`;
        this.enableColision();
    }
    
    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet(this.getName(), this.ASSET_NAME, { frameWidth: 13, frameHeight: 48 });
    }

    public create(scene: Phaser.Scene): void {
        throw new Error("Method not implemented.");
    }

    public update(): void {
        throw new Error("Method not implemented.");
    }

    public getAssetName(): string {
        throw new Error("Method not implemented.");
    }

    public destroy(): void {
        throw new Error("Method not implemented.");
    }

    public getSpriteColliderWrapper(): ISpriteColliderWrapper {
        throw new Error("Method not implemented.");
    }

    public getName(): string {
        throw new Error("Method not implemented.");
    }

    public getStats(): ObstacleStats {
        throw new Error("Method not implemented.");
    }

    public getColliderType(): ColliderType {
        throw new Error("Method not implemented.");
    }

    public beingHitted(amountOfDamage: number): void {
        throw new Error("Method not implemented.");
    }

    public cast(locationX: number, locationY: number, movingDirection: CharacterMovingDirection, callbackWhenDoneCasting: () => void): void {
        throw new Error("Method not implemented.");
    }    

    public interrupt(): void {
        throw new Error("Method not implemented.");
    }

    public onHit(firstCollider: ISkill, secondCollider: ICollider<IDestructibleObjectStats>): void {
        throw new Error("Method not implemented.");
    }

    public setOwner(owner: Character): void {
        this.owner = owner;
    }
    
    private enableColision(): void {
        this.isColisionEnabled = true;
    }

    private disableColision(): void {
        this.isColisionEnabled = false;
    }

    private calculateCharacterFrontDistance(): number {
        const sprite = this.getSpriteColliderWrapper().getGameObject();
        return (sprite.width * 2);
    }

    private activateSprite(locationX: number, locationY: number): void {
        const sprite = this.getPhysicsSprite();
        sprite.enableBody(true, locationX, locationY, true, true);
    }

    private inactivateSprite(): void {
        const sprite = this.getPhysicsSprite();
        sprite.disableBody(true, true);
    }

    private getPhysicsSprite(): Phaser.Physics.Arcade.Sprite {
        return this.getSpriteColliderWrapper().getGameObject() as Phaser.Physics.Arcade.Sprite;
    }

    private preparePositionXToDraw(locationX: number, movingDirection: CharacterMovingDirection): number {
        const sprite = this.getSpriteColliderWrapper().getGameObject();
        sprite.resetFlip();
        const characterFrontDistance = this.calculateCharacterFrontDistance();
        let calculatedX = locationX + characterFrontDistance;
        if (movingDirection === CharacterMovingDirection.LEFT) {
            sprite.setFlipX(true);
            calculatedX = locationX - characterFrontDistance;
        }
        return calculatedX;
    }

    private configureAnimation(): void {
        this.anims.create({
            key: this.CAST_ANIM_ALIAS,
            frames: this.anims.generateFrameNumbers(this.getName(), { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1,
        });
    }

    private initializeDamageOnHit(): void {
        const ownerStats = this.owner.getStats();
        this.damageOnHit = new PhysicalDamageEffect(ownerStats.getAgility());
    }

}