import { ICollider } from "../collider/ICollider";
import { ObstacleStats } from "../stats/ObstacleStats";
import { ColliderType } from "../collider/ColliderType";
import { SpriteColliderWrapper } from "../collider/SpriteColliderWrapper";
import { ISpriteColliderWrapper } from "../collider/ISpriteColliderWrapper";
import { SpriteColliderDataWrapper } from "../collider/SpriteColliderDataWrapper";

export class StaticObstacle implements ICollider<ObstacleStats> {
    
    private objectId: number;
    private spriteName: string;
    private spriteColliderWrapper: SpriteColliderWrapper;

    constructor(spriteName: string, objectId:number = null) {
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
        const spriteColliderDataWrapper = new SpriteColliderDataWrapper(null, null, physics, null, null, this.getColliderType());
        this.spriteColliderWrapper = new SpriteColliderWrapper(spriteColliderDataWrapper);
        const staticGroupSprite = this.spriteColliderWrapper.getStaticGroup();
        staticGroupSpriteInitialization(staticGroupSprite);
    }

    destroy(): void {
        this.getSpriteColliderWrapper().destroy();
    }   
    
    getObjectId(): number {
        return this.objectId;
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

    getStats(): ObstacleStats {
        return null;
    }    
    
    getColliderType(): ColliderType {
        return ColliderType.STATIC;
    }

}