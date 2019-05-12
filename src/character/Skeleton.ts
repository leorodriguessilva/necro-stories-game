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
    }

    public create(physics: Phaser.Physics.Arcade.ArcadePhysics, anims: Phaser.Animations.AnimationManager): void {
        super.create(physics, anims);
        this.getSpriteColliderWrapper().setCollideWorldBounds(true);

        this.configureAnimation(anims);
    }

    public getAssetName(): string {
        return this.ASSET_NAME;
    }

    private configureAnimation(anims: Phaser.Animations.AnimationManager) {
        anims.create({
            key: this.getName() + "-walk",
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1,
        });

        anims.create({
            key: this.getName() + "-idle",
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1,
        });
    }
}
