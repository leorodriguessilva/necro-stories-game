import { ICollider } from "../collider/ICollider";
import { ObstacleStats } from "../stats/ObstacleStats";
import { ColliderType } from "../collider/ColliderType";
import { SpriteColliderWrapper } from "../collider/SpriteColliderWrapper";
import { ISpriteColliderWrapper } from "../collider/ISpriteColliderWrapper";
import { SpriteColliderDataWrapper } from "../collider/SpriteColliderDataWrapper";

export class StaticObstacle implements ICollider<ObstacleStats> {

    private readonly ASSET_NAME: string;

    private objectId: number;
    private spriteName: string;
    private spriteColliderWrapper: SpriteColliderWrapper;

    constructor(spriteName: string, objectId: number = null) {
        if (objectId) {
            this.objectId = objectId;
            return;
        }

        this.objectId = Math.floor((Math.random() * 100) + 1);

        this.spriteName = spriteName;
        this.ASSET_NAME = `assets/${this.getName()}.png`;
    }

    public preload(loader: Phaser.Loader.LoaderPlugin) {
        loader.image(this.getName(), this.ASSET_NAME);
    }

    public create(
        scene: Phaser.Scene,
        staticGroupSpriteInitialization: (staticGroup: Phaser.GameObjects.Group) => void) {
        const spriteColliderDataWrapper = new SpriteColliderDataWrapper(
            null,
            null,
            scene,
            null,
            null,
            this.getColliderType());
        this.spriteColliderWrapper = new SpriteColliderWrapper(spriteColliderDataWrapper);
        const staticGroupSprite = this.spriteColliderWrapper.getGameObjectGroup();
        staticGroupSpriteInitialization(staticGroupSprite);
    }

    public getAssetName(): string {
        return this.ASSET_NAME;
    }

    public destroy(): void {
        this.getSpriteColliderWrapper().destroy();
    }

    public getObjectId(): number {
        return this.objectId;
    }

    public getSpriteColliderWrapper(): ISpriteColliderWrapper {
        return this.spriteColliderWrapper;
    }

    public getGameObjectName(): string {
        return `${this.spriteName}${this.objectId}`;
    }

    public getName(): string {
        return this.spriteName;
    }

    public getStats(): ObstacleStats {
        return null;
    }

    public getColliderType(): ColliderType {
        return ColliderType.STATIC;
    }

}
