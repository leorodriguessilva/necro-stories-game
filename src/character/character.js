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
            if (colliderWrapper.getColliderType)
            physics.add.collider(
                this.sprite, 
                objCollider, 
                this.handleCollision(colliderWrapper), 
                null, 
                this);
        }
    }

    update () {
        this.isIdle = true;
        this.inputHandlers.forEach(inputHandler => {
            if (this.handleInput(inputHandler)) {
                this.isIdle = false;
                return;
            }
        });

        if (this.isIdle)
        {
            this.beIdle();
        }
    }

    beIdle () {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.getName + '-idle', true);
    }

    handleInput (inputHandler) {
        if (inputHandler.isKeyDown) {
            inputHandler.handle();
            return true;
        }
        return false;
    }

    addInputHandler (inputHandler) {
        var keyCode = inputHandler.getKeyCode; 
        if (this.inputHandlers[keyCode]) {
            delete this.inputHandlers[keyCode];
        }
        this.inputHandlers[keyCode] = inputHandler;
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
}