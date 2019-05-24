export interface ISpriteColliderWrapper {

    /**
     * @returns the Phaser.GameObjects.GameObje game object of the current scene
     */
    getGameObject(): Phaser.GameObjects.GameObject;

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

}
