import { ICollider } from "../collider/ICollider";
import { ObstacleStatsReader } from "../stats/ObstacleStatsReader";
import { ObstacleStats } from "../stats/ObstacleStats";
import { ColliderType } from "../collider/ColliderType";
import { ISpriteColliderWrapper } from "../collider/ISpriteColliderWrapper";
import { SpriteColliderWrapper } from "../collider/SpriteColliderWrapper";
import { SpriteColliderDataWrapper } from "../collider/SpriteColliderDataWrapper";

export class BasicObstacle implements ICollider<ObstacleStats> {

    private readonly ASSET_NAME: string;

    private objectId: number;
    private spriteName: string;
    private stats: ObstacleStats;
    private spriteColliderWrapper: SpriteColliderWrapper;

    constructor(objectId: number, spriteName: string, obstacleStatsReader: ObstacleStatsReader) {
        if (objectId) {
            this.objectId = objectId;
            return;
        }

        this.objectId = Math.floor((Math.random() * 100) + 1);

        this.spriteName = spriteName;
        this.stats = obstacleStatsReader.generateStats(this.getName());
        this.ASSET_NAME = "assets/" + this.getName() + ".png";
    }

    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.image(this.getName(), "assets/" + this.getName() + ".png");
    }

    public create(
        scene: Phaser.Scene,
        obstacleCreationData: PhysicsGroupConfig,
        spriteBehaviourInitialization: (collider: Phaser.Physics.Arcade.Sprite) => void): void {
        obstacleCreationData.defaultKey = this.getName();

        const spriteColliderDataWrapper = new SpriteColliderDataWrapper(
            null,
            null,
            scene,
            this.getName(),
            obstacleCreationData,
            this.getColliderType());
        this.spriteColliderWrapper = new SpriteColliderWrapper(spriteColliderDataWrapper);

        const spriteGroup = this.spriteColliderWrapper.getGameObjectGroup();

        spriteGroup.children.iterate(spriteBehaviourInitialization);
    }

    public getAssetName(): string {
        return this.ASSET_NAME;
    }

    public destroy(): void {
        this.spriteColliderWrapper.destroy();
    }

    public getStats(): ObstacleStats {
        return this.stats;
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

    public getObjectId(): number {
        return this.objectId;
    }

    public getColliderType(): ColliderType {
        return ColliderType.GROUP;
    }

    public beingHitted(amountOfDamage: number): void { }

}
