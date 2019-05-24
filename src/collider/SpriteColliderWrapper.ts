import { ISpriteColliderWrapper } from "./ISpriteColliderWrapper";
import { SpriteColliderDataWrapper } from "./SpriteColliderDataWrapper";

export class SpriteColliderWrapper implements ISpriteColliderWrapper {

    private gameObjectSprite: Phaser.GameObjects.GameObject;
    private gameObjectGroup: Phaser.GameObjects.Group;

    constructor(spriteColliderDataWrapper: SpriteColliderDataWrapper) {
        const spriteCreated = spriteColliderDataWrapper.createSprite();
        if (spriteCreated instanceof Phaser.GameObjects.GameObject) {
            this.gameObjectSprite = spriteCreated;
            return;
        }
        this.gameObjectGroup = spriteCreated;
    }

    public getGameObject(): Phaser.GameObjects.GameObject {
        return this.gameObjectSprite;
    }

    public getGameObjectGroup(): Phaser.GameObjects.Group {
        return this.gameObjectGroup;
    }

    public setCollideWorldBounds(collideWorldBounderies: boolean): void {
        const sprite = <Phaser.Physics.Arcade.Sprite> this.gameObjectSprite;
        if (sprite) {
            sprite.setCollideWorldBounds(collideWorldBounderies);
        }
    }

    public destroy(): void {
        if (this.gameObjectGroup) {
            this.gameObjectGroup.destroy();
            return;
        }

        this.gameObjectSprite.destroy();
    }

}
