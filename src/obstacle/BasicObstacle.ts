import { ICollider } from '../collider/ICollider';
import { ObstacleStatsReader } from '../stats/ObstacleStatsReader';
import { ObstacleStats } from '../stats/ObstacleStats';

export class BasicObstacle implements ICollider<ObstacleStats> {

    private objectId: number;
    private spriteName: string;
    private stats: ObstacleStats;
    private groupSprite: Phaser.Physics.Arcade.Group;

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

        this.groupSprite = physics.add.group(obstacleCreationData);

        this.groupSprite.children.iterate(spriteBehaviourInitialization);
    }

    destroy(): void {
        this.groupSprite.destroy();
    }

    getStats(): ObstacleStats {
        return this.stats;
    }

    getSprite(): Phaser.Physics.Arcade.Sprite {
        return null;
    }

    getSpriteGroup(): Phaser.Physics.Arcade.Group {
        return this.groupSprite;
    }

    getStaticGroup(): Phaser.Physics.Arcade.StaticGroup {
        return null;
    }

    getGameObjectName(): string {
        return `${this.spriteName}${this.objectId}`;
    }

    getName(): string {
        return this.spriteName;
    }

}