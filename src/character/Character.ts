import { CollidedObjectData } from '../collider/CollidedObjectData'; 
import { CharacterStats } from '../stats/CharacterStats';
import { CharacterStatsReader } from '../stats/CharacterStatsReader';
import { CharacterStateContext } from './state/CharacterStateContext';
import { ColliderType } from '../collider/ColliderType';
import { ISpriteColliderWrapper } from '../collider/ISpriteColliderWrapper';
import { SpriteColliderWrapper } from '../collider/SpriteColliderWrapper';
import { SpriteColliderDataWrapper } from '../collider/SpriteColliderDataWrapper';

export class Character extends CollidedObjectData<CharacterStats> {
    
    private locationX: number;
    private locationY: number;
    private name: string;
    private stats: CharacterStats;
    private stateContext: CharacterStateContext;
    private spriteColliderWrapper: ISpriteColliderWrapper;

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
        const spriteColliderDataWrapper = new SpriteColliderDataWrapper(this.locationX, this.locationY, physics, this.getName(), null, this.getColliderType());
        this.spriteColliderWrapper = new SpriteColliderWrapper(spriteColliderDataWrapper);
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
        this.spriteColliderWrapper.destroy();
    }

    getName(): string {
        return this.name;
    }

    getSpriteColliderWrapper(): ISpriteColliderWrapper {
        return this.spriteColliderWrapper;
    }

    getStats(): CharacterStats {
        return this.stats;
    }

    getColliderType(): ColliderType {
        return ColliderType.SPRITE;
    }
}