class Necromancer extends Character {

    constructor(locationX, locationY, characterStatsReader, objectId) {
        super(locationX, locationY, 'necromancer', characterStatsReader, objectId);
    }

    preload (loader) {
        super.preload(loader);
        loader.spritesheet(this.getGameObjectName, 'assets/necromancer.png', { frameWidth: 46, frameHeight: 45 });
    }

    create (physics, anims, colliderWrappers) {
        super.create(physics, anims, colliderWrappers);
        this.sprite.setCollideWorldBounds(true);

        this.configureAnimation(anims);
    } 

    configureAnimation (anims) {
        anims.create({
            key: this.getGameObjectName + '-walk',
            frames: anims.generateFrameNumbers(this.getGameObjectName, { start: 0, end: 5 }),
            frameRate: 8,
            repeat: -1
        });
    
        anims.create({
            key: this.getGameObjectName + '-idle',
            frames: anims.generateFrameNumbers(this.getGameObjectName, { start: 0, end: 5 }),
            frameRate: 5,
            repeat: -1
        });
    }
}