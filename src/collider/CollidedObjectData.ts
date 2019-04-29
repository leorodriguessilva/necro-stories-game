export abstract class CollidedObjectData<Stats> {

    objectId: number;

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
        console.log('Loading ' + this.getGameObjectName + ' resources to be used');
    }

    /**
     * Create the instance of the game object into the scene, and configure its initial behaviour.
     * 
     * @param physics - This physics is given by Phaser framework, to provide utils to change object physics
     * @param anims - This is the animator of Phaser framework, he creates the animations to be runned when called
     * @param collisionHandlers - These are the handlers for especific types of colisions.
     */
    create(physics: Phaser.Physics.Arcade.ArcadePhysics, anims: Phaser.Animations.Animation): void {
        console.log('Creating ' + this.getGameObjectName + ' in the game context');
    }

    /**
     * Destroy a Phaser game object on the scene, and clean all its resources.
     */
    abstract destroy(): void;

    /**
     * @returns the Phaser.Sprite game object of the current scene
     */
    abstract getSprite(): Phaser.Physics.Arcade.Sprite;

    getGameObjectName(): string {
        return `${this.getName}${this.getObjectId}`;
    }

    getObjectId(): number {
        return this.objectId;
    }

    abstract getName(): string;

    abstract getStats(): Stats;

}