import { NotImplementedException } from '../common/exception/NotImplementedException';

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
    preload(loader: any) {
        console.log('Loading ' + this.getGameObjectName + ' resources to be used');
    }

    /**
     * Create the instance of the game object into the scene, and configure its initial behaviour.
     * 
     * @param physics - This physics is given by Phaser framework, to provide utils to change object physics
     * @param anims - This is the animator of Phaser framework, he creates the animations to be runned when called
     * @param collisionHandlers - These are the handlers for especific types of colisions.
     */
    create(physics: any, anims: any, collisionHandlers: ColisionHandler[]) {
        console.log('Creating ' + this.getGameObjectName + ' in the game context');
    }

    getGameObjectName(): string {
        return `${this.getName}${this.getObjectId}`;
    }

    getObjectId(): number {
        return this.objectId;
    }

    getName(): string {
        throw new NotImplementedException();
    }

    getStats(): Stats {
        throw new NotImplementedException();
    }

    getSprite(): any {
        throw new NotImplementedException();
    }

}