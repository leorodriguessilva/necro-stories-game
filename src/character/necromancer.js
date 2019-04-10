class Necromancer extends Character {

    constructor(locationX, locationY, statsReader, inputHandlers, collisionHandlers) {
        super(locationX, locationY, statsReader, inputHandlers, collisionHandlers);
    }

    preload (loader) {
        super.preload(loader);
        loader.spritesheet(this.getName, 'assets/necromancer.png', { frameWidth: 46, frameHeight: 45 });
    }

    create (physics, anims, colliders) {
        super.create(physics, anims, colliders);
        this.sprite.setCollideWorldBounds(true);

        this.configureAnimation(anims);
    } 

    configureAnimation (anims) {
        anims.create({
            key: this.getName + '-walk',
            frames: anims.generateFrameNumbers(this.getName, { start: 0, end: 5 }),
            frameRate: 8,
            repeat: -1
        });
    
        anims.create({
            key: this.getName + '-idle',
            frames: anims.generateFrameNumbers(this.getName, { start: 0, end: 5 }),
            frameRate: 5,
            repeat: -1
        });
    }

    get getName() {
        return 'necromancer';
    }
}