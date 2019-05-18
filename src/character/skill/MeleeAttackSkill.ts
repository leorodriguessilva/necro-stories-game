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
        const physicSprite: any = scene.physics.add.staticSprite(0, 0, this.getName());
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

        const calculatedX = this.preparePositionXToDraw(locationX, movingDirection);

        this.activateSprite(calculatedX, locationY);
    }

    public interrupt(): void {
        this.inactivateSprite();
    }

    private calculateCharacterFrontDistance() {
        return (this.sprite.width * 2);
    }

    private activateSprite(locationX: number, locationY: number): void {
        this.sprite.enableBody(true, locationX, locationY, true, true);
    }

    private inactivateSprite(): void {
        this.sprite.disableBody(true, true);
    }

    private preparePositionXToDraw(locationX: number, movingDirection: CharacterMovingDirection): number {
        this.sprite.resetFlip();
        const characterFrontDistance = this.calculateCharacterFrontDistance();
        let calculatedX = locationX + characterFrontDistance;
        if (movingDirection === CharacterMovingDirection.LEFT) {
            this.sprite.setFlipX(true);
            calculatedX = locationX - characterFrontDistance;
        }
        return calculatedX;
    }

    private configureAnimation() {
        this.anims.create({
            key: this.getName() + "-slash",
            frames: this.anims.generateFrameNumbers(this.getName(), { start: 0, end: 11 }),
            frameRate: 30,
            repeat: 0,
        });
    }
}
