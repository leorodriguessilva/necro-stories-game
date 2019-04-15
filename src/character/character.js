class Character extends CollidedObjectData {

    constructor(locationX, locationY, name, characterStatsReader, objectId) {
        super(objectId);
        this.locationX = locationX;
        this.locationY = locationY;
        this.name = name;
        this.stats = characterStatsReader.generateStats(this.getName);
        this.inputHandlers = [];
        this.collisionHandlers = [];
    }

    preload (loader) {
        super.preload(loader);
    }

    create (physics, anims, collisionHandlers) {
        super.create(physics, anims, collisionHandlers);     
        this.sprite = physics.add.sprite(this.locationX, this.locationY, this.getName);

        collisionHandlers.forEach(collisionHandler => {
            collisionHandler.addColliderToHandle(this);
        });
    }

    // [TODO] make this code better with some kind of state manager
    update () {
        if (this.state === CharacterState.HARMED) {
            this.animatePhysicalHarm();
            return;
        }

        this.state = CharacterState.IDLE;
        this.inputHandlers.forEach(inputHandler => {
            if (this.handleInput(inputHandler)) {
                return;
            }
        });

        if (this.state === CharacterState.IDLE)
        {
            this.beIdle();
        }
    }

    animatePhysicalHarm () {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.getName + '-harm', true);
        var animationProgress = this.sprite.anims.getProgress();
        if (animationProgress === 1) {
            this.state = CharacterState.IDLE;
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
        console.log('Destroying ' + this.getGameObjectName + ' from the game context');
        this.sprite.destroy();
    }

    set setState (state) {
        this.state = state;
    }

    get getState () {
        return this.state;
    }

    get getName () {
        return this.name;
    }

    get getSprite () {
        return this.sprite;
    }

    get getStats () {
        return this.stats;
    } 
}