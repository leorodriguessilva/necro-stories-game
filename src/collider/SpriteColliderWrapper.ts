import "phaser";
import { ISpriteColliderWrapper } from "./ISpriteColliderWrapper";
import { SpriteColliderDataWrapper } from "./SpriteColliderDataWrapper";

export class SpriteColliderWrapper implements ISpriteColliderWrapper {

    private sprite: Phaser.Physics.Arcade.Sprite;
    private spriteGroup: Phaser.Physics.Arcade.Group;
    private staticGroup: Phaser.Physics.Arcade.StaticGroup;

    constructor(spriteColliderDataWrapper: SpriteColliderDataWrapper) {
        if (spriteColliderDataWrapper.isColliderTypeStatic()) {
            this.staticGroup = spriteColliderDataWrapper.addStaticGroup();
            return;
        }
        if (spriteColliderDataWrapper.isColliderTypeGroup()) {
            this.spriteGroup = spriteColliderDataWrapper.addGroup();
            return;
        }
        this.sprite = spriteColliderDataWrapper.addSprite();
    }

    public getSprite(): Phaser.Physics.Arcade.Sprite {
        return this.sprite;
    }

    public getSpriteGroup(): Phaser.Physics.Arcade.Group {
        return this.spriteGroup;
    }

    public getStaticGroup(): Phaser.Physics.Arcade.StaticGroup {
        return this.staticGroup;
    }

    public setCollideWorldBounds(collideWorldBounderies: boolean): void {
        if (this.sprite) {
            this.sprite.setCollideWorldBounds(collideWorldBounderies);
        }
    }

    public destroy(): void {
        if (this.staticGroup) {
            this.staticGroup.destroy();
            return;
        }

        if (this.spriteGroup) {
            this.spriteGroup.destroy();
            return;
        }

        this.sprite.destroy();
    }

}
