class Necromancer extends Character {

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
            key: this.getName + '-left',
            frames: anims.generateFrameNumbers(this.getName, { start: 6, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
    
        anims.create({
            key: this.getName + '-right',
            frames: anims.generateFrameNumbers(this.getName, { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });
    }

    get getName() {
        return 'necromancer';
    }
}