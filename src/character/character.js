import ColliderWrapper from '../collider/collider-wrapper.js';

export default class Character {

    static #GENERIC_NAME = 'generic'; 

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
        this.sprite = physics.add.sprite(locationX, locationY, getName);

        for (colliderWrapper in colliderWrappers) {
            physics.add.collider(
                this.sprite, 
                objCollider, 
                this.handleCollision(colliderWrapper), 
                null, 
                this);
        }
    }
    
    handleInput (input) {
        let inputHandler = this.inputHandlers[input];
        inputHandler.handle();
    }

    changeInputHandler (input, inputHandler) {
        if (inputHandlers[input]) {
            delete inputHandlers[input];
        }
        inputHandlers[input] = inputHandler;
    }

    handleCollision (colliderWrapper) {
        let collisionHandler = this.collisionHandlers[colliderWrapper.getColliderType];
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