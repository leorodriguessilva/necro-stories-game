import { Character } from "./Character";
import { CharacterCreationData } from "./data/CharacterCreationData";

export class Necromancer extends Character {

    private readonly ASSET_NAME: string;

    constructor(characterCreationData: CharacterCreationData) {
        characterCreationData.Name = "necromancer";
        super(characterCreationData);
        this.ASSET_NAME = "assets/necromancer.png";
    }

    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet(this.getName(), "assets/necromancer.png", { frameWidth: 46, frameHeight: 45 });
    }

    public create(scene: Phaser.Scene): void {
        super.create(scene);
        this.getSpriteColliderWrapper().setCollideWorldBounds(true);

        this.configureAnimation(scene.anims);
    }

    public getAssetName(): string {
        return this.ASSET_NAME;
    }

    private configureAnimation(anims: Phaser.Animations.AnimationManager): void {
        anims.create({
            key: this.getName() + "-walk",
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1,
        });

        anims.create({
            key: this.getName() + "-idle",
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 5 }),
            frameRate: 5,
            repeat: -1,
        });

        anims.create({
            key: this.getName() + "-harm",
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 2 }),
            frameRate: 1,
            repeat: -1,
        });
    }

}
