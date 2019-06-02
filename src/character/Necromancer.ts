import { Character } from "./Character";
import { CharacterCreationData } from "./data/CharacterCreationData";

export class Necromancer extends Character {

    private readonly ASSET_NAME: string;
    private readonly ASSET_FRAME_CONFIG: Phaser.Loader.FileTypes.ImageFrameConfig;

    constructor(characterCreationData: CharacterCreationData) {
        characterCreationData.Name = "necromancer";
        super(characterCreationData);
        this.ASSET_NAME = "assets/necromancer.png";
        this.ASSET_FRAME_CONFIG = { frameWidth: 46, frameHeight: 45 };
    }

    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet(this.getName(), this.ASSET_NAME, this.ASSET_FRAME_CONFIG);
    }

    public getAssetName(): string {
        return this.ASSET_NAME;
    }

    protected configureAnimation(anims: Phaser.Animations.AnimationManager): void {
        anims.create({
            key: this.getWalkAnimAlias(),
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1,
        });

        anims.create({
            key: this.getIdleAnimAlias(),
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 5 }),
            frameRate: 5,
            repeat: -1,
        });

        anims.create({
            key: this.getHarmAnimAlias(),
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 2 }),
            frameRate: 1,
            repeat: 0,
        });

        anims.create({
            key: this.getAttackAnimAlias(),
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 1 }),
            frameRate: 1,
            repeat: 0,
        });

        anims.create({
            key: this.getDeadAnimAlias(),
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 2 }),
            frameRate: 3,
            repeat: 0,
        });
    }

}
