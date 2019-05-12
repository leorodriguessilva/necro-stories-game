import { ISkill } from "./ISkill";
import { ColisionType } from "../../colision/ColisionType";

export class MeleeAttackSkill implements ISkill {

    private readonly ASSET_NAME: string;

    private id: number;
    private sprite: Phaser.Physics.Arcade.Sprite;
    private anims: Phaser.Animations.AnimationManager;
    private callbackWhenDoneCasting: () => void;

    constructor(id: number) {
        this.id = id;
        this.ASSET_NAME = "assets/slash.png";
    }

    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet(this.getName(), this.ASSET_NAME, { frameWidth: 13, frameHeight: 48 });
    }

    public create(physics: Phaser.Physics.Arcade.ArcadePhysics, anims: Phaser.Animations.AnimationManager): void {
        this.sprite = physics.add.sprite(0, 0, this.getName());
        this.sprite.setVelocityX(0);
        this.sprite.setVelocityY(0);
        this.sprite.setGravityX(0);
        this.sprite.setGravityY(0);
        this.inactivateSprite();
        this.anims = anims;

        this.configureAnimation();
    }

    public update(): void {
        this.sprite.anims.play(this.getName() + "-slash", true);
        const animationProgress = this.sprite.anims.getProgress();

        if (animationProgress === 1) {
            this.inactivateSprite();
            this.callbackWhenDoneCasting();
        }
    }

    public getAssetName(): string {
        return this.ASSET_NAME;
    }

    public getSprite(): Phaser.Physics.Arcade.Sprite {
        return this.sprite;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return "melee-attack";
    }

    public cast(locationX: number, locationY: number, callbackWhenDoneCasting: () => void): void {
        this.callbackWhenDoneCasting = callbackWhenDoneCasting;
        this.sprite.setX(locationX);
        this.sprite.setY(locationY);
        console.log("Cast at X: " + locationX + " and Y: " + locationY);
        this.activateSprite();
    }

    private activateSprite(): void {
        this.sprite.active = true;
    }

    private inactivateSprite(): void {
        this.sprite.active = false;
    }

    private configureAnimation() {
        this.anims.create({
            key: this.getName() + "-slash",
            frames: this.anims.generateFrameNumbers(this.getName(), { start: 0, end: 11 }),
            frameRate: 8,
            repeat: -1,
        });
    }
}
