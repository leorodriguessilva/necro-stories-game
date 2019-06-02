import { ISkill } from "./ISkill";
import { CharacterMovingDirection } from "../state/CharacterMovingDirection";
import { ObstacleStats } from "../../stats/ObstacleStats";
import { ColliderType } from "../../collider/ColliderType";
import { CollidedObjectData } from "../../collider/CollidedObjectData";
import { ISpriteColliderWrapper } from "../../collider/ISpriteColliderWrapper";
import { SpriteColliderDataWrapper } from "../../collider/SpriteColliderDataWrapper";
import { SpriteColliderWrapper } from "../../collider/SpriteColliderWrapper";
import { IDestructibleObjectStats } from "../../stats/IDestructibleObjectStats";
import { ICollider } from "../../collider/ICollider";

export class MeleeAttackSkill extends CollidedObjectData<ObstacleStats> implements ISkill {
    
    private readonly ASSET_NAME: string;
    private readonly SLASH_ANIM_ALIAS: string;

    private spriteColliderWrapper: ISpriteColliderWrapper;
    private anims: Phaser.Animations.AnimationManager;
    private callbackWhenDoneCasting: () => void;

    constructor(id: number) {
        super(id);
        this.ASSET_NAME = "assets/slash.png";
        this.SLASH_ANIM_ALIAS = `${this.getName()}-slash`;
    }

    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet(this.getName(), this.ASSET_NAME, { frameWidth: 13, frameHeight: 48 });
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

        this.inactivateSprite();
        this.configureAnimation();
    }

    public update(): void {
        const sprite = this.getSpriteColliderWrapper().getGameObject();
        sprite.anims.play(this.SLASH_ANIM_ALIAS, true);
        const animationProgress = sprite.anims.getProgress();

        if (animationProgress === 1) {
            this.inactivateSprite();
            this.callbackWhenDoneCasting();
        }
    }

    public getAssetName(): string {
        return this.ASSET_NAME;
    }

    public getName(): string {
        return "melee-attack";
    }

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void {
        this.callbackWhenDoneCasting = callbackWhenDoneCasting;

        const calculatedX = this.preparePositionXToDraw(locationX, movingDirection);

        this.activateSprite(calculatedX, locationY);
    }

    public interrupt(): void {
        this.inactivateSprite();
    }

    public getColliderType(): ColliderType {
        return ColliderType.STATIC_SPRITE;
    }

    public destroy(): void {
        this.getSpriteColliderWrapper().destroy();
    }

    public getSpriteColliderWrapper(): ISpriteColliderWrapper {
        return this.spriteColliderWrapper;
    }

    public getStats(): ObstacleStats {
        return null;
    }

    public onHit(firstCollider: ICollider<IDestructibleObjectStats>, secondCollider: ICollider<IDestructibleObjectStats>): void {
        throw new Error("Method not implemented.");
    }

    private calculateCharacterFrontDistance() {
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

    private configureAnimation() {
        this.anims.create({
            key: this.SLASH_ANIM_ALIAS,
            frames: this.anims.generateFrameNumbers(this.getName(), { start: 0, end: 11 }),
            frameRate: 30,
            repeat: 0,
        });
    }
}
