import { ICollider } from "../collider/ICollider";
import { ObstacleStats } from "../stats/ObstacleStats";

export class StaticObstacle implements ICollider<ObstacleStats> {
    
    private objectId: number;
    private spriteName: string;
    private staticGroupSprite: Phaser.Physics.Arcade.StaticGroup;

    constructor(objectId:number, spriteName: string) {
        if (objectId) {
            this.objectId = objectId;
            return;
        }

        this.objectId = Math.floor((Math.random() * 100) + 1);

        this.spriteName = spriteName;
    }

    preload(loader: Phaser.Loader.LoaderPlugin) {
        loader.image(this.getName(), 'assets/' + this.getName() + '.png');
    }

    create(physics: Phaser.Physics.Arcade.ArcadePhysics, 
        staticGroupSpriteInitialization: (staticGroup: Phaser.Physics.Arcade.StaticGroup) => void) {
        this.staticGroupSprite = physics.add.staticGroup();

        staticGroupSpriteInitialization(this.staticGroupSprite);
    }

    destroy(): void {
        this.staticGroupSprite.destroy();
    }

    getSprite(): Phaser.Physics.Arcade.Sprite {
        return null;
    }

    getSpriteGroup(): Phaser.Physics.Arcade.Group {
        return null;
    }
    getStaticGroup(): Phaser.Physics.Arcade.StaticGroup {
        return this.staticGroupSprite;
    }

    getGameObjectName(): string {
        return `${this.spriteName}${this.objectId}`;
    }

    getName(): string {
        return this.spriteName;
    }

    getStats(): ObstacleStats {
        return null;
    }

}