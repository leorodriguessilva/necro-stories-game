class Character {

    constructor(locationX, locationY, statsReader, inputHandlers, collisionHandlers) {
        this.locationX = locationX;
        this.locationY = locationY;
        this.stats = statsReader.generateStats(this.getName);
        this.inputHandlers = inputHandlers;
        this.collisionHandlers = collisionHandlers;
    }

    preload (loader) {
        console.log('Loading ' + this.getName + ' resources to be used');
    }

    create (physics, anims, colliderWrappers) {
        console.log('Creating ' + this.getName + ' in the game context');
        this.sprite = physics.add.sprite(this.locationX, this.locationY, this.getName);

        for (colliderWrapper in colliderWrappers) {
            physics.add.collider(
                this.sprite, 
                objCollider, 
                this.handleCollision(colliderWrapper), 
                null, 
                this);
        }
    }

    update () {
        this.inputHandlers.forEach(inputHandler => {
            var key = inputHandler.getKey;
            if (this.handleInput(key, inputHandler)) {
                return;
            }
        });
    }

    handleInput (key, inputHandler) {
        if (key.isDown) {
            inputHandler.handle();
            return true;
        }
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.lastMovementAnimAlias);
        return false;
    }

    addInputHandler (inputHandler) {
        var key = inputHandler.getKey; 
        if (this.inputHandlers[key.keyCode]) {
            delete this.inputHandlers[key.keyCode];
        }
        this.inputHandlers[key.keyCode] = inputHandler;
    }

    handleCollision (colliderWrapper) {
        let collisionHandler = this.collisionHandlers[colliderWrapper.getColliderType];
        collisionHandler.handle();
    }

    destroy () {
        console.log('Destroying ' + this.getName + ' from the game context');
        this.sprite.destroy();
    }

    get getName () {
        return 'generic';
    }

    get getSprite () {
        return this.sprite;
    }

    get getStats () {
        return this.stats;
    } 

    set setLastMovementAnimAlias (lastMovementAnimAlias) {
        return this.lastMovementAnimAlias = lastMovementAnimAlias;
    }
}