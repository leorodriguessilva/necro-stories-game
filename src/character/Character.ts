import { CollidedObjectData } from '../collider/CollidedObjectData'; 
import { CharacterStats } from '../stats/CharacterStats';
import { CharacterStatsReader } from '../stats/CharacterStatsReader';
//import { CharacterStateContext } from './state';

export class Character extends CollidedObjectData<CharacterStats> {

    locationX: number;
    locationY: number;
    name: string;
    characterStatsReader: CharacterStatsReader;
    stats: CharacterStats;
    sprite: Phaser.Physics.Arcade.Sprite;
    //stateContext: Ch

    constructor(locationX: number, locationY: number, name: string, characterStatsReader: CharacterStatsReader, objectId: number) {
        super(objectId);
        this.locationX = locationX;
        this.locationY = locationY;
        this.name = name;
        this.stats = characterStatsReader.generateStats(this.getName);
    }

    preload(loader: Phaser.Loader.LoaderPlugin): void {
        super.preload(loader);
    }

    create(physics: Phaser.Physics.Arcade.ArcadePhysics, anims: Phaser.Animations.Animation): void {
        super.create(physics, anims);
        this.sprite = physics.add.sprite(this.locationX, this.locationY, this.getName);

        //input.keyboard.on('keydown', this.move, this);

        /*collisionHandlers.forEach(collisionHandler => {
            collisionHandler.addColliderToHandle(this);
        });*/
    }

    move() {
        this.stateContext.move();
    }

    harm() {
        this.stateContext.harm();
    }

    attack() {
        this.stateContext.attack();
    }

    update() {
        if (!this.stateContext) {
            this.stateContext = new CharacterStateContext(this);
        }
        this.stateContext.update();
    }

    addInputHandler(inputHandler) {
        var keyCode = inputHandler.getKeyCode;
        if (this.inputHandlers[keyCode]) {
            delete this.inputHandlers[keyCode];
        }
        this.inputHandlers[keyCode] = inputHandler;
    }

    destroy() {
        console.log('Destroying ' + this.getGameObjectName + ' from the game context');
        this.sprite.destroy();
    }

    get getName() {
        return this.name;
    }

    get getSprite() {
        return this.sprite;
    }

    get getStats() {
        return this.stats;
    }
}

module.exports = Character;