import "phaser";
import { Character } from './Character';
import { CharacterStatsReader } from '../stats/CharacterStatsReader';

export class Skeleton extends Character {

    constructor(locationX: number, locationY: number, characterStatsReader: CharacterStatsReader, objectId: number) {
        super(locationX, locationY, 'skeleton', characterStatsReader, objectId);
    }

    preload(loader: Phaser.Loader.LoaderPlugin): void {
        super.preload(loader);
        loader.spritesheet(this.getName(), 'assets/skeleton.png', { frameWidth: 42, frameHeight: 45 });
    }

    create(physics: Phaser.Physics.Arcade.ArcadePhysics, anims: Phaser.Animations.AnimationManager): void {
        super.create(physics, anims);
        this.getSpriteColliderWrapper().setCollideWorldBounds(true);

        this.configureAnimation(anims);
    }

    configureAnimation(anims: Phaser.Animations.AnimationManager) {
        anims.create({
            key: this.getName() + '-walk',
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });

        anims.create({
            key: this.getName() + '-idle',
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });
    }
}