import { ColliderType } from "./ColliderType";
import { ISpriteColliderWrapper } from "./ISpriteColliderWrapper";
import { ILoadable } from "../loader/ILoadable";

export interface ICollider<Stats> extends ILoadable {

    /**
     * Destroy a Phaser game object on the scene, and clean all its resources.
     */
    destroy(): void;

    /**
     * @returns the sprite collider game object of the current scene
     */
    getSpriteColliderWrapper(): ISpriteColliderWrapper;

    getObjectId(): number;

    getGameObjectName(): string;

    getName(): string;

    getStats(): Stats;

    getColliderType(): ColliderType;

    beingHitted(): void;
    
}
