class Necromancer extends Character {
    
    static #NECROMANCER_SPRITE_NAME = 'necromancer';

    preload (loader) {
        super.preload(loader);
        loader.spritesheet(#NECROMANCER_SPRITE_NAME, 'assets/necromancer.png', { frameWidth: 46, frameHeight: 45 });
    }

    create (physics, anims, colliders) {
        super.create(physics, anims, colliders);
        this.sprite.setCollideWorldBounds(true);

        #configureAnimation(anims);

        for (collider in colliders) {
            physics.add.collider(this.sprite, collider);
        }
    } 

    #configureAnimation (anims) {
        anims.create({
            key: 'left',
            frames: anims.generateFrameNumbers(this.getName, { start: 6, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
    
        anims.create({
            key: 'right',
            frames: anims.generateFrameNumbers(this.getName, { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });
    }

    get getName() {
        return #NECROMANCER_SPRITE_NAME
    }
}