class Character {

    static #GENERIC_NAME = 'generic'; 

    constructor(locationX, locationY, inputHandlers, collisionHandlers) {
        this.locationX = locationX;
        this.locationY = locationY;
        this.inputHandlers = inputHandlers;
        this.collisionHandlers = collisionHandlers;
    }

    preload (loader) {
        console.log('Loading ' + this.getName + ' resources to be used');
    }

    create (physics, anims, colliders) {
        console.log('Creating ' + this.getName + ' in the game context');
        this.sprite = physics.add.sprite(locationX, locationY, getName);
    }
    
    handleInput (input) {
        let inputHandler = this.inputHandlers[input];
        inputHandler.handle();
    }

    handleCollision (collider) {
        let collisionHandler = this.collisionHandlers[collider];
        collisionHandler.handle();
    }

    destroy () {
        console.log('Destroying ' + this.getName + ' from the game context');
        this.sprite.destroy();
    }

    get getName() {
        return #GENERIC_NAME;
    }
}