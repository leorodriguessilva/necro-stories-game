import "phaser";
import { Character } from "./Character";
import { CharacterCreationData } from "./data/CharacterCreationData";

export class Necromancer extends Character {

    constructor(characterCreationData: CharacterCreationData) {
        characterCreationData.Name = "necromancer";
        super(characterCreationData);
    }

    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        super.preload(loader);
        loader.spritesheet(this.getName(), "assets/necromancer.png", { frameWidth: 46, frameHeight: 45 });
    }

    public create(physics: Phaser.Physics.Arcade.ArcadePhysics, anims: Phaser.Animations.AnimationManager): void {
        super.create(physics, anims);
        this.getSpriteColliderWrapper().setCollideWorldBounds(true);

        this.configureAnimation(anims);
    }

    private configureAnimation(anims: Phaser.Animations.AnimationManager): void {
        anims.create({
            key: this.getName() + "-walk",
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 5 }),
            frameRate: 8,
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
