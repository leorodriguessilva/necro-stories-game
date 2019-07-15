import { IVisualEffect } from "./IVisualEffect";
import { ILoadable } from "../loader/ILoadable";
import { IVisualEffectConfig } from "./IVisualEffectConfig";

export class VisualEffect implements IVisualEffect, ILoadable {

    private readonly ANIM_ALIAS_SUFFIX = "-alias";

    private assetName: string;
    private assetPath: string;
    private visualEffectConfig: IVisualEffectConfig;
    private sprite: Phaser.GameObjects.Sprite;
    private anims: Phaser.Animations.AnimationManager;

    constructor(assetName: string, assetPath: string, visualEffectConfig: IVisualEffectConfig) {
        this.assetName = assetName;
        this.assetPath = assetPath;
        this.visualEffectConfig = visualEffectConfig;
    }

    public update(): void {
        const isRunning = this.sprite.anims.isPlaying;
        if (!isRunning) {
            return;
        }

        const animationProgress = this.sprite.anims.getProgress();
        if (animationProgress === 1) {
            this.interrupt();
        }
    }

    public create(scene: Phaser.Scene): void {
        this.sprite = scene.add.sprite(0, 0, this.assetName);
        const frameConfig = this.visualEffectConfig.getFrameConfig();
        this.anims = scene.anims;
        this.anims.create({
            key: this.getAnimAlias(),
            frames: scene.anims.generateFrameNumbers(this.assetName, {
                start: frameConfig.startFrame,
                end: frameConfig.endFrame,
            }),
            frameRate: this.visualEffectConfig.getFrameRate(),
            repeat: this.visualEffectConfig.getRepeat(),
        });
    }

    public runAt(locationX: number, locationY: number): void {
        this.sprite.setX(locationX);
        this.sprite.setY(locationY);
        this.activateSprite();
        this.sprite.play(this.getAnimAlias());
    }

    public interrupt(): void {
        this.inactivateSprite();
        this.sprite.anims.stop();
    }

    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        const frameConfig = this.visualEffectConfig.getFrameConfig();
        loader.spritesheet(this.assetName, this.assetPath, frameConfig);
    }

    public getAssetName(): string {
        return this.assetName;
    }

    private activateSprite() {
        this.sprite.setActive(true);
        this.sprite.setVisible(true);
    }

    private inactivateSprite() {
        this.sprite.setActive(false);
        this.sprite.setVisible(false);
    }

    private getAnimAlias(): string {
        return `${this.assetName}${this.ANIM_ALIAS_SUFFIX}`;
    }

}
