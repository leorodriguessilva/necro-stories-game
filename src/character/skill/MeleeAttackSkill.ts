import { ISkill } from "./ISkill";
import { CharacterMovingDirection } from "../state/CharacterMovingDirection";

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

    public create(scene: Phaser.Scene): void {
        const physicSprite: any = scene.physics.add.sprite(0, 0, this.getName());
        physicSprite.body.allowGravity = false;
        this.anims = scene.anims;
        this.sprite = physicSprite;

        this.inactivateSprite();
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

    public getSprite(): Phaser.GameObjects.Sprite {
        return this.sprite;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return "melee-attack";
    }

    public cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void {
        this.callbackWhenDoneCasting = callbackWhenDoneCasting;

        this.sprite.resetFlip();
        const characterFrontDistance = (this.sprite.width * 2);
        this.sprite.setX(locationX + characterFrontDistance);
        if (movingDirection === CharacterMovingDirection.LEFT) {
            this.sprite.setFlipX(true);
            this.sprite.setX(locationX - characterFrontDistance);
        }

        this.sprite.setY(locationY);
        this.activateSprite();
    }

    public interrupt(): void {
        this.inactivateSprite();
    }

    private activateSprite(): void {
        this.sprite.active = true;
        this.sprite.visible = true;
    }

    private inactivateSprite(): void {
        this.sprite.active = false;
        this.sprite.visible = false;
    }

    private configureAnimation() {
        this.anims.create({
            key: this.getName() + "-slash",
            frames: this.anims.generateFrameNumbers(this.getName(), { start: 0, end: 11 }),
            frameRate: 30,
            repeat: -1,
        });
    }
}
