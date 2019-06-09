import { ObstacleStats } from "../../../src/stats/ObstacleStats";
import { ICollider } from "../../../src/collider/ICollider";
import { ISpriteColliderWrapper } from "../../../src/collider/ISpriteColliderWrapper";
import { ColliderType } from "../../../src/collider/ColliderType";

export class FakeObstacleCollider implements ICollider<ObstacleStats> {
    
    public destroy(): void {
        throw new Error("Method not implemented.");
    }    
    
    public getSpriteColliderWrapper(): ISpriteColliderWrapper {
        throw new Error("Method not implemented.");
    }

    public getObjectId(): number {
        throw new Error("Method not implemented.");
    }

    public getGameObjectName(): string {
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

    public preload(loader: any): void {
        throw new Error("Method not implemented.");
    }

    public getAssetName(): string {
        throw new Error("Method not implemented.");
    }

    public beingHitted(amountOfDamage: number): void {
        throw new Error("Method not implemented.");
    }

}
