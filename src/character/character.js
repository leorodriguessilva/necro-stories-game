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

    create (physics, anims, input, collisionHandlers) {
        super.create(physics, anims, collisionHandlers);     
        this.sprite = physics.add.sprite(this.locationX, this.locationY, this.getName);
        
        input.keyboard.on('keydown', this.move, this);

        collisionHandlers.forEach(collisionHandler => {
            collisionHandler.addColliderToHandle(this);
        });
    }

    move (event) {
        this.stateContext.move();
    }

    harm () {
        this.stateContext.harm();
    }

    update () {
        if (!this.stateContext)
        {
            this.stateContext = new CharacterStateContext(this);
        }
        this.stateContext.update();
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