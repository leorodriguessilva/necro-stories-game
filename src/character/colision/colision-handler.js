class ColisionHandler {

    constructor (physics, colliderWrapper) {
        this.physics = physics;
        this.colliderWrapper = colliderWrapper;
    }

    handle () { 
        console.log('Handling colision');
    }

    addColliderToHandle (character) {
        throw new NotImplementedException();
    } 

}