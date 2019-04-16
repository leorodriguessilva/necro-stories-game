class Skeleton extends Character {

    constructor(locationX, locationY, characterStatsReader, objectId) {
        super(locationX, locationY, 'skeleton', characterStatsReader, objectId);
    }
    
    preload (loader) {
        super.preload(loader);
        loader.spritesheet(this.getName, 'assets/skeleton.png', { frameWidth: 42, frameHeight: 45 });
    }

    create (physics, anims, input, colliderWrappers) {
        super.create(physics, anims, input, colliderWrappers);
        this.sprite.setCollideWorldBounds(true);

        this.configureAnimation(anims);
    } 

    configureAnimation (anims) {
        anims.create({
            key: this.getName + '-walk',
            frames: anims.generateFrameNumbers(this.getName, { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });
    
        anims.create({
            key: this.getName + '-idle',
            frames: anims.generateFrameNumbers(this.getName, { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });
    }
}