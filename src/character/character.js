class Character extends CollidedObjectData {

    constructor(locationX, locationY, characterStatsReader, inputHandlers, collisionHandlers) {
        super();
        this.locationX = locationX;
        this.locationY = locationY;
        this.stats = characterStatsReader.generateStats(this.getName);
        this.inputHandlers = inputHandlers;
        this.collisionHandlers = collisionHandlers;
    }

    preload (loader) {
        console.log('Loading ' + this.getName + ' resources to be used');
    }

    create (physics, anims, colliderWrappers) {
        console.log('Creating ' + this.getName + ' in the game context');
        this.sprite = physics.add.sprite(this.locationX, this.locationY, this.getName);
        
        colliderWrappers.forEach(colliderWrapper => {
            colliderWrapper.addColliderToHandle(this);
        });
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