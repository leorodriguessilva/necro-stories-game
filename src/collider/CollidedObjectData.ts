import "phaser";
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
    preload(loader: Phaser.Loader.LoaderPlugin): void {
        console.log('Loading ' + this.getGameObjectName() + ' resources to be used');
    }

    /**
     * Create the instance of the game object into the scene, and configure its initial behaviour.
     * 
     * @param physics - This physics is given by Phaser framework, to provide utils to change object physics
     * @param anims - This is the animator of Phaser framework, he creates the animations to be runned when called
     */
    abstract create(physics: Phaser.Physics.Arcade.ArcadePhysics, anims: Phaser.Animations.AnimationManager): void;

    abstract destroy(): void;

    abstract getSpriteColliderWrapper(): ISpriteColliderWrapper;

    getGameObjectName(): string {
        return `${this.getName}${this.getObjectId}`;
    }

    getObjectId(): number {
        return this.objectId;
    }

    abstract getName(): string;

    abstract getStats(): Stats;

    abstract getColliderType(): ColliderType;

}