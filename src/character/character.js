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
        
        input.keyboard.on('keyup', this.inputEntered, this);

        this.stateContext = new CharacterStateContext(this);

        collisionHandlers.forEach(collisionHandler => {
            collisionHandler.addColliderToHandle(this);
        });
    }

    inputEntered (event) {
        this.stateContext.setCurrentState = this.stateContext.MOVING_STATE;
    }

    update () {
        this.stateContext.handle();
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