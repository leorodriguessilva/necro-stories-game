import { Character } from "./Character";
import { CharacterCreationData } from "./data/CharacterCreationData";

export class Skeleton extends Character {

    private readonly ASSET_NAME: string;
    private readonly ASSET_FRAME_CONFIG: Phaser.Loader.FileTypes.ImageFrameConfig;

    constructor(characterCreationData: CharacterCreationData) {
        characterCreationData.Name = "skeleton";
        super(characterCreationData);
        this.ASSET_NAME = "assets/skeleton-walk.png";
        this.ASSET_FRAME_CONFIG = { frameWidth: 42, frameHeight: 45 };
    }

    public preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet(this.getName(), this.ASSET_NAME, this.ASSET_FRAME_CONFIG);
        loader.spritesheet(this.getIdleAnimAlias(), "assets/skeleton-idle.png", this.ASSET_FRAME_CONFIG);
        loader.spritesheet(this.getAttackAnimAlias(), "assets/skeleton-attack.png", this.ASSET_FRAME_CONFIG);
    }

    public getAssetName(): string {
        return this.ASSET_NAME;
    }

    protected configureAnimation(anims: Phaser.Animations.AnimationManager): void {
        anims.create({
            key: this.getWalkAnimAlias(),
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 3 }),
            frameRate: 7,
            repeat: -1,
        });

        anims.create({
            key: this.getIdleAnimAlias(),
            frames: anims.generateFrameNumbers(this.getIdleAnimAlias(), { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1,
        });

        anims.create({
            key: this.getAttackAnimAlias(),
            frames: anims.generateFrameNumbers(this.getAttackAnimAlias(), { start: 2, end: 9 }),
            frameRate: 20,
            repeat: 0,
        });

        anims.create({
            key: this.getHarmAnimAlias(),
            frames: anims.generateFrameNumbers(this.getIdleAnimAlias(), { start: 0, end: 2 }),
            frameRate: 1,
            repeat: 0,
        });
    }

}
