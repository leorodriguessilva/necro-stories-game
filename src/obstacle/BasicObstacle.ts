import "phaser";
import { ICollider } from '../collider/ICollider';
import { ObstacleStatsReader } from '../stats/ObstacleStatsReader';
import { ObstacleStats } from '../stats/ObstacleStats';
import { ColliderType } from '../collider/ColliderType';
import { ISpriteColliderWrapper } from '../collider/ISpriteColliderWrapper';
import { SpriteColliderWrapper } from '../collider/SpriteColliderWrapper';
import { SpriteColliderDataWrapper } from '../collider/SpriteColliderDataWrapper';

export class BasicObstacle implements ICollider<ObstacleStats> {

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
    }

    preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.image(this.getName(), 'assets/' + this.getName() + '.png');
    }

    create(physics: Phaser.Physics.Arcade.ArcadePhysics,
        obstacleCreationData: PhysicsGroupConfig,
        spriteBehaviourInitialization: (collider: Phaser.Physics.Arcade.Sprite) => void): void {
        obstacleCreationData.defaultKey = this.getName();

        const spriteColliderDataWrapper = new SpriteColliderDataWrapper(null, null, physics, this.getName(), obstacleCreationData, this.getColliderType());
        this.spriteColliderWrapper = new SpriteColliderWrapper(spriteColliderDataWrapper);

        const spriteGroup = this.spriteColliderWrapper.getSpriteGroup();

        spriteGroup.children.iterate(spriteBehaviourInitialization);
    }

    destroy(): void {
        this.spriteColliderWrapper.destroy();
    }

    getStats(): ObstacleStats {
        return this.stats;
    }

    getSpriteColliderWrapper(): ISpriteColliderWrapper {
        return this.spriteColliderWrapper;
    }

    getGameObjectName(): string {
        return `${this.spriteName}${this.objectId}`;
    }

    getName(): string {
        return this.spriteName;
    }    
    
    getObjectId(): number {
        return this.objectId;
    }
    
    getColliderType(): ColliderType {
        return ColliderType.GROUP;
    }

}