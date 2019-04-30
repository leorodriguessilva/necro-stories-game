export interface ICollider<Stats> {

    /**
     * Destroy a Phaser game object on the scene, and clean all its resources.
     */
    destroy(): void;

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

    getGameObjectName(): string;

    getName(): string;

    getStats(): Stats;
}