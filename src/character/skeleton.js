class Skeleton extends Character {

    preload (loader) {
        super.preload(loader);
        loader.spritesheet(this.getName, 'assets/skeleton.png', { frameWidth: 42, frameHeight: 45 });
    }

    create (physics, anims, colliders) {
        super.create(physics, anims, colliders);
        this.sprite.setCollideWorldBounds(true);

        this.configureAnimation(anims);
    } 

    configureAnimation (anims) {
        anims.create({
            key: this.getName + '-left',
            frames: anims.generateFrameNumbers(this.getName, { start: 4, end: 7 }),
            frameRate: 5,
            repeat: -1
        });
    
        anims.create({
            key: this.getName + '-right',
            frames: anims.generateFrameNumbers(this.getName, { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });
    }

    get getName() {
        return 'skeleton';
    }
}