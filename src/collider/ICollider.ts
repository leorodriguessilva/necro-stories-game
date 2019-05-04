import { ColliderType } from "./ColliderType";
import { ISpriteColliderWrapper } from "./ISpriteColliderWrapper";

export interface ICollider<Stats> {

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
}
