export interface ISpriteColliderWrapper {

    /**
     * @returns the Phaser.GameObjects.Sprite game object of the current scene
     */
    getGameObject(): Phaser.GameObjects.Sprite;

    /**
     * @returns the Phaser.GameObjects.Group game object of the current scene
     */
    getGameObjectGroup(): Phaser.GameObjects.Group;

    /**
     * destroy the game object in the scene, freeing resources
     */
    destroy(): void;

    /**
     * Set if the sprite is going to collide with the visible bounderies of the scene
     *
     * @param collideWorldBounderies true for colision with the bounderies, false for no colision
     */
    setCollideWorldBounds(collideWorldBounderies: boolean): void;

    /**
     * Get the X position of this sprite in a cartesian plan
     * @returns a number indicanting the X position
     */
    getX(): number;

    /**
     * Get the Y position of this sprite in a cartesian plan
     * @returns a number indicanting the Y position
     */
    getY(): number;

}
