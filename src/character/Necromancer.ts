import { Character } from './Character';
import { CharacterStatsReader } from '../stats/CharacterStatsReader';

export class Necromancer extends Character {

    constructor(locationX: number, locationY: number, characterStatsReader: CharacterStatsReader, objectId: number) {
        super(locationX, locationY, 'necromancer', characterStatsReader, objectId);
    }

    preload(loader: Phaser.Loader.LoaderPlugin): void {
        super.preload(loader);
        loader.spritesheet(this.getName(), 'assets/necromancer.png', { frameWidth: 46, frameHeight: 45 });
    }

    create(physics: Phaser.Physics.Arcade.ArcadePhysics, anims: Phaser.Animations.AnimationManager): void {
        super.create(physics, anims);
        this.getSprite().setCollideWorldBounds(true);

        this.configureAnimation(anims);
    }

    configureAnimation(anims: Phaser.Animations.AnimationManager): void {
        anims.create({
            key: this.getName + '-walk',
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 5 }),
            frameRate: 8,
            repeat: -1
        });

        anims.create({
            key: this.getName + '-idle',
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 5 }),
            frameRate: 5,
            repeat: -1
        });

        anims.create({
            key: this.getName + '-harm',
            frames: anims.generateFrameNumbers(this.getName(), { start: 0, end: 2 }),
            frameRate: 1,
            repeat: -1
        });
    }

}