import "phaser";

export interface ISpriteColliderWrapper {
    /**
     * @returns the Phaser.Sprite game object of the current scene
     */
    getSprite(): Phaser.Physics.Arcade.Sprite;

    /**
     * @returns the Phaser.Group game object of the current scene
     */
    getSpriteGroup(): Phaser.Physics.Arcade.Group;

    /**
     * @returns the Phaser.StaticGroup game object of the current scene
     */
    getStaticGroup(): Phaser.Physics.Arcade.StaticGroup;

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
