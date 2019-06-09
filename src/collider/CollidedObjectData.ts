import { ICollider } from "./ICollider";
import { ColliderType } from "./ColliderType";
import { ISpriteColliderWrapper } from "./ISpriteColliderWrapper";

export abstract class CollidedObjectData<Stats> implements ICollider<Stats> {

    private objectId: number;

    constructor(objectId: number) {
        if (objectId) {
            this.objectId = objectId;
            return;
        }
        this.objectId = Math.floor((Math.random() * 100) + 1);
    }

    /**
     * Preload images, sprites and vfx into the scene
     *
     * @param loader - This loader is given by Phaser framework, to load images and sprites
     */
    public abstract preload(loader: Phaser.Loader.LoaderPlugin): void;

    /**
     * Create the instance of the game object into the scene, and configure its initial behaviour.
     *
     * @param scene - This scene is given by Phaser framework,
     * to provide utils to change and create objects in the scene
     */
    public abstract create(scene: Phaser.Scene): void;

    public abstract update(): void;

    public abstract getAssetName(): string;

    public abstract destroy(): void;

    public abstract getSpriteColliderWrapper(): ISpriteColliderWrapper;

    public getGameObjectName(): string {
        return `${this.getName}${this.getObjectId}`;
    }

    public getObjectId(): number {
        return this.objectId;
    }

    public abstract getName(): string;

    public abstract getStats(): Stats;

    public abstract getColliderType(): ColliderType;

    public abstract beingHitted(amountOfDamage: number): void;

}
