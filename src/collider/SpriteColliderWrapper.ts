import { ISpriteColliderWrapper } from "./ISpriteColliderWrapper";
import { SpriteColliderDataWrapper } from "./SpriteColliderDataWrapper";

export class SpriteColliderWrapper implements ISpriteColliderWrapper {

    private gameObjectSprite: Phaser.GameObjects.Sprite;
    private gameObjectGroup: Phaser.GameObjects.Group;

    constructor(spriteColliderDataWrapper: SpriteColliderDataWrapper) {
        const spriteCreated = spriteColliderDataWrapper.createSprite();
        if (spriteCreated instanceof Phaser.GameObjects.Sprite) {
            this.gameObjectSprite = spriteCreated;
            return;
        }
        this.gameObjectGroup = spriteCreated;
    }

    public getGameObject(): Phaser.GameObjects.Sprite {
        return this.gameObjectSprite;
    }

    public getGameObjectGroup(): Phaser.GameObjects.Group {
        return this.gameObjectGroup;
    }

    public setCollideWorldBounds(collideWorldBounderies: boolean): void {
        const sprite = this.gameObjectSprite as Phaser.Physics.Arcade.Sprite;
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

    public getX(): number {
        if (this.gameObjectSprite) {
            return this.gameObjectSprite.x;
        }
    }

    public getY(): number {
        if (this.gameObjectSprite) {
            return this.gameObjectSprite.y;
        }
    }

}
