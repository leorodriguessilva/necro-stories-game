import { Character } from "./Character";
import { CharacterCreationData } from "./data/CharacterCreationData";

export class Skeleton extends Character {

    private readonly ASSET_NAME: string;

    constructor(characterCreationData: CharacterCreationData) {
        characterCreationData.Name = "skeleton";
        super(characterCreationData);
        this.ASSET_NAME = "assets/skeleton.png";
    }

    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet(this.getName(), "assets/skeleton.png", { frameWidth: 42, frameHeight: 45 });
        loader.spritesheet(this.getName() + "-idle", "assets/skeleton-idle.png", { frameWidth: 42, frameHeight: 45 });
        loader.spritesheet(
            this.getName() + "-attack",
            "assets/skeleton-attack.png",
            { frameWidth: 42, frameHeight: 45 });
    }

    public create(scene: Phaser.Scene): void {
        super.create(scene);
        this.getSpriteColliderWrapper().setCollideWorldBounds(true);

        this.configureAnimation(scene.anims);
    }

    public getAssetName(): string {
        return this.ASSET_NAME;
    }

    private configureAnimation(anims: Phaser.Animations.AnimationManager) {
        anims.create({
            key: this.getName() + "-walk",
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 3 }),
            frameRate: 7,
            repeat: -1,
        });

        anims.create({
            key: this.getName() + "-idle",
            frames: anims.generateFrameNumbers(this.getName() + "-idle", { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1,
        });

        anims.create({
            key: this.getName() + "-attack",
            frames: anims.generateFrameNumbers(this.getName() + "-attack", { start: 0, end: 9 }),
            frameRate: 15,
            repeat: 0,
        });
    }
}
