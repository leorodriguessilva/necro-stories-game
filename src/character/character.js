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
        this.sprite = physics.add.sprite(this.locationX, this.locationY, this.getGameObjectName);

        collisionHandlers.forEach(collisionHandler => {
            collisionHandler.addColliderToHandle(this);
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

    animatePhysicalHarm () {

    }

    beIdle () {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.getGameObjectName + '-idle', true);
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