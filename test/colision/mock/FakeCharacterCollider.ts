import { ICollider } from "../../../src/collider/ICollider";
import { CharacterStats } from "../../../src/stats/CharacterStats";
import { ColliderType } from "../../../src/collider/ColliderType";
import { ISpriteColliderWrapper } from "../../../src/collider/ISpriteColliderWrapper";

export class FakeCharacterCollider implements ICollider<CharacterStats> {
    
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
    
    public getStats(): CharacterStats {
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
