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
import { SpriteColliderDataWrapper } from "../../collider/SpriteColliderDataWrapper";
import { SpriteColliderWrapper } from "../../collider/SpriteColliderWrapper";
import { SkillStateContext } from "./state/SkillStateContext";
import { ISkillInternal } from "./ISkillInternal";

export class EnergyBallSkill extends CollidedObjectData<ObstacleStats> implements ISkillInternal {

    private readonly ASSET_NAME: string;
    private readonly CAST_ANIM_ALIAS: string;

    private spriteColliderWrapper: ISpriteColliderWrapper;
    private anims: Phaser.Animations.AnimationManager;
    private callbackWhenDoneCasting: () => void;

    private damageOnHit: IEffect;
    private owner: Character;
    private isColisionEnabled: boolean;

    private skillStateContext: SkillStateContext;

    constructor(id: number) {
        super(id);
        this.ASSET_NAME = "assets/energy-ball2.png";
        this.CAST_ANIM_ALIAS = `${this.getName()}-cast`;
        this.enableColision();
        this.skillStateContext = new SkillStateContext(this);
    }

    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet(this.getName(), this.ASSET_NAME, { frameWidth: 30, frameHeight: 20 });
    }

    public create(scene: Phaser.Scene): void {
        this.anims = scene.anims;
        const spriteColliderDataWrapper = new SpriteColliderDataWrapper(
            0,
            0,
            scene,
            this.getName(),
            null,
            this.getColliderType());
        this.spriteColliderWrapper = new SpriteColliderWrapper(spriteColliderDataWrapper);

        this.spriteColliderWrapper.setCollideWorldBounds(true);

        this.inactivateSprite();
        this.initializeDamageOnHit();
        this.configureAnimation();
    }

    public update(): void {
        this.skillStateContext.update();
    }

    public getAssetName(): string {
        return this.ASSET_NAME;
    }

    public destroy(): void {
        this.getSpriteColliderWrapper().destroy();
    }

    public getSpriteColliderWrapper(): ISpriteColliderWrapper {
        return this.spriteColliderWrapper;
    }

    public getName(): string {
        return "energy-ball";
    }

    public getStats(): ObstacleStats {
        return null;
    }

    public getColliderType(): ColliderType {
        return ColliderType.SPRITE;
    }

    public beingHitted(amountOfDamage: number): void { }

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection, callbackWhenDoneCasting: () => void): void {
        this.enableColision();
        this.callbackWhenDoneCasting = callbackWhenDoneCasting;

        const calculatedX = this.preparePositionXToDraw(locationX, movingDirection);
        this.xVelocity = this.calculateXVelocity(movingDirection);

        this.activateSprite(calculatedX, locationY);
        this.callbackWhenDoneCasting();
        this.skillStateContext.cast(locationX, locationY, movingDirection, callbackWhenDoneCasting);
    }

    public interrupt(): void {
        this.skillStateContext.interrupt();
        this.inactivateSprite();
    }

    public onHit(firstCollider: ISkill, secondCollider: ICollider<IDestructibleObjectStats>): void {
        this.skillStateContext.hit(firstCollider, secondCollider);
        if (this.isColisionEnabled) {
            this.damageOnHit.apply(secondCollider);
            this.disableColision();
            this.inactivateSprite();
        }
    }

    public setOwner(owner: Character): void {
        this.owner = owner;
    }

    public activateSprite(locationX: number, locationY: number): void {
        const sprite = this.getPhysicsSprite();
        sprite.enableBody(true, locationX, locationY, true, true);
    }

    public inactivateSprite(): void {
        const sprite = this.getPhysicsSprite();
        sprite.disableBody(true, true);
    }

    public enableColision(): void {
        this.isColisionEnabled = true;
    }

    public disableColision(): void {
        this.isColisionEnabled = false;
    }

    public getOwner(): Character {
        return this.owner;
    }

    public playAnimation(): void {
        const sprite = this.getSpriteColliderWrapper().getGameObject();
        sprite.anims.play(this.CAST_ANIM_ALIAS, true);
    }

    public getPhysicsSprite(): Phaser.Physics.Arcade.Sprite {
        return this.getSpriteColliderWrapper().getGameObject() as Phaser.Physics.Arcade.Sprite;
    }

    private configureAnimation(): void {
        this.anims.create({
            key: this.CAST_ANIM_ALIAS,
            frames: this.anims.generateFrameNumbers(this.getName(), { start: 0, end: 19 }),
            frameRate: 6,
            repeat: -1,
        });
    }

    private initializeDamageOnHit(): void {
        const ownerStats = this.owner.getStats();
        this.damageOnHit = new PhysicalDamageEffect(ownerStats.getAgility());
    }

}
