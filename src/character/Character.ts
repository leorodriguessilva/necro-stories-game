import { CollidedObjectData } from '../collider/CollidedObjectData'; 
import { CharacterStats } from '../stats/CharacterStats';
import { CharacterStatsReader } from '../stats/CharacterStatsReader';
import { CharacterStateContext } from './state/CharacterStateContext';

export class Character extends CollidedObjectData<CharacterStats> {

    private locationX: number;
    private locationY: number;
    private name: string;
    private stats: CharacterStats;
    private stateContext: CharacterStateContext;
    private sprite: Phaser.Physics.Arcade.Sprite;

    constructor(locationX: number, locationY: number, name: string, characterStatsReader: CharacterStatsReader, objectId: number) {
        super(objectId);
        this.locationX = locationX;
        this.locationY = locationY;
        this.name = name;
        this.stats = characterStatsReader.generateStats(this.getName());
    }

    preload(loader: Phaser.Loader.LoaderPlugin): void {
        super.preload(loader);
    }

    create(physics: Phaser.Physics.Arcade.ArcadePhysics, anims: Phaser.Animations.AnimationManager): void {
        super.create(physics, anims);
        this.sprite = physics.add.sprite(this.locationX, this.locationY, this.getName());
    }

    move() {
        this.stateContext.move();
    }

    harm() {
        this.stateContext.harm();
    }

    update() {
        if (!this.stateContext) {
            this.stateContext = new CharacterStateContext(this);
        }
        this.stateContext.update();
    }

    destroy() {
        console.log('Destroying ' + this.getGameObjectName + ' from the game context');
        this.sprite.destroy();
    }

    getName(): string {
        return this.name;
    }

    getSprite(): Phaser.Physics.Arcade.Sprite {
        return this.sprite;
    }

    getStats(): CharacterStats {
        return this.stats;
    }
}